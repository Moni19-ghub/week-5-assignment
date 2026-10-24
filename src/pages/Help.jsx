
import { Link, useParams } from "react-router-dom";

const helpTopics = {
  password: {
    title: "Password Help",
    description:
      "Your password must contain at least 8 characters and at least one symbol, such as ! or #."
  },
  email: {
    title: "Email Help",
    description:
      "Enter a valid email address, for example, name@example.com. Check for missing characters or spaces."
  },
  phone: {
    title: "Phone Number Help",
    description:
      "Choose your country calling code, then enter your phone number without the country code."
  }
};

function Help() {
  const { topic } = useParams();
  const help = helpTopics[topic];

  return (
    <main id="main-content" tabIndex="-1" className="min-h-[70vh] bg-form_colour px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm">
        {help ? (
          <>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              {help.title}
            </h1>

            <p className="mb-6 leading-7 text-gray-600">
              {help.description}
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              Help topic not found
            </h1>

            <p className="mb-6 text-gray-600">
              Sorry, we don't have a help page for "{topic}".
            </p>
          </>
        )}

        <Link
          to="/signup"
          className="inline-block rounded bg-brand_end px-5 py-3 text-sm font-semibold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Return to signup
        </Link>
      </div>
    </main>
  );
}

export default Help;
