import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { SeoArticle } from "../components/seo-article"

const articles = [
  { href: "/diseno-de-mobiliario-en-madrid/", image: "/blog/diseno-de-mobiliario-en-madrid.jpeg", alt: "Diseño de mobiliario en Madrid con piezas a medida proyectadas para el salón de una vivienda.", title: "Diseño de mobiliario en Madrid", excerpt: "Piezas a medida proyectadas desde el espacio, el uso real y los materiales que acompañan cada proyecto." },
  { href: "/rehabilitacion-de-espacios-en-madrid/", image: "/blog/rehabilitacion-de-espacios-en-madrid.jpeg", alt: "Rehabilitación de espacios en Madrid con nueva distribución interior en una vivienda reformada.", title: "Rehabilitación de espacios en Madrid", excerpt: "Cómo recuperar viviendas y locales con más luz, orden, funcionalidad y carácter." },
]

const BlogPage = () => <SeoArticle title="Blog" intro="Ideas, procesos y casos para entender mejor el interiorismo, el mobiliario a medida y la rehabilitación de espacios.">
  <div className="seo-blog-grid">
    {articles.map(article => <Link className="seo-blog-card" to={article.href} key={article.href}>
      <img src={article.image} alt={article.alt} loading="lazy" />
      <div><p>Interiorismo en Madrid</p><h2>{article.title}</h2><span>{article.excerpt}</span><strong>Leer artículo ↗</strong></div>
    </Link>)}
  </div>
</SeoArticle>

export const Head = () => <Seo title="Blog | Alicia Agosti Interiorismo" description="Artículos de Alicia Agosti Interiorismo sobre mobiliario a medida y rehabilitación de espacios en Madrid." pathname="/blog" />
export default BlogPage
