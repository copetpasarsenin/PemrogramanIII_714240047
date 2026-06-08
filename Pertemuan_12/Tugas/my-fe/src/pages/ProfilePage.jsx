import Swal from "sweetalert2";
import Button from "../components/atoms/Button";
import PageTitle from "../components/molecules/PageTitle";
import { getToken, getUser } from "../services/auth";

function showToken() {
  const token = getToken();

  Swal.fire({
    title: "Token JWT",
    text: token || "Token tidak ditemukan.",
    icon: "info",
    confirmButtonText: "Tutup",
  });
}

export default function ProfilePage() {
  const user = getUser();

  return (
    <div className="space-y-5">
      <PageTitle
        title="Profil"
        description="Informasi akun yang sedang login."
        actions={
          <Button type="button" variant="secondary" onClick={showToken}>
            Lihat Token
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-500">Username</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            {user?.username ?? "-"}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase text-slate-500">Role</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            {user?.role ?? "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
