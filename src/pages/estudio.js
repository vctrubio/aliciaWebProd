import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import "../components/layout_customs.css"
import { LogoBar } from "../components/logobar"
import { Banner } from "../components/banner"
import { SlideSwiper } from "../components/slideSwiper"
import { NavBar } from "../components/navbar"
import { FadeInSection } from "../components/fadeInSection"

const EstudioPage = ({ data }) => {
  const allNodes = data.allContentfulAliciaInterior.nodes
  const imgs = data.allContentfulAliHome.nodes.flatMap(node => node.fotos)

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
      <NavBar activePage="estudio" nodes={allNodes} />
      <div className="fade-in-load">
        <SlideSwiper imgs={imgs} />
      </div>
      <Banner />
    </div>
  )
}

export const Head = () => <Seo title="Alicia Agosti | Estudio" />
export default EstudioPage

export const query = graphql`
  query EstudioQuery {
    allContentfulAliciaInterior {
      nodes {
        id
        title
      }
    }
    allContentfulAliHome {
      nodes {
        fotos {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
