import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1
          style={{
            color: "#b10c28",
          }}
        >
          Oops!
        </h1>
        <div
          style={{
            color: "slategray",
          }}
        >
          <p>Desculpa, ocorreu um erro inesperado.</p>
          <p>
            <i>
              {error.status} -{error.statusText || error.message}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
