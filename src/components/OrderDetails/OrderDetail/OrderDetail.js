import React from 'react';
import "./OrderDetail.css";

const OrderDetail = props => {
    return (
        <div className="OrderDetail-box">
            <div className="OrderDetail-name-quantity">
                <span className="OrderDetail-name">{props.item.name}</span>
                <span>x {props.item.quantity}</span>
            </div>
            <span className="OrderDetail-price">{props.item.price} KZT</span>
            <button className="OrderDetail-btn" onClick={props.onRemoveItem}>X</button>
        </div>
    );
};

export default OrderDetail;