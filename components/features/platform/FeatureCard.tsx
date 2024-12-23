import Image from "next/image";

type FeatureCardProps = {
  index: number;
  title: string;
  description: string;
  image: string;
};

export default function FeatureCard({
  index,
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div
      className={
        "px-10 py-12 bg-white-to-green-gradient-bottom rounded flex flex-col gap-1"
      }
    >
      <span
        className={
          "rounded-full bg-white w-16 h-16 flex items-center justify-center text-[#00B140] text-4xl font-bold"
        }
      >
        {index}
      </span>
      <h3 className={"font-bold text-xl my-3"}>{title}</h3>
      <p>{description}</p>
      <Image
        src={image}
        alt={"Propity demo image"}
        width={400}
        height={400}
        className={"rounded-lg mt-6"}
      />
    </div>
  );
}
