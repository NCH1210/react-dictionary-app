import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition:</strong>
              <br />
              {definition.definition}
              <br />
              <hr />
              <strong>Example: </strong>
              <em> {definition.example} </em>
              <hr />

              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p> {props.meaning.definitions[0].example}</p>
    </div>
  );
}
