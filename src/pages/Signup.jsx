
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Signup({ form, dispatch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
const navigate = useNavigate();
  const validateForm = (form) => {
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Full Name is required";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (form.phone.trim() === "") {
      newErrors.phone = "Phone Number is required";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    } else if (!/[^A-Za-z0-9]/.test(form.password)) {
      newErrors.password = "Password must contain at least one symbol";
    }

    if (form.location === "") {
      newErrors.location = "Location is required";
    }

    return newErrors;
  };


const handleChange = (e) => {
  const { name, value } = e.target;

  const actionTypes = {
    name: "UPDATE_NAME",
    email: "UPDATE_EMAIL",
    countryCode: "UPDATE_COUNTRY_CODE",
    phone: "UPDATE_PHONE",
    password: "UPDATE_PASSWORD",
    location: "UPDATE_LOCATION"
  };

  dispatch({
    type: actionTypes[name],
    value: value
  });

  setStatus("idle");

  setErrors((previous) => {
    const updatedErrors = { ...previous };

    if (name === "name" && value.trim() !== "") {
      delete updatedErrors.name;
    }

    if (name === "email") {
      if (value.trim() === "") {
        updatedErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        updatedErrors.email = "Please enter a valid email address";
      } else {
        delete updatedErrors.email;
      }
    }

    if (name === "phone" && value.trim() !== "") {
      delete updatedErrors.phone;
    }

    if (name === "password") {
      if (value.length < 8) {
        updatedErrors.password =
          "Password must contain at least 8 characters";
      } else if (!/[^A-Za-z0-9]/.test(value)) {
        updatedErrors.password =
          "Password must contain at least one symbol";
      } else {
        delete updatedErrors.password;
      }
    }

    if (name === "location" && value !== "") {
      delete updatedErrors.location;
    }

    return updatedErrors;
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/thank-you");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-form_colour">
      <main id="main-content" tabIndex="-1" className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">

        <section className="flex flex-col bg-white p-6 sm:p-7">
          <div className="flex items-start justify-between">
            <h2 className="bg-gradient-to-br from-brand_start via-brand_middle to-brand_end bg-clip-text text-xs font-semibold text-transparent">
              Kreativ
            </h2>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center py-5">
            <div className="w-full max-w-[280px]">

              <div className="mb-6">
                <h1 className="text-base font-semibold text-black">
                  Let's get you started
                </h1>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit} noValidate>
                <article>
                  <label htmlFor="name" className="mb-1 block text-left text-sm text-black">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    className="h-10 w-full border border-gray-200 bg-white px-3 text-sm text-gray-500 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-left text-sm font-bold text-red-800">
                      {errors.name}
                    </p>
                  )}
                </article>

                <article>
                  <label htmlFor="email" className="mb-1 block text-left text-sm text-black">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="yourname@email.com"
                    autoComplete="email"
className="h-10 w-full rounded border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-left text-sm text-red-800">
                      {errors.email}
                    </p>
                  )}
                </article>

                <article>
                  <label htmlFor="phone" className="mb-1 block text-left text-sm text-black">
                    Phone Number
                  </label>

                  <div className="flex">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      aria-label="Country calling code"
                      className="h-10 w-28 rounded-l border border-gray-200 bg-white px-2 text-sm text-gray-600 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                    >
                      <option value="+27">ZA +27</option>
                      <option value="+234">NG +234</option>
                      <option value="+1">US +1</option>
                      <option value="+44">GB +44</option>
                      <option value="+91">IN +91</option>
                      <option value="+61">AU +61</option>
                    </select>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="82 123 4567"
                      autoComplete="tel-national"
                      className="h-10 min-w-0 flex-1 rounded-r border border-l-0 border-gray-200 bg-white px-3 text-sm text-gray-500 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </div>

                  {errors.phone && (
                    <p id="phone-error" className="text-left text-sm text-red-800">
                      {errors.phone}
                    </p>
                  )}
                </article>

                <article>
                  <label htmlFor="password" className="mb-1 block text-left text-sm text-black">
                    Password
                  </label>

                  <div className="relative w-full">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="new-password"
                      className="h-10 w-full rounded border border-gray-200 bg-white px-3 pr-10 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                      required
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={errors.password ? "password-error" : undefined}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((previous) => !previous)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                      className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      {showPassword ? (
                        <EyeOff size={20} strokeWidth={2} aria-hidden="true" />
                      ) : (
                        <Eye size={20} strokeWidth={2} aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p id="password-error" className="text-left text-sm text-red-800">
                      {errors.password}
                    </p>
                  )}
                </article>

                <article>
                  <label htmlFor="location" className="mb-1 block text-left text-sm text-black">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="h-10 w-full rounded border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                    required
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? "location-error" : undefined}
                  >
                    <option value="" disabled>
                      Select your location
                    </option>
                    <option value="gqeberha">Gqeberha</option>
                    <option value="cape-town">Cape Town</option>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="durban">Durban</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.location && (
                    <p id="location-error" className="text-left text-sm font-bold text-red-800">
                      {errors.location}
                    </p>
                  )}
                </article>

                <article>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded bg-brand_end text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Saving" : "Sign Up"}
                  </button>

                  {status === "submitting" && (
                    <p role="status" className="text-sm text-gray-600">
                      Submitting your details...
                    </p>
                  )}

                  {status === "success" && (
                    <p role="status" className="text-sm font-medium text-green-700">
                      Your form was submitted successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-700">
                      Please correct the errors above and try again.
                    </p>
                  )}
                </article>
              </form>
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
            <p className="font-['Space_Grotesk'] text-[28px] font-bold leading-[1.45] tracking-tight">
              Creativity is <br />
              intelligence <br />
              having fun
            </p>
            <p className="mt-5 text-sm text-white/70">
              - Albert Einstein
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Signup;
