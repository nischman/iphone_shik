// Сервис для отправки заказов в Telegram (клиентская сторона)
// Использует API route для обхода CSP ограничений

import type { OrderFormData } from '../types';
import type { CartItem } from '../types';

interface OrderData extends OrderFormData {
  orderId: string;
  items: CartItem[];
  total: number;
}

/**
 * Отправляет заказ в Telegram через API route
 */
export const sendOrderToTelegram = async (orderData: OrderData): Promise<boolean> => {
  try {
    // ВАЖНО: Отправляем на НАШ API route, а не напрямую в Telegram!
    // API route сам отправит в Telegram с токеном
    const response = await fetch('/api/telegram/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Не удалось отправить заказ');
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error sending order to Telegram:', error);
    throw error;
  }
};
