import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { LogoBar } from "../components/logobar"
import { NavBar } from "../components/navbar"

const PortfolioItemTemplate = ({ data, location }) => {
  const node = data.contentfulAliciaInterior
  const edges = data.allContentfulOrden.nodes[0].listado

  const imageWidth = node.media.length === 4 ? "45%" : "30%"
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  // Helper to convert ALL CAPS title to Title Case (e.g., "POZUEL" -> "Pozuel")
  const toTitleCase = str => {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
  const titleCased = toTitleCase(node.title)

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    shareUrl
  )}`
  const whatsappInquiryUrl = `https://api.whatsapp.com/send?phone=34630199112&text=${encodeURIComponent(
    `Hola, estoy interesad@ en vustro servicios.`
  )}`

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
      <NavBar activePage="proyectos" nodes={edges} />

      <div className="container text-center mt-2">
        <div style={{ marginTop: "2em" }}>
          <h1 style={{ fontSize: "34px" }}>{node.title}</h1>
          <p style={{ fontSize: "16px", padding: "0rem 2rem 0rem 2rem" }}>
            {node.description?.description}
          </p>
          {node.credits && (
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                padding: "0rem 2rem 0rem 2rem",
              }}
            >
              {node.credits}
            </p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "4em",
          }}
        >
          {node.media.map(
            (photo, index) =>
              photo.gatsbyImageData && (
                <GatsbyImage
                  key={index}
                  image={photo.gatsbyImageData}
                  alt={node.title}
                  placeholder="blurred"
                  style={{
                    width: imageWidth,
                    margin: "0.5em",
                  }}
                  imgStyle={{
                    objectFit: "cover",
                  }}
                  className="responsive-image"
                />
              )
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "4em",
          }}
        >
          <Link to="/proyectos" className="back-btn" aria-label="Volver">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="back-btn"
            aria-label="Consultar por WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="back-btn"
            aria-label="Compartir"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </a>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 1000px) {
          .responsive-image {
            width: 100% !important;
          }
        }
      `,
        }}
      />
    </div>
  )
}

export const Head = ({ data, location }) => {
  const node = data.contentfulAliciaInterior
  const description = node.description?.description
    ? node.description.description.length > 150
      ? node.description.description.substring(0, 150) + "..."
      : node.description.description
    : null

  // Find the first media item that is actually an image
  const imageItem = node.media?.find(m =>
    m.file?.contentType?.startsWith("image/")
  )

  // Resize image for Open Graph (1200x630 is standard)
  const image = imageItem?.file?.url
    ? `https:${imageItem.file.url}?w=1200&h=630&fit=fill`
    : null

  return (
    <Seo
      title={node.title}
      description={description}
      image={image}
      pathname={location.pathname}
    />
  )
}

export default PortfolioItemTemplate

export const query = graphql`
  query PortfolioItemBySlug($id: String!) {
    contentfulAliciaInterior(id: { eq: $id }) {
      title
      credits
      description {
        description
      }
      media {
        file {
          url
          contentType
        }
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    allContentfulOrden(sort: { createdAt: DESC }, limit: 1) {
      nodes {
        listado {
          ... on ContentfulAliciaInterior {
            id
            title
          }
        }
      }
    }
  }
`
