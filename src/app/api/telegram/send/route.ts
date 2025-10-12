// API Route для отправки заказов в Telegram
// Это серверная часть, которая обходит CSP ограничения браузера

import { NextRequest, NextResponse } from 'next/server';

interface OrderData {
  orderId: string;
  fullName: string;
  phone: string;
  paymentType: 'cash' | 'card' | 'qr';
  deliveryType: 'delivery' | 'pickup';
  address: {
    city: string;
    street: string;
    house: string;
    apartment?: string;
    entrance?: string;
    floor?: string;
  };
  comment?: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    color?: string;
    storage?: string;
    image: string;
  }>;
  total: number;
}

/**
 * Форматирует тип оплаты на русский
 */
const formatPaymentType = (type: string): string => {
  const types: Record<string, string> = {
    cash: '💵 Наличные',
    card: '💳 Банковская карта',
    qr: '📱 Оплата по QR-коду',
  };
  return types[type] || type;
};

/**
 * Форматирует способ получения на русский
 */
const formatDeliveryType = (type: string): string => {
  const types: Record<string, string> = {
    delivery: '🚚 Доставка',
    pickup: '🏪 Самовывоз',
  };
  return types[type] || type;
};

/**
 * Форматирует сообщение о заказе
 */
const formatOrderMessage = (orderData: OrderData): string => {
  const {
    orderId,
    fullName,
    phone,
    paymentType,
    deliveryType,
    address,
    comment,
    items,
    total,
  } = orderData;

  // Форматируем список товаров
  const itemsList = items
    .map((item) => {
      const variants = [item.color, item.storage].filter(Boolean).join(', ');
      const variantsText = variants ? ` (${variants})` : '';
      const itemTotal = item.price * item.quantity;
      return `  • ${item.name}${variantsText}\n    ${item.quantity} шт × ${item.price.toLocaleString()} = <b>${itemTotal.toLocaleString()} сом</b>`;
    })
    .join('\n\n');

  // Формируем адрес доставки
  let addressText = '';
  if (deliveryType === 'delivery') {
    const addressParts = [
      `${address.city}, ул. ${address.street}, д. ${address.house}`,
    ];
    if (address.apartment) addressParts.push(`кв. ${address.apartment}`);
    if (address.entrance) addressParts.push(`подъезд ${address.entrance}`);
    if (address.floor) addressParts.push(`этаж ${address.floor}`);

    addressText = `\n\n📍 <b>Адрес доставки:</b>\n${addressParts.join(', ')}`;
  }

  // Формируем комментарий
  const commentText = comment
    ? `\n\n💬 <b>Комментарий:</b>\n${comment}`
    : '';

  // Итоговое сообщение
  return `
🛍 <b>НОВЫЙ ЗАКАЗ #${orderId}</b>

👤 <b>Клиент:</b> ${fullName}
📱 <b>Телефон:</b> ${phone}

💳 <b>Оплата:</b> ${formatPaymentType(paymentType)}
🚚 <b>Получение:</b> ${formatDeliveryType(deliveryType)}${addressText}

📦 <b>Товары:</b>
${itemsList}

💰 <b>ИТОГО: ${total.toLocaleString()} сом</b>${commentText}

⏰ Дата заказа: ${new Date().toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })}
`.trim();
};

export async function POST(request: NextRequest) {
  try {
    // Получаем данные заказа из тела запроса
    const orderData: OrderData = await request.json();

    // Получаем токен и chat ID из переменных окружения (серверная сторона)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('🔍 Telegram credentials check:');
    console.log('Bot token exists:', !!botToken);
    console.log('Chat ID exists:', !!chatId);

    // Проверяем наличие токена и chat ID
    if (!botToken || !chatId) {
      console.error('❌ Telegram bot token or chat ID is not configured');
      return NextResponse.json(
        { error: 'Telegram не настроен. Проверьте переменные окружения.' },
        { status: 500 }
      );
    }

    // Форматируем сообщение
    const message = formatOrderMessage(orderData);
    console.log('📝 Message formatted, length:', message.length);

    // Отправляем в Telegram
    console.log('📤 Sending to Telegram...');
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();
    console.log('📨 Telegram API response:', JSON.stringify(data, null, 2));

    if (!data.ok) {
      console.error('❌ Telegram API error:', data);
      return NextResponse.json(
        {
          error: 'Не удалось отправить заказ в Telegram',
          details: data.description || 'Unknown error'
        },
        { status: 500 }
      );
    }

    // Успешная отправка
    console.log('✅ Message sent successfully!');
    return NextResponse.json({ success: true, messageId: data.result.message_id });
  } catch (error) {
    console.error('❌ Error sending to Telegram:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заказа', details: String(error) },
      { status: 500 }
    );
  }
}
