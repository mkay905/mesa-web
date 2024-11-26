import Head from 'next/head';
import Link from 'next/link'
export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use | Mera Samaaj</title>
        <meta name="description" content="Terms of Use for Mera Samaaj application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 text-gray-900 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
          </section>

          {/* Terms of Use Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Terms of Use for Mera Samaaj</h2>
            <p className="text-gray-700 mb-2">Effective date: 22-Jan-2023</p>
            <p className="text-gray-700 mb-4">
              These Terms of Use ("Terms," "Agreement") govern your access to and use of the Mera Samaaj mobile application
              ("the App"). By using the App, you agree to comply with these Terms.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Eligibility:</strong>
                <p className="text-gray-700 mt-2">
                  You must be at least 13 years old to use the App. If you are under 18, you may use the App only under the
                  supervision of a parent or legal guardian who agrees to these Terms.
                </p>
              </li>
              <li>
                <strong>User Responsibilities:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>Provide accurate and truthful information during account creation.</li>
                  <li>
                    Respect other users and community guidelines, refraining from any abusive, harassing, or unlawful
                    behavior.
                  </li>
                  <li>
                    Do not upload or share content that infringes on intellectual property rights, contains offensive
                    material, or violates applicable laws.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Prohibited Activities:</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>Attempting to gain unauthorized access to other users' accounts or data.</li>
                  <li>Disrupting the functionality of the App through malicious activities.</li>
                  <li>Using the App for any illegal or unauthorized purpose.</li>
                </ul>
              </li>
              <li>
                <strong>Intellectual Property:</strong>
                <p className="text-gray-700 mt-2">
                  All content, trademarks, logos, and features within the App are the property of Mera Samaaj or its
                  licensors. You may not reproduce, distribute, or use such materials without prior written permission.
                </p>
              </li>
              <li>
                <strong>Termination:</strong>
                <p className="text-gray-700 mt-2">
                  We reserve the right to suspend or terminate your access to the App if you violate these Terms or engage
                  in behavior that harms the community.
                </p>
              </li>
              <li>
                <strong>Disclaimer of Warranties:</strong>
                <p className="text-gray-700 mt-2">
                  The App is provided "as is" and "as available" without warranties of any kind, either express or implied,
                  including but not limited to fitness for a particular purpose or non-infringement.
                </p>
              </li>
              <li>
                <strong>Limitation of Liability:</strong>
                <p className="text-gray-700 mt-2">
                  Mera Samaaj shall not be liable for any direct, indirect, incidental, or consequential damages resulting
                  from your use of the App.
                </p>
              </li>
              <li>
                <strong>Changes to Terms:</strong>
                <p className="text-gray-700 mt-2">
                  We reserve the right to update these Terms at any time. Continued use of the App after updates
                  constitutes acceptance of the revised Terms.
                </p>
              </li>
              <li>
                <strong>Governing Law:</strong>
                <p className="text-gray-700 mt-2">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be
                  resolved in the courts of [Insert Jurisdiction].
                </p>
              </li>
              <li>
                <strong>Contact Us:</strong>
                <p className="text-gray-700 mt-2">
                  For any questions or concerns regarding these Terms, please contact us at mail@merasamaaj.com.
                </p>
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
