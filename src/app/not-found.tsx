"use client";

import { ArrowLeft, Home, Search } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-navy-900/10 mb-4">404</h1>
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-navy-900 to-navy-800 flex items-center justify-center">
            <Search className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin
          telah dipindahkan atau tidak ada.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-900 text-navy-900 rounded-lg hover:bg-navy-50 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Halaman Sebelumnya
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">Halaman Populer:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="text-sm text-navy-900 hover:text-emerald-600 transition-colors underline decoration-dotted"
            >
              Beranda
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/furniture"
              className="text-sm text-navy-900 hover:text-emerald-600 transition-colors underline decoration-dotted"
            >
              Koleksi Furniture
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/tentang-kami"
              className="text-sm text-navy-900 hover:text-emerald-600 transition-colors underline decoration-dotted"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
