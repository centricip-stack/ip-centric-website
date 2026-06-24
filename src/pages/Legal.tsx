import Seo from "../components/Seo";
import ImageHero from "../components/ImageHero";
import { CONTACT } from "../data/site";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  return (
    <>
      <Seo title={title} />
      <ImageHero
        image={isPrivacy ? "/images/privacy-hero.jpg" : "/images/terms-hero.jpg"}
        eyebrow="Legal"
        title={title}
        subtitle={
          isPrivacy
            ? "How we handle the information you share with us."
            : "The terms that govern the use of this website and our services."
        }
      />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-muted leading-relaxed space-y-8">
          {isPrivacy ? (
            <>
              {/* Privacy Policy Text */}
              <p>
                At <span className="text-ink font-semibold">IP Centric Systems</span>, 
                protecting your privacy is a core part of how we build trust and deliver 
                responsible technology solutions. This Privacy Policy explains how we collect, 
                use, store, and safeguard your personal information when you visit or interact with us.
              </p>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">1. Information We Collect</h3>
                <p className="mb-3">We collect data and information you choose to share with us. This includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold text-ink">IP Centric System Data:</span> Network technical logs, 
                    IP configuration details, and system data required to deliver our IP services.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Information You Provide Voluntarily:</span> Name, 
                    email address, and mobile phone number when you fill out forms or request services.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">2. SMS Communication & Data Usage</h3>
                <p className="mb-3">If you choose to provide your mobile phone number:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your mobile number, SMS opt-in data, and consent are used only for communication related to the services you requested.</li>
                  <li>No mobile information is shared with third parties or affiliates for marketing or promotional purposes.</li>
                  <li>SMS consent data and opt-in information are never sold, rented, or disclosed.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">3. How We Use Your Information</h3>
                <p className="mb-3">We use the collected data to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Operate, maintain, and optimize the IP Centric System.</li>
                  <li>Respond to your inquiries and deliver requested services.</li>
                  <li>Ensure network security and prevent system abuse.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">4. Information Sharing & Disclosure</h3>
                <p>
                  We do not sell or rent your personal information. Data is only shared with trusted 
                  service providers who help run our platform under strict confidentiality agreements.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Terms of Service Text */}
              <p>
                Welcome to <span className="text-ink font-semibold">IP Centric Systems</span>. 
                These Terms of Service govern your access to and use of our website, 
                services, and any related content available at our platform. By accessing or using 
                our website, you agree to comply with these Terms. If you do not agree, please refrain 
                from using our website.
              </p>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">1. About IP Centric System</h3>
                <p>
                  IP Centric System provides network technical logs, IP configuration management, and 
                  digital solutions designed to deliver responsible and effective technology. All content 
                  on this website is for general informational purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">2. Use of the Website</h3>
                <p className="mb-3">You agree to use our website only for lawful purposes. You must not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Violate any applicable network laws or regulations.</li>
                  <li>Disrupt or interfere with the security, functionality, or performance of the website.</li>
                  <li>Attempt unauthorized access to any part of the system.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">3. Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, and system designs, 
                  is the property of IP Centric System. You may not copy, reproduce, or reuse any content 
                  without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">4. User Submissions</h3>
                <p className="mb-3">If you submit information through contact forms or emails:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You confirm that the information provided is accurate.</li>
                  <li>You grant IP Centric System permission to use this data solely to respond to your inquiries or provide requested services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">5. Limitation of Liability</h3>
                <p>
                  IP Centric System shall not be liable for any direct or indirect damages arising out 
                  of your use or inability to use the website, system interruptions, or security issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">6. Changes to These Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. Continued use of the website 
                  after updates constitutes acceptance of the revised Terms.
                </p>
              </div>
            </>
          )}

          {/* Contact Section */}
          <div className="pt-6 border-t border-gray-100">
            <p>
              If you have any questions about our policies or terms, please reach
              out to us at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-500 font-semibold hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
