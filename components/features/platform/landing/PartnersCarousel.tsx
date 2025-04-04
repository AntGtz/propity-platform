import Image from "next/image";

export default function PartnersCarousel() {
  return (
    <>
      <div
        className={
          "w-full max-w-7xl mx-auto px-4 md:px-0 flex items-center gap-4 md:gap-12 justify-center pt-4 md:pb-12 overflow-hidden"
        }
      >
        <Image
          src={"/partners/jom.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/habi.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/jom.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/habi.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/jom.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/habi.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/jom.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
        <Image
          src={"/partners/habi.png"}
          alt="JomLogo"
          width={110}
          height={50}
        />
      </div>
    </>
  );
}
