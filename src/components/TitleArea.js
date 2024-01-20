import React from "react";

const Inked = () => {
  return (
    <h1
      style={{
        fontFamily: "Blackletter",
        fontWeight: "bold",
        fontSize: "130px",
        width: "100%",
        margin: "0 auto", // Center horizontally
        backgroundColor: "black", // Black background
        color: "white", // White text color for contrast
        textAlign: "center",
        padding: "90px 0 30px",
      }}
    >
      Inke<span style={{ color: "red" }}>d</span>
    </h1>
  );
};

export default Inked;
