import React from "react";

export default function Container({ children, styles }) {
  return (
    <body
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#020617",
        height: "100vh",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "90%",
          backgroundColor: "#0f172a",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          color: "#f9f9f9",
          ...styles,
        }}
      >
        {children}
      </div>
    </body>
  );
}
