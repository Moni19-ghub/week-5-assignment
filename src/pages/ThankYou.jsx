
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="min-h-[70vh] bg-form_colour px-6 py-16"
    >
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 text-center shadow-sm">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700"
          aria-hidden="true"
        >
          ✓
        </div>

        <h1
          className="mb-3 text-2xl font-bold text-gray-900"
          tabIndex="-1"
        >
          Thank you for signing up!
        </h1>

        <p className="mb-6 text-gray-600">
          Your signup process has been completed successfully.
        </p>

        <Link
          to="/"
          className="inline-block rounded bg-brand_end px-5 py-3 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default ThankYou;
