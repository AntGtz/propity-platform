"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { useEffect, useState } from "react";
import { MemberCard } from "./MemberCard";

export type Team = {
  id: string;
  photo: {
    original: string;
    thumbnail: string;
  } | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: {
    name: string;
    display: string;
  };
  role: {
    jom: {
      name: string;
      display: string;
    } | null;
    team: {
      name: string;
      display: string;
    } | null;
    trade: {
      name: string;
      display: string;
    } | null;
  };
};

export const Team = () => {
  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const [team, setTeam] = useState<Team[]>([]);
  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch(
        `https://api.propity.mx/qa/entities/${tenantId}/team`
      );
      const data = await res.json();
      setTeam(data);
      console.log(data);
    };
    fetchTeam();
  }, [tenantId]);

  return (
    <section className={"max-w-7xl mx-auto px-4 md:px-0 font-galano"}>
      <h1 className={"text-5xl font-bold text-center"}>
        Conoce a nuestro equipo
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};
