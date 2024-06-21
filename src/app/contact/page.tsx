import { SecondaryHeading } from "@/components/Heading";
import ContactUsForm from "./ContactUsForm";
import ContactInfo from "./ContactInfo";

function ContactUs() {
  return (
    <div>
      <div className="md:hidden">
        <SecondaryHeading>Contact Us</SecondaryHeading>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/5">
          {" "}
          <ContactInfo />{" "}
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
