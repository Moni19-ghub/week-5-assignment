import { useState } from 'react'
import './index.css'
import { Eye, EyeOff } from 'lucide-react'

function App() {
  const [showPassword,setShowPassword] = useState(false)
  const [form, setForm] = useState({
    name:"",
    email: "",
    countryCode:"+27",
    phone:"",
    password:"",
    location:""
  })

const [errors,setErrors]=useState({})
const [isSubmitting, setIsSubmitting] = useState(false);
const [status,setStatus] = useState("idle")
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
const errorsFound = validateForm(form);

const formIsValid =
  errorsFound.name === undefined &&
  errorsFound.email === undefined &&
  errorsFound.phone === undefined &&
  errorsFound.password === undefined &&
  errorsFound.location === undefined;

 const handleChange = (e) => {
  const { name, value } = e.target;

  const updatedForm = {
    ...form,
    [name]: value
  };

  setForm(updatedForm);
  setStatus("idle");

  if (name === "password") {
    const passwordErrors = {};

    if (value.length < 8) {
      passwordErrors.password =
        "Password must contain at least 8 characters";
    } else if (!/[^A-Za-z0-9]/.test(value)) {
      passwordErrors.password =
        "Password must contain at least one symbol";
    }

    setErrors((prev) => ({
      ...prev,
      password: passwordErrors.password
    }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm(form);
  setErrors(newErrors);

  if (
    newErrors.name ||
    newErrors.email ||
    newErrors.phone ||
    newErrors.password ||
    newErrors.location
  ) {
    setStatus("error");
    return;
  }

  setIsSubmitting(true);
  setStatus("submitting");

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  } catch {
    setStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <>
<div className="min-h-screen w-full bg-form_colour">
<main className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">

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
  <label htmlFor='name' className='mb-1 block text-sm text-black text-left'>
    Full Name
  </label>
  <input id='name' name='name' type='text' value={form.name} onChange = {handleChange} placeholder='Your Name' className='h-10 w-full border border-gray-200 bg-white px-3 text-sm text-gray-500 outline-none focus:border-brand' required></input>
  {errors.name && <p className=' text-left text-red-800 font-bold text-sm'>{errors.name}</p>}
  </article>
<article>
  <label htmlFor='email' className='mb-1 block text-sm text-black text-left'>
    Email
  </label>
  <input id='email' name='email' type="email" value={form.email} onChange={handleChange} placeholder='yourname@email.com' className='h-10 w-full rounded border border-gray-200 bg-white px-3 text-sm outline-none focus:border-brand' required></input>
  {errors.email && (
  <p className="text-red-800 text-left text-sm">
    {errors.email}
  </p>
)}
  </article>

<article>
  <label className="mb-1 block text-sm text-black  text-left">
    Phone Number
  </label>

  <div className="flex">
    <select
    name='countryCode'
    value={form.countryCode}
    onChange={handleChange}
      className="h-10 w-28 rounded-l border border-gray-200 bg-white px-2 text-gray-400 text-sm outline-none focus:border-brand"
      required
    >
      <option value="+27">ZA +27</option>
      <option value="+234">NG +234</option>
      <option value="+1">US +1</option>
      <option value="+44">GB +44</option>
      <option value="+91">IN +91</option>
      <option value="+61">AU +61</option>
    </select>

    <input
      type='tel'
      name='phone'
      value={form.phone}
      onChange={handleChange}
      placeholder='82 123 4567'
      className='h-10 min-w-0 flex-1 rounded-r border border-l-0 border-gray-200 bg-white px-3 text-gray-500 text-sm outline-none focus:border-brand'
      required
    />
  </div>
  {errors.phone && (
  <p className="text-red-800 text-left text-sm">
    {errors.phone}
  </p>
)}
</article>



<article>
  <label
    htmlFor="password"
    className="mb-1 block text-sm text-left text-black"
  >
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
      className="h-10 w-full rounded border border-gray-200 bg-white px-3 pr-10 text-sm text-gray-700 outline-none focus:border-brand"
      required
    />

    <button
      type="button"
      onClick={() => setShowPassword((previous) => !previous)}
      aria-label={showPassword ? "Hide password" : "Show password"}
      className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-gray-600"
    >
      {showPassword ? (
        <EyeOff size={20} strokeWidth={2} />
      ) : (
        <Eye size={20} strokeWidth={2} />
      )}
    </button>
  </div>

  {errors.password && (
    <p className="text-left text-sm text-red-800">
      {errors.password}
    </p>
  )}
</article>



<article>
  <label className="mb-1 block text-sm text-black text-left">
    Location
  </label>
  <select
  name='location'
  value={form.location}
  onChange={handleChange}
    className="h-10 w-full rounded border border-gray-200 bg-white px-3 text-sm text-gray-400 outline-none focus:border-brand"
    required
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
  {errors.location && <p className='text-red-800 font-bold text-sm'>{errors.location}</p>}
</article>
<article>
  <button type="submit" disabled={isSubmitting}  className={'h-11 w-full rounded bg-brand_end text-sm font-semibold text-white transition-opacity hover:opacity-90'}>
    {isSubmitting?'Saving':'Sign Up'}
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

{status === "error" && Object.keys(errors).length === 0 && (
  <p role="alert" className="text-sm text-red-700">
    Something went wrong. Please try again.
  </p>
)}
</article>
      </form>
</div>
</div>
</section>
  <section className="hidden bg-gradient-to-br from-quote_background_start to-quote_background_end p-8 text-white md:flex md:flex-col">

          <nav className="flex justify-end gap-6 text-xs text-white/80">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
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
    </>

  )
}

export default App
