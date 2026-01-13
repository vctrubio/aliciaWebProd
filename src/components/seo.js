/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

function Seo({ description, title, image, pathname, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl
  const seoUrl = pathname ? `${siteUrl}${pathname}` : siteUrl
  // Use provided image or fallback to generated icon
  const metaImage = image || `${siteUrl}/icons/icon-512x512.png`;

  const keywords = [
    "Interiorismo",
    "Arquitectura de interiores",
    "Reformas",
    "Decoracion",
    "Arquitectura",
    "Reacondicionamiento",
    "Restauracion",
    "Diseño",
    "Diseño de interiores",
    "Diseño de vivienda",
    "Diseño de restaurantes",
    "Diseño de contract",
    "Interiorismo de viviendas",
    "Estudio de interiorismo",
    "Alicia Agosti"
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Person",
          "url": "${siteUrl}",
          "name": "Alicia Agosti Interiorismo",
          "contactPoint": {
            "@type": "Alicia Agosti",
            "telephone": "+34 686 516 248",
            "contactType": "CEO"
          }
        }
      `}
      </script>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="subject" content="Interiorismo y Arquitectura de Interiores" />
      <meta name="topic" content="Diseño de Interiores y Reformas" />
      <meta name="category" content="Hogar y Decoración" />
      <meta name="coverage" content="Madrid" />
      <meta name="abstract" content="Estudio de interiorismo y arquitectura de interiores." />
      <meta name="author" content="Alicia Agosti" />
      <meta property="image" content={metaImage} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  )
}
