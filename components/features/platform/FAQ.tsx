import { CollapsibleWrap } from "@/components/features/tenant/profile/CollapsibleWrap";

interface Props {
  titleColor?: string;
  arrowColor?: string;
}

export default function FAQ({
  titleColor = "text-[#041E42]",
  arrowColor = "black",
}: Props) {
  return (
    <>
      <section
        className={
          "py-32 px-4 md:px-16 flex flex-col font-galano max-w-7xl mx-auto w-full"
        }
      >
        <h1 className={`text-4xl font-bold ${titleColor}`}>
          Preguntas frecuentes
        </h1>
        <CollapsibleWrap title={"¿Qué es Propity?"} arrowColor={arrowColor}>
          <p className="text-base font-galano py-3">
            Es una plataforma digital que equipa a desarrolladores e
            inmobiliarias con herramientas innovadoras para optimizar ventas y
            gestión de inventarios inmobiliarios.
          </p>
        </CollapsibleWrap>

        <CollapsibleWrap
          title={"¿Qué solución me ofrece Propity?"}
          arrowColor={arrowColor}
        >
          <p className="text-base font-galano py-3">
            Facilita la organización de inventarios, mejora las conexiones entre
            profesionales y aumenta la eficiencia en ventas dentro de una red
            colaborativa.
          </p>
        </CollapsibleWrap>

        <CollapsibleWrap
          title={"¿Cómo accedo a los inventarios de desarrolladores? "}
          arrowColor={arrowColor}
        >
          <p className="text-base font-galano py-3">
            De forma directa y transparente, solicita mediante la plataforma la
            autorización para comercializar el inventario. Conoce sus
            condiciones, y obtén con actualizaciones constantes compartidas por
            los mismos desarrolladores en su página dedicada.
          </p>
        </CollapsibleWrap>

        <CollapsibleWrap
          title={"¿Es seguro usar Propity?"}
          arrowColor={arrowColor}
        >
          <p className="text-base font-galano py-3">
            Absolutamente, implementamos sistemas avanzados de seguridad para
            proteger tus datos y garantizar la confianza.
          </p>
        </CollapsibleWrap>

        <CollapsibleWrap
          title={"¿Cómo empiezo a usar Propity? ?"}
          arrowColor={arrowColor}
        >
          <p className="text-base font-galano py-3">
            Es muy sencillo: Regístrate gratis, explora la oferta disponible,
            solicita una demostración y comienza a aprovechar todas nuestras
            herramientas.
          </p>
        </CollapsibleWrap>
      </section>
    </>
  );
}
