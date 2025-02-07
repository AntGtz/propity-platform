import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Input } from "@/components/common/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/select";
import Image from "next/image";

export const NewPropertyForm = () => {
  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Nueva Propiedad</h1>
      <div className={"flex flex-col gap-12 w-full my-4"}>
        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <div className="flex items-center gap-2">
            <span>Guia</span>
            <div className="h-px w-12 bg-gray-400"></div>
            <span>Yo</span>
          </div>
          <h2 className="font-medium mt-4">Propietario</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nombre</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nombre</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nombre</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nombre</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Datos de la propiedad</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Nombre</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Descripción</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Tipo de Propiedad</label>
                <Select>
                  <SelectTrigger
                    className={
                      "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-full"
                    }
                  >
                    <span className={"text-sm"}>Casa</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"house"}>Casa</SelectItem>
                    <SelectItem value={"apartment"}>Departamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Antiguedad</label>
                <Select>
                  <SelectTrigger
                    className={
                      "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-full"
                    }
                  >
                    <span className={"text-sm"}>1 año</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"1"}>1 año</SelectItem>
                    <SelectItem value={"2"}>2 años</SelectItem>
                    <SelectItem value={"3"}>3 años</SelectItem>
                    <SelectItem value={"4"}>4 años</SelectItem>
                    <SelectItem value={"5"}>5 años</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <h2 className="font-medium mt-8">Ubicación</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="w-full grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Codigo Postal</label>
                  <Input
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                    placeholder={"Nombre"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Pais</label>
                  <Select>
                    <SelectTrigger
                      className={
                        "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-full"
                      }
                    >
                      <span className={"text-sm"}>Mexico</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Mexico"}>Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Estado</label>
                  <Select>
                    <SelectTrigger
                      className={
                        "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-full"
                      }
                    >
                      <span className={"text-sm"}>Mexico</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Mexico"}>Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Municipio</label>
                  <Select>
                    <SelectTrigger
                      className={
                        "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-full"
                      }
                    >
                      <span className={"text-sm"}>Mexico</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Mexico"}>Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">Colonia</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Calle</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">#Ext.</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">#Int.</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"Nombre"}
                />
              </div>
              <iframe
                className="col-span-2 h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.7586835821686!2d-64.68265810000003!3d10.177832100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d73249d21cf1f%3A0x51ee0dfd1fc90c31!2sKiwi%20Company!5e0!3m2!1sen!2sus!4v1730507885321!5m2!1sen!2sus"
                style={{ border: 0, width: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Información Comercial</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Selecciona una operacion</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Selecciona una operacion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Precio</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"$0.00"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Mantenimiento</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"$0.00"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Comision Pactada %</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"%0.00"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Espacios</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Recamaras</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Recamaras" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Baños</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Baños" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Pisos</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Pisos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">1/2 Baño</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Pisos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Estacionamiento</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Estacionamiento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Vestidor</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0">
                    <SelectValue placeholder="Vestidor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Venta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Características Técnicas</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Terreno m2</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"0.00"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Construcción m2</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"0.00"}
                />
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Material de Construcción</label>
                  <Input
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                    placeholder={"$0.00"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Tipo de Gas</label>
                  <Input
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                    placeholder={"$0.00"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Sistema Hidráulico</label>
                  <Input
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                    placeholder={"$0.00"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Capacidad de aljibe</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"0.00"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Capacidad tinaco</label>
                <Input
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                  placeholder={"0.00"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Información del Edificio</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-4 gap-8">
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Elevador</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Alberca</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">GYM</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Gas Estacionario</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Área para niños</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Asador</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Terraza</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Seguridad 24 horas</label>
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Información del Entorno</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="w-full grid grid-cols-4 gap-8">
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Área verde</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">Dentro de privada</label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox />
                <label className="text-sm">En esquina</label>
              </div>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 border border-gray-200 rounded-md">
          <h2 className="font-medium mt-4">Galería de Imágenes</h2>

          <div className="flex flex-col w-full mt-4">
            <div className="flex justify-end gap-4">
              <Button variant={"ghost"}>Reordenar</Button>
              <Button className={"py-5 px-6 bg-[#131E29]"}>
                Agregar{" "}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="w-full grid grid-cols-3 gap-8 overflow-y-auto max-h-[58rem] my-8">
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
              <div className="relative h-72">
                <Image
                  className="rounded-xl"
                  src={"/propertyPrincipal.jpg"}
                  alt={"Propity demo image"}
                  fill
                />
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="flex justify-end gap-4">
              <Button className={"py-5 px-6"} variant={"outline"}>
                Cancelar
              </Button>
              <Button className={"py-5 px-6 bg-[#131E29]"}>
                Crear propiedad
              </Button>
            </div>
      </div>
    </section>
  );
};
