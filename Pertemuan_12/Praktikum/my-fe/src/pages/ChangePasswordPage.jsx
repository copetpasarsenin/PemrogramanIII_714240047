import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/TextInput";
import FormField from "../components/molecules/FormField";
import PageTitle from "../components/molecules/PageTitle";
import { changePassword } from "../services/auth";

const EMPTY_FORM = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function ChangePasswordPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      await Swal.fire({
        title: "Gagal",
        text: "Konfirmasi password baru tidak sama.",
        icon: "error",
        confirmButtonText: "Tutup",
      });
      return;
    }

    try {
      setLoading(true);
      await changePassword(form);
      setForm(EMPTY_FORM);
      await Swal.fire({
        title: "Berhasil",
        text: "Password berhasil diubah.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      await Swal.fire({
        title: "Gagal",
        text: error.response?.data?.message || "Password gagal diubah.",
        icon: "error",
        confirmButtonText: "Tutup",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <PageTitle
        title="Ubah Password"
        description="Gunakan password lama untuk membuat password baru."
      />

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
        <FormField label="Password Lama" htmlFor="oldPassword">
          <TextInput
            id="oldPassword"
            name="oldPassword"
            type="password"
            value={form.oldPassword}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </FormField>

        <FormField label="Password Baru" htmlFor="newPassword">
          <TextInput
            id="newPassword"
            name="newPassword"
            type="password"
            value={form.newPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </FormField>

        <FormField label="Konfirmasi Password Baru" htmlFor="confirmPassword">
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </FormField>

        <Button type="submit" disabled={loading}>
          {loading ? "Menyimpan..." : "Ubah Password"}
        </Button>
      </form>
    </div>
  );
}
