import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "../ui/badge";

interface Props {
  slug: string;
  title: string;
  category: string;
  price: number;
  feature_image: string;
}

const TemplateCard: FC<Props> = ({
  slug,
  title,
  category,
  price,
  feature_image,
}) => {
  return (
    <Link
      href={slug.toString().toLowerCase()}
      className={`border rounded-lg p-3 relative group space-y-2.5 will-change-transform border-skin-gray-900/5 cursor-pointer link-transition`}
    >
      <div className="template-card-image-container">
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[inherit]">
          <Image
            src={feature_image}
            className="block w-full h-full object-cover object-center"
            style={{
              imageRendering: "auto",
            }}
            alt=""
            width={350}
            height={700}
          />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1">
            <div>
              <h5 className="text-sm group-hover:text-white text-skin-gray-100 font-normal">
                {title}
              </h5>
            </div>
            <Badge variant={"new"}>new</Badge>
          </div>
          <div>
            <h5 className="text-sm text-skin-gray-100 font-normal">${price}</h5>
          </div>
        </div>
        <div>
          <p className="text-sm text-skin-gray-200 font-normal">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
