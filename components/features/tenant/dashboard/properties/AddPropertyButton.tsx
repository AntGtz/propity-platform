"use client";
import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/common/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { setPropertyTabSelected } from "@/lib/store/features/dashboard/dashboardSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useState } from "react";

export const AddPropertyButton = () => {
  const [fileDialogOpen, setFileDialogOpen] = useState(false);
  const dispatch = useAppDispatch();

  // Eliminar la modificación manual de estilos del body
  const handleDialogChange = (open: boolean) => {
    setFileDialogOpen(open);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={"py-5 px-6 bg-[#131E29] text-white"}>
            Añadir Propiedad
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 font-galano">
          <DropdownMenuItem onClick={() => setFileDialogOpen(true)}>
            <span>Subir por Archivo</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setPropertyTabSelected("form"))}>
            <span>Subir una Propiedad</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Dialog modal open={fileDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent aria-describedby="file-dialog-description" className="font-galano">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <h1 className="text-3xl font-bold text-center mt-6">
            Añadir Propiedades
          </h1>
          <input
            className="text-sm border-b border-gray-400 pb-4"
            type="file"
          />
          <Button className={"py-6 w-full bg-[#131E29] text-white"}>
            Agregar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};