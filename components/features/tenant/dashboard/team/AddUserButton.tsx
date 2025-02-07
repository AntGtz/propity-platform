import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Input } from "@/components/common/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";

export const AddUserButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={"py-5 px-6"}>
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
      </DialogTrigger>
      <DialogContent
        className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
      >
        <DialogTitle className={"text-3xl text-center"}>
          Agregar Usuario
        </DialogTitle>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Correo</span>
          <Input
            placeholder={"user@example.com"}
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Rol de usuario</span>
          <Select>
            <SelectTrigger
              className={
                "border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
            >
              <span className={"text-sm"}>Desarrollador</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Desarrollador"}>Desarrollador</SelectItem>
              <SelectItem value={"Propietario"}>Propietario</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button className={"py-6 w-full"}>Agregar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
