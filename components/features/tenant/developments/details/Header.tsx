import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col -mt-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 font-galano">
          <span className="flex items-center gap-1 underline text-sm">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="13" fill="white" />
              <path
                d="M17.1368 13.0393H10.0459"
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
            Atras
          </span>
          <div className="ml-12 flex items-center gap-1 text-sm">
            <span className="flex items-center gap-1 underline">
              Desarrollos
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
                  d="M8.86319 13.0393H15.9541"
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
            </span>
            <span className="flex items-center gap-1 underline">
              Ficha de desarrollo
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
                  d="M8.86319 13.0393H15.9541"
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
            </span>
            <span>Ver</span>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.9999L8.55 17.6999C6.86667 16.1832 5.475 14.8749 4.375 13.7749C3.275 12.6749 2.4 11.6872 1.75 10.8119C1.1 9.93657 0.646 9.13257 0.388 8.3999C0.13 7.66724 0.000666667 6.91724 0 6.1499C0 4.58324 0.525 3.2749 1.575 2.2249C2.625 1.1749 3.93333 0.649902 5.5 0.649902C6.36667 0.649902 7.19167 0.833236 7.975 1.1999C8.75833 1.56657 9.43333 2.08324 10 2.7499C10.5667 2.08324 11.2417 1.56657 12.025 1.1999C12.8083 0.833236 13.6333 0.649902 14.5 0.649902C16.0667 0.649902 17.375 1.1749 18.425 2.2249C19.475 3.2749 20 4.58324 20 6.1499C20 6.91657 19.871 7.66657 19.613 8.3999C19.355 9.13323 18.9007 9.93724 18.25 10.8119C17.5993 11.6866 16.7243 12.6742 15.625 13.7749C14.5257 14.8756 13.134 16.1839 11.45 17.6999L10 18.9999ZM10 16.2999C11.6 14.8666 12.9167 13.6376 13.95 12.6129C14.9833 11.5882 15.8 10.6966 16.4 9.9379C17 9.17924 17.4167 8.5039 17.65 7.9119C17.8833 7.3199 18 6.73257 18 6.1499C18 5.1499 17.6667 4.31657 17 3.6499C16.3333 2.98324 15.5 2.6499 14.5 2.6499C13.7167 2.6499 12.9917 2.87057 12.325 3.3119C11.6583 3.75324 11.2 4.3159 10.95 4.9999H9.05C8.8 4.31657 8.34167 3.75424 7.675 3.3129C7.00833 2.87157 6.28333 2.65057 5.5 2.6499C4.5 2.6499 3.66667 2.98324 3 3.6499C2.33333 4.31657 2 5.1499 2 6.1499C2 6.73324 2.11667 7.3209 2.35 7.9129C2.58333 8.5049 3 9.1799 3.6 9.9379C4.2 10.6959 5.01667 11.5876 6.05 12.6129C7.08333 13.6382 8.4 14.8672 10 16.2999Z"
              fill="#262931"
            />
          </svg>

          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.707 8.29303L11.707 0.293031C11.5671 0.153222 11.389 0.0580152 11.195 0.0194476C11.0011 -0.0191199 10.8 0.000683092 10.6173 0.0763531C10.4346 0.152023 10.2785 0.280163 10.1686 0.444573C10.0587 0.608982 10 0.802281 10 1.00003V4.54503C7.26829 4.79782 4.72923 6.06089 2.87969 8.08706C1.03015 10.1132 0.00327173 12.7567 0 15.5V17C0.000157856 17.2076 0.0649097 17.41 0.185274 17.5791C0.305639 17.7482 0.475649 17.8757 0.671726 17.9439C0.867802 18.012 1.08022 18.0174 1.27953 17.9594C1.47883 17.9014 1.65514 17.7828 1.784 17.62C2.76385 16.4552 3.96594 15.4972 5.3201 14.802C6.67426 14.1068 8.15334 13.6883 9.671 13.571C9.721 13.565 9.846 13.555 10 13.545V17C10 17.1978 10.0587 17.3911 10.1686 17.5555C10.2785 17.7199 10.4346 17.848 10.6173 17.9237C10.8 17.9994 11.0011 18.0192 11.195 17.9806C11.389 17.942 11.5671 17.8468 11.707 17.707L19.707 9.70703C19.8945 9.5195 19.9998 9.2652 19.9998 9.00003C19.9998 8.73487 19.8945 8.48056 19.707 8.29303ZM12 14.586V12.5C12 12.2348 11.8946 11.9805 11.7071 11.7929C11.5196 11.6054 11.2652 11.5 11 11.5C10.745 11.5 9.704 11.55 9.438 11.585C6.74279 11.8331 4.17727 12.8571 2.052 14.533C2.29324 12.3275 3.33954 10.2884 4.99055 8.80619C6.64157 7.324 8.78128 6.50288 11 6.50003C11.2652 6.50003 11.5196 6.39467 11.7071 6.20714C11.8946 6.0196 12 5.76525 12 5.50003V3.41403L17.586 9.00003L12 14.586Z"
              fill="#262931"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-4">
        <Image
          src={"/jomLogo.png"}
          alt="Logo"
          className="rounded-full"
          height={46}
          width={46}
        />
        <div className="flex flex-col gap-1 font-galano text-sm">
          <span>Publicado por</span>
          <span>Inmobiliaria</span>
        </div>
      </div>
    </header>
  );
}
