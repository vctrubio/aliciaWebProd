import React from "react"
import { navigate } from "gatsby"
import logo from "../images/logoAA.webp"

export const LogoBar = () => {
  const handleClick = () => {
    navigate("/")
  }

  return (
    <div
      className="d-flex justify-content-around"
      onClick={handleClick}
      style={{ width: "100%" }}
    >
      <img
        src={logo}
        alt="Alicia Agosti Interiorismo"
        width="420"
        height="auto" // Maintain aspect ratio
        style={{
          width: "420ox",
          marginTop: "2em",
          transform: "scale(1.4)",
          cursor: "pointer", // Added since it has a click handler
        }}
      />
    </div>
  )
}
