import React from "react";

interface totalCardProps {
  bill: {
    totalBill: number;
    discount: number;
    handlingCharges: number;
    deliveryFee: number;
  };
}

const TotalCard: React.FC<totalCardProps> = ({ bill }) => {
  const { totalBill, discount, handlingCharges, deliveryFee } = bill;
  return (
    <div className="w-1/3 bg-white dark:bg-gray-900 shadow-md h-48  p-4 mb-4">
      <div className="flex justify-between">
        <p>Bill:</p>{" "}
        <h2 className="text-gray-500 text-sm mb-2">₹{totalBill}</h2>
      </div>
      <div className="flex justify-between">
        <p>Discount:</p>{" "}
        <p className="text-gray-500 text-sm mb-2">₹{(totalBill * 10) / 100}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery:</p>{" "}
        <p className="text-gray-500 text-sm mb-2">₹{deliveryFee}</p>
      </div>
      <div className="flex justify-between">
        <p>Taxes:</p>{" "}
        <p className="text-gray-500 text-sm mb-2">₹{(totalBill * 6) / 100}</p>
      </div>
      <hr className="my-2 " />
      <div className="flex justify-between my-3">
        <h1 className="font-medium ">Total:</h1>{" "}
        <p className="text-gray-500 text-sm mb-2">
          ₹
          {(
            totalBill +
            (totalBill * 10) / 100 +
            deliveryFee +
            (totalBill * 6) / 100
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TotalCard;
