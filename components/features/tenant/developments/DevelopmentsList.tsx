import PropertyCard from "../PropertyCard";

export default function DevelopmentsList() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-16">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </>
  );
}
