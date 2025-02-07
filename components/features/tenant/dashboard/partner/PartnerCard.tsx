"use client";
import { Button } from "@/components/common/button";
import { Card, CardContent, CardFooter } from "@/components/common/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";
import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  logo: string;
  name: string;
  description: string;
  onUpdate?: (id: string, description: string, name: string) => void;
  onDelete?: () => void;
};

export const PartnerCard: React.FC<Props> = ({
  id,
  logo,
  name,
  description,
  onUpdate,
  onDelete,
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [nameField, setNameField] = useState(name);
  const [descriptionField, setDescriptionField] = useState(description);

  return (
    <Card key={id} className={"py-6"}>
      <CardContent className={"flex gap-6 pb-0"}>
        <Image
          src={logo}
          alt={"Entity logo"}
          width={75}
          height={75}
          className={"h-[75px] w-[75px] object-contain"}
        />
        <div className={"flex flex-col"}>
          <span className={"font-bold text-lg text-whiteGray leading-5"}>
            {name}
          </span>
          <span className={"text-sm"}>{description}</span>
        </div>
      </CardContent>
      {(onUpdate || onDelete) && (
        <CardFooter className={"flex flex-col gap-2"}>
          {onUpdate && (
            <Dialog open={openEdit} onOpenChange={setOpenEdit}>
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
                    value={nameField}
                    onChange={(e) => setNameField(e.target.value)}
                    placeholder={"Nombre"}
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                    }
                  />
                </div>
                <div className={"flex flex-col gap-1"}>
                  <span className={"text-sm"}>Descripción</span>
                  <Textarea
                    value={descriptionField}
                    onChange={(e) => setDescriptionField(e.target.value)}
                    rows={4}
                    placeholder={"Descripción"}
                    className={
                      "w-full border-gray-400 [&]:rounded-sm [&]:py-3 focus:ring-0 focus-visible:ring-0"
                    }
                  />
                </div>
                <DialogFooter>
                  <Button onClick={() => {
                    setOpenEdit(false);
                    onUpdate(id, nameField, descriptionField);
                  }} className={"py-6 w-full"}>
                    Guardar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          {onDelete && (
            <Dialog open={openDelete} onOpenChange={setOpenDelete}>
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
                  <Button
                    onClick={() => {
                      setOpenDelete(false);
                      onDelete();
                    }}
                    className={"py-6 w-full"}
                  >
                    Si
                  </Button>
                  <Button variant={"outline"} className={"py-6 w-full"}>
                    No
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
