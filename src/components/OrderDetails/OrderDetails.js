import React from "react";
import "./OrderDetails.css";

const OrderDetails = props => {
    if (props.orderDetails.length === 0)
        return (
            <div className="OrderDetails-Box">
                <p className="OrderDetails-Bold">Order Details</p>
                <div className="OrderDetails-TextBox">
                    <p>Order is empty!</p>
                    <p>Please add some items!</p>
                </div>
            </div>
        );
    else
        return (
            <div className="OrderDetails-Box">
                <p className="OrderDetails-Bold">Order Details</p>
                <div>
                    {
                        console.log("orderDetails", props.orderDetails)
                    }
                </div>
            </div>
        );
}

export default OrderDetails