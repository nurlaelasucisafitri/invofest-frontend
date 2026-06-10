# Invofest Event Management System — UTS Pemweb 2

Project ini dibuat untuk memenuhi tugas Ujian Akhir Semester Genap Tahun Akademik 2025/2026 pada mata kuliah Pemrograman Web 2.

## Identitas Mahasiswa
* **Nama:** Nur Laela Suci Safitri
* **NIM:** 24090097
* **Kelas:** 4C
* **Prodi/Semester:** D4 Teknik Informatika / 4
* **Dosen Pengampu:** Jamal Apriadi, S.Kom.
* **Kampus:** Universitas Harkat Negeri

---

## Tautan Penting (Links)
* **Live Demo (Vercel):** https://invofest-frontend.vercel.app/
* **Video Demo & Penjelasan Code (YouTube):** https://youtu.be/73p8J6PzfRs

---

## Spesifikasi & Teknologi Project

Sesuai dengan ketentuan standar dari dosen pengampu:
* **Frontend:** React (TypeScript) & Zustand State Management
* **Backend:** Express (TypeScript)
* **ORM:** Prisma ORM (PostgreSQL via Supabase)
* **Deployment:** Vercel & GitHub

---

## Fitur yang Diimplementasikan

1. **Database & Schema:** Implementasi 3 tabel relasional yaitu `Category Event`, `Pembicara`, dan `Event` (menggunakan *Foreign Key*).
2. **Backend API:** Endpoint CRUD lengkap (GET, POST, PUT, DELETE) untuk ketiga entitas tersebut.
3. **Autentikasi Zustand:** Login manual menggunakan **24090097** dan **admin123**. Sesi login tersimpan secara global.
4. **Protected Routes:** Membatasi akses halaman manajemen data di dashboard sebelum user melakukan login.
5. **UI & CRUD Konten:** Fitur list data, form tambah, edit, dan hapus untuk ketiga modul.
6. **Dropdown Dinamis:** Input Event mengambil pilihan data Kategori dan Pembicara secara dinamis langsung dari database.
7. **Menu Biodata:** Halaman khusus yang memuat informasi data diri mahasiswa pembuat website.

---

## Akun Uji Coba (Demo Login)
* **NIM:** `24090097`
* **Password:** `admin123`
