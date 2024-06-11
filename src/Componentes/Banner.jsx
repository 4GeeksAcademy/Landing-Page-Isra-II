import React, { useState } from "react";
import "../Styles/Banner.css";

const Banner = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <header className=" d-flex align-items-center justify-content-center text-center">
      <div className="banner-content bg-dark bg-opacity-50 p-5 rounded">
        <h1 className="text-white">El Mago Isra</h1>
        <p className="text-white">Magia Increíble para Todos</p>
        <button className="btn btn-danger" onClick={handleButtonClick}>
          Reserva Ahora
        </button>
        {showDatePicker && (
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker m-2"
          />
        )}
      </div>
      <div>
        <img
          src="src/assets/Imagen_de_WhatsApp_2022-10-27_a_las_12.08.51-removebg-preview.png"
          alt="Me"
        />
      </div>
    </header>
  );
};

export default Banner;
