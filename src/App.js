import './App.css';
import Item from './components/Item/Item';

function App() {
  const items = [
    { name: "Hamburger", price: 300, iconSrc: "./icons/icon-hamburger.png" },
    { name: "Hot-dog", price: 280, iconSrc: "./icons/icon-hotdog.png" },
    { name: "Pizza", price: 350, iconSrc: "./icons/icon-pizza.png" },
    { name: "Fries", price: 250, iconSrc: "./icons/icon-fries.png" },
    { name: "Coffee", price: 100, iconSrc: "./icons/icon-coffee.png" },
    { name: "Tea", price: 80, iconSrc: "./icons/icon-tea.png" }
  ];

  const addNewItem = (item) => {
    console.log("item", item);
  }

  return (
    <div className="App">
      {
        items.map((item, index) => {
          return (<Item
            key={index}
            item={item}
            onAddItem={() => addNewItem(item)}
          />);
        })
      }
    </div >
  );
}

export default App;
