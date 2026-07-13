"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { CONTACT } from "@/lib/data";

export type CartItem = {
  key: string;
  name: string;
  price: number;
  unit: string;
};

type StoreCtx = {
  items: CartItem[];
  days: number;
  cartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  setDays: (n: number) => void;
  openCart: () => void;
  closeCart: () => void;
  total: number;
  waHref: (message: string) => string;
};

const Ctx = createContext<StoreCtx | null>(null);

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [days, setDaysState] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) =>
      prev.some((i) => i.key === item.key) ? prev : [...prev, item]
    );
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const setDays = useCallback((n: number) => setDaysState(Math.max(1, n)), []);

  const total = items.reduce((s, i) => s + i.price, 0) * days;

  const value: StoreCtx = {
    items,
    days,
    cartOpen,
    addItem,
    removeItem,
    setDays,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    total,
    waHref: waLink,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
