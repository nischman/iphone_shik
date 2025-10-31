'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore, useOrderStore } from '@/shared/lib/store';
import { PhoneInput } from '@/shared/ui/PhoneInput/PhoneInput';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { sendOrderToTelegram } from '@/shared/services/telegram';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();
  const { orderData, updateOrderData } = useOrderStore();

  const [formData, setFormData] = useState(orderData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Если корзина пустая, перенаправляем в корзину
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items, router]);

  if (items.length === 0) {
    return null;
  }

  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // ФИО - обязательное
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Введите ФИО';
    }

    // Телефон - строгая валидация
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!formData.phone) {
      newErrors.phone = 'Введите номер телефона';
    } else if (phoneClean.length !== 11 || (!phoneClean.startsWith('7') && !phoneClean.startsWith('8'))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    // Адрес - только если выбрана доставка
    if (formData.deliveryType === 'delivery') {
      if (!formData.address.city.trim()) {
        newErrors.city = 'Введите город';
      }
      if (!formData.address.street.trim()) {
        newErrors.street = 'Введите улицу';
      }
      if (!formData.address.house.trim()) {
        newErrors.house = 'Введите номер дома';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Генерируем номер заказа
      const newOrderId = `ORD-${Date.now()}`;
      setOrderId(newOrderId);

      // Сохраняем данные заказа
      updateOrderData(formData);

      // Добавляем небольшую задержку для визуального эффекта загрузки
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Отправляем заказ в Telegram
      await sendOrderToTelegram({
        ...formData,
        orderId: newOrderId,
        items,
        total,
      });

      // Показываем модальное окно успеха
      setShowSuccessModal(true);

      // Очищаем корзину через секунду
      setTimeout(() => {
        clearCart();
      }, 1000);
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Обработчик изменения полей
  const handleFieldChange = (field: string, value: string) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [addressField]: value },
      });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    // Очищаем ошибку для этого поля
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Вернуться в корзину
              </Link>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Оформление заказа</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Форма */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Личные данные */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-bold mb-6">Личные данные</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">
                          ФИО <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleFieldChange('fullName', e.target.value)}
                          placeholder="Иванов Иван Иванович"
                          className={errors.fullName ? 'border-destructive' : ''}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <PhoneInput
                        value={formData.phone}
                        onChange={(value) => handleFieldChange('phone', value)}
                        error={errors.phone}
                      />
                    </div>
                  </div>

                  {/* Тип оплаты */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-bold mb-6">Способ оплаты</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: 'cash', label: 'Наличные' },
                        { value: 'card', label: 'Банковская карта' },
                        { value: 'qr', label: 'Оплата по QR' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleFieldChange('paymentType', option.value)}
                          className={`
                            rounded-xl border-2 px-4 py-3 text-center font-medium
                            transition-all duration-200 hover:scale-105
                            ${
                              formData.paymentType === option.value
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border bg-background text-foreground hover:border-primary/50'
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Способ получения */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-bold mb-6">Способ получения</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {[
                        { value: 'delivery', label: 'Доставка' },
                        { value: 'pickup', label: 'Самовывоз' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleFieldChange('deliveryType', option.value)}
                          className={`
                            rounded-xl border-2 px-4 py-3 text-center font-medium
                            transition-all duration-200 hover:scale-105
                            ${
                              formData.deliveryType === option.value
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border bg-background text-foreground hover:border-primary/50'
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {/* Адрес доставки - показываем только если выбрана доставка */}
                    {formData.deliveryType === 'delivery' && (
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="font-semibold">Адрес доставки</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">
                              Город <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="city"
                              type="text"
                              value={formData.address.city}
                              onChange={(e) => handleFieldChange('address.city', e.target.value)}
                              placeholder="Омск"
                              className={errors.city ? 'border-destructive' : ''}
                            />
                            {errors.city && (
                              <p className="text-sm text-destructive mt-1">{errors.city}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="street">
                              Улица <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="street"
                              type="text"
                              value={formData.address.street}
                              onChange={(e) => handleFieldChange('address.street', e.target.value)}
                              placeholder="Ленина"
                              className={errors.street ? 'border-destructive' : ''}
                            />
                            {errors.street && (
                              <p className="text-sm text-destructive mt-1">{errors.street}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="house">
                              Дом <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="house"
                              type="text"
                              value={formData.address.house}
                              onChange={(e) => handleFieldChange('address.house', e.target.value)}
                              placeholder="123"
                              className={errors.house ? 'border-destructive' : ''}
                            />
                            {errors.house && (
                              <p className="text-sm text-destructive mt-1">{errors.house}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="apartment">Квартира</Label>
                            <Input
                              id="apartment"
                              type="text"
                              value={formData.address.apartment}
                              onChange={(e) => handleFieldChange('address.apartment', e.target.value)}
                              placeholder="45"
                            />
                          </div>

                          <div>
                            <Label htmlFor="entrance">Подъезд</Label>
                            <Input
                              id="entrance"
                              type="text"
                              value={formData.address.entrance}
                              onChange={(e) => handleFieldChange('address.entrance', e.target.value)}
                              placeholder="2"
                            />
                          </div>

                          <div>
                            <Label htmlFor="floor">Этаж</Label>
                            <Input
                              id="floor"
                              type="text"
                              value={formData.address.floor}
                              onChange={(e) => handleFieldChange('address.floor', e.target.value)}
                              placeholder="5"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Комментарий */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h2 className="text-xl font-bold mb-6">Комментарий к заказу</h2>
                    <textarea
                      value={formData.comment}
                      onChange={(e) => handleFieldChange('comment', e.target.value)}
                      placeholder="Укажите дополнительную информацию или пожелания к заказу"
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>

                {/* Сводка заказа */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-6">Ваш заказ</h2>

                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3 pb-3 border-b border-border last:border-0">
                          <div className="w-16 h-16 rounded bg-muted flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            {item.color && (
                              <p className="text-xs text-muted-foreground">{item.color}</p>
                            )}
                            {item.storage && (
                              <p className="text-xs text-muted-foreground">{item.storage}</p>
                            )}
                            <p className="text-sm font-semibold mt-1">
                              {item.quantity} × {item.price.toLocaleString()} ₽
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 border-t border-border pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span>{total.toLocaleString()} ₽</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full rounded-full h-12 sm:h-14 text-base sm:text-lg font-semibold mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Оформление заказа...
                        </>
                      ) : (
                        'Подтвердить заказ'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Модальное окно успешного оформления */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-card rounded-2xl border border-border p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Заказ оформлен!</h2>
              <p className="text-muted-foreground mb-4">
                Ваш заказ #{orderId} успешно оформлен
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Мы свяжемся с вами в ближайшее время для подтверждения заказа
              </p>
              <Button
                size="lg"
                onClick={() => router.push('/')}
                className="w-full rounded-full"
              >
                Вернуться на главную
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
