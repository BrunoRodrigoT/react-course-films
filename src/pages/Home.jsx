import React, { useEffect, useState } from "react";
import { Card, Container } from "../components";
import api from "../config/api";
export default function Home() {
  const [cat, setCat] = useState();

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://cataas.com/cat")
      .then((response) => {
        return response.blob();
      })
      .then((myBlob) => {
        var objectURL = URL.createObjectURL(myBlob);
        setCat(objectURL);
      })
      .catch((err) => console.log(err));

    api
      .get()
      .then((response) => {
        setPersons(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>CONSUMINDO API's</h1>

      <img src={cat} alt="cat" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {persons.map((person) => (
          <Card
            title={person.name}
            subtitle={person.species}
            image={person.image}
          />
        ))}
      </div>
    </Container>
  );
}
