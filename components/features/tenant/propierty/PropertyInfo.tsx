"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { titleCase } from "@/utils";
import { Button } from "@/components/common/button";
import { ReactNode } from "react";
import { CollapsibleWrap } from "@/components/features/tenant/profile/CollapsibleWrap";
import { ContactCard } from "@/components/features/tenant/propierty/ContactCard";
import { ContactForm } from "@/components/features/tenant/propierty/ContactForm";

export const PropertyInfo = ({
  propertyId,
  entityId,
}: {
  propertyId: string;
  entityId: string;
}) => {
  const entity = useAppSelector((state) =>
    state.tenant.communityDetails.find((e) => e.id === entityId)
  );
  const tenant = useAppSelector((state) => state.tenant.details);
  const property = entity?.properties?.find((p) => p.id === Number(propertyId));
  const userState = useAppSelector((state) => state.user);

  const config: Array<{
    title: string | ReactNode;
    content: ReactNode;
    defaultOpen?: boolean;
    openFixed?: boolean;
  }> = [
    {
      title: (
        <>
          <span className={"flex gap-4 items-center text-lg md:text-2xl"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"md:block hidden"}
            >
              <path
                d="M15 11.0007L11 15.0007L9 13.0007M4 16.8007V11.4527C4 10.9187 4 10.6517 4.065 10.4027C4.12256 10.1826 4.21725 9.97395 4.345 9.7857C4.49 9.5727 4.691 9.3957 5.093 9.0447L9.894 4.8427C10.64 4.1907 11.013 3.8647 11.432 3.7407C11.802 3.6307 12.197 3.6307 12.567 3.7407C12.987 3.8647 13.361 4.1907 14.107 4.8447L18.907 9.0447C19.31 9.3967 19.51 9.5727 19.655 9.7847C19.783 9.97604 19.8763 10.182 19.935 10.4027C20 10.6517 20 10.9187 20 11.4527V16.8047C20 17.9227 20 18.4817 19.782 18.9097C19.5898 19.2858 19.2835 19.5914 18.907 19.7827C18.48 20.0007 17.921 20.0007 16.803 20.0007H7.197C6.079 20.0007 5.519 20.0007 5.092 19.7827C4.71584 19.5912 4.40991 19.2856 4.218 18.9097C4 18.4807 4 17.9207 4 16.8007Z"
                stroke="#262931"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Detalles de la propiedad
          </span>
        </>
      ),
      defaultOpen: true,
      content: (
        <div className={"flex md:text-base text-sm flex-col gap-2"}>
          <p className={"font-galano mt-4"}>{property?.description}</p>
          <div
            className={
              "px-4 py-3 flex items-center gap-2 font-bold text-lg bg-gray-200 rounded-md mt-3"
            }
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 21.5C4.71667 21.5 4.47933 21.404 4.288 21.212C4.09667 21.02 4.00067 20.7827 4 20.5V19.5C3.16667 19.5 2.45833 19.2083 1.875 18.625C1.29167 18.0417 1 17.3333 1 16.5V11.5C1 10.6667 1.29167 9.95833 1.875 9.375C2.45833 8.79167 3.16667 8.5 4 8.5V6.5C4 5.66667 4.29167 4.95833 4.875 4.375C5.45833 3.79167 6.16667 3.5 7 3.5H17C17.8333 3.5 18.5417 3.79167 19.125 4.375C19.7083 4.95833 20 5.66667 20 6.5V8.5C20.8333 8.5 21.5417 8.79167 22.125 9.375C22.7083 9.95833 23 10.6667 23 11.5V16.5C23 17.3333 22.7083 18.0417 22.125 18.625C21.5417 19.2083 20.8333 19.5 20 19.5V20.5C20 20.7833 19.904 21.021 19.712 21.213C19.52 21.405 19.2827 21.5007 19 21.5C18.7173 21.4993 18.48 21.4033 18.288 21.212C18.096 21.0207 18 20.7833 18 20.5V19.5H6V20.5C6 20.7833 5.904 21.021 5.712 21.213C5.52 21.405 5.28267 21.5007 5 21.5ZM4 17.5H20C20.2833 17.5 20.521 17.404 20.713 17.212C20.905 17.02 21.0007 16.7827 21 16.5V11.5C21 11.2167 20.904 10.9793 20.712 10.788C20.52 10.5967 20.2827 10.5007 20 10.5C19.7173 10.4993 19.48 10.5953 19.288 10.788C19.096 10.9807 19 11.218 19 11.5V15.5H5V11.5C5 11.2167 4.904 10.9793 4.712 10.788C4.52 10.5967 4.28267 10.5007 4 10.5C3.71733 10.4993 3.48 10.5953 3.288 10.788C3.096 10.9807 3 11.218 3 11.5V16.5C3 16.7833 3.096 17.021 3.288 17.213C3.48 17.405 3.71733 17.5007 4 17.5ZM7 13.5H17V11.5C17 11.05 17.0917 10.6417 17.275 10.275C17.4583 9.90833 17.7 9.58333 18 9.3V6.5C18 6.21667 17.904 5.97933 17.712 5.788C17.52 5.59667 17.2827 5.50067 17 5.5H7C6.71667 5.5 6.47933 5.596 6.288 5.788C6.09667 5.98 6.00067 6.21733 6 6.5V9.3C6.3 9.58333 6.54167 9.90833 6.725 10.275C6.90833 10.6417 7 11.05 7 11.5V13.5Z"
                fill="#262931"
              />
            </svg>
            Interior
          </div>
          <div className={"mt-3 grid grid-cols-2 gap-x-12 gap-y-4"}>
            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Dormitorios</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>Dormitorios: {property?.rooms}</li>
                <li>Pisos: {property?.floors}</li>
                <li>Vestidores: {property?.dressingRooms}</li>
              </ul>
            </div>
            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Baños</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>Baños: {property?.bathrooms}</li>
                <li>Inodoros: {property?.toilets}</li>
              </ul>
            </div>

            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Características</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>Ascensor: {property?.rooms}</li>
                <li>Aires acondicionados: {property?.floors}</li>
                <li>Bar: {property?.dressingRooms}</li>
              </ul>
            </div>
          </div>
          <div
            className={
              "px-4 py-3 flex items-center gap-2 font-bold text-lg bg-gray-200 rounded-md mt-3"
            }
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11.9527V17.3007C4 18.4207 4 18.9807 4.218 19.4097C4.41 19.7857 4.715 20.0917 5.092 20.2827C5.519 20.5007 6.079 20.5007 7.197 20.5007H16.803C17.921 20.5007 18.48 20.5007 18.907 20.2827C19.2835 20.0914 19.5898 19.7858 19.782 19.4097C20 18.9817 20 18.4227 20 17.3047V11.9527C20 11.4187 20 11.1517 19.935 10.9027C19.8774 10.6826 19.7827 10.4739 19.655 10.2857C19.51 10.0727 19.31 9.8957 18.907 9.5447L14.107 5.3447C13.361 4.6917 12.987 4.3647 12.567 4.2407C12.197 4.1307 11.803 4.1307 11.432 4.2407C11.012 4.3647 10.64 4.6907 9.894 5.3427L5.093 9.5447C4.691 9.8967 4.49 10.0727 4.346 10.2847C4.2178 10.4732 4.12276 10.6822 4.065 10.9027C4 11.1507 4 11.4187 4 11.9527Z"
                stroke="#262931"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Exterior
          </div>
          <div className={"mt-3 grid grid-cols-2 gap-x-12 gap-y-4"}>
            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Características exteriores</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>Terraza: {property?.rooms}</li>
              </ul>
            </div>
            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Estacionamiento (Cochera)</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>{property?.parking} Estacionamientos</li>
              </ul>
            </div>
          </div>
          <div
            className={
              "px-4 py-3 flex items-center gap-2 font-bold text-lg bg-gray-200 rounded-md mt-3"
            }
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 17.5H3C2.4 17.5 2 17.1 2 16.5V9L8 4.5L18 12V19.5C18 20.1 17.6 20.5 17 20.5H7C6.4 20.5 6 20.1 6 19.5V12L16 4.5L22 9V16.5C22 17.1 21.6 17.5 21 17.5H18"
                stroke="#262931"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 20.5V14.5H14V20.5"
                stroke="#262931"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Comunidad
          </div>
          <div className={"mt-3 grid grid-cols-2 gap-x-12 gap-y-4"}>
            <div className={"flex flex-col gap-2"}>
              <span className={"font-bold"}>Asociación de propietarios</span>
              <ul className={"list-disc list-inside text-sm"}>
                <li>Asociación de propietarios: {property?.dressingRooms}</li>
                <li>Costo de condominio: {property?.dressingRooms}</li>
                <li>Mascotas</li>
              </ul>
            </div>
          </div>
          <div
            className={
              "mt-4 flex md:flex-row flex-col gap-4 items-center justify-center text-sm font-bold"
            }
          >
            Solicitar apoyo de un asesor
            <Button size={"sm"} className={"ml-2 py-5"} variant={"outline"}>
              Contacta a un asesor
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className={"flex gap-4 items-center"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V21C19.9999 21.1883 19.9466 21.3728 19.8462 21.5322C19.7459 21.6916 19.6025 21.8194 19.4327 21.9009C19.2629 21.9824 19.0736 22.0143 18.8864 21.9929C18.6993 21.9715 18.522 21.8977 18.375 21.78L16.5 20.28L14.625 21.78C14.4329 21.9339 14.1908 22.0115 13.945 21.9981C13.6993 21.9846 13.4671 21.881 13.293 21.707L12 20.414L10.707 21.707C10.533 21.8811 10.3009 21.9849 10.0551 21.9986C9.80938 22.0122 9.56721 21.9348 9.375 21.781L7.5 20.28L5.625 21.78C5.47797 21.8977 5.30069 21.9715 5.11356 21.9929C4.92643 22.0143 4.73707 21.9824 4.56727 21.9009C4.39747 21.8194 4.25414 21.6916 4.15378 21.5322C4.05342 21.3728 4.00012 21.1883 4 21V5ZM7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V18.92L6.875 18.22C7.05236 18.078 7.27279 18.0006 7.5 18.0006C7.72721 18.0006 7.94764 18.078 8.125 18.22L9.925 19.66L11.293 18.293C11.4805 18.1055 11.7348 18.0002 12 18.0002C12.2652 18.0002 12.5195 18.1055 12.707 18.293L14.074 19.66L15.875 18.22C16.0524 18.078 16.2728 18.0006 16.5 18.0006C16.7272 18.0006 16.9476 18.078 17.125 18.22L18 18.92V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7ZM8 9C8 8.73478 8.10536 8.48043 8.29289 8.29289C8.48043 8.10536 8.73478 8 9 8H15C15.2652 8 15.5196 8.10536 15.7071 8.29289C15.8946 8.48043 16 8.73478 16 9C16 9.26522 15.8946 9.51957 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10H9C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.10536 9.51957 8 9.26522 8 9ZM9 12C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H9Z"
              fill="#262931"
            />
          </svg>
          Precios
        </span>
      ),
      content: <p className={"text-base font-galano mt-4"}>Desde $3,500.000</p>,
    },
    {
      title: (
        <span className={"flex gap-4 items-center"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z"
              fill="#262931"
            />
          </svg>
          Lugares Cercanos
        </span>
      ),
      content: (
        <>
          <p className={"text-sm font-galano my-4"}>
            {property?.location?.address}&nbsp;
            {property?.location?.division?.name}&nbsp;
            {property?.location?.division?.state}&nbsp;
            {property?.location?.division?.country?.name}
          </p>
          <iframe
            src={`https://maps.google.com/maps?q=${property?.location?.geo.lat},${property?.location?.geo.lng}&hl=es;z=14&amp&output=embed`}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={"w-full h-96"}
          ></iframe>
        </>
      ),
    },
  ];

  return (
    <>
      <section className={"w-full flex gap-6 mt-8 font-galano"}>
        <div className={"md:w-7/12 flex flex-col"}>
          {tenant?.subdomain.split(".")[0] === "app" ? (
            <h1 className={"font-bold text-xl"}>{property?.entity.name}</h1>
          ): (
            <h1 className={"font-bold text-xl"}>{tenant?.name}</h1>
          )}
          <h2 className={"font-bold text-4xl mt-2"}>
            $ {property?.operations[0]!.price.toLocaleString("es-MX")}
          </h2>
          <div className={"flex gap-7 items-center mt-3"}>
            <span className={"flex gap-1 items-center"}>
              <strong>{property?.bathrooms}</strong> Baños
            </span>
            <span className={"flex gap-1 items-center"}>
              <strong>{property?.rooms}</strong> Habitaciones
            </span>
            <span className={"flex gap-1 items-center"}>
              <strong>{property?.surface.total}</strong> Metros
            </span>
          </div>
          <span className={"mt-2"}>{property?.location?.address}</span>

          <div
            className={
              "grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-y-6 mt-2 w-full"
            }
          >
            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 11.4527V16.8007C4 17.9207 4 18.4807 4.218 18.9097C4.41 19.2857 4.715 19.5917 5.092 19.7827C5.519 20.0007 6.079 20.0007 7.197 20.0007H16.803C17.921 20.0007 18.48 20.0007 18.907 19.7827C19.2835 19.5914 19.5898 19.2858 19.782 18.9097C20 18.4817 20 17.9227 20 16.8047V11.4527C20 10.9187 20 10.6517 19.935 10.4027C19.8774 10.1826 19.7827 9.97395 19.655 9.7857C19.51 9.5727 19.31 9.3957 18.907 9.0447L14.107 4.8447C13.361 4.1917 12.987 3.8647 12.567 3.7407C12.197 3.6307 11.803 3.6307 11.432 3.7407C11.012 3.8647 10.64 4.1907 9.894 4.8427L5.093 9.0447C4.691 9.3967 4.49 9.5727 4.346 9.7847C4.2178 9.97319 4.12276 10.1822 4.065 10.4027C4 10.6507 4 10.9187 4 11.4527Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={"flex text-sm flex-col"}>
                <span className={"font-bold"}>
                  {titleCase(property?.type?.display)}
                </span>
                <span>Tipo de propiedad</span>
              </div>
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6M16 2V6M2 10H22"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className={"flex text-sm flex-col"}>
                <span className={"font-bold"}>{property?.age ?? "0"}</span>
                <span className={"w-full text-wrap"}>Años de construcción</span>
              </div>
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6M16 2V6M2 10H22"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className={"flex text-sm flex-col"}>
                <span className={"font-bold"}>
                  {property?.register
                    ? new Date().getFullYear() -
                      new Date(property.register).getFullYear()
                    : "N/A"}
                </span>
                <span>En propity.com</span>
              </div>
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.495 4.33156C13.0831 3.96536 12.5511 3.76307 12 3.76307C11.4489 3.76307 10.9169 3.96536 10.505 4.33156L4.505 9.66556C4.26764 9.8766 4.07764 10.1355 3.94751 10.4252C3.81739 10.715 3.75007 11.029 3.75 11.3466V21.2496H5.25V15.9476C5.25 15.0496 5.25 14.2996 5.33 13.7056C5.414 13.0776 5.6 12.5106 6.055 12.0556C6.511 11.5996 7.078 11.4136 7.705 11.3296C8.3 11.2496 9.05 11.2496 9.948 11.2496H14.052C14.951 11.2496 15.7 11.2496 16.294 11.3296C16.922 11.4136 17.489 11.5996 17.944 12.0556C18.4 12.5106 18.586 13.0776 18.67 13.7056C18.75 14.2996 18.75 15.0496 18.75 15.9476V21.2496H20.25V11.3466C20.2499 11.029 20.1826 10.715 20.0525 10.4252C19.9224 10.1355 19.7324 9.8766 19.495 9.66556L13.495 4.33156ZM21.75 21.2496V11.3466C21.75 10.8169 21.6378 10.2933 21.4208 9.81019C21.2038 9.32706 20.8869 8.89538 20.491 8.54356L14.491 3.21056C13.8046 2.60059 12.9183 2.26367 12 2.26367C11.0817 2.26367 10.1954 2.60059 9.509 3.21056L3.509 8.54356C3.11311 8.89538 2.79623 9.32706 2.57922 9.81019C2.36222 10.2933 2.25002 10.8169 2.25 11.3466V21.2496H2C1.80109 21.2496 1.61032 21.3286 1.46967 21.4692C1.32902 21.6099 1.25 21.8007 1.25 21.9996C1.25 22.1985 1.32902 22.3892 1.46967 22.5299C1.61032 22.6705 1.80109 22.7496 2 22.7496H22C22.1989 22.7496 22.3897 22.6705 22.5303 22.5299C22.671 22.3892 22.75 22.1985 22.75 21.9996C22.75 21.8007 22.671 21.6099 22.5303 21.4692C22.3897 21.3286 22.1989 21.2496 22 21.2496H21.75ZM17.25 21.2496V15.9996C17.25 15.0356 17.248 14.3886 17.183 13.9046C17.121 13.4436 17.014 13.2456 16.883 13.1156C16.752 12.9856 16.556 12.8786 16.095 12.8156C15.612 12.7516 14.964 12.7496 14 12.7496H10C9.036 12.7496 8.388 12.7516 7.905 12.8166C7.444 12.8786 7.246 12.9856 7.116 13.1166C6.986 13.2476 6.879 13.4436 6.816 13.9046C6.752 14.3886 6.75 15.0356 6.75 15.9996V21.2496H17.25ZM9.25 8.99956C9.25 8.80065 9.32902 8.60989 9.46967 8.46923C9.61032 8.32858 9.80109 8.24956 10 8.24956H14C14.1989 8.24956 14.3897 8.32858 14.5303 8.46923C14.671 8.60989 14.75 8.80065 14.75 8.99956C14.75 9.19848 14.671 9.38924 14.5303 9.52989C14.3897 9.67055 14.1989 9.74956 14 9.74956H10C9.80109 9.74956 9.61032 9.67055 9.46967 9.52989C9.32902 9.38924 9.25 9.19848 9.25 8.99956ZM8.25 15.4996C8.25 15.3007 8.32902 15.1099 8.46967 14.9692C8.61032 14.8286 8.80109 14.7496 9 14.7496H15C15.1989 14.7496 15.3897 14.8286 15.5303 14.9692C15.671 15.1099 15.75 15.3007 15.75 15.4996C15.75 15.6985 15.671 15.8892 15.5303 16.0299C15.3897 16.1705 15.1989 16.2496 15 16.2496H9C8.80109 16.2496 8.61032 16.1705 8.46967 16.0299C8.32902 15.8892 8.25 15.6985 8.25 15.4996ZM8.25 18.4996C8.25 18.3007 8.32902 18.1099 8.46967 17.9692C8.61032 17.8286 8.80109 17.7496 9 17.7496H15C15.1989 17.7496 15.3897 17.8286 15.5303 17.9692C15.671 18.1099 15.75 18.3007 15.75 18.4996C15.75 18.6985 15.671 18.8892 15.5303 19.0299C15.3897 19.1705 15.1989 19.2496 15 19.2496H9C8.80109 19.2496 8.61032 19.1705 8.46967 19.0299C8.32902 18.8892 8.25 18.6985 8.25 18.4996Z"
                  fill="#262931"
                />
              </svg>

              <div className={"flex text-sm flex-col"}>
                <span className={"font-bold"}>
                  {property?.parking ?? "N/A"} Autos
                </span>
                <span>Parking</span>
              </div>
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H12V12H22V22H2V2ZM4 4V6.5H6.004V8.5H4V11H6.004V13H4V15.5H6.004V17.5H4V20H6.5V18.033H8.5V20H11V18.033H13V20H15.5V18.033H17.5V20H20V14H10V4H4Z"
                  fill="#262931"
                />
              </svg>

              <div className={"flex text-sm flex-col"}>
                <span className={"font-bold"}>
                  ${" "}
                  {Number(
                    (property?.operations[0].price ?? 1) /
                      (property?.surface.built ?? 1)
                  )
                    .toFixed(2)
                    .toLocaleUpperCase("es-MX")}
                </span>
                <span>Precio por metro</span>
              </div>
            </span>
          </div>

          {userState.role.jom.name === "agent" && (
            <div
              className={
                "mt-8 flex md:flex-row flex-col gap-4 items-center pb-8 border-b border-gray-400"
              }
            >
              <Button className={"[&]:py-6 [&]:px-6 w-full md:w-auto"}>
                Contactar propietario
              </Button>
              <Button
                variant={"outline"}
                className={"[&]:py-6 [&]:px-6 w-full md:w-auto"}
              >
                Compartir esta {property?.operations[0].display}
              </Button>
            </div>
          )}
          {config.map((item, index) => (
            <CollapsibleWrap
              key={index}
              title={item.title}
              defaultOpen={item.defaultOpen}
              openFixed={item.openFixed}
              arrowColor={"black"}
            >
              {item.content}
            </CollapsibleWrap>
          ))}

          <div
            className={"w-full flex justify-center mt-8 font-galano font-bold"}
          >
            Puedes descargar la ficha técnica{" "}
            <span className={"text-green-500 ml-1.5 cursor-pointer"}>Aquí</span>
          </div>
        </div>
        <div className={"md:w-5/12 hidden md:flex flex-col gap-12"}>
          <iframe
            src={`https://maps.google.com/maps?q=${property?.location?.geo.lat},${property?.location?.geo.lng}&hl=es;z=14&amp&output=embed`}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={"w-full h-96 rounded-xl"}
          ></iframe>
          <div className={"mt-12 pl-24 flex flex-col gap-y-9"}>
            {userState.role.jom.name === "agent" && (
              <>
                <ContactCard id={entity?.id ?? ""} />
                <ContactForm id={entity?.id ?? ""} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
