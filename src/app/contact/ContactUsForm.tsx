import { SecondaryHeading } from "@/components/Heading";

function ContactUsForm() {
  return (
    <div>
      <div className="max-md:hidden">
        <SecondaryHeading>Contact Us</SecondaryHeading>
      </div>
      <div className="flex flex-col gap-y-5 px-5 py-10 text-black ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            className=" p-3 rounded-lg border  "
          />
          <input
            type="text"
            placeholder="Your Email"
            required
            className=" p-3 rounded-lg border  "
          />
          <input
            type="text"
            placeholder="Your Phone"
            required
            className=" p-3 rounded-lg border  "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
          <input
            type="text"
            placeholder="Food Name"
            required
            className=" p-3 rounded-lg border  "
          />
          <input
            type="text"
            placeholder="Food Category"
            required
            className=" p-3 rounded-lg border  "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <input
            type="text"
            placeholder="Your Address"
            required
            className=" p-3 rounded-lg border  "
          />
          <input
            type="text"
            placeholder="City"
            required
            className=" p-3 rounded-lg border  "
          />
          <input
            type="text"
            placeholder="Pincode"
            required
            className=" p-3 rounded-lg border  "
          />
        </div>
        <div className="px-5">
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className=" rounded-lg
                  h-[200px]
                  w-full p-5  border "
          ></textarea>
        </div>

        <div className="flex px-5 w-full justify-end max-[880px]:justify-center">
          <button className="bg-red-500 hover:bg-red-500/80 hover:scale-95 duration-300 transition-all rounded-md px-5 py-3 text-white ">
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
