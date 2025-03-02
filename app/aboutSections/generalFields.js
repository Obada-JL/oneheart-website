"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/config";
import dynamic from 'next/dynamic';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

// Dynamically import with no SSR
const GeneralFieldsContent = dynamic(() => import('./GeneralFieldsContent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function GeneralFields() {
  return <GeneralFieldsContent />;
}
