"use client";
import { useEffect } from "react";
import { PartnerCard } from "./PartnerCard";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setPartnersList } from "@/lib/store/features/dashboard/dashboardSlice";
import { deletePartner, fetchPartners, updatePartner } from "./actions";
import { PartnerData } from "@/type/dashboard";
import { toast } from "react-toastify";

export const PartnersList = () => {
  const entityLogo = useAppSelector(
    (state) => state.tenant.details?.theme.logotype.main
  );
  const partnersList = useAppSelector((state) => state.dashboard.partnersList);
  const dispatch = useAppDispatch();
  const entityId = useAppSelector((state) => state.tenant.details?.id);

  useEffect(() => {
    const fetchData = async () => {
      if (!entityId || partnersList.length > 0) return;
      const data = (await fetchPartners(entityId)) as PartnerData;
      dispatch(setPartnersList(data));
    };
    fetchData();
  }, [partnersList.length, dispatch, entityId]);

  const onDelete = async (id: string) => {
    if (!entityId) return;
    const success = await deletePartner(entityId, id);
    if (success) {
      toast("Socio eliminado con exito", {
        type: "success",
      });
      dispatch(
        setPartnersList(partnersList.filter((partner) => partner.id !== id))
      );
    } else {
      toast("Ha ocurrido un error al eliminar el socio", {
        type: "error",
      });
    }
  };

  const onUpdate = async (id: string, name: string, description: string) => {
    if (!entityId) return;
    const success = await updatePartner(entityId, id, name, description);
    if (success) {
      toast("Socio actualizado con exito", {
        type: "success",
      });
      dispatch(
        setPartnersList(
          partnersList.map((partner) => {
            if (partner.id === id) {
              return { ...partner, name, description };
            }
            return partner;
          })
        )
      );
    } else {
      toast("Ha ocurrido un error al actualizar el socio", {
        type: "error",
      });
    }
  };

  return (
    <div className={"grid grid-cols-3 3xl:gap-8 2xl:gap-6 md:gap-4"}>
      <PartnerCard
        id={"guia"}
        logo={entityLogo || "/jomLogo.png"}
        name="Guía"
        description="Guía de Propiedad"
      />
      <PartnerCard
        id={"asesor-interno"}
        logo={entityLogo || "/jomLogo.png"}
        name="Asesor Interno"
        description="Asesor Interno"
      />
      <PartnerCard
        id={"asesor-externo"}
        logo={entityLogo || "/jomLogo.png"}
        name="Asesor Externo"
        description="Asesor Externo"
      />
      {partnersList.map((partner) => (
        <PartnerCard
          key={partner.id}
          id={partner.id}
          logo={entityLogo || "/jomLogo.png"}
          name={partner.name}
          description={partner.description}
          onUpdate={onUpdate}
          onDelete={() => onDelete(partner.id)}
        />
      ))}
    </div>
  );
};
