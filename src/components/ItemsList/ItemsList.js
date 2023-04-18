import React from "react";
import "./ItemsList.css";
import Item from "./Item/Item";

const ItemsList = props => {
    return (
        <div className="ItemsList-Box">
            <p className="ItemsList-Bold">Add items</p>
            <div className="ItemsList-Buttons">
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