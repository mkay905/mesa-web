export default function InvitePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f7fc] px-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/logo_b.png"
          alt="Mera Samaaj Logo"
          className="w-20 h-20 mx-auto"
        />
      </div>

      {/* Invite text */}
      <p className="text-gray-700 font-medium text-center">
        Mahesh Bhavsar has invited you to
      </p>

      {/* Community name */}
      <h1 className="text-3xl font-semibold text-[#c25a86] text-center mt-2">
        Bhavsar
      </h1>
      <p className="text-sm text-gray-600 mb-6">Samaaj</p>

      {/* Info card */}
      <div className="bg-white rounded-xl shadow-sm p-5 text-center max-w-md w-full mb-6">
        <p className="text-gray-800 leading-relaxed mb-3">
          <a
                        className="text-blue-700"
          >
            Mera Samaaj is a private official app for your Family, Relatives,
            and Samaaj.
          </a>
        </p>
        <p className="text-gray-800 leading-relaxed">
          <a
                        className="text-blue-700"
          >
            Download the app and become a member of Bhavsar Samaaj.
          </a>
        </p>
      </div>

      {/* Download button */}
      <a
        href="https://www.merasamaaj.com"
        className="bg-[#1e4f8e] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#173f73] transition"
      >
        Download Mera Samaaj
      </a>
    </div>
  );
}
