import React from "react";
import "./ItemsList.css";
import Item from "./Item/Item";

const ItemsList = props => {
    return (
        <div className="ItemsList-box">
            <p className="ItemsList-bold">Add items</p>
            <div className="ItemsList-buttons">
                {
                    props.itemsList.map((item, index) => {
                        return (<Item
                            key={index}
                            item={item}
                            onAddItem={() => props.onAddItem(item)}
                        />);
                    })
                }
            </div>
        </div>
    );
}

export default ItemsList