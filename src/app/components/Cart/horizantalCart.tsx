import { foodActions } from "@/Redux/Reducer/reducer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface HorizontalCardProps {
  items: {
    id: number;
    image: string;
    title: string;
    link: string;
    price: number;
    quantity: number;
  };
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ items }) => {
  const { id, image, title, link, price, quantity } = items;
  console.log(quantity);
  const { food } = useSelector((state: any) => state.food);
  const [cart, setCart] = useState<{ [key: number]: number }>(food);
  const addToCart = (itemId: any) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const deleteFromCart = (itemId: any) => {
    if (cart[itemId] > 1) {
      setCart((prevCart) => ({
        ...prevCart,
        [itemId]: (prevCart[itemId] || 0) - 1,
      }));
    } else {
      const newCart = { ...cart };
      delete newCart[itemId];
      setCart(newCart);
    }
  };

  const dispatch = useDispatch();

  const updateCard = (cart: any) => {
    dispatch(foodActions.FOOD(cart));
  };
  React.useEffect(() => {
    updateCard(cart);
  }, [cart]);
  return (
    <div className="w-full flex  justify-between items-center   p-4 mb-4">
      <div className="flex gap-5 items-center justify-center">
        <div>
          <img src={image} alt={title} className="w-24 h-24 rounded" />
        </div>
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-gray-500 text-sm mb-2">₹{price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
          onClick={() => deleteFromCart(title)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => addToCart(title)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
