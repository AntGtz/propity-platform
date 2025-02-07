"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setCommissionTabSelected } from "@/lib/store/features/dashboard/dashboardSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import { Loader2Icon } from "lucide-react";

const CommissionSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const commissionTabSelected = useAppSelector(
    (state) => state.dashboard.commissionTabSelected
  );
  const commissionsArray = useAppSelector(
    (state) => state.dashboard.commissionsArray
  );

  return (
    <Select
      value={commissionTabSelected}
      onValueChange={(value) => dispatch(setCommissionTabSelected(value))}
    >
      <SelectTrigger className={"w-fit"}>Esquema</SelectTrigger>
      <SelectContent>
        {commissionsArray.map((commission) => (
          <SelectItem key={commission.id} value={commission.id.toString()}>
            {commission.name}
          </SelectItem>
        ))}
        {commissionsArray.length === 0 && (
          <SelectItem
            className="flex justify-center items-center"
            value={"default"}
          >
            <Loader2Icon className={"ml-6 animate-spin"} />
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default CommissionSelect;
