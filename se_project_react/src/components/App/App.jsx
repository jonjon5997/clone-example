import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" }); //left part of object is variable name and the second part is the function you can use to change the variable -> variableName, setVariableName

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />{" "}
        {/* pass the variable to the main componenet as a prop*/}
      </div>
      <ModalWithForm title="New Garment" buttonText="Add Garment">
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            placeholder="name"
            type="text"
            className="modal__input"
            id="name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            placeholder="imageUrl"
            type="url"
            className="modal__input"
            id="imageUrl"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          {" "}
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio-input" /> Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input id="warm" type="radio" className="modal__radio-input" /> Warm
          </label>{" "}
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input id="cold" type="radio" className="modal__radio-input" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
