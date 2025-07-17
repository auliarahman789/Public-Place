import React from "react";

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({}) => {
  return (
    <div className="min-h-screen bg-[#DAD5D2] font-bookmania">
      <div className="w-full max-w-4xl mx-auto">
        <div className="px-6 py-8 ">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[21px] font-extrabold text-black ">
              Terms and Conditions
            </h1>
          </div>

          {/* Content */}
          <div className="text-[16px] leading-[30px] tracking-[0.07em] space-y-4">
            <p className="font-light">
              Welcome to This Book is Your Public Space ("Website", "we", "our",
              or "us"). These Terms and Conditions govern your access to and use
              of our website, services, and content, including the ability to
              upload images and share location data.
            </p>

            <p className="font-light">
              By using this website, you agree to be bound by these terms. If
              you do not agree, please do not use this site.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              1. Purpose of the Website
            </h2>
            <p className="font-light">
              This website serves as a digital extension of the book "This Book
              is Your Public Space", created to inspire self-reflection and open
              sharing. It allows users to upload images, map their current
              locations, and contribute to a collective gallery that reflects
              personal or public activities.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              2. User-Generated Content
            </h2>
            <p className="font-light">
              You are solely responsible for the content (photos, text,
              locations, etc.) you upload or share.
            </p>
            <p className="font-light">
              By submitting content, you confirm that:
            </p>
            <ul className="list-disc ml-6 font-light">
              <li>
                You own the content or have the necessary rights to share it;
              </li>
              <li>
                You grant us a non-exclusive, royalty-free, worldwide license to
                display, reproduce, and share your content for the purpose of
                this website and related media;
              </li>
              <li>
                Your content does not infringe on the rights of others or
                violate any law;
              </li>
              <li>
                Your shared location is voluntarily provided and accurate to
                your best knowledge.
              </li>
            </ul>
            <p className="font-light">
              We reserve the right to remove or reject content that is deemed
              offensive, inappropriate, harmful, or irrelevant to the website's
              purpose.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              3. Privacy and Location Sharing
            </h2>
            <p className="font-light">
              By sharing your location, you acknowledge and consent that the
              data may be displayed publicly. We do not collect personal
              information beyond what is voluntarily provided through the
              content you upload.
            </p>
            <p className="font-light">
              For more information, please see our [Privacy Policy].
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              4. Use of the Website
            </h2>
            <p className="font-light">You agree not to:</p>
            <ul className="list-disc ml-6 font-light">
              <li>
                Upload or distribute unlawful, harmful, defamatory, or
                infringing material;
              </li>
              <li>Use this site for commercial advertising or spam;</li>
              <li>
                Attempt to disrupt, hack, or damage the website or its
                infrastructure.
              </li>
            </ul>
            <p className="font-light">
              Misuse of the website may result in suspension or removal of your
              content or access.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              5. Intellectual Property
            </h2>
            <p className="font-light">
              All original materials on this website, including but not limited
              to text, graphics, images (excluding user uploads), and layout,
              are owned by the website creator and protected under applicable
              copyright laws.
            </p>
            <p className="font-light">
              The book "This Book is Your Public Space" and its related
              materials are the intellectual property of the author and/or
              publisher.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="font-light">
              This website is provided "as-is" and "as-available". We do not
              guarantee uninterrupted access or error-free functionality. You
              use this site at your own risk.
            </p>
            <p className="font-light">
              We are not liable for any loss, injury, or damages resulting from
              your use of the website, including your shared content or
              location.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              7. Modification of Terms
            </h2>
            <p className="font-light">
              We may update these Terms and Conditions from time to time.
              Continued use of the website after changes implies your acceptance
              of the new terms.
            </p>

            <h2 className="text-[16px] font-bold leading-[30px] tracking-[0.07em] mt-6 mb-4">
              8. Contact
            </h2>
            <p className="font-light">
              For any questions regarding these terms, please contact:
            </p>
            <p className="font-light mb-8">
              📧 [Insert your email]
              <br />
              📍 Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
