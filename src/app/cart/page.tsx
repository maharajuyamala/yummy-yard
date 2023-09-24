import React from "react";
import Cart from "../components/Cart/cart";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems?: CartItem[];
}

const CartList: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div className="bg-white  dark:bg-gray-800">
      <Header cart={0} />
      <div className="flex mt-12 justify-center">
        <Cart
          cartItems={[{ id: 12, name: "Biryani", price: 12, quantity: 1 }]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CartList;
