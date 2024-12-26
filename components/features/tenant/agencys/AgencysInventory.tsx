"use client";
import PropertyCard2 from "@/components/features/tenant/PropertyCard2";
import { useState } from "react";
import { useAgencysContext } from "@/components/features/tenant/agencys/AgencysContext";
import { AgencysPagination } from "@/components/features/tenant/agencys/AgencysPagination";

export default function AgencysInventory() {
  const { agencysList } = useAgencysContext();
  const [page, setPage] = useState(1);

  const numberOfPropertiesForPage = 12;
  const totalPages = Math.ceil(agencysList.length / numberOfPropertiesForPage);
  const startIndex = (page - 1) * numberOfPropertiesForPage;
  const endIndex = startIndex + numberOfPropertiesForPage;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {agencysList.slice(startIndex, endIndex).map((agency) => (
          <PropertyCard2
            key={agency.id}
            id={agency.id}
            logo={agency.theme.logotype.main}
            name={agency.name}
            price={agency.properties?.reduce((acc, property) => {
              if (acc === 0) return property.operations[0].price;
              return acc > property.operations[0].price
                ? property.operations[0].price
                : acc;
            }, 0)}
            address={agency.location?.address}
            description={agency.description}
            image={
              agency.properties?.[agency.properties.length - 1]?.images[0]
                .thumbnail
            }
          />
        ))}
      </div>
      <AgencysPagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}
