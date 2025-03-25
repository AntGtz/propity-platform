import PriceCard from "@/components/features/platform/PriceCard";
import { Checkbox } from "@/components/common/checkbox";
import FAQ from "../../../components/features/platform/FAQ";

export default function Plans() {
  return (
    <>
      <div className={"bg-gray-gradient"}>
        <section
          className={
            "md:pt-32 md:pb-40 py-20 px-4 md:px-16 flex flex-col items-center justify-center font-galano text-[#262931] max-w-7xl mx-auto "
          }
        >
          <span
            className={
              "md:text-5xl text-4xl text-[#041E42] font-bold mb-6 text-center md:w-10/12 leading-tight"
            }
          >
            Nuestros planes
          </span>
          <p className={"w-full text-center"}>
            Aumenta tu inventario, compartelo con la comunidad y vende más
            dándole a tu cliente lo que realmente necesita.
          </p>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mt-16 w-full items-center"
            }
          >
            <PriceCard
              title={"Starter"}
              price={"Próximamente"}
              features={[
                "Ve los inventarios de tus Desarrolladores",
                "Descubre nuevos desarrollos",
                "Organiza el inventario en tu aplicación",
                "1 Usuario",
              ]}
            />
            <PriceCard
              title={"Basico"}
              price={"Próximamente"}
              features={[
                "Ve los inventarios de tus Desarrolladores",
                "Descubre nuevos desarrollos",
                "Organiza el inventario en tu aplicación",
                "Hasta 5 asesores internos",
                "Landing Page Personalizada",
                "Sube hasta 100 propiedades de tu inventario",
              ]}
              promoted
            />
            <PriceCard
              title={"Pro"}
              price={"Próximamente"}
              features={[
                "Ve los inventarios de tus Desarrolladores",
                "Descubre nuevos desarrollos",
                "Organiza el inventario en tu aplicación",
                "Hasta 40 asesores internos",
                "Landing Page Personalizada",
                "Sube hasta 500 propiedades de tu inventario",
              ]}
            />
          </div>
        </section>
      </div>
      <div className={"bg-[#041E42] md:block hidden"}>
        <section
          className={"flex flex-col max-w-7xl mx-auto py-36 font-galano gap-2"}
        >
          <div
            className={
              "flex justify-end items-center gap-72 text-white font-galano"
            }
          >
            <span>Starter</span>
            <span>Emprendedor</span>
            <span>Empresarial</span>
          </div>
          <span
            className={
              "bg-gray-700 px-3 py-3 w-full text-2xl text-white font-bold"
            }
          >
            Caracteristicas
          </span>
          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Ve los inventarios de tus Desarrolladores</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>
          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Descubre nuevos desarrollos</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>
          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Organiza el inventario en tu aplicación</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>1 Usuario</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Hasta 5 asesores internos</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Hasta 40 asesores internos</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Landing Page Personalizada</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Sube hasta 100 propiedades de tu inventario</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>

          <div
            className={
              "border-b border-gray-500 w-full flex justify-between items-center py-3 text-white"
            }
          >
            <span>Sube hasta 500 propiedades de tu inventario</span>
            <div
              className={"flex items-center justify-end gap-[23rem] text-white"}
            >
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent"
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "bg-[#00B14040] py-3 px-3 h-auto w-auto border-transparent "
                  } style={{ pointerEvents: 'none' }}
                />
              </span>
              <span className={"flex justify-start w-full"}>
                <Checkbox
                  className={
                    "data-[state=checked]:text-[#041E42] data-[state=checked]:bg-[#00B140] py-1 px-1 h-auto w-auto"
                  }
                  checked
                />
              </span>
            </div>
          </div>
        </section>
      </div>
      <FAQ />
    </>
  );
}
