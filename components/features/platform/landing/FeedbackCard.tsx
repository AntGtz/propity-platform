import Image from "next/image";

interface FeedbackCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function FeedbackCard({
  title,
  subtitle,
  description,
  image,
}: FeedbackCardProps) {
  return (
    <>
      <div
        className={
          "rounded-lg bg-white px-12 py-10 flex flex-col justify-between font-galano gap-5 h-full relative"
        }
      >
        <div className={"flex flex-col gap-5"}>
          <Image
            src={image}
            alt={"Propity Icon"}
            width={70}
            height={70}
            className={"-mr-2 -ml-3 rounded-full"}
          />
          <svg
            width="39"
            height="27"
            viewBox="0 0 39 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1875 -1.47067e-06L7.3125 9.81818L17.0625 9.81818L17.0625 27L3.8147e-06 27L2.31261e-06 9.81818L4.875 -8.31395e-07L12.1875 -1.47067e-06ZM34.125 -3.38851e-06L29.25 9.81818L39 9.81818L39 27L21.9375 27L21.9375 9.81818L26.8125 -2.74923e-06L34.125 -3.38851e-06Z"
              fill="#00B140"
            />
          </svg>

          <p className={"text-[#262931] font- text-sm"}>{description}</p>
        </div>
        <div className={"flex flex-col mt-16"}>
          <h1 className={"text-xl text-[#00B140] font-bold"}>{title}</h1>
          <span className={"text-sm"}>{subtitle}</span>
        </div>
      </div>
    </>
  );
}
