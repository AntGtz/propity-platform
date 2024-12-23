"use client";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import { titleCase } from "@/utils";

export default function TenantProfile({ id }: { id: string }) {
  const comunnity = useAppSelector((state) => state.tenant.communityDetails);
  const entity = comunnity?.filter((community) => community.id === id)[0];

  return (
    <div className={"flex items-center gap-x-4"}>
      <Image
        src={entity?.theme.logotype.main ?? "/profilePic.jpg"}
        quality={100}
        alt={"Foto de perfil"}
        width={120}
        height={120}
        className={"object-contain h-[120px]"}
      />
      <div className={"flex flex-col gap-y-1 font-galano"}>
        <h1 className={"text-2xl font-bold m-0"}>
          {entity?.name ?? "donjuanjones"}
        </h1>
        <span className={"font-semibold"}>
          {entity?.contact?.email ?? "donjuanjones@gmail.com"}
        </span>
        {/*<span>Status</span>*/}
        <p className={"text-sm text-gray-500"}>
          {titleCase(entity?.type.display)}
        </p>
      </div>
    </div>
  );
}
