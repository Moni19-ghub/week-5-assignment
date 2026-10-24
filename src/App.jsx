import { lazy, Suspense, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { formReducer, initialFormState } from "./reducer";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Help = lazy(() => import("./pages/Help"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [form, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded bg-white p-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2 focus:ring-brand"
      >
        Skip to main content
      </a>

      <Suspense
        fallback={
          <p className="p-6 text-center text-gray-600" role="status">
            Loading page...
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<Home form={form} />} />
          <Route
            path="/signup"
            element={<Signup form={form} dispatch={dispatch} />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/help/:topic" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;