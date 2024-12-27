import Link from "next/link";

interface BreadcrumbProps {
  entityId: string;
  id: string;
}

export const Breadcrumb = ({ entityId, id }: BreadcrumbProps) => {
  return (
    <div className={"flex items-center gap-1 text-sm"}>
      <Link href={`/desarrollos`}>
        <span className={"flex items-center underline"}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="13" fill="white" />
            <path
              d="M17.1368 13.0391H10.0459"
              stroke="#262931"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4087 10L8.86328 13.0394L12.4087 16.0787"
              stroke="#262931"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Atrás
        </span>
      </Link>
      <span className={"ml-16 flex items-center gap-1"}>
        <Link href={`/desarrollos`}>
          <span className={"underline"}>Desarrollos</span>
        </Link>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13"
            cy="13"
            r="13"
            transform="matrix(-1 0 0 1 26 0)"
            fill="white"
          />
          <path
            d="M8.86319 13.0391H15.9541"
            stroke="#262931"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5913 10L17.1367 13.0394L13.5913 16.0787"
            stroke="#262931"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Link href={`/perfil/${entityId}`}>
          <span className={"underline cursor-pointer"}>
            Ficha de desarrollo
          </span>
        </Link>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13"
            cy="13"
            r="13"
            transform="matrix(-1 0 0 1 26 0)"
            fill="white"
          />
          <path
            d="M8.86319 13.0391H15.9541"
            stroke="#262931"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5913 10L17.1367 13.0394L13.5913 16.0787"
            stroke="#262931"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Ver</span>
      </span>
    </div>
  );
};
