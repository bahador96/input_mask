import React, { useState } from "react";
import cities from "../cities.json";
import Input from "./Input";

const CitySearch = () => {
  const [inputValue, setInputValue] = useState(""); // ورودی کاربر
  const [suggestions, setSuggestions] = useState([]); // شهرهای پیشنهادی

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // فیلتر کردن شهرها براساس ورودی
    if (value !== "") {
      const filteredCities = cities.filter((city) => city.startsWith(value));
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <Input handleChange={handleChange} hint="Enter city name" />

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
