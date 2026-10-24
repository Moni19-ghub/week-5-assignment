
import { Link, NavLink } from "react-router-dom";

function DraftSummary({ form }) {
  return (
    <section>
      <h2 className="mb-3 text-start text-sm font-semibold text-black">
        Your signup draft
      </h2>

      <div className="space-y-3">
        <div>
          <p className="mb-1 text-start text-sm text-black">Full Name</p>
          <p className="min-h-10 text-start rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
            {form.name || "Your Name"}
          </p>
        </div>

        <div>
          <p className="mb-1 text-start text-sm text-black">Email</p>
          <p className="min-h-10 text-start  break-words rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
            {form.email || "yourname@email.com"}
          </p>
        </div>

        <div>
          <p className="mb-1 text-start text-sm text-black">Phone Number</p>
          <p className="min-h-10 text-start rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
            {form.phone
              ? `${form.countryCode} ${form.phone}`
              : "Your phone number"}
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm text-start text-black">Location</p>
          <p className="min-h-10  text-start rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
            {form.location
              ? form.location
                  .replace("-", " ")
                  .replace(/\b\w/g, (letter) => letter.toUpperCase())
              : "Select your location"}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Your password is never displayed in this preview.
      </p>
    </section>
  );
}

function DraftProgress({ form }) {
  const completedFields = [
    form.name.trim() !== "",
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    form.phone.trim() !== "",
    form.password.length >= 8 && /[^A-Za-z0-9]/.test(form.password),
    form.location !== ""
  ].filter(Boolean).length;

  const progress = (completedFields / 5) * 100;

  return (
    <div className="mt-8">
      <p className="mb-2 text-sm text-white/80">
        Your signup progress
      </p>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/20"
        role="progressbar"
        aria-label="Signup progress"
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={completedFields}
      >
        <div
          className="h-full rounded-full bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-2xl font-semibold text-white">
        {completedFields} of 5 fields
      </p>

      <p className="mt-3 text-sm leading-6 text-white/80">
        Complete your details to get started. Your progress updates
        as you fill in the signup form.
      </p>

      <p className="mt-5 text-xs text-white/70">
        Your draft is kept while this app remains loaded. It is not
        saved to a server.
      </p>
    </div>
  );
}

function Home({ form }) {
  return (
    <div className="min-h-screen w-full bg-form_colour">
      <main id="main-content" tabIndex="-1" className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
        <section className="flex flex-col bg-white p-6 sm:p-7">
          <div>
            <Link
              to="/"
              className="bg-gradient-to-br from-brand_start via-brand_middle to-brand_end bg-clip-text text-xs font-semibold text-transparent"
            >
              Kreativ
            </Link>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center py-5">
            <div className="w-full max-w-[280px]">
              <div className="mb-6">
                <h1 className="text-base text-start font-semibold text-black">
                  Welcome to Kreativ
                </h1>

                <p className="mt-2 text-sm text-start leading-5 text-gray-500">
                  Let's get you started. Review your draft or continue
                  to create your account.
                </p>
              </div>

              <DraftSummary form={form} />

              <Link
                to="/signup"
                className="mt-5 text-start flex h-11 w-full items-center justify-center rounded bg-brand_end text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                Continue to Sign Up
              </Link>
            </div>
          </div>
        </section>

        <section className="hidden bg-gradient-to-br from-quote_background_start to-quote_background_end p-8 text-white md:flex md:flex-col">
          
<nav
  aria-label="Main navigation"
  className="flex justify-end gap-6 text-xs text-white/80"
>
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-white ${
        isActive ? "font-bold text-white underline underline-offset-4" : ""
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/signup"
    className={({ isActive }) =>
      `rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-white ${
        isActive ? "font-bold text-white underline underline-offset-4" : ""
      }`
    }
  >
    Sign Up
  </NavLink>

  <NavLink
    to="/help/password"
    className="rounded hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
  >
    Help
  </NavLink>
</nav>


          <div className="flex flex-1 flex-col justify-center px-4">
            <h2 className="font-['Space_Grotesk'] text-[28px] font-bold leading-[1.45] tracking-tight">
              Your journey <br />
              starts with <br />
              one step
            </h2>

            <DraftProgress form={form} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
