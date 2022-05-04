import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defintion`);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      "Hello from Dictionary"
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
        ></input>
      </form>
    </div>
  );
}
