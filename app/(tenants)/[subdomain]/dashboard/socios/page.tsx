import { Button } from "@/components/common/button";
import { Card, CardContent, CardFooter } from "@/components/common/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";

export default function Socios() {
  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Socios Comerciales</h1>
      <div className={"flex justify-end my-4"}>
        <Dialog>
          <DialogTrigger asChild>
            <Button className={"py-5 px-6"}>
              Agregar Socio{" "}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent
            className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
          >
            <DialogTitle className={"text-3xl text-center"}>
              Nuevo Socio Comercial
            </DialogTitle>
            <div className={"flex flex-col gap-1"}>
              <span className={"text-sm"}>Nombre</span>
              <Input
                placeholder={"Nombre"}
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
              />
            </div>
            <div className={"flex flex-col gap-1"}>
              <span className={"text-sm"}>Descripción</span>
              <Input
                placeholder={"Descripción"}
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
              />
            </div>
            <DialogFooter>
              <Button className={"py-6 w-full"}>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className={"grid grid-cols-3 3xl:gap-8 2xl:gap-6 md:gap-4"}>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6 pb-0"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Guía
              </span>
              <span className={"text-sm"}>Guía de Propiedad</span>
            </div>
          </CardContent>
        </Card>

        <Card className={"py-6"}>
          <CardContent className={"flex gap-6 pb-0"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Asesor Interno
              </span>
              <span className={"text-sm"}>Asesor Interno</span>
            </div>
          </CardContent>
        </Card>

        <Card className={"py-6"}>
          <CardContent className={"flex gap-6 pb-0"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Asesor Externo
              </span>
              <span className={"text-sm"}>Asesor Externo</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        className={
          "mt-8 grid grid-rows-2 grid-cols-3 3xl:gap-8 2xl:gap-6 md:gap-4 overflow-auto"
        }
      >
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} className={"py-6 w-full"}>
                  Editar
                </Button>
              </DialogTrigger>
              <DialogContent
                className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
              >
                <DialogTitle className={"text-3xl text-center"}>
                  Editar Socio Comercial
                </DialogTitle>
                <div className={"flex flex-col gap-1"}>
                  <span className={"text-sm"}>Nombre</span>
                  <Input
                    placeholder={"Nombre"}
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                  />
                </div>
                <div className={"flex flex-col gap-1"}>
                  <span className={"text-sm"}>Nombre</span>
                  <Input
                    placeholder={"Nombre"}
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                  />
                </div>
                <div className={"flex flex-col gap-1"}>
                  <span className={"text-sm"}>Descripción</span>
                  <Textarea
                    rows={4}
                    placeholder={"Descripción"}
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                  />
                </div>
                <DialogFooter>
                  <Button className={"py-6 w-full"}>Guardar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"destructive"} className={"py-6 w-full"}>
                  Eliminar
                </Button>
              </DialogTrigger>
              <DialogContent
                className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
              >
                <DialogTitle className={"text-4xl text-center"}>
                  Deseas eliminar este socio comercial?
                </DialogTitle>
                <DialogFooter className={"grid grid-cols-2 gap-4"}>
                  <Button className={"py-6 w-full"}>Si</Button>
                  <Button variant={"outline"} className={"py-6 w-full"}>
                    No
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
        <Card className={"py-6"}>
          <CardContent className={"flex gap-6"}>
            <Image
              src={"/jomLogo.png"}
              alt={"Propity logo"}
              width={75}
              height={75}
              className={"h-[75px] w-[75px] object-contain"}
            />
            <div className={"flex flex-col"}>
              <span className={"font-bold text-lg text-whiteGray leading-5"}>
                Marketing
              </span>
              <span className={"text-sm"}>
                Comisión para leads provenientes del departamento de Mkt.
              </span>
            </div>
          </CardContent>
          <CardFooter className={"flex flex-col gap-2"}>
            <Button variant={"outline"} className={"py-6 w-full"}>
              Editar
            </Button>
            <Button variant={"destructive"} className={"py-6 w-full"}>
              Eliminar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
