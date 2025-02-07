"use server";
import { TeamData, TeamResponse } from "@/type/dashboard";

export const fetchTeams = async (tenantId: string) => {
    try {
        const data = await fetch(
            `https://api.propity.mx/qa/entities/${tenantId}/team`
        ).then((res) => res.json());
        const formatedData: TeamData = data.map((team: TeamResponse) => ({
            id: team.id,
            name: team.firstName + " " + team.lastName,
            role: team.role.team.name,
            photo: {
                original: team.photo?.original || "/uknProfile.png",
                thumbnail: team.photo?.thumbnail || "/uknProfile.png",
            }
        }));
        return formatedData;
    } catch (error) {
        console.error(error + "fetchTeams error");
        return [];
    }
};