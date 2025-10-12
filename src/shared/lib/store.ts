import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Cart, CartItem, OrderFormData, initialOrderFormData } from '../types';

// UI Store
interface UIStore {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));

// Order Store
interface OrderStore {
  orderData: OrderFormData;
  updateOrderData: (data: Partial<OrderFormData>) => void;
  resetOrderData: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orderData: initialOrderFormData,

      updateOrderData: (data) =>
        set((state) => ({
          orderData: { ...state.orderData, ...data },
        })),

      resetOrderData: () =>
        set({ orderData: initialOrderFormData }),
    }),
    {
      name: 'order-storage',
    }
  )
);

// Cart Store
interface CartStore extends Cart {
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      subtotal: 0,
      discount: 0,
      total: 0,

      addItem: (newItem) => {
        const items = get().items;
        const existingItem = items.find((item) => item.productId === newItem.productId);

        let updatedItems;
        if (existingItem) {
          updatedItems = items.map((item) =>
            item.productId === newItem.productId
              ? { ...item, quantity: Math.min(item.quantity + newItem.quantity, item.maxQuantity) }
              : item
          );
        } else {
          updatedItems = [...items, newItem];
        }

        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal - get().discount;

        set({ items: updatedItems, totalItems, subtotal, total });
      },

      removeItem: (productId) => {
        const items = get().items.filter((item) => item.productId !== productId);
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal - get().discount;

        set({ items, totalItems, subtotal, total });
      },

      updateQuantity: (productId, quantity) => {
        const items = get().items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(1, Math.min(quantity, item.maxQuantity)) }
            : item
        );
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal - get().discount;

        set({ items, totalItems, subtotal, total });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, subtotal: 0, discount: 0, total: 0 });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
