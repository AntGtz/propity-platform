import FAQ from "@/components/features/platform/FAQ";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";
import { Button } from "@/components/common/button";

export default function Contact() {
  return (
    <div className={"bg-[#041E42] text-white"}>
      <section
        className={
          "md:pt-32 md:pb-12 py-20 px-4 md:px-16 flex flex-col items-center justify-center font-galano text-white max-w-7xl mx-auto"
        }
      >
        <span className={"text-white"}>Contáctanos</span>
        <h1 className={"md:text-5xl text-3xl font-extrabold my-4 text-center"}>
          ¿Cómo podemos ayudarte?
        </h1>
        <div
          className={
            "w-full md:grid flex flex-col-reverse md:grid-cols-2 gap-6 mt-12"
          }
        >
          <div className={"flex flex-col items-center gap-4"}>
            <div
              className={
                "bg-white rounded-lg p-8 flex flex-col gap-4 text-[#262931]"
              }
            >
              <span className={"flex items-center gap-3 text-xl font-bold "}>
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.5H18C18.55 1.5 19 1.95 19 2.5V14.5C19 15.05 18.55 15.5 18 15.5H2C1.45 15.5 1 15.05 1 14.5V2.5C1 1.95 1.45 1.5 2 1.5Z"
                    stroke="#262931"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 3L10 8.5L19 3"
                    stroke="#262931"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contacta con Propity
              </span>
              <p>
                Ponte en contacto con nuestro equipo. Nos encantaría conocer más
                sobre ti.
              </p>
              <div className={"w-full h-px bg-gray-300 my-2"}></div>
              <ul className={"flex flex-col gap-3"}>
                <li className={"flex items-center gap-2"}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#041E42"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M13.668 6.58331L7.83464 12.4166L4.91797 9.49998"
                      stroke="#041E42"
                      strokeWidth="2.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Solicita una demostración
                </li>
                <li className={"flex items-center gap-2"}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#041E42"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M13.668 6.58331L7.83464 12.4166L4.91797 9.49998"
                      stroke="#041E42"
                      strokeWidth="2.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Descubre qué producto es el adecuado para ti
                </li>
                <li className={"flex items-center gap-2"}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#041E42"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M13.668 6.58331L7.83464 12.4166L4.91797 9.49998"
                      stroke="#041E42"
                      strokeWidth="2.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Obtén ayuda para la incorporación
                </li>
              </ul>
            </div>
            <div
              className={
                "bg-white rounded-lg p-8 flex flex-col gap-4 text-[#262931] w-full"
              }
            >
              <span className={"flex items-center gap-3 text-xl font-bold "}>
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.5H18C18.55 1.5 19 1.95 19 2.5V14.5C19 15.05 18.55 15.5 18 15.5H2C1.45 15.5 1 15.05 1 14.5V2.5C1 1.95 1.45 1.5 2 1.5Z"
                    stroke="#262931"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 3L10 8.5L19 3"
                    stroke="#262931"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contacta con Soporte
              </span>
              <p>¿Tiene problemas técnicos o preguntas sobre el producto?</p>
              <div className={"w-full h-px bg-gray-300 my-2"}></div>
              <ul className={"flex flex-col gap-3"}>
                <li className={"flex items-center gap-2"}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#041E42"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M13.668 6.58331L7.83464 12.4166L4.91797 9.49998"
                      stroke="#041E42"
                      strokeWidth="2.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Envíenos un correo electrónico a support@propity.com
                </li>
              </ul>
            </div>
          </div>
          <div className={"flex flex-col items-center gap-4"}>
            <div
              className={
                "bg-white rounded-lg p-8 flex flex-col gap-4 text-[#262931]"
              }
            >
              <span
                className={"text-2xl font-bold py-6 text-center block w-full"}
              >
                Dinos cómo podemos ayudarte
              </span>
              <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col gap-2 text-sm"}>
                  <span>Nombre y apellido</span>
                  <Input
                    className={"w-full [&]:py-6 [&]:rounded-md"}
                    placeholder={"Nombre y apellido"}
                  />
                </div>

                <div className={"flex flex-col gap-2 text-sm"}>
                  <span>Email</span>
                  <Input
                    className={"w-full [&]:py-6 [&]:rounded-md"}
                    placeholder={"Nombre y apellido"}
                  />
                </div>
                <div className={"flex flex-col gap-2 text-sm"}>
                  <span>Cómo te ayudamos?</span>
                  <Textarea
                    cols={30}
                    rows={5}
                    className={"w-full [&]:py-6 [&]:rounded-md"}
                    placeholder={"Nombre y apellido"}
                  />
                </div>
                <Button
                  size={"lg"}
                  variant={"propity"}
                  className={`mt-6 py-6 text-xl font-galano font-medium`}
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ titleColor={"text-white"} arrowColor={"white"} />
    </div>
  );
}
