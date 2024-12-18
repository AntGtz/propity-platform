"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { InventoryCard } from "@/components/features/tenant/inventory/InventoryCard";
import { PropertyData } from "@/type/tenantData";

interface InventoryListProps {
  id: string;
}

export const InventoryList = ({ id }: InventoryListProps) => {
  const community = useAppSelector((state) => state.tenant.communityDetails);
  const entity = community?.filter((community) => community.id === id)[0];

  return (
    <>
      <div className={"w-full grid grid-cols-2 gap-y-12 gap-x-6 mt-4"}>
        {entity?.properties?.map((property: PropertyData) => (
          <InventoryCard
            key={property.id}
            image={property.images[0].thumbnail}
            address={property.location!.address}
            price={property.operations[0]!.price}
            comision={property.operations[0].commission}
            rooms={property.rooms!}
            bathrooms={property.bathrooms!}
            phone={property.owner.phone}
            facebook={entity.contact?.facebook}
            instagram={entity.contact?.instagram}
            totalSpace={property.surface.total}
            totalBuiltSpace={property.surface.built}
          />
        ))}
      </div>
    </>
  );
};
