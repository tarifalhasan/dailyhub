import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const SubmitAWebsiteModal = () => {
  return (
    <Dialog>
      <DialogTrigger className=" btn  btn-primary">Submit</DialogTrigger>
      <DialogContent className=" max-w-[330px] border border-skin-sidebar-border bg-[#1c1715]">
        <DialogHeader>
          <div className="flex flex-col gap-2.5">
            <h3 className=" text-xl font-normal text-white">
              Submit a website
            </h3>
            <DialogDescription
              style={{
                color: "rgb(173, 168, 159)",
              }}
              className=" text-sm font-normal"
            >
              Found a site you fancy? If it clicks with us too, watch for it in
              our catalog!
            </DialogDescription>
            <Input
              className=" placeholder:uppercase px-3 py-2 outline-none  border-none focus-visible:ring-orange-600 text-base  "
              style={{
                background: "rgb(15, 12, 11)",
              }}
              placeholder="url"
            />
            <Button className=" gap-2 text-sm font-normal">
              Submit{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className=" w-4 h-4"
                style={{
                  userSelect: "none",

                  display: "inline-block",
                  fill: "var(--token-8e31c792-a2b2-4310-85be-0353403e865c, rgb(15, 13, 11))",
                  color:
                    "var(--token-8e31c792-a2b2-4310-85be-0353403e865c, rgb(15, 13, 11))",
                  flexShrink: 0,
                }}
              >
                <g color='var(--token-8e31c792-a2b2-4310-85be-0353403e865c, rgb(15, 13, 11)) /* {"name":"Text-inverse"} */'>
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </g>
              </svg>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitAWebsiteModal;
