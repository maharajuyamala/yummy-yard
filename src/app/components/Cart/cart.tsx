"use client";

import React, { useRef, useState } from "react";
import menuData from "../../components/Explore/menuData.json";
import { useSelector } from "react-redux";
import HorizontalCard from "./horizantalCart";
import TotalCard from "./totalCart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const cartData = useSelector((state: any) => state.food);
  const items = menuData.filter((item) =>
    Object.keys(cartData.food).includes(item.title)
  );
  let totalBillData = items.map(
    (prev) => prev.price * cartData.food[prev.title]
  );
  const bill = {
    totalBill: totalBillData[0],
    discount: 12,
    handlingCharges: 122,
    deliveryFee: 12,
  };
  return (
    <div className="w-full bg-white dark:text-white dark:bg-gray-800 p-4 rounded">
      <h2 className="mx-28 text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length ? (
        <div className="w-full flex gap-4 justify-center">
          <div className="w-1/2 bg-white dark:bg-gray-900 shadow shadow-md space-y-4">
            {items.map((item, index: number) => {
              return (
                <div key={item.id} className="">
                  <HorizontalCard
                    items={{ ...item, quantity: cartData.food[item.title] }}
                  />
                  {index != items.length - 1 && <hr className="mx-4" />}
                </div>
              );
            })}
          </div>

          <TotalCard bill={bill} />
        </div>
      ) : (
        <div className="w-1/2 mx-28 py-28"></div>
      )}
    </div>
  );
};

export default Cart;
