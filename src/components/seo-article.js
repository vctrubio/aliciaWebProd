import React from "react"
import { LogoBar } from "./logobar"
import { NavBar } from "./navbar"
import { Footer } from "./footer"
import "./seo-article.css"

export const SeoArticle = ({ title, intro, children }) => (
  <main className="seo-article-page">
    <LogoBar />
    <NavBar />
    <header className="seo-article-hero">
      <p>Guía de interiorismo · Madrid</p>
      <h1>{title}</h1>
      <div>{intro}</div>
    </header>
    <article className="seo-article-body">{children}</article>
    <Footer />
  </main>
)
