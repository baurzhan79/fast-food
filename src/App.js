import './App.css';
import ItemsList from './components/ItemsList/ItemsList';

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
      <ItemsList
        itemsList={items}
        onAddItem={(item) => addNewItem(item)}
      />
    </div >
  );
}

export default App;
