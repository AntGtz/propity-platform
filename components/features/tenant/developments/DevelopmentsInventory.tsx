"use client";
import { useDevelopmentContext } from "@/components/features/tenant/developments/DevelopmentsContext";
import PropertyCard2 from "@/components/features/tenant/PropertyCard2";
import { DevelopmentsPagination } from "@/components/features/tenant/developments/DevelopmentsPagination";
import { useState } from "react";

export default function DevelopmentsInventory() {
  const { developmentsList } = useDevelopmentContext();
  const [page, setPage] = useState(1);

  const numberOfPropertiesForPage = 12;
  const totalPages = Math.ceil(
    developmentsList.length / numberOfPropertiesForPage,
  );
  const startIndex = (page - 1) * numberOfPropertiesForPage;
  const endIndex = startIndex + numberOfPropertiesForPage;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {developmentsList.slice(startIndex, endIndex).map((development) => (
          <PropertyCard2
            key={development.id}
            entityId={development.id}
            withPropertyRedirect={false}
            logo={development.theme.logotype.main}
            name={development.name}
            price={development.properties?.reduce((acc, property) => {
              if (acc === 0) return property.operations[0].price;
              return acc > property.operations[0].price
                ? property.operations[0].price
                : acc;
            }, 0)}
            address={development.location?.address}
            description={development.description}
            image={
              development.properties?.[development.properties.length - 1]
                ?.images[0].thumbnail
            }
          />
        ))}
      </div>
      <DevelopmentsPagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}
