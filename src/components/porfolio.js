import React from 'react';
import { Link } from "gatsby";
import { Card } from "../components/card"
import { slugify } from "../utils/slugify";

export const PortfolioAll = ({ edges }) => {
  
    const getTitleOpacity = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return "title-opacity";
      }
      return "";
    }
  
    const CardsItr = () => {
      return (
        edges.length > 0 ?
          edges.map(({ node }) => (
            <Link key={node.id} to={`/proyectos/${slugify(node.title)}`}>
              <Card
                title={<div className={getTitleOpacity()}>{node.title}</div>}
                coverImageData={node.media[0].gatsbyImageData}
              />
            </Link>
          ))
          :
          <h2 style={{ padding: '12px' }}>No encontramos lo que buscas</h2>
      );
    };
  
    return (
      <div className="portfolio-all">
        <CardsItr/>
      </div>
    )
  }