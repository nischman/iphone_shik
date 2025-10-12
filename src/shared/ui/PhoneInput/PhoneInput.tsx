'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export function PhoneInput({ value, onChange, error, required = true }: PhoneInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Функция для форматирования телефона
  const formatPhoneNumber = (input: string): string => {
    // Убираем все символы кроме цифр
    const cleaned = input.replace(/\D/g, '');

    // Если начинается с 7, форматируем как +7
    if (cleaned.startsWith('7')) {
      const numbers = cleaned.slice(1, 11); // Берем только 10 цифр после 7
      if (numbers.length === 0) return '+7 ';
      if (numbers.length <= 3) return `+7 (${numbers}`;
      if (numbers.length <= 6) return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      if (numbers.length <= 8) return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
      return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
    }

    // Если начинается с 8, форматируем как 8
    if (cleaned.startsWith('8')) {
      const numbers = cleaned.slice(1, 11); // Берем только 10 цифр после 8
      if (numbers.length === 0) return '8 ';
      if (numbers.length <= 3) return `8 (${numbers}`;
      if (numbers.length <= 6) return `8 (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      if (numbers.length <= 8) return `8 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
      return `8 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
    }

    // Если другие цифры, автоматически добавляем +7
    if (cleaned.length > 0) {
      const numbers = cleaned.slice(0, 10);
      if (numbers.length <= 3) return `+7 (${numbers}`;
      if (numbers.length <= 6) return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      if (numbers.length <= 8) return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
      return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
    }

    return '';
  };

  // Валидация телефона
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    // Должно быть 11 цифр (7 или 8 + 10 цифр)
    if (cleaned.length !== 11) return false;
    // Должен начинаться с 7 или 8
    if (!cleaned.startsWith('7') && !cleaned.startsWith('8')) return false;
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatPhoneNumber(inputValue);
    onChange(formatted);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Если поле пустое, добавляем +7 при фокусе
    if (!value) {
      onChange('+7 ');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Если только +7 или 8, очищаем поле
    if (value === '+7 ' || value === '8 ') {
      onChange('');
    }
  };

  const isValid = value ? validatePhone(value) : true;
  const showError = !isFocused && value && !isValid;

  return (
    <div className="space-y-2">
      <Label htmlFor="phone">
        Телефон {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id="phone"
        type="tel"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="+7 (XXX) XXX-XX-XX"
        className={showError || error ? 'border-destructive focus-visible:ring-destructive' : ''}
      />
      {(showError || error) && (
        <p className="text-sm text-destructive">
          {error || 'Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX'}
        </p>
      )}
    </div>
  );
}
