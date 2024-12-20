"use client";

import { InventoryCard } from "@/components/features/tenant/inventory/InventoryCard";
import { PropertyData } from "@/type/tenantData";
import { useInventoryContext } from "@/components/features/tenant/inventory/InventoryContext";
import Link from "next/link";

export const InventoryList = () => {
  const { propertiesList, entity } = useInventoryContext();

  return (
    <>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6 mt-4"
        }
      >
        {propertiesList.map((property: PropertyData) => (
          <Link
            key={property.id}
            href={"/propiedad/" + entity?.id + "/" + property.id}
          >
            <InventoryCard
              image={property.images[0].thumbnail}
              address={property.location!.address}
              price={property.operations[0]!.price}
              comision={property.operations[0].commission}
              rooms={property.rooms!}
              bathrooms={property.bathrooms!}
              phone={property.owner.phone}
              facebook={entity?.contact?.facebook}
              instagram={entity?.contact?.instagram}
              totalSpace={property.surface.total}
              totalBuiltSpace={property.surface.built}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
