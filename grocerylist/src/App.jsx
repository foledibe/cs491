import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() === "") return;

    const newItem = {
      id: Date.now(),
      name: text,
    };

    setItems([...items, newItem]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Grocery List</h1>

      <input
        type="text"
        placeholder="Enter grocery item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={addItem}>+</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
