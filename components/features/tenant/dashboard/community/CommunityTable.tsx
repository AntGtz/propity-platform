"use client";
import {
  createColumnHelper,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/table-core";
import Image from "next/image";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { Button } from "@/components/common/button";
import { useState } from "react";

type CommunityTableData = {
  logo: string;
  name: string;
  address: string;
  isActive: boolean;
  needsApproval: boolean;
};

const testData: CommunityTableData[] = [
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
  {
    logo: "/picClient.jpg",
    name: "Propity MX",
    address: "Calle de la República, No. 123",
    isActive: true,
    needsApproval: false,
  },
];

export const CommunityTable = () => {
  const columnHelper = createColumnHelper<CommunityTableData>();
  const columns = [
    columnHelper.accessor("logo", {
      header: () => <></>,
      cell: (info) => (
        <Image
          height={50}
          width={50}
          className={"h-[50px] w-[50px] object-cover rounded-lg"}
          src={info.getValue()}
          alt="Entity logo"
        />
      ),
    }),
    columnHelper.accessor((row) => row.name, {
      id: "entityInfo",
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
          <div className={"text-sm"}>{info.row.original.address}</div>
        </span>
      ),
      header: () => (
        <span className={"font-galano font-normal text-base"}>Nombre</span>
      ),
    }),
    columnHelper.accessor("isActive", {
      header: () => <span>Activo</span>,
      cell: (info) => (info.getValue() ? "Si" : "No"),
    }),
    columnHelper.accessor("needsApproval", {
      header: () => <span>Necesita aprobación</span>,
      cell: (info) => (info.getValue() ? "Si" : "No"),
    }),
    columnHelper.display({
      id: "actions",
      header: () => <></>,
      cell: () => (
        <div className={"flex justify-end"}>
          <Button variant={"destructive"} size={"sm"} className={"font-galano"}>
            Eliminar
          </Button>
        </div>
      ),
    }),
  ];

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  const table = useReactTable({
    data: testData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      columnVisibility: {
        entityInfo: true,
        isActive: false,
        needsApproval: false,
      },
      pagination,
    },
  });

  const getPaginationPages = () => {
    const range = 8;
    const halfRange = Math.floor(range / 2);
    const totalPages = Math.ceil(testData.length / pagination.pageSize);

    let start = Math.max(0, Math.ceil(pagination.pageIndex - halfRange));
    const end = Math.min(totalPages, start + range);

    if (end - start < range) {
      start = Math.max(0, end - range);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  const totalPages = Math.ceil(testData.length / pagination.pageSize);

  return (
    <>
      <div className="rounded-xl overflow-hidden border mt-6">
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={`py-4 border-b text-left border-gray-300 ${header.id === "logo" && "w-32"} ${
                      header.id === "entityInfo" && "pl-8"
                    }`}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                className={`${
                  index === table.getRowModel().rows.length - 1
                    ? ""
                    : "border-b border-gray-300"
                }`}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`py-2.5 ${cell.column.id === "entityInfo" && "pl-8"}`}
                  >
                    <span className={"flex justify-center"}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={"flex justify-center w-full"}>
        <div
          className={
            "flex flex-row justify-center mt-8 gap-4 items-center font-galano"
          }
        >
          <span
            onClick={() => table.previousPage()}
            className={`flex items-center text-xs md:text-sm cursor-pointer ${
              !table.getCanPreviousPage() ? "opacity-50" : ""
            }`}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13.5" cy="13.5" r="13" fill="white" />
              <path
                d="M17.6368 13.5396H10.5459"
                stroke="black"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9087 10.5L9.36328 13.5394L12.9087 16.5787"
                stroke="black"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={"md:block hidden"}>Anterior</span>
          </span>

          <div className={"flex items-center gap-2"}>
            {getPaginationPages().map((pg) => (
              <span
                key={pg}
                onClick={() =>
                  setPagination({
                    ...pagination,
                    pageIndex: pg,
                  })
                }
                className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer ${
                  pg === pagination.pageIndex
                    ? "bg-green-400 text-white border-transparent"
                    : "border-gray-400"
                }`}
              >
                {pg + 1}
              </span>
            ))}
            {testData.length / pagination.pageSize > 5 &&
              getPaginationPages().slice(-1)[0] <
                testData.length / pagination.pageSize - 1 && (
                <span
                  className={
                    "rounded-lg md:px-4 md:py-2 text-sm font-bold cursor-pointer md:scale-100 scale-50 w-fit"
                  }
                >
                  <svg
                    width="23"
                    height="7"
                    viewBox="0 0 23 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3.5" cy="3.5" r="3" fill="#262931" />
                    <circle cx="11.5" cy="3.5" r="3" fill="#262931" />
                    <circle cx="19.5" cy="3.5" r="3" fill="#262931" />
                  </svg>
                </span>
              )}
            {getPaginationPages().slice(-1)[0] < totalPages - 1 && (
              <span
                onClick={() =>
                  setPagination({
                    ...pagination,
                    pageIndex: totalPages - 1,
                  })
                }
                className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer ${
                  pagination.pageIndex === totalPages
                    ? "bg-green-400 text-white"
                    : "border-gray-400"
                }`}
              >
                {totalPages}
              </span>
            )}
          </div>

          <span
            onClick={() => {
              if (pagination.pageIndex >= totalPages - 1) return;
              table.nextPage();
            }}
            className={`flex items-center text-sm cursor-pointer ${
              pagination.pageIndex >= totalPages - 1 ? "opacity-50" : ""
            }`}
          >
            <span className={"md:block hidden"}>Siguiente</span>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13"
                cy="13"
                r="13"
                transform="matrix(-1 0 0 1 26.5 0.5)"
                fill="white"
              />
              <path
                d="M9.36319 13.5396H16.4541"
                stroke="#262931"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0913 10.5L17.6367 13.5394L14.0913 16.5787"
                stroke="#262931"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
