"use client";
import TemplateCard from "@/components/Shared/TemplateCard";
import Breadcrumbs from "@/components/TemplateDetails/Breadcrumbs";
import TemplateImagesCarusel from "@/components/TemplateDetails/SlidesImages";
import dummyData from "@/data/templates.json";
import { Product } from "@/types";
import { EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
const TemplateDetails = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Product | undefined>();

  useEffect(() => {
    const item = dummyData.find(
      (item) => item.slug === `/templates/${params.slug}`
    );

    if (item) {
      setData(item);
    }
  }, [params.slug]);

  console.log(dummyData[0].slug === `/templates/${params.slug}`);

  return (
    <>
      <Breadcrumbs title={data?.title || ""} />
      <div className=" flex flex-col gap-8 w-full max-w-[1280px] mx-auto ">
        <div className=" flex flex-col lg:flex-row  gap-6  justify-between  content-end lg:items-end overflow-visible relative w-full">
          <div className="flex  lg:max-w-[480px] flex-col gap-4">
            <h2 className=" text-white text-4xl font-normal tracking-[0.01em] leading-[110%]">
              {data?.title}
            </h2>
            <p>{data?.description}</p>
          </div>
          <div className=" h-min overflow-visible justify-end flex flex-col lg:flex-row lg:items-center gap-3">
            <Link
              href={data?.preview_url || ""}
              target="_blank"
              className=" h-10 btn  btn-primary "
            >
              <EyeIcon className=" w-4 h-4 " strokeWidth={1} />
              Preview
            </Link>
            <Link
              className="h-10   sm:inline-flex btn  btn-secondary text-black "
              href={"/"}
              target="_blank"
            >
              Buy now {data?.price}
            </Link>
          </div>
        </div>
        <TemplateImagesCarusel images={data?.slides_images || []} />
        <div className="flex gap-5 flex-col lg:flex-row items-start flex-none justify-between overflow-visible w-full relative">
          <div className=" w-full gap-4 flex flex-col xl:max-w-[720px]">
            <div>
              <h2 className="  text-2xl font-normal leading-[130%]">
                Overview
              </h2>
            </div>
            <p className=" text-sm text-[#ada89f] font-normal">
              {data?.description}
            </p>
            <div>
              <p className=" text-sm text-[#ada89f] font-normal">
                Why Choose Nexus AI Framer Template:
              </p>
              <div>
                <ul className=" pt-4 space-y-1 list-disc list-inside">
                  {data?.overviews.key_features.map((feature, i) => (
                    <li key={i} className=" text-sm text-[#ada89f] font-normal">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-auto ">
            <div className=" flex rounded-md flex-none border  border-skin-sidebar-border flex-col gap-6 overflow-visible h-min p-6 w-full xl:min-w-[280px] xl:max-w-[280px] bg-[#1c1715]">
              <div className=" gap-2">
                <p
                  className=" text-sm font-normal leading-[140%]"
                  style={{
                    color: "rgb(250, 249, 247)",
                  }}
                >
                  Pages
                </p>
                <ul className=" pt-4 space-y-1 list-disc list-inside">
                  <li className=" text-sm text-[#ada89f] font-normal">
                    {data?.pages.total_pages} Pages Types
                  </li>

                  <li className=" text-sm text-[#ada89f] font-normal">
                    {data?.pages.cms_collection} CMS-Collections
                  </li>
                </ul>
              </div>
              <div className=" gap-2">
                <p
                  className=" text-sm font-normal leading-[140%]"
                  style={{
                    color: "rgb(250, 249, 247)",
                  }}
                >
                  Support
                </p>
                <ul className=" pt-4 space-y-1 list-disc list-inside">
                  <li className=" text-sm text-[#ada89f] font-normal">
                    Get help from the community
                  </li>

                  <li className=" text-sm text-[#ada89f] font-normal">
                    Feature Requests
                  </li>
                  <li className=" text-sm text-[#ada89f] font-normal">
                    Framer Community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" py-5 xl:py-8">
            <h2 className=" text-2xl text-white font-normal">
              You may also like
            </h2>
          </div>
          <div className="grid  relative overflow-visible gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dummyData &&
              dummyData.map((item) => (
                <TemplateCard
                  title={item.title}
                  feature_image={item.feature_image}
                  slug={item.slug}
                  category={item.category}
                  price={item.price}
                  key={item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateDetails;
