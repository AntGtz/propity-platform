import Image from "next/image";

export default function TenantProfile() {
  return (
    <div className={"flex gap-x-4"}>
      <Image
        src={"/profilePic.jpg"}
        quality={100}
        alt={"Foto de perfil"}
        width={120}
        height={120}
        className={"rounded-full object-cover h-[120px] object-center"}
      />
      <div className={"flex flex-col gap-y-1 font-galano"}>
        <h1 className={"text-2xl font-bold m-0"}>Reylan Lugo</h1>
        <span className={"font-semibold"}>donjuanjones</span>
        <span>Status</span>
        <p className={"text-sm text-gray-500"}>Desarrollador Web</p>
      </div>
    </div>
  );
}
