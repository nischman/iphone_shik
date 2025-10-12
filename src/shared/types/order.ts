// Типы для оформления заказа

export interface OrderFormData {
  // Личные данные
  fullName: string;
  phone: string;

  // Тип оплаты
  paymentType: 'cash' | 'card' | 'qr';

  // Способ получения
  deliveryType: 'delivery' | 'pickup';

  // Адрес доставки (только если deliveryType === 'delivery')
  address: {
    city: string;
    street: string;
    house: string;
    apartment?: string;
    entrance?: string;
    floor?: string;
  };

  // Комментарий
  comment?: string;
}

export interface Order extends OrderFormData {
  id: string;
  items: Array<{
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    color?: string;
    storage?: string;
  }>;
  total: number;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export const initialOrderFormData: OrderFormData = {
  fullName: '',
  phone: '',
  paymentType: 'cash',
  deliveryType: 'delivery',
  address: {
    city: '',
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: '',
  },
  comment: '',
};
