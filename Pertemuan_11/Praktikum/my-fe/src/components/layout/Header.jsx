import { useNavigate } from "react-router-dom";
import { getStoredUser, logoutUser } from "../../services/api";

export default function Header({ pageTitle, onToggleSidebar }) {
  const navigate = useNavigate();
  const user = getStoredUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 text-slate-800 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xl leading-none shadow-sm md:hidden"
            aria-label="Buka menu"
          >
            Menu
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold md:text-xl">
              Praktikum React
            </h1>
            {user && (
              <p className="truncate text-xs text-slate-500">
                {user.username} ({user.role})
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 text-xs font-medium text-blue-700 sm:inline-flex md:text-sm">
            {pageTitle}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
