import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const deleteProduct = (product) => {
    dispatch(delCart(product));
  };

  return (
    <>
      {state.length ? (
        state.map((product) => {
          return (
            <div className="row m-5">
              <div className="col-md-4 ">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-5">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} x {product.price} = ${" "}
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => {
                    deleteProduct(product);
                  }}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => addProduct(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="m-5">Your Cart is Empty</h2>
      )}

      {state.length ? (
        <NavLink to="/checkout" className="btn btn-outline-dark m-5 me-4">
          Check Out
        </NavLink>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
