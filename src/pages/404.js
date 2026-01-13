import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { LogoBar } from "../components/logobar"
import "../components/layout_customs.css"

const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <LogoBar />
        <div style={{ marginTop: "4rem", padding: "0 20px" }}>
          <h1 style={{ marginBottom: "1rem" }}>Alicia Agosti Interiorismo</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Esta proyecto no lo encontramos...
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/"
              className="back-btn"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "fit-content",
                padding: "10px 20px",
              }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      <footer
        style={{
          margin: `2rem auto`,
          fontSize: `0.8rem`,
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com" style={{ color: "inherit" }}>
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
