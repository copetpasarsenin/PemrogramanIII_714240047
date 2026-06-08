import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT ?? 10000);
const TOKEN_KEY = "token";
const USER_KEY = "user";

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL belum diatur di file .env");
}

const AUTH_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

function normalizeError(error, fallback = "Terjadi kesalahan") {
  if (error.response?.data?.errors) {
    const errorDetails = Object.values(error.response.data.errors)
      .flat()
      .join(", ");
    return `${error.response?.data?.message || "Validasi gagal"}: ${errorDetails}`;
  }
  return error.response?.data?.message || error.message || fallback;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  const savedUser = localStorage.getItem(USER_KEY);

  if (!savedUser) return null;

  try {
    return JSON.parse(savedUser);
  } catch {
    localStorage.removeItem(USER_KEY);
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function registerUser(payload) {
  try {
    const response = await authApi.post("/register", payload);
    return response.data;
  } catch (error) {
    throw new Error(normalizeError(error, "Register gagal"));
  }
}

export async function loginUser(payload) {
  try {
    const response = await authApi.post("/login", payload);
    const data = response.data?.data;

    if (!data?.token) {
      throw new Error("Token tidak ditemukan pada response login");
    }

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));

    return data;
  } catch (error) {
    throw new Error(normalizeError(error, "Login gagal"));
  }
}

export async function getMahasiswa() {
  try {
    const response = await api.get("/mahasiswa");
    const payload = response.data;
    const mahasiswa = Array.isArray(payload) ? payload : payload?.data;

    if (!Array.isArray(mahasiswa)) {
      throw new Error("Format response tidak valid");
    }

    return mahasiswa;
  } catch (error) {
    throw new Error(normalizeError(error, "Gagal mengambil data"));
  }
}

export async function getMahasiswaDetail(npm) {
  try {
    const response = await api.get(`/mahasiswa/${npm}`);
    return response.data?.data ?? response.data;
  } catch (error) {
    throw new Error(normalizeError(error, "Gagal mengambil detail"));
  }
}

export async function createMahasiswa(payload) {
  try {
    const response = await api.post("/mahasiswa", payload);
    return response.data;
  } catch (error) {
    throw new Error(normalizeError(error, "Gagal menambah data"));
  }
}

export async function updateMahasiswa(npm, payload) {
  try {
    const response = await api.put(`/mahasiswa/${npm}`, payload);
    return response.data;
  } catch (error) {
    throw new Error(normalizeError(error, "Gagal memperbarui data"));
  }
}

export async function deleteMahasiswa(npm) {
  try {
    const response = await api.delete(`/mahasiswa/${npm}`);
    return response.data;
  } catch (error) {
    throw new Error(normalizeError(error, "Gagal menghapus data"));
  }
}
