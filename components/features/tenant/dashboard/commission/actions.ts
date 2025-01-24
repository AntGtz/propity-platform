import { CommissionScheme } from "@/type/dashboard";

export const fetchCommissions = async (tenantId: string) => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/sale`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error + "fetchCommissions error");
  }
};

export const createCommission = async (
  tenantId: string,
  name: string,
  percents: Record<string, number>
): Promise<boolean> => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/sale`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, percents }),
      }
    ).then((res) => res.json());
    return data ? true : false;
  } catch (error) {
    console.error(error + "createCommission error");
    return false;
  }
};

export const deleteCommission = async (tenantId: string, commissionId: string) => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/sale/${commissionId}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    return data ? true : false;
  } catch (error) {
    console.error(error + "deleteCommission error");
    return false;
  }
};

export const updateCommission = async (
  tenantId: string,
  newCommission: CommissionScheme
): Promise<boolean> => {
  try {
    const data = await fetch(
      `https://api.propity.mx/qa/entities/${tenantId}/sale/${newCommission.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommission),
      }
    ).then((res) => res.json());
    return data ? true : false;
  } catch (error) {
    console.error(error + "updateCommission error");
    return false;
  }
};