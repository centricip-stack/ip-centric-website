import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="min-h-[70vh] grid place-items-center bg-surface px-6 text-center">
        <div>
          <p className="eyebrow text-brand-500 mb-4">// Error 404</p>
          <h1 className="font-display text-6xl md:text-7xl font-extrabold text-navy-900 mb-4">
            Page not found
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-500 hover:bg-brand-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
