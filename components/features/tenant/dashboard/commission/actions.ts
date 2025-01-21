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
