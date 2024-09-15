// export default CitySearch;
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
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      ); // حساسیت به بزرگی حروف را حذف می‌کند
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <Input
        handleChange={handleChange}
        hint="Enter city name"
        inputValue={inputValue}
      />
      {/* نمایش شهرهای پیشنهادی در datalist برای autocomplete */}
      <datalist id="city-suggestions">
        {suggestions.length > 0 &&
          suggestions.map((city, index) => <option key={index} value={city} />)}
      </datalist>
    </div>
  );
};

export default CitySearch;
