"use client";

import { InventoryCard } from "@/components/features/tenant/inventory/InventoryCard";
import { PropertyData } from "@/type/tenantData";
import { useInventoryContext } from "@/components/features/tenant/inventory/InventoryContext";
import PropertyCard2 from "@/components/features/tenant/PropertyCard2";
import { useState } from "react";
import { InventoryPagination } from "@/components/features/tenant/inventory/InventoryPagination";
import { useAppSelector } from "@/lib/store/hooks";

interface InventoryListProps {
  gridCols?: number;
  cardType?: "inventory" | "property";
  pageSize?: number;
}

export const InventoryList = ({
  gridCols = 2,
  cardType = "inventory",
  pageSize = 12,
}: InventoryListProps) => {
  const { propertiesList } = useInventoryContext();

  const Card = cardType === "inventory" ? InventoryCard : PropertyCard2;
  const [page, setPage] = useState(1);

  const numberOfPropertiesForPage = pageSize;
  const totalPages = Math.ceil(
    propertiesList.length / numberOfPropertiesForPage,
  );
  const startIndex = (page - 1) * numberOfPropertiesForPage;
  const endIndex = startIndex + numberOfPropertiesForPage;

  const community = useAppSelector((state) => state.tenant.communityDetails);

  return (
    <>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-${gridCols} gap-y-12 gap-x-6 mt-4`}
      >
        {propertiesList
          .slice(startIndex, endIndex)
          .map((property: PropertyData) => {
            const entitySelected = community.find(
              (community) => community.id === property.entity.id,
            );

            return (
              <Card
                key={property.id}
                entityId={property.entity.id}
                propertyId={property.id.toString() as string}
                image={property.images[0].thumbnail}
                address={property.location!.address}
                price={property.operations[0]!.price}
                comision={property.operations[0].commission}
                rooms={property.rooms!}
                bathrooms={property.bathrooms!}
                phone={property.owner.phone}
                facebook={entitySelected?.contact?.facebook}
                instagram={entitySelected?.contact?.instagram}
                totalSpace={property.surface.total}
                totalBuiltSpace={property.surface.built}
                logo={property.theme.icon}
                name={property.entity.name}
                description={property.description}
              />
            );
          })}
      </div>
      <InventoryPagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
};
