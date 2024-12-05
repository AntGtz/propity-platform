import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/common/collapsible";

export default function FAQ() {
  return (
    <>
      <section className={"py-24 px-16 flex flex-col font-galano"}>
        <h1 className={"text-4xl font-bold text-[#041E42]"}>
          Preguntas frecuentes
        </h1>
        <Collapsible>
          <CollapsibleTrigger className="w-full border-y border-gray-500 py-4 text-sm mt-6">
            <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
              <span className="flex gap-2.5 items-center">Qué es Propity?</span>
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
              Pizza ipsum dolor meat lovers buffalo. Banana stuffed Philly roll
              hand Chicago banana bbq. Lovers cheese dolor sausage chicken
              buffalo. And pizza tossed burnt red. Rib wing Bianca ipsum garlic.
              Spinach marinara style buffalo lot peppers sauce lasagna Bianca.
              Hand chicken party mayo mouth tomatoes meatball Aussie stuffed.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="w-full border-y border-gray-500 py-4 text-sm mt-6">
            <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
              <span className="flex gap-2.5 items-center">
                Qué solución nos brinda Propity?
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
              Pizza ipsum dolor meat lovers buffalo. Banana stuffed Philly roll
              hand Chicago banana bbq. Lovers cheese dolor sausage chicken
              buffalo. And pizza tossed burnt red. Rib wing Bianca ipsum garlic.
              Spinach marinara style buffalo lot peppers sauce lasagna Bianca.
              Hand chicken party mayo mouth tomatoes meatball Aussie stuffed.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="w-full border-y border-gray-500 py-4 text-sm mt-6">
            <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
              <span className="flex gap-2.5 items-center">Qué es Propity?</span>
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
              Pizza ipsum dolor meat lovers buffalo. Banana stuffed Philly roll
              hand Chicago banana bbq. Lovers cheese dolor sausage chicken
              buffalo. And pizza tossed burnt red. Rib wing Bianca ipsum garlic.
              Spinach marinara style buffalo lot peppers sauce lasagna Bianca.
              Hand chicken party mayo mouth tomatoes meatball Aussie stuffed.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="w-full border-y border-gray-500 py-4 text-sm mt-6">
            <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
              <span className="flex gap-2.5 items-center">Qué es Propity?</span>
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
              Pizza ipsum dolor meat lovers buffalo. Banana stuffed Philly roll
              hand Chicago banana bbq. Lovers cheese dolor sausage chicken
              buffalo. And pizza tossed burnt red. Rib wing Bianca ipsum garlic.
              Spinach marinara style buffalo lot peppers sauce lasagna Bianca.
              Hand chicken party mayo mouth tomatoes meatball Aussie stuffed.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </>
  );
}
