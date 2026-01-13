import React from 'react';
import { graphql } from "gatsby";
import Seo from "../components/seo"
import "../components/layout_customs.css"
import { LogoBar } from "../components/logobar";
import { PortfolioAll } from '../components/porfolio';
import { NavBar } from '../components/navbar';

const ProyectosPage = ({ data }) => {
  // Get the ordered list from the first (most recent) Orden entry
  const edges = data.allContentfulOrden.nodes[0].listado.map(item => ({ node: item }));
  const allNodes = data.allContentfulAliciaInterior.nodes;

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '0 !important', overflow: 'hidden' }}>
      <LogoBar />
      <NavBar activePage="proyectos" nodes={allNodes} />
      <div className="fade-in-load">
        <PortfolioAll edges={edges} />
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Alicia Agosti | Proyectos" />
export default ProyectosPage

export const query = graphql`
query ProyectosQuery {
  allContentfulAliciaInterior {
    nodes {
      id
      title
    }
  }
  allContentfulOrden(sort: {createdAt: DESC}, limit: 1) {
    nodes {
      listado {
        ... on ContentfulAliciaInterior {
          id
          title
          media {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
}
`
