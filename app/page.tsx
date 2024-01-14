import TemplateCard from "@/components/Shared/TemplateCard";

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-between">
        <h2 className=" text-2xl font-normal tracking-[0.01em] text-white">
          Templates
        </h2>
        <div className=" inline-flex items-center gap-3">
          <button className=" btn  btn-primary ">Submit</button>
          <button className=" hidden sm:inline-flex btn  btn-secondary text-black ">
            Remix template
          </button>
        </div>
      </div>
      <div className=" h-[1px] w-full flex-none overflow-hidden relative bg-skin-gray-900/5"></div>
      <div className="grid relative overflow-visible gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </>
  );
}
