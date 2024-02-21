import "./App.css";
import React from "react";
import { useCoordinatePointer } from "./hooks/useCoordinatePointer";
import Card from "./components/Card";

function App() {
  const ref = React.useRef(null);
  // Coordinate
  useCoordinatePointer(ref);

  // Create Card
  const [cards, setCards] = React.useState([]);

  const createCard = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setCards([...cards, { id: cards.length, text }]);
  };

  return (
    <div className="App" ref={ref}>
      <div className="container">
        <header className="header header__display" id="header">
          <h1 className="header__title">Rekayasa Perangkat Lunak</h1>
          <div>
            <p className="header__desc">Ini adalah contoh penggunaan DOM</p>
            <p>
              X : <span className="coordinate_x">00.123</span>
            </p>
            <p>
              Y : <span className="coordinate_y">00.123</span>{" "}
            </p>
          </div>
        </header>

        <div className="board" id="board">
          {cards.map((card) => (
            <Card key={card.id} title={card.text} />
          ))}
        </div>
        <form className="form" id="form_create_card" onSubmit={createCard}>
          <div className="form__group">
            <label htmlFor="cardTitle" className="form__label">
              Card Title
            </label>
            <input
              type="text"
              id="cardTitle"
              placeholder="Card Title"
              className="form__input"
            />
          </div>
          <button className="btn" id="createCardButton">
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
