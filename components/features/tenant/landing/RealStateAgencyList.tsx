import PropertyCard from "../PropertyCard";

export default function RealStateAgencyList() {
  return (
    <section className="flex flex-col gap-2 3xl:px-64 xl:px-24 2xl:px-32 py-16 bg-white">
      <h1 className="text-4xl font-jakarta font-bold">Inmobiliarias</h1>
      <div className="flex gap-5 mt-6">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}
