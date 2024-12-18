import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import { InventoryList } from "@/components/features/tenant/inventory/InventoryList";
import { InventoryProvider } from "@/components/features/tenant/inventory/InventoryContext";
import { LocationInput } from "@/components/features/tenant/inventory/Filters/LocationInput";

interface InventarioPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function InventarioPage({ params }: InventarioPageProps) {
  const paramsPage = await params;
  return (
    <section
      className={"max-w-6xl mx-auto px-4 py-10 md:py-14 lg:px-8 font-galano"}
    >
      <InventoryProvider id={paramsPage.id}>
        <div className={"flex items-center gap-3 w-full"}>
          <LocationInput />
        </div>
        <div className={"w-full flex items-center gap-3 mt-4"}>
          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Precio</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Tipo de operación</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Tipo de propiedad</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Superficie</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Habitaciones</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Baños</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className={
                "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
              }
            >
              <span className={"text-sm mr-2"}>Mas filtros</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"a"}>Seleccionar</SelectItem>
              <SelectItem value={"b"}>Seleccionar</SelectItem>
              <SelectItem value={"c"}>Seleccionar</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <InventoryList />
      </InventoryProvider>
    </section>
  );
}
