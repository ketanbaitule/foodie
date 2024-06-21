import { SecondaryHeading } from "@/components/Heading";

function Refund() {
  return (
    <div className="flex flex-col gap-y-5">
      <SecondaryHeading>Refund and Return Policy</SecondaryHeading>
      <div className="text-lg flex flex-col gap-y-5">
        <p>
          <h2 className="font-bold ">Order Accuracy and Quality:</h2>
          Foodie takes utmost care to ensure that your order is accurate and
          meets our quality standards. If you receive an incorrect order or if
          there is an issue with the quality of the food delivered, please
          contact us immediately upon receipt of your order.
        </p>
        <p>
          <h2 className="font-bold ">Refunds and Replacements:</h2>
          If you receive an incorrect order (e.g., wrong item delivered), please
          notify our customer service within same day of delivery. We will
          arrange for a replacement of the incorrect item or issue a refund for
          the amount paid for that item. If you encounter any quality issues
          with the food you have received, such as spoiled or damaged items,
          please notify us immediately with supporting evidence (e.g., photos).
          Depending on the circumstances and at our discretion, we may offer a
          refund or replacement.
        </p>
        <p>
          <h2 className="font-bold ">Cancellation Policy:</h2>
          You may cancel your order without any charges up to [number of hours]
          hours before the scheduled delivery time. Cancellations made within
          [number of hours] hours of delivery may be subject to a cancellation
          fee. Once an order has been delivered, it cannot be canceled. Please
          contact us immediately if there are any issues with your order.
        </p>
        <p>
          <h2 className="font-bold ">How to Contact Us:</h2>
          For any questions or concerns regarding your order or our return
          policy, please contact our customer service team at [contact
          information]. Our team will assist you promptly and provide further
          instructions on how to proceed with returns or refunds.
        </p>
        <p>
          <h2 className="font-bold ">Exceptions:</h2>
          Our return policy does not cover changes in personal taste
          preferences, orders where the customer has provided incorrect delivery
          information, or delays caused by factors outside of Foodie&apos;s
          control (e.g., weather conditions affecting delivery).
        </p>
        <p>
          <h2 className="font-bold ">Changes to the Return Policy:</h2>
          Foodie reserves the right to update or modify this return policy at
          any time without prior notice. Any changes will be effective
          immediately upon posting on our website. We encourage you to review
          this policy periodically for any updates.
        </p>
        <p>
          By placing an order on the Foodie website, you acknowledge that you
          have read, understood, and agree to our return policy.
        </p>
      </div>
    </div>
  );
}

export default Refund;
