import Head from "next/head";

export default function ChildSafety() {
  return (
    <>
      <Head>
        <title>Child Safety Standards - Mera Samaaj</title>
        <meta name="description" content="Child safety policies and standards for Mera Samaaj app." />
      </Head>
      
      <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Child Safety Standards
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
          <p className="text-gray-700">
            At <strong>Mera Samaaj</strong>, we are committed to creating a safe and secure platform for users of all ages, especially children. Our app follows Google's <strong>Child Safety Policy</strong> and other applicable regulations to ensure a safe online experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">2. Age Restrictions & User Access</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Users under <strong>13 years</strong> require parental consent.</li>
            <li>Parental accounts can manage child profiles.</li>
            {/* <li>Age verification is implemented during registration.</li> */}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">3. Content Moderation & Protection</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>We prohibit explicit, violent, or abusive content.</li>
            <li>Content moderation uses manual reviews.</li>
            <li>Users can <strong>report inappropriate content</strong> for review from the app.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">4. Privacy & Data Protection</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>No personal data is collected from children without parental consent.</li>
            <li>All personal information is securely stored.</li>
            <li>Child accounts have restricted access to community interactions.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">5. Parental Controls & Account Management</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Parents can manage and monitor their child’s profile.</li>
            <li>Restrictions on messaging and visibility options.</li>
            <li>Parental approval is required for content sharing.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">6. Safety & Reporting Tools</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>In-app reporting for inappropriate content.</li>
            <li>Blocking and restriction options.</li>
            <li>Community moderation for a safe environment.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">7. Compliance with Google Play Policies</h2>
          <p className="text-gray-700">
            We comply with <strong>Google Play’s Developer Program Policies</strong> related to child safety and content moderation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">8. Contact & Support</h2>
          <p className="text-gray-700">
            If you have concerns about child safety or data privacy, contact us:
          </p>
          <p className="text-gray-700">
            <strong>📧 Email:</strong> <a href="mailto:support@merasamaaj.com" className="text-blue-600">mail@merasamaaj.com</a>
          </p>
          <p className="text-gray-700">
            <strong>📞 Phone:</strong> +91 9687615385
          </p>
        </section>
      </div>
    </>
  );
}
