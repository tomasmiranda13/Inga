import React from "react";
import "./styles/proposal.css";

export default function Proposal() {
  return (
    <div className="proposal-wrapper">
      <h2>Preparacion hasta conseguir plaza</h2>
      <p>
        Con más de una década de experiencia en la formación de higienistas
        dentales, nos especializamos en preparar oposiciones y ofrecer formación
        práctica adaptada a las funciones en la administración y sanidad
        públicas. Nuestras sesiones presenciales optativas enriquecen el
        aprendizaje y potencian tus habilidades profesionales. Únete a nosotros
        y prepárate para enfrentar los desafíos del sector con confianza. ¡Lleva
        tu carrera al siguiente nivel!
      </p>
      <div className="section-value-wrapper">
        <div className="value-proposal">
          <h3>Propuesta de Formación</h3>
          <ul>
            <h5>Temario Completo y Actualizado</h5>
            <li>
              Formato PDF: Recibe el temario completo y actualizado en PDF.
            </li>
          </ul>
          <ul>
            <h5>Examenes y simulacros</h5>
            <li>
              Exámenes Anteriores: Análisis y respuestas de exámenes previos.
            </li>
            <li>
              Simulacros: Participa en simulacros con corrección conjunta por
              tutores.
            </li>
          </ul>
          <ul>
            <h5>Soporte y Resolución de Dudas</h5>
            <li>
              Dudas Presenciales y Online: Acceso a ayuda presencial y online.
            </li>
            <li>
              Foros de Discusión: Intercambia ideas en foros online y
              presenciales.
            </li>
          </ul>
          <ul>
            <h5>Enfoque Educativo Dinámico</h5>
            <li>
              Ambiente Participativo: Proceso educativo relajado y basado en
              feedback.
            </li>
            <li>Audiotemas y Videos: Material de apoyo en audio y video.</li>
          </ul>
          <ul>
            <h5>Planificación y Estructura</h5>
            <li>
              Temario Semanal: Estudio estructurado por semana con
              autoevaluaciones.
            </li>
            <li>
              Tutorías Personalizadas: Tutorías adaptadas a tus necesidades.
            </li>
          </ul>
        </div>
        <div className="call-to-action-wrapper">
          <h4>
            Únete a Nuestro Curso y aprovecha estos recursos para prepararte con
            confianza y llevar tu carrera al siguiente nivel. ¡Te esperamos!
          </h4>
          <button> Contactanos</button>
        </div>
      </div>
      <div className="bar-close"></div>
    </div>
  );
}
