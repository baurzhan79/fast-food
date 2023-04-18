import React from "react";
import "./Item.css";

const Item = props => {
    const iconStyle = {
        backgroundImage: `url(${props.item.iconSrc})`
    };

    return (
        <button className="Item-btn" onClick={props.onAddItem}>
            <span className="Item-span-box" style={iconStyle}>
                <span className="Item-span">{props.item.name}</span>
                <span className="Item-span">Price: {props.item.price} KZT</span>
            </span>
        </button >
    );
}

export default Item