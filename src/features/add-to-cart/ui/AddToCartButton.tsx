'use client';

import { Button } from '@/shared/ui/Button';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  onAdd?: () => void;
  disabled?: boolean;
}

export function AddToCartButton({
  productId,
  productName,
  onAdd,
  disabled = false,
}: AddToCartButtonProps) {
  const handleClick = () => {
    // TODO: Implement cart store logic
    console.log('Adding to cart:', productId, productName);
    onAdd?.();
  };

  return (
    <Button onClick={handleClick} disabled={disabled} className="w-full gap-2">
      <ShoppingCart className="h-4 w-4" />В корзину
    </Button>
  );
}
