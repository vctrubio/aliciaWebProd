import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./card_portfolio.css"

export const Card = ({ title, coverImageData }) => {
  return (
    <div className="card-portfolio">
      <GatsbyImage
        image={coverImageData}
        alt={typeof title === "string" ? title : "Portfolio image"}
        className="card-image"
      />
      <div className="card-portfolio-opacity"></div>
      <div id="card-title">{title}</div>
    </div>
  )
}
