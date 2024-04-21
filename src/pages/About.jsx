import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container } from "../components";

export default function About() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Container
      styles={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <img
        src={state.image}
        alt={state.name}
        style={{ width: "196px", height: "265px", borderRadius: "10px" }}
      />
      <div style={{ width: "50%" }}>
        <h1>{state.name}</h1>
        <h4>{state.year}</h4>
        <p>{state.description}</p>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </div>
    </Container>
  );
}
