"use client";
import { Button } from "@/components/common/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Trash2Icon } from "lucide-react";
import { deleteCommission } from "./actions";
import { toast } from "react-toastify";
import { deleteCommissionById } from "@/lib/store/features/dashboard/dashboardSlice";

export const ComissionDeleteButton = () => {
  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const commissionId = useAppSelector(
    (state) => state.dashboard.commissionTabSelected
  );
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    if (!tenantId || !commissionId) return;
    const success = await deleteCommission(tenantId, commissionId);
    if (success) {
      toast("Esquema eliminado con exito", {
        type: "success",
      });
      dispatch(deleteCommissionById(commissionId));
    } else {
      toast("Ha ocurrido un error al eliminar el esquema", {
        type: "error",
      });
    }
  };
  return (
    <Button onClick={handleDelete} className="h-full" variant={"destructive"}>
      <Trash2Icon className="h-6 w-6" />
    </Button>
  );
};
