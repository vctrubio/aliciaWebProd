import React from "react"
import { Link } from "gatsby"
import SVG from "react-inlinesvg"
import whatsappSVG from "../svgs/whatsapp-black.svg"
import phoneSVG from "../svgs/phone-black.svg"
import mailSVG from "../svgs/mail-black.svg"
import instagramSVG from "../svgs/insta-black.svg"
import logo from "../images/logoAA.webp"
import "./footer.css"

export const Footer = () => (
  <footer className="site-footer">
    <Link className="site-footer-logo" to="/" aria-label="Alicia Agosti Interiorismo, inicio">
      <img src={logo} alt="Alicia Agosti Interiorismo" />
    </Link>
    <nav className="site-footer-links" aria-label="Información legal">
      <Link to="/aviso-legal/">Aviso legal</Link>
      <Link to="/politica-de-privacidad/">Políticas</Link>
      <Link to="/blog/">Blog</Link>
    </nav>
    <div className="site-footer-social">
      <a href="https://wa.me/+34630199112" aria-label="WhatsApp"><SVG src={whatsappSVG} className="svg-icon" /></a>
      <a href="tel:+34630199112" aria-label="Llamar por teléfono"><SVG src={phoneSVG} className="svg-icon" /></a>
      <a href="https://www.instagram.com/alicia.agosti.interiorismo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SVG src={instagramSVG} className="svg-icon" /></a>
      <a href="mailto:estudio@aliciaagosti.com" aria-label="Enviar un correo electrónico"><SVG src={mailSVG} className="svg-icon" /></a>
    </div>
  </footer>
)
