import { BsMailbox } from "react-icons/bs";
import { CgHeadset } from "react-icons/cg";
import { IoMdPin } from "react-icons/io";

function ContactInfo() {
  return (
    <div className="my-5">
      <div>
        <h2 className="flex item-center justify-center gap-x-3 ">
          <CgHeadset className="bg-red-500 h-10 w-10 rounded-full p-2 text-white" />
          <span className="text-lg font-medium">Call Us?</span>
        </h2>

        <div className="flex flex-wrap px-10 font-normal text-sm pt-4 pb-2 items-center gap-2">
          <span className="font-medium text-base">Phone:</span> +91 90590 18182
        </div>
        <div className="flex flex-wrap px-10 font-normal text-xs">
          We are available 24/7 and 7 days a week.
        </div>
      </div>

      <div className="flex px-12 py-10 w-full">
        <hr className="w-full h-[2px] text-[#222] bg-[#8b8b8b]" />
      </div>

      <div>
        <h2 className="flex item-center justify-center gap-x-3 ">
          <IoMdPin className="bg-red-500 h-10 w-10 rounded-full p-2 text-white" />
          <span className="text-lg font-medium">Our Location</span>
        </h2>

        <div className="flex flex-wrap px-10 font-normal text-sm pt-4 pb-2 items-center gap-2">
          <span className="font-medium text-base">Address:</span>
          <span className="text-wrap">
            Beside Indian Oil Petrol Bunk, RCI Road, Jillelguda, Hyderabad
          </span>
        </div>
      </div>

      <div className="flex px-12 py-10 w-full">
        <hr className="w-full h-[2px] text-[#222] bg-[#8b8b8b]" />
      </div>

      <div>
        <h2 className="flex item-center justify-center gap-x-3 ">
          <BsMailbox className="bg-red-500 h-10 w-10 rounded-full p-2 text-white" />
          <span className="text-lg font-medium">Write to Us?</span>
        </h2>

        <div className="flex flex-wrap px-10 font-normal text-sm pt-4 pb-2 items-center gap-2">
          <span className="font-medium text-base">Email:</span> foodie@foodie
        </div>
        <div className="flex flex-wrap px-10 font-normal text-xs">
          Fill out the form and we will contact you within 24 Hrs.
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
