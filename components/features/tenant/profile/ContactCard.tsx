"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { formatPhoneNumber } from "@/utils";

interface ContactCardProps {
  id: string;
}

export default function ContactCard({ id }: ContactCardProps) {
  const comunnity = useAppSelector((state) => state.tenant.communityDetails);
  const development = comunnity?.filter((community) => community.id === id)[0];

  return (
    <div
      className={
        "flex flex-col gap-y-2 w-full border border-gray-300 rounded-sm px-4 py-4 text-sm"
      }
    >
      <span className={"font-bold text-2xl"}>Contacto</span>
      <span
        className={
          "text-base font-galano underline flex gap-2 items-center border-b border-gray-300 py-4"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1C6.5 1 8.5 5.5 8.5 6C8.5 7 7 8 6.5 9C6 10 7 11 8 12C8.39 12.39 10 14 11 13.5C12 13 13 11.5 14 11.5C14.5 11.5 19 13.5 19 14C19 16 17.5 17.5 16 18C14.5 18.5 13.5 18.5 11.5 18C9.5 17.5 8 17 5.5 14.5C3 12 2.5 10.5 2 8.5C1.5 6.5 1.5 5.5 2 4C2.5 2.5 4 1 6 1Z"
            stroke="#262931"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {formatPhoneNumber(development?.contact?.phone)}
      </span>

      <span
        className={
          "text-base font-galano underline flex gap-2 items-center border-b border-gray-300 py-4"
        }
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1H18C18.55 1 19 1.45 19 2V14C19 14.55 18.55 15 18 15H2C1.45 15 1 14.55 1 14V2C1 1.45 1.45 1 2 1Z"
            stroke="#262931"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 2.5L10 8L19 2.5"
            stroke="#262931"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {development?.contact?.email}
      </span>

      <span
        className={
          "text-base font-galano flex gap-2 items-center border-b border-gray-300 py-4"
        }
      >
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          className={"flex-shrink-0"}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.074 16.324 14.59 14.558 16.395C13.6757 17.2871 12.7129 18.0958 11.682 18.811L11.256 19.101L11.056 19.234L10.679 19.474L10.343 19.679L9.927 19.921C9.64463 20.0822 9.32513 20.1669 9 20.1669C8.67487 20.1669 8.35537 20.0822 8.073 19.921L7.657 19.679L7.137 19.359L6.945 19.234L6.535 18.961C5.42283 18.2085 4.3869 17.3491 3.442 16.395C1.676 14.589 0 12.074 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 2C7.14348 2 5.36301 2.7375 4.05025 4.05025C2.7375 5.36301 2 7.14348 2 9C2 11.322 3.272 13.36 4.871 14.996C5.55853 15.692 6.30166 16.3308 7.093 16.906L7.551 17.232C7.699 17.3353 7.84133 17.4313 7.978 17.52L8.368 17.77L8.711 17.979L9 18.148L9.455 17.879L9.822 17.649C10.0173 17.525 10.2263 17.386 10.449 17.232L10.907 16.906C11.6983 16.3308 12.4415 15.692 13.129 14.996C14.728 13.361 16 11.322 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 5C10.0609 5 11.0783 5.42143 11.8284 6.17157C12.5786 6.92172 13 7.93913 13 9C13 10.0609 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13C7.93913 13 6.92172 12.5786 6.17157 11.8284C5.42143 11.0783 5 10.0609 5 9C5 7.93913 5.42143 6.92172 6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5ZM9 7C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9C7 9.53043 7.21071 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9C11 8.46957 10.7893 7.96086 10.4142 7.58579C10.0391 7.21071 9.53043 7 9 7Z"
            fill="#262931"
          />
        </svg>
        {development?.location?.address}
      </span>

      <span
        className={
          "text-base font-galano underline flex gap-2 items-center pt-4"
        }
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.707 8.29279L11.707 0.292787C11.5671 0.152977 11.389 0.057771 11.195 0.0192035C11.0011 -0.0193641 10.8 0.000438951 10.6173 0.076109C10.4346 0.151779 10.2785 0.279918 10.1686 0.444328C10.0587 0.608738 10 0.802037 10 0.999787V4.54479C7.26829 4.79758 4.72923 6.06065 2.87969 8.08681C1.03015 10.113 0.00327173 12.7564 0 15.4998V16.9998C0.000157856 17.2074 0.0649097 17.4098 0.185274 17.5789C0.305639 17.748 0.475649 17.8755 0.671726 17.9436C0.867802 18.0118 1.08022 18.0172 1.27953 17.9592C1.47883 17.9011 1.65514 17.7825 1.784 17.6198C2.76385 16.4549 3.96594 15.4969 5.3201 14.8017C6.67426 14.1065 8.15334 13.6881 9.671 13.5708C9.721 13.5648 9.846 13.5548 10 13.5448V16.9998C10 17.1975 10.0587 17.3908 10.1686 17.5552C10.2785 17.7197 10.4346 17.8478 10.6173 17.9235C10.8 17.9991 11.0011 18.0189 11.195 17.9804C11.389 17.9418 11.5671 17.8466 11.707 17.7068L19.707 9.70679C19.8945 9.51926 19.9998 9.26495 19.9998 8.99979C19.9998 8.73462 19.8945 8.48032 19.707 8.29279ZM12 14.5858V12.4998C12 12.2346 11.8946 11.9802 11.7071 11.7927C11.5196 11.6051 11.2652 11.4998 11 11.4998C10.745 11.4998 9.704 11.5498 9.438 11.5848C6.74279 11.8328 4.17727 12.8568 2.052 14.5328C2.29324 12.3272 3.33954 10.2881 4.99055 8.80595C6.64157 7.32376 8.78128 6.50263 11 6.49979C11.2652 6.49979 11.5196 6.39443 11.7071 6.20689C11.8946 6.01936 12 5.765 12 5.49979V3.41379L17.586 8.99979L12 14.5858Z"
            fill="#262931"
          />
        </svg>
        Compartir perfil
      </span>
    </div>
  );
}
