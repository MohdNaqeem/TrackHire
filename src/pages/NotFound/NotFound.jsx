import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F7F7FB] px-6 text-center">
      <h1 className="text-8xl font-extrabold tracking-tight text-[#3CBFA4]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-[#211A52]">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-lg leading-relaxed text-[#5F5B80]">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-10 rounded-xl bg-[#3CBFA4] px-8 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#31A88F] hover:shadow-md"
      >
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;