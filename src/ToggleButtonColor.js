import React from "react";
import { useState } from "react";
function ToggleButtonColor() {
  const [color, setColor] = useState("black");
  const [bcolor, setbColor] = useState("white");
  const toggleColor = () => {
    setColor(color === "black" ? "white" : "black");
    setbColor(bcolor === "white" ? "black" : "white");
  };

  return (
    <>
      <section>
        <button onClick={() => toggleColor()}>
          {bcolor === "white" ? "Black Theme" : "White Theme"}
        </button>
      </section>
      <section className="content">
        <h1 style={{ color: color, backgroundColor: bcolor }}>
          Welcome To A<br />
          Real World
        </h1>
      </section>
    </>
  );
}

export default ToggleButtonColor;
