import { SecondaryHeading } from "@/components/Heading";

function PrivacyPolicy() {
  return (
    <div>
      <SecondaryHeading>Privacy Policy</SecondaryHeading>
      <div className="text-lg flex flex-col gap-y-3 my-3">
        <p>
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website, https://foodie.com , and other sites we own and operate.
        </p>
        <p>
          <h2 className="font-bold">Information we collect</h2>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <p>
          <h2 className="font-bold">Account Information</h2>
          When you sign up for an account, we require certain information such
          as We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </p>
        <p>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </p>
        <p>
          <h2 className="font-bold">Log Data</h2>
          When you visit our website, our servers may automatically log the Our
          website may link to external sites that are not operated by us. Please
          be aware that we have no control over the content and practices of
          these sites, and cannot accept responsibility or liability for their
          respective privacy policies.
        </p>
        <p>
          <h2 className="font-bold">Security</h2>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
