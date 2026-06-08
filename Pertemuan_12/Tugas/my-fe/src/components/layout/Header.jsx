import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearAuthSession, getToken, getUser } from "../../services/auth";
import Button from "../atoms/Button";

function showToken() {
  const token = getToken();

  Swal.fire({
    title: "Token JWT",
    text: token || "Token tidak ditemukan.",
    icon: "info",
    confirmButtonText: "Tutup",
  });
}

export default function Header({ pageTitle, onToggleSidebar }) {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Sesi login akan dihapus dari browser.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc2626",
    });

    if (result.isConfirmed) {
      clearAuthSession();
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 text-slate-800 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm leading-none shadow-sm md:hidden"
            aria-label="Buka menu"
          >
            Menu
          </button>

          <h1 className="truncate text-lg font-semibold md:text-xl">
            Praktikum React
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:inline-flex">
            {user?.username ?? "User"} ({user?.role ?? "-"})
          </span>
          <span className="hidden rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 text-xs font-medium text-blue-700 sm:inline-flex md:text-sm">
            {pageTitle}
          </span>
          <Link
            to="/profile"
            className="hidden rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 sm:inline-flex"
          >
            Profil
          </Link>
          <Button type="button" variant="secondary" className="px-3 py-2" onClick={showToken}>
            Lihat Token
          </Button>
          <Button type="button" variant="danger" className="px-3 py-2" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
