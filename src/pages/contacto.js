import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import "../components/layout_customs.css"
import { LogoBar } from "../components/logobar"
import { Info } from "../components/info"
import { NavBar } from "../components/navbar"

const ContactoPage = ({ data }) => {
  const allNodes = data.allContentfulAliciaInterior.nodes

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        margin: "0 !important",
        overflow: "hidden",
      }}
    >
      <LogoBar />
      <NavBar activePage="contacto" nodes={allNodes} />
      <div className="fade-in-load">
        <Info />
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Alicia Agosti | Contacto" />
export default ContactoPage

export const query = graphql`
  query ContactoQuery {
    allContentfulAliciaInterior {
      nodes {
        id
        title
      }
    }
  }
`
