import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { FC } from "react";

interface Props {
  images: string[];
}

const TemplateImagesCarusel: FC<Props> = ({ images }) => {
  // const data: BlogCard[] = await getAllBlogs();

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {images?.map((item, index) => (
            <CarouselItem className="md:basis-1/2 xl:basis-[40%]" key={index}>
              <div>
                <Image
                  src={item}
                  alt="tadjfndkj"
                  quality={90}
                  width={400}
                  height={325}
                  className=" border-inherit w-full h-full object-cover object-center "
                  style={{
                    imageRendering: "auto",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          style={{
            background: "rgb(15, 12, 11)",
          }}
          className=" w-10 h-10 left-4 border-none hover:text-white "
        />
        <CarouselNext
          style={{
            background: "rgb(15, 12, 11)",
          }}
          className=" right-4 w-10 h-10  border-none hover:text-white "
        />
      </Carousel>
    </div>
  );
};

export default TemplateImagesCarusel;
