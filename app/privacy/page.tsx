import Head from 'next/head';
import Link from 'next/link';
export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Mera Samaaj</title>
        <meta name="description" content="Privacy Policy for Mera Samaaj application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 text-gray-900 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          </section>

          {/* Privacy Policy Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy for Mera Samaaj</h2>
            <p className="text-gray-700 mb-2">Effective date: 22-Jan-2023</p>
            <p className="text-gray-700 mb-4">
              This Privacy Policy outlines how Mera Samaaj ("we," "our," or "us") collects, uses, shares, and protects the
              personal information of users ("you" or "your") of our mobile application. By using Mera Samaaj, you agree to
              the terms of this Privacy Policy.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Information We Collect:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    <strong>User Provided Information:</strong> We may collect information that you provide when using
                    our app, including but not limited to your name, email address, profile information, photos, and any
                    other information you choose to provide.
                  </li>
                  <li>
                    <strong>Automatically Collected Information:</strong> We may automatically collect certain
                    information when you use our app, such as your device type, IP address, device ID, and usage patterns.
                  </li>
                </ul>
              </li>
              <li>
                <strong>How We Use Your Information:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    <strong>Personalization:</strong> We use your information to personalize your experience within the
                    app, providing you with relevant content, features, and recommendations.
                  </li>
                  <li>
                    <strong>Communication:</strong> We may use your contact information to send you updates, newsletters,
                    and important announcements related to the community and app.
                  </li>
                  <li>
                    <strong>Improvements and Analytics:</strong> We use collected data to analyze app usage patterns,
                    troubleshoot issues, and enhance the overall functionality and user experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sharing Your Information:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    <strong>With Your Consent:</strong> We may share your information with your consent or as explicitly
                    stated within the app.
                  </li>
                  <li>
                    <strong>Community Engagement:</strong> Your profile information, posts, and contributions within the
                    community may be visible to other community members according to your privacy settings.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> We may disclose your information in response to legal requests or
                    to comply with applicable laws and regulations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Security:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    <strong>Data Security:</strong> We implement reasonable security measures to protect your information
                    from unauthorized access, alteration, disclosure, or destruction.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Your Choices:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    <strong>Account Settings:</strong> You can manage your account settings and privacy preferences
                    within the app.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You have the option to opt-out of promotional communications by following
                    the instructions provided in such communications.
                  </li>
                  <li>
                    <strong>Account & Data Deletion:</strong> You can delete your account from inside the app by selecting
                    the "Delete account" option in the Settings from the navigation menu. All your profile data will be
                    permanently deleted except your name as a community member.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Children's Privacy:</strong> Our app is not intended for individuals under the age of 13. Any
                information about children is provided and managed by their parents or family members.
              </li>
              <li>
                <strong>Changes to this Privacy Policy:</strong> We reserve the right to modify this Privacy Policy at any
                time. Updates will be posted within the app, and your continued use constitutes acceptance of the revised
                policy.
              </li>
              <li>
                <strong>Contact Us:</strong> If you have any questions or concerns about this Privacy Policy, please
                contact us at mail@merasamaaj.com.
              </li>
            </ol>
          </section>
          <div className="mt-8">
          <Link href="/" className="text-[#e75480] hover:underline">Back to Home</Link>
        </div>
        </div>
      </main>
    </>
  );
}
