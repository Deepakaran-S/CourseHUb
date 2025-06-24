// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, course) => sum + course.price, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((course) => (
              <div key={course.id} className="flex items-start gap-4 p-4 border rounded-lg shadow-sm">
                <img src={course.image} alt={course.title} className="w-24 h-16 rounded object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="text-indigo-600 font-semibold mt-1">₹{course.price}</div>
                </div>
                <button
                  onClick={() => removeFromCart(course.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-semibold">
              Total: <span className="text-indigo-600">₹{total}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Clear Cart
              </button>

              <Link
                to="/payment"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded hover:opacity-90 transition"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
