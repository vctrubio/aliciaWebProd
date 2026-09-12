import React from "react"
import Seo from "../components/seo"
import { SeoArticle } from "../components/seo-article"

const title = "Aviso legal | Alicia Agosti Interiorismo"
const description = "Aviso legal de Alicia Agosti Interiorismo."

const LegalNoticePage = () => <SeoArticle title="Aviso legal" intro="Información legal sobre Alicia Agosti Interiorismo y el uso de este sitio web.">
  <h2>1. Datos identificativos</h2>
  <p>En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa de que el presente sitio web www.aliciaagosti.com es titularidad de:</p>
  <p><strong>Nombre comercial:</strong> Alicia Agosti Interiorismo<br /><strong>NIF:</strong> 06618480T<br /><strong>Correo electrónico:</strong> <a href="mailto:estudio@aliciaagosti.com">estudio@aliciaagosti.com</a></p>
  <p>En adelante, “Alicia Agosti Interiorismo”.</p>
  <h2>2. Objeto</h2>
  <p>El presente sitio web tiene como finalidad ofrecer información sobre Alicia Agosti Interiorismo, sus proyectos, servicios de interiorismo, arquitectura interior, decoración y otros trabajos relacionados con el diseño de espacios, así como facilitar el contacto con potenciales clientes, colaboradores y otros usuarios interesados en sus servicios.</p>
  <p>El acceso y utilización de esta web atribuye la condición de usuario e implica la aceptación del presente Aviso Legal.</p>
  <h2>3. Propiedad intelectual e industrial</h2>
  <p>Todos los contenidos de este sitio web, incluyendo, entre otros, textos, fotografías, imágenes, proyectos, diseños, planos, renders, logotipos, identidad gráfica, vídeos y demás elementos, están protegidos por la normativa vigente en materia de propiedad intelectual e industrial.</p>
  <p>Salvo que se indique expresamente lo contrario, dichos contenidos son titularidad de Alicia Agosti Interiorismo o se dispone de las correspondientes autorizaciones para su utilización.</p>
  <p>Queda prohibida su reproducción, distribución, comunicación pública, transformación o utilización con fines comerciales sin autorización previa y expresa de su titular.</p>
  <p>La publicación de fotografías o imágenes de proyectos realizados por Alicia Agosti Interiorismo no implica la cesión de ningún derecho sobre los mismos.</p>
  <h2>4. Uso de la web</h2>
  <p>El usuario se compromete a utilizar este sitio web de forma lícita y de acuerdo con el presente Aviso Legal, absteniéndose de realizar cualquier actuación que pueda dañar, inutilizar, sobrecargar o deteriorar la web o impedir su normal funcionamiento.</p>
  <p>Alicia Agosti Interiorismo se reserva el derecho a modificar, actualizar o eliminar en cualquier momento y sin previo aviso los contenidos, servicios y elementos de este sitio web.</p>
  <h2>5. Responsabilidad</h2>
  <p>Alicia Agosti Interiorismo procura que la información publicada en la web sea correcta y se encuentre actualizada, pero no garantiza la inexistencia de errores u omisiones.</p>
  <p>Los contenidos de la web tienen carácter principalmente informativo y no constituyen por sí mismos una oferta contractual ni sustituyen la información, propuesta económica o documentación específica que pueda facilitarse para cada proyecto.</p>
  <p>Alicia Agosti Interiorismo no será responsable de los daños que pudieran derivarse de interferencias, interrupciones, virus informáticos, averías o desconexiones motivadas por causas ajenas a su control.</p>
  <h2>6. Enlaces externos</h2>
  <p>Este sitio web puede contener enlaces a páginas o servicios de terceros. Alicia Agosti Interiorismo no controla dichos sitios y no se responsabiliza de sus contenidos, funcionamiento, disponibilidad o políticas de privacidad.</p>
  <p>La inclusión de estos enlaces no implica necesariamente relación, recomendación o aprobación de los contenidos o servicios ofrecidos por dichos terceros.</p>
  <h2>7. Protección de datos</h2>
  <p>El tratamiento de los datos personales de los usuarios se regirá por lo dispuesto en la <a href="/politica-de-privacidad/">Política de Privacidad</a> de este sitio web.</p>
  <p>En caso de utilizarse cookies u otras tecnologías similares, su utilización se regulará mediante la correspondiente Política de Cookies.</p>
  <h2>8. Legislación aplicable</h2>
  <p>El presente Aviso Legal se rige por la legislación española.</p>
  <p>Para cualquier controversia relacionada con el presente sitio web serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable.</p>
  <p><strong>Última actualización:</strong> septiembre de 2026.</p>
</SeoArticle>

export const Head = () => <Seo title={title} description={description} pathname="/aviso-legal" />
export default LegalNoticePage
