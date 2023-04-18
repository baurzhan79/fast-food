import React from "react";
import "./Item.css";

const Item = props => {
    const iconStyle = {
        backgroundImage: `url(${props.item.iconSrc})`
    };

    return (
        <button className="Item-Btn" onClick={props.onAddItem}>
            <span className="Item-SpanBox" style={iconStyle}>
                <span className="Item-Span">{props.item.name}</span>
                <span className="Item-Span">Price: {props.item.price} KZT</span>
            </span>
        </button >
    );
}

export default Item