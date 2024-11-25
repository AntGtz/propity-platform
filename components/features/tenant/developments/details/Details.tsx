import { Button } from "@/components/common/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/common/collapsible";

export default function Details() {
  return (
    <>
      <section className="flex flex-col gap-2 mt-3">
        <div className="w-6/12 flex flex-col gap-2">
          <span className="font-bold font-galano text-4xl">
            Desde $3,500.000
          </span>
          <div className="flex gap-4 items-center font-galano text-base">
            <span>
              <span className="font-bold">4</span> Baños
            </span>
            <span>
              <span className="font-bold">3</span> Récamaras
            </span>
            <span>
              <span className="font-bold">350</span> Metros m&sup2;
            </span>
            <span>
              <span className="font-bold">511</span> Metros m&sup2;
            </span>
          </div>
          <p className="-mt-2 text-base font-galano">
            5773 North Road, North Andresport 14153-6565
          </p>
          <div className="w-full grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center gap-3">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.45197V14.8C1 15.92 1 16.48 1.218 16.909C1.41 17.285 1.715 17.591 2.092 17.782C2.519 18 3.079 18 4.197 18H13.803C14.921 18 15.48 18 15.907 17.782C16.2835 17.5907 16.5898 17.2851 16.782 16.909C17 16.481 17 15.922 17 14.804V9.45197C17 8.91797 17 8.65097 16.935 8.40197C16.8774 8.18188 16.7827 7.97322 16.655 7.78497C16.51 7.57197 16.31 7.39497 15.907 7.04397L11.107 2.84397C10.361 2.19097 9.987 1.86397 9.567 1.73997C9.197 1.62997 8.803 1.62997 8.432 1.73997C8.012 1.86397 7.64 2.18997 6.894 2.84197L2.093 7.04397C1.691 7.39597 1.49 7.57197 1.346 7.78397C1.2178 7.97245 1.12276 8.18146 1.065 8.40197C1 8.64997 1 8.91797 1 9.45197Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col font-galano">
                <span className="font-semibold">Vivienda unifamiliar</span>
                <span className="text-xs">Tipo de propiedad</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1V5M15 1V5M1 9H21"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col font-galano">
                <span className="font-semibold">30 días</span>
                <span className="text-xs">En propity.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.495 2.33205C12.0831 1.96585 11.5511 1.76356 11 1.76356C10.4489 1.76356 9.91689 1.96585 9.505 2.33205L3.505 7.66605C3.26764 7.87709 3.07764 8.13598 2.94751 8.42571C2.81739 8.71544 2.75007 9.02944 2.75 9.34705V19.2501H4.25V13.9481C4.25 13.0501 4.25 12.3001 4.33 11.7061C4.414 11.0781 4.6 10.5111 5.055 10.0561C5.511 9.60005 6.078 9.41405 6.705 9.33005C7.3 9.25005 8.05 9.25005 8.948 9.25005H13.052C13.951 9.25005 14.7 9.25005 15.294 9.33005C15.922 9.41405 16.489 9.60005 16.944 10.0561C17.4 10.5111 17.586 11.0781 17.67 11.7061C17.75 12.3001 17.75 13.0501 17.75 13.9481V19.2501H19.25V9.34705C19.2499 9.02944 19.1826 8.71544 19.0525 8.42571C18.9224 8.13598 18.7324 7.87709 18.495 7.66605L12.495 2.33205ZM20.75 19.2501V9.34705C20.75 8.81742 20.6378 8.29381 20.4208 7.81068C20.2038 7.32755 19.8869 6.89586 19.491 6.54405L13.491 1.21105C12.8046 0.601082 11.9183 0.26416 11 0.26416C10.0817 0.26416 9.1954 0.601082 8.509 1.21105L2.509 6.54405C2.11311 6.89586 1.79623 7.32755 1.57922 7.81068C1.36222 8.29381 1.25002 8.81742 1.25 9.34705V19.2501H1C0.801088 19.2501 0.610322 19.3291 0.46967 19.4697C0.329018 19.6104 0.25 19.8011 0.25 20.0001C0.25 20.199 0.329018 20.3897 0.46967 20.5304C0.610322 20.671 0.801088 20.7501 1 20.7501H21C21.1989 20.7501 21.3897 20.671 21.5303 20.5304C21.671 20.3897 21.75 20.199 21.75 20.0001C21.75 19.8011 21.671 19.6104 21.5303 19.4697C21.3897 19.3291 21.1989 19.2501 21 19.2501H20.75ZM16.25 19.2501V14.0001C16.25 13.0361 16.248 12.3891 16.183 11.9051C16.121 11.4441 16.014 11.2461 15.883 11.1161C15.752 10.9861 15.556 10.8791 15.095 10.8161C14.612 10.7521 13.964 10.7501 13 10.7501H9C8.036 10.7501 7.388 10.7521 6.905 10.8171C6.444 10.8791 6.246 10.9861 6.116 11.1171C5.986 11.2481 5.879 11.4441 5.816 11.9051C5.752 12.3891 5.75 13.0361 5.75 14.0001V19.2501H16.25ZM8.25 7.00005C8.25 6.80114 8.32902 6.61037 8.46967 6.46972C8.61032 6.32907 8.80109 6.25005 9 6.25005H13C13.1989 6.25005 13.3897 6.32907 13.5303 6.46972C13.671 6.61037 13.75 6.80114 13.75 7.00005C13.75 7.19896 13.671 7.38973 13.5303 7.53038C13.3897 7.67103 13.1989 7.75005 13 7.75005H9C8.80109 7.75005 8.61032 7.67103 8.46967 7.53038C8.32902 7.38973 8.25 7.19896 8.25 7.00005ZM7.25 13.5001C7.25 13.3011 7.32902 13.1104 7.46967 12.9697C7.61032 12.8291 7.80109 12.7501 8 12.7501H14C14.1989 12.7501 14.3897 12.8291 14.5303 12.9697C14.671 13.1104 14.75 13.3011 14.75 13.5001C14.75 13.699 14.671 13.8897 14.5303 14.0304C14.3897 14.171 14.1989 14.2501 14 14.2501H8C7.80109 14.2501 7.61032 14.171 7.46967 14.0304C7.32902 13.8897 7.25 13.699 7.25 13.5001ZM7.25 16.5001C7.25 16.3011 7.32902 16.1104 7.46967 15.9697C7.61032 15.8291 7.80109 15.7501 8 15.7501H14C14.1989 15.7501 14.3897 15.8291 14.5303 15.9697C14.671 16.1104 14.75 16.3011 14.75 16.5001C14.75 16.699 14.671 16.8897 14.5303 17.0304C14.3897 17.171 14.1989 17.2501 14 17.2501H8C7.80109 17.2501 7.61032 17.171 7.46967 17.0304C7.32902 16.8897 7.25 16.699 7.25 16.5001Z"
                  fill="#262931"
                />
              </svg>

              <div className="flex flex-col font-galano">
                <span className="font-semibold">2 Autos</span>
                <span className="text-xs">Garage</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H10V10H20V20H0V0ZM2 2V4.5H4.004V6.5H2V9H4.004V11H2V13.5H4.004V15.5H2V18H4.5V16.033H6.5V18H9V16.033H11V18H13.5V16.033H15.5V18H18V12H8V2H2Z"
                  fill="#262931"
                />
              </svg>

              <div className="flex flex-col font-galano">
                <span className="font-semibold">1,000</span>
                <span className="text-xs">Precio por m2</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <Button
              size={"lg"}
              className="w-full bg-[#00B140] text-white [&]:py-6 font-bold"
            >
              Hacer una pregunta
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-4/12 border-[#00B140] text-[#00B140] [&]:py-6"
            >
              Hacer una pregunta
            </Button>
          </div>
          <Collapsible>
            <CollapsibleTrigger className="w-full border-y border-gray-500 py-4 text-sm mt-6">
              <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
                <span className="flex gap-2.5 items-center">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9.00022L8 13.0002L6 11.0002M1 14.8002V9.45221C1 8.91821 1 8.65122 1.065 8.40222C1.12256 8.18212 1.21725 7.97346 1.345 7.78521C1.49 7.57221 1.691 7.39521 2.093 7.04421L6.894 2.84221C7.64 2.19021 8.013 1.86421 8.432 1.74021C8.802 1.63021 9.197 1.63021 9.567 1.74021C9.987 1.86421 10.361 2.19021 11.107 2.84421L15.907 7.04421C16.31 7.39621 16.51 7.57222 16.655 7.78422C16.783 7.97555 16.8763 8.18155 16.935 8.40222C17 8.65122 17 8.91821 17 9.45221V14.8042C17 15.9222 17 16.4812 16.782 16.9092C16.5898 17.2853 16.2835 17.5909 15.907 17.7822C15.48 18.0002 14.921 18.0002 13.803 18.0002H4.197C3.079 18.0002 2.519 18.0002 2.092 17.7822C1.71584 17.5907 1.40991 17.2852 1.218 16.9092C1 16.4802 1 15.9202 1 14.8002Z"
                      stroke="#262931"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Descripción
                </span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.0599 9.05989C8.77865 9.34079 8.3974 9.49857 7.9999 9.49857C7.6024 9.49857 7.22115 9.34079 6.9399 9.05989L1.2819 3.40389C1.00064 3.12249 0.84268 2.74089 0.842773 2.34304C0.842867 1.94518 1.00101 1.56365 1.2824 1.28239C1.56379 1.00113 1.9454 0.843168 2.34325 0.843262C2.74111 0.843356 3.12264 1.00149 3.4039 1.28289L7.9999 5.87889L12.5959 1.28289C12.8787 1.00952 13.2575 0.858143 13.6508 0.861374C14.0441 0.864605 14.4204 1.02218 14.6986 1.30016C14.9769 1.57815 15.1348 1.95429 15.1384 2.34759C15.142 2.74088 14.991 3.11986 14.7179 3.40289L9.0609 9.06089L9.0599 9.05989Z"
                    fill="black"
                  />
                </svg>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-base font-galano py-3">
                Pizza ipsum dolor meat lovers buffalo. Banana stuffed Philly
                roll hand Chicago banana bbq. Lovers cheese dolor sausage
                chicken buffalo. And pizza tossed burnt red. Rib wing Bianca
                ipsum garlic. Spinach marinara style buffalo lot peppers sauce
                lasagna Bianca. Hand chicken party mayo mouth tomatoes meatball
                Aussie stuffed.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    </>
  );
}
