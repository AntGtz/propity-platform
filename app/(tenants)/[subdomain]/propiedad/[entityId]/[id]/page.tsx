import { EntityPusblish } from "@/components/features/tenant/propierty/EntityPusblish";
import { PropertyCarousel } from "@/components/features/tenant/propierty/PropertyCarousel";
import { PropertyInfo } from "@/components/features/tenant/propierty/PropertyInfo";
import { CTAProperty } from "@/components/features/tenant/propierty/CTAProperty";
import { RelatedProperties } from "@/components/features/tenant/propierty/RelatedProperties";
import { Breadcrumb } from "@/components/features/tenant/propierty/Breadcrumb";

interface PageProps {
  params: Promise<{
    entityId: string;
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const paramsPage = await params;
  const entityId = paramsPage.entityId;
  const propertyId = paramsPage.id;

  return (
    <>
      <section className="flex flex-col w-full h-full max-w-7xl mx-auto py-4 md:py-12 md:px-0 px-4 font-galano">
        <div className={"w-full hidden md:flex justify-between items-center"}>
          <Breadcrumb entityId={entityId} id={propertyId} />
          <div className={"flex items-center gap-5 text-sm"}>
            <span className={"flex items-center gap-1"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M5 8L10 13M10 13L15 8M10 13V1"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19.0004L8.55 17.7004C6.86667 16.1837 5.475 14.8754 4.375 13.7754C3.275 12.6754 2.4 11.6877 1.75 10.8124C1.1 9.93706 0.646 9.13306 0.388 8.40039C0.13 7.66772 0.000666667 6.91772 0 6.15039C0 4.58372 0.525 3.27539 1.575 2.22539C2.625 1.17539 3.93333 0.650391 5.5 0.650391C6.36667 0.650391 7.19167 0.833724 7.975 1.20039C8.75833 1.56706 9.43333 2.08372 10 2.75039C10.5667 2.08372 11.2417 1.56706 12.025 1.20039C12.8083 0.833724 13.6333 0.650391 14.5 0.650391C16.0667 0.650391 17.375 1.17539 18.425 2.22539C19.475 3.27539 20 4.58372 20 6.15039C20 6.91706 19.871 7.66706 19.613 8.40039C19.355 9.13372 18.9007 9.93773 18.25 10.8124C17.5993 11.6871 16.7243 12.6747 15.625 13.7754C14.5257 14.8761 13.134 16.1844 11.45 17.7004L10 19.0004ZM10 16.3004C11.6 14.8671 12.9167 13.6381 13.95 12.6134C14.9833 11.5887 15.8 10.6971 16.4 9.93839C17 9.17972 17.4167 8.50439 17.65 7.91239C17.8833 7.32039 18 6.73306 18 6.15039C18 5.15039 17.6667 4.31706 17 3.65039C16.3333 2.98372 15.5 2.65039 14.5 2.65039C13.7167 2.65039 12.9917 2.87106 12.325 3.31239C11.6583 3.75372 11.2 4.31639 10.95 5.00039H9.05C8.8 4.31706 8.34167 3.75472 7.675 3.31339C7.00833 2.87206 6.28333 2.65106 5.5 2.65039C4.5 2.65039 3.66667 2.98372 3 3.65039C2.33333 4.31706 2 5.15039 2 6.15039C2 6.73372 2.11667 7.32139 2.35 7.91339C2.58333 8.50539 3 9.18039 3.6 9.93839C4.2 10.6964 5.01667 11.5881 6.05 12.6134C7.08333 13.6387 8.4 14.8677 10 16.3004Z"
                  fill="#262931"
                />
              </svg>
            </span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.707 11.2928L13.707 3.29279C13.5671 3.15298 13.389 3.05777 13.195 3.0192C13.0011 2.98064 12.8 3.00044 12.6173 3.07611C12.4346 3.15178 12.2785 3.27992 12.1686 3.44433C12.0587 3.60874 12 3.80204 12 3.99979V7.54479C9.26829 7.79758 6.72923 9.06065 4.87969 11.0868C3.03015 13.113 2.00327 15.7564 2 18.4998V19.9998C2.00016 20.2074 2.06491 20.4098 2.18527 20.5789C2.30564 20.748 2.47565 20.8755 2.67173 20.9436C2.8678 21.0118 3.08022 21.0172 3.27953 20.9592C3.47883 20.9011 3.65514 20.7825 3.784 20.6198C4.76385 19.4549 5.96594 18.4969 7.3201 17.8017C8.67426 17.1065 10.1533 16.6881 11.671 16.5708C11.721 16.5648 11.846 16.5548 12 16.5448V19.9998C12 20.1975 12.0587 20.3908 12.1686 20.5552C12.2785 20.7197 12.4346 20.8478 12.6173 20.9235C12.8 20.9991 13.0011 21.0189 13.195 20.9804C13.389 20.9418 13.5671 20.8466 13.707 20.7068L21.707 12.7068C21.8945 12.5193 21.9998 12.265 21.9998 11.9998C21.9998 11.7346 21.8945 11.4803 21.707 11.2928ZM14 17.5858V15.4998C14 15.2346 13.8946 14.9802 13.7071 14.7927C13.5196 14.6051 13.2652 14.4998 13 14.4998C12.745 14.4998 11.704 14.5498 11.438 14.5848C8.74279 14.8328 6.17727 15.8568 4.052 17.5328C4.29324 15.3272 5.33954 13.2881 6.99055 11.8059C8.64157 10.3238 10.7813 9.50263 13 9.49979C13.2652 9.49979 13.5196 9.39443 13.7071 9.20689C13.8946 9.01936 14 8.765 14 8.49979V6.41379L19.586 11.9998L14 17.5858Z"
                  fill="#262931"
                />
              </svg>
            </span>
          </div>
        </div>
        <EntityPusblish entityId={entityId} />
        <PropertyCarousel entityId={entityId} id={propertyId} />
        <PropertyInfo propertyId={propertyId} entityId={entityId} />
      </section>
      <CTAProperty id={propertyId} entityId={entityId} />
      <RelatedProperties entityId={entityId} />
    </>
  );
}
