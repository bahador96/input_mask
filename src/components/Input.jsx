/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
const Input = ({ handleChange, hint, inputValue }) => {
  return (
    <div className={styles.input}>
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        placeholder={hint} // اضافه کردن placeholder
        list="city-suggestions" // اضافه کردن قابلیت autocomplete
      />
    </div>
  );
};

export default Input;
