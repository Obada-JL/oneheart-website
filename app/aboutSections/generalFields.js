"use client";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/config";
import dynamic from 'next/dynamic';

// Dynamically import with no SSR
const GeneralFields = dynamic(() => import('./GeneralFieldsContent.js'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default GeneralFields;
