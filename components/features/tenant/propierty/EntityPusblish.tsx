"use client";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";

interface EntityPusblishProps {
  entityId: string;
}

export const EntityPusblish = ({ entityId }: EntityPusblishProps) => {
  const entity = useAppSelector((state) =>
    state.tenant.communityDetails.find((e) => e.id === entityId),
  );
  const tenantState = useAppSelector((state) => state.tenant);
  const userState = useAppSelector((state) => state.user);
  if (userState.role.jom.name !== "guide" && userState.role.jom.name !== "agent") return null;
  if (tenantState?.details?.subdomain.split(".")[0] !== "app") return null;

  return (
    <>
      <div className={"w-full flex items-center gap-3 mt-8"}>
        <Image
          src={entity?.theme.logotype.main ?? "/logotype.svg"}
          width={60}
          height={60}
          className={"md:block hidden"}
          alt="coin"
        />
        <span className={"font-galano text-sm"}>
          <strong>Publicado por:</strong> {entity?.name}
        </span>
      </div>
    </>
  );
};
