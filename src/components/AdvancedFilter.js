import React, { useRef } from "react";
import "./AdvancedFilter.css";

const AdvancedFilter = ({ searchValue, handleChangeValue }) => {
  // useman answer to https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks
  const myForm = useRef();
  const submit = () => {
    myForm.current.reset();
  };

  return (
    <>
      <form ref={myForm} onSubmit={submit} className="filter-container">
        <input
          type="text"
          name="name"
          id="name"
          value={searchValue.name}
          onChange={(e) => handleChangeValue(e)}
          placeholder="country"
          className="filter-input"
        />
        <input
          type="text"
          name="capital"
          id="capital"
          value={searchValue.capital}
          onChange={(e) => handleChangeValue(e)}
          placeholder="capital"
          className="filter-input"
        />
        <input
          type="number"
          min="0"
          name="population"
          id="population"
          className="filter-input"
          placeholder="population"
          value={searchValue.population}
          onChange={(e) => handleChangeValue(e)}
        />
        <button
          name="reset"
          value="reset"
          className="filter-input"
          onClick={(e) => {
            e.preventDefault();
            handleChangeValue(e);
            document.getElementById("name").value = null;
            document.getElementById("capital").value = null;
            document.getElementById("population").value = null;
          }}
        >
          Reset Filters
        </button>
      </form>
    </>
  );
};

export default AdvancedFilter;
