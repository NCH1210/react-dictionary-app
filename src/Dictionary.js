import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defintion`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
