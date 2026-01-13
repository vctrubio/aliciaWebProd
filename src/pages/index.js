import React, { useState, useEffect } from 'react';
import { graphql } from "gatsby";
import Seo from "../components/seo"
import "../components/layout_customs.css"
import { LogoBar } from "../components/logobar";
import { Info } from "../components/info";
import { Banner } from "../components/banner";
import { SlideSwiper } from "../components/slideSwiper"
import { PortfolioAll } from '../components/porfolio';
import { NavBar } from '../components/navbar';

const IndexPage = ({ data, location }) => {
  const [activeComponent, setActiveComponent] = useState("banner");

  useEffect(() => {
    if (location.state && location.state.activeComponent) {
      setActiveComponent(location.state.activeComponent);
    }
  }, [location.state]);

  // Get the ordered list from the first (most recent) Orden entry
  const edges = data.allContentfulOrden.nodes[0].listado.map(item => ({ node: item }));
  const imgs = data.allContentfulAliHome.nodes.flatMap(node =>
    node.fotos
  );

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '0 !important', overflow: 'hidden' }}>
      <LogoBar setActiveComponent={setActiveComponent} />
      <NavBar setActiveComponent={setActiveComponent} nodes={edges.map(e => e.node)} />
      {activeComponent === "banner" && (
        <>
          <SlideSwiper imgs={imgs} />
          <Banner />
        </>
      )}
      {activeComponent === "portfolio" && <PortfolioAll edges={edges} />}
      {activeComponent === "info" && <Info />}
    </div>
  )
}

export const Head = () => <Seo title="Alicia Agosti Interiorismo" />
export default IndexPage

export const query = graphql`
query MyQuery {
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
