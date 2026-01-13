import React from 'react';
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { LogoBar } from "../components/logobar";
import { NavBar } from "../components/navbar";

const PortfolioItemTemplate = ({ data }) => {
  const node = data.contentfulAliciaInterior
  const edges = data.allContentfulOrden.nodes[0].listado

  const imageWidth = node.media.length === 4 ? '45%' : '30%';

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '0 !important', overflow: 'hidden' }}>
      <LogoBar />
      <NavBar activePage="proyectos" nodes={edges} />
      
      <div className="container text-center mt-2">
        <div style={{ marginTop: '2em' }}>
          <h1 style={{ fontSize: '34px' }}>{node.title}</h1>
          <p style={{ fontSize: '16px', padding: '0rem 2rem 0rem 2rem' }}>
            {node.description?.description}
          </p>
          {node.credits && (
            <p style={{ fontSize: '14px', fontWeight: 'lighter', padding: '0rem 2rem 0rem 2rem'}}>
              {node.credits}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4em' }}>
          {node.media.map((photo, index) => (
            photo.gatsbyImageData && (
              <GatsbyImage
                key={index}
                image={photo.gatsbyImageData}
                alt={node.title}
                placeholder="blurred"
                style={{ 
                  width: imageWidth,
                  margin: '0.5em',
                }}
                imgStyle={{ 
                  objectFit: 'cover', 
                }}
                className="responsive-image"
              />
            )
          ))}
        </div>
        <Link to="/" state={{ activeComponent: 'portfolio' }} className='back-btn mt-3' style={{ display: 'inline-block', marginBottom: '4em' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
            </svg>
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1000px) {
          .responsive-image {
            width: 100% !important;
          }
        }
      `}} />
    </div>
  )
}

export const Head = ({ data }) => {
  const node = data.contentfulAliciaInterior
  const description = node.description?.description 
    ? (node.description.description.length > 150 
        ? node.description.description.substring(0, 150) + "..." 
        : node.description.description)
    : null
  
  const image = node.media?.[0]?.file?.url ? `https:${node.media[0].file.url}` : null

  return (
    <Seo 
      title={node.title} 
      description={description}
      image={image}
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
        }
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    allContentfulOrden(sort: {createdAt: DESC}, limit: 1) {
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
