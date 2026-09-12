/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, image, pathname, type = "website", children }) {
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
  const metaImage = image || `${siteUrl}/icons/icon-512x512.png`

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
    "Alicia Agosti",
  ]

  return (
    <>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Alicia Agosti Interiorismo",
        url: siteUrl,
        telephone: "+34 630 19 91 12",
        email: "estudio@aliciaagosti.com",
        areaServed: { "@type": "City", name: "Madrid" },
        sameAs: ["https://www.instagram.com/alicia.agosti.interiorismo/", "https://share.google/uJUeKUOALUmQnyNya"],
        knowsAbout: ["Interiorismo", "Arquitectura de interiores", "Diseño de mobiliario", "Rehabilitación de espacios"],
      })}</script>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="subject"
        content="Interiorismo y Arquitectura de Interiores"
      />
      <meta name="topic" content="Diseño de Interiores y Reformas" />
      <meta name="category" content="Hogar y Decoración" />
      <meta name="coverage" content="Madrid" />
      <meta
        name="abstract"
        content="Estudio de interiorismo y arquitectura de interiores."
      />
      <meta name="author" content="Alicia Agosti" />
      <meta property="image" content={metaImage} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
