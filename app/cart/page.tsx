"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useCartStore from "@/store/cartStore";
import React from "react";

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  return (
    <>
      <div className="h-screen">
        <Header />
        <div>
          <h2>Carrito</h2>
          {items.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <p>{item.name}</p>
                  <p>Precio: ${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                  />
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
          )}
          {items.length > 0 && (
            <>
              <button onClick={clearCart}>Vaciar carrito</button>
              <p>
                Total: $
                {items.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </>
          )}
        </div>
        <div className="absolute w-full bottom-0 ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Cart;
