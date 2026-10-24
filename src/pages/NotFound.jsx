
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main id="main-content" tabIndex="-1" className="flex min-h-[70vh] flex-col items-center justify-center bg-form_colour px-6 text-center">
      <p className="mb-2 text-6xl font-bold text-brand_end">404</p>

      <h1 className="mb-3 text-2xl font-bold text-gray-900">
        Page not found
      </h1>

      <p className="mb-6 text-gray-600">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link
        to="/"
        className="rounded bg-brand_end px-5 py-3 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;
