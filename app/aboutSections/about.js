"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { BASE_URL } from "@/utils/config";
import dynamic from 'next/dynamic';

// Dynamically import with no SSR
const AboutSection = dynamic(() => import('./AboutSection.js'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default AboutSection;
