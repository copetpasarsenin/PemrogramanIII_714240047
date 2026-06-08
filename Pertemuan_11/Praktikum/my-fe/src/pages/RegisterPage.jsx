import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/TextInput";
import { isAuthenticated, registerUser } from "../services/api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "admin",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.username.trim() || !form.password) {
      setError("Username dan password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      await registerUser({
        username: form.username.trim(),
        password: form.password,
        role: form.role,
      });
      setSuccess("Register berhasil. Silakan login.");
      setTimeout(() => navigate("/login"), 700);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8 text-slate-800">
      <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Praktikum 11
          </p>
          <h1 className="mt-2 text-2xl font-bold">Register User</h1>
          <p className="mt-1 text-sm text-slate-500">
            Buat akun untuk mencoba autentikasi JWT dan role.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1">
            <span className="text-sm font-medium">Username</span>
            <TextInput
              value={form.username}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, username: event.target.value }))
              }
              autoComplete="username"
              placeholder="admin"
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium">Password</span>
            <TextInput
              type="password"
              value={form.password}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, password: event.target.value }))
              }
              autoComplete="new-password"
              placeholder="admin123"
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium">Role</span>
            <select
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={form.role}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, role: event.target.value }))
              }
            >
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </label>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
              {success}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Memproses..." : "Register"}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">
          Sudah punya akun?{" "}
          <Link className="font-semibold text-blue-600 hover:text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
