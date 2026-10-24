import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function NotFound() {
  useDocumentTitle("Page not found | Portfolio");

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/30">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-white/40">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:bg-white hover:text-black"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
