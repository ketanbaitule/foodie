import { SecondaryHeading } from "@/components/Heading";

function TermsAndConditions() {
  return (
    <div className="flex flex-col gap-y-5">
      <SecondaryHeading>Terms and Conditions</SecondaryHeading>
      <div className="text-lg flex flex-col gap-y-3">
        <p>
          Welcome to Foodie. By accessing this website, you agree to be bound by
          these terms and conditions of use. If you do not agree with any of
          these terms, you are prohibited from using or accessing this site.
        </p>

        <p>
          <h2 className="font-bold">Use License</h2>
          The content on this website is for general information purposes only.
          Foodie does not provide any warranty or guarantee as to the accuracy,
          timeliness, performance, completeness, or suitability of the
          information and materials found or offered on this website for any
          particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors, and Foodie expressly
          excludes liability for any such inaccuracies or errors to the fullest
          extent permitted by law.
        </p>

        <p>
          <h2 className="font-bold">Disclaimer</h2>
          Your use of any information or materials on this website is entirely
          at your own risk, for which Foodie shall not be liable. It is your
          responsibility to ensure that any products, services, or information
          available through this website meet your specific requirements.
        </p>

        <p>
          <h2 className="font-bold">Limitations</h2>
          This website contains material that is owned by or licensed to Foodie.
          This material includes, but is not limited to, the design, layout,
          look, appearance, and graphics. Reproduction is prohibited other than
          in accordance with the copyright notice.
        </p>

        <p>
          <h2 className="font-bold">Links</h2>
          Foodie may revise these terms of service at any time without prior
          notice. By using this website, you agree to be bound by the current
          version of these terms. These terms are governed by the laws of India,
          and you agree to submit to the exclusive jurisdiction of the courts in
          that jurisdiction.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
