import Image from 'next/image';
import { CartItem as CartItemType } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const handleIncrease = () => {
    if (item.quantity < item.maxQuantity) {
      onUpdateQuantity(item.productId, item.quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.productId, item.quantity - 1);
    }
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="relative w-20 h-20 rounded overflow-hidden bg-muted flex-shrink-0">
        <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{item.name}</h4>
        {item.color && <p className="text-sm text-muted-foreground">Цвет: {item.color}</p>}
        {item.storage && <p className="text-sm text-muted-foreground">Память: {item.storage}</p>}
        <p className="font-semibold text-foreground mt-1">{item.price.toLocaleString()} ₽</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(item.productId)}
          className="text-destructive hover:text-destructive/90"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2 border border-border rounded">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
            className="h-8 w-8"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleIncrease}
            disabled={item.quantity >= item.maxQuantity}
            className="h-8 w-8"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
