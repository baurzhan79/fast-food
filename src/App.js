import './App.css';
import React, { useState, useEffect } from 'react';
import ItemsList from './components/ItemsList/ItemsList';
import OrderDetails from './components/OrderDetails/OrderDetails';

function App() {
  const items = [
    { name: "Hamburger", price: 300, iconSrc: "./icons/icon-hamburger.png" },
    { name: "Hot-dog", price: 280, iconSrc: "./icons/icon-hotdog.png" },
    { name: "Pizza", price: 350, iconSrc: "./icons/icon-pizza.png" },
    { name: "Fries", price: 250, iconSrc: "./icons/icon-fries.png" },
    { name: "Coffee", price: 100, iconSrc: "./icons/icon-coffee.png" },
    { name: "Tea", price: 80, iconSrc: "./icons/icon-tea.png" }
  ];

  const [orderDetails, setOrderDetails] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    let total = orderDetails.reduce((sum, currentItem) => {
      return sum + (currentItem.price * currentItem.quantity);
    }, 0);

    total = parseFloat(total.toFixed(2));
    setTotalSum(total);
  }, [orderDetails])

  const addNewItem = (item) => {
    const filteredArray = orderDetails.filter(orderDetail => {
      return orderDetail["name"] === item.name;
    });

    const orderDetailsCopy = [...orderDetails];

    if (filteredArray.length === 0) {
      const DateInMilliseconds = new Date().getTime();
      const newOrderDetail = {
        id: DateInMilliseconds,
        name: item.name,
        price: item.price,
        quantity: 1
      }
      orderDetailsCopy.push(newOrderDetail);
    }
    else { // filteredArray.length === 1
      const index = orderDetailsCopy.findIndex(p => p.id === filteredArray[0].id);
      orderDetailsCopy[index].quantity++;
    }

    setOrderDetails(orderDetailsCopy);
  }

  const removeItem = id => {
    const index = orderDetails.findIndex(p => p.id === id);
    const orderDetailsCopy = [...orderDetails];
    if (orderDetailsCopy[index].quantity > 1) {
      orderDetailsCopy[index].quantity--;
    }
    else {
      orderDetailsCopy.splice(index, 1);
    }
    setOrderDetails(orderDetailsCopy);
  }

  return (
    <div className="App">
      <ItemsList
        itemsList={items}
        onAddItem={(item) => addNewItem(item)}
      />
      <OrderDetails
        orderDetails={orderDetails}
        totalSum={totalSum}
        onRemoveItem={(id) => removeItem(id)}
      />
    </div >
  );
}

export default App;
