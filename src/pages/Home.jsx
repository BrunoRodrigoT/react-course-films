import React from "react";
import { Card, Container } from "../components";
import { movies } from "../utils/mock";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>MEUS FILMES FAVORITOS</h1>
      <h4>De todos os tempos</h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {movies.map((movie) => (
          <Card
            title={movie.name}
            subtitle={movie.year}
            image={movie.image}
            onClick={() => navigate("/about", { state: movie })}
          />
        ))}
      </div>
    </Container>
  );
}
