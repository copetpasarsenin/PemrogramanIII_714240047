import { useEffect, useState } from "react";
import { getMahasiswa } from "../services/api";

export default function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(""); // Tugas 1: State untuk search

  const fetchData = () => {
    setLoading(true);
    getMahasiswa()
      .then(setMahasiswa)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // pertama kali load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getMahasiswa();
        setMahasiswa(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Tugas 1: Filter data berdasarkan keyword search
  const filteredMahasiswa = mahasiswa.filter((mhs) => {
    const keyword = search.toLowerCase();
    return (
      mhs.nama?.toLowerCase().includes(keyword) ||
      mhs.prodi?.toLowerCase().includes(keyword) ||
      mhs.email?.toLowerCase().includes(keyword) ||
      mhs.alamat?.toLowerCase().includes(keyword) ||
      mhs.npm?.toLowerCase().includes(keyword)
    );
  });

  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-8xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Daftar Mahasiswa</h2>

      {/* Latihan 2: Total Mahasiswa */}
      <div className="mb-2 font-bold">
        Total Mahasiswa: {filteredMahasiswa.length}
      </div>

      <div className="flex justify-between mb-4">
        {/* Tugas 1: Input Search */}
        <input
          type="text"
          placeholder="Cari (Nama, Prodi, Email, NPM)..."
          className="border border-gray-300 rounded px-3 py-1 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tugas 2: Tombol Refresh Data */}
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Refresh Data
        </button>
      </div>

      <div className="overflow-hidden border rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-300 border-b text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">NPM</th> {/* Latihan 1: Kolom NPM */}
              <th className="px-4 py-3 border">Nama / Prodi</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Alamat</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredMahasiswa.map((mhs, index) => (
              <tr key={mhs.npm} className="hover:bg-blue-50">
                <td className="px-4 py-3 border">{index + 1}</td>
                <td className="px-4 py-3 border">{mhs.npm}</td> {/* Data NPM */}
                <td className="px-4 py-3 border">
                  <div className="font-medium">{mhs.nama}</div>
                  <div className="text-gray-500 text-xs">{mhs.prodi}</div>
                </td>
                <td className="px-4 py-3 text-gray-600 border">{mhs.email}</td>
                <td className="px-4 py-3 text-gray-500 border">{mhs.alamat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}