import PropertyCard from "../PropertyCard";

export default function DevelopmentsList() {
  return (
    <section className="flex flex-col gap-2 3xl:px-64 xl:px-24 2xl:px-32 py-44 bg-white">
      <h1 className="text-4xl font-jakarta font-bold">Desarrollos</h1>
      <div className="flex gap-5 mt-6">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}
