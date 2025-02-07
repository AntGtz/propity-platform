"use server";
import { PartnerData } from "@/type/dashboard";

export const fetchPartners = async (
  tenantId: string
): Promise<PartnerData | undefined> => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/partner`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error + "fetchPartners error");
    return undefined;
  }
};

export const createPartner = async (
  tenantId: string,
  name: string,
  description: string
) => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/partner`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      }
    ).then((res) => res.json());
    if (data.code === "PartnerCreated") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error + "createPartner error");
    return false;
  }
};

export const deletePartner = async (tenantId: string, partnerId: string) => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/partner/${partnerId}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    if (data.code === "PartnerDeleted") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error + "deletePartner error");
    return false;
  }
};

export const updatePartner = async (
  tenantId: string,
  partnerId: string,
  name: string,
  description: string
) => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/partner/${partnerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      }
    ).then((res) => res.json());
    if (data.code === "PartnerUpdated") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error + "updatePartner error");
    return false;
  }
};
