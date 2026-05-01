export default function DataDiriPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Data Diri</h2>

      {/* Kartu Profil */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:flex-row sm:items-start">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-3xl font-bold text-white shadow-lg">
          AA
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-800">Achmad Afrizal</h3>
          <p className="text-sm text-slate-500">Mahasiswa D4 Teknik Informatika</p>
          <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Aktif
          </span>
        </div>
      </div>

      {/* Detail Data Diri */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">NPM</p>
          <p className="mt-1 text-sm font-medium text-slate-800">714240047</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Nama Lengkap</p>
          <p className="mt-1 text-sm font-medium text-slate-800">Achmad Afrizal</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Program Studi</p>
          <p className="mt-1 text-sm font-medium text-slate-800">D4 Teknik Informatika</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Kelas</p>
          <p className="mt-1 text-sm font-medium text-slate-800">2C</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Email</p>
          <p className="mt-1 text-sm font-medium text-slate-800">achm4d.afrizal@gmail.com</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <p className="text-xs font-semibold uppercase text-slate-400">Alamat</p>
          <p className="mt-1 text-sm font-medium text-slate-800">Karawang, Jawa Barat</p>
        </div>
      </div>

      {/* Info Akademik */}
      <div className="rounded-lg border p-4">
        <h3 className="mb-3 text-sm font-semibold uppercase text-slate-500">
          Informasi Akademik
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md bg-blue-50 p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">7</p>
            <p className="text-xs text-slate-500">Semester</p>
          </div>
          <div className="rounded-md bg-green-50 p-3 text-center">
            <p className="text-2xl font-bold text-green-600">3.75</p>
            <p className="text-xs text-slate-500">IPK</p>
          </div>
          <div className="rounded-md bg-purple-50 p-3 text-center">
            <p className="text-2xl font-bold text-purple-600">120</p>
            <p className="text-xs text-slate-500">SKS Ditempuh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
