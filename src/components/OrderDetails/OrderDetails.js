import React from "react";
import "./OrderDetails.css";
import OrderDetail from "./OrderDetail/OrderDetail";

const OrderDetails = props => {
    if (props.orderDetails.length === 0)
        return (
            <div className="OrderDetails-box">
                <p className="OrderDetails-bold">Order Details</p>
                <div className="OrderDetails-text-box">
                    <p>Order is empty!</p>
                    <p>Please add some items!</p>
                </div>
            </div>
        );
    else
        return (
            <div className="OrderDetails-box">
                <p className="OrderDetails-bold">Order Details</p>
                <div>
                    {
                        props.orderDetails.map(item => {
                            return (
                                <OrderDetail
                                    key={item.id}
                                    item={item}
                                    onRemoveItem={() => props.onRemoveItem(item.id)}
                                />);
                        })
                    }
                </div>
                <div className="OrderDetails-total">
                    <p className="ItemsList-bold">Total sum:</p>
                    <p className="ItemsList-bold">{props.totalSum} KZT</p>
                </div>
            </div>
        );
}

export default OrderDetails