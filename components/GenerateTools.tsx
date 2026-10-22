"use client";
import dynamic from "next/dynamic";

// Loaded only on the Generate page, so the math renderer isn't shipped to every page.
const Loading = () => <div className="gen-loading">Loading…</div>;
export const LazyGenerator = dynamic(() => import("./Generator"), { ssr: false, loading: Loading });
export const LazyChecker = dynamic(() => import("./FunctionChecker"), { ssr: false, loading: Loading });
export const LazyMock = dynamic(() => import("./MockExam"), { ssr: false, loading: Loading });
export const LazyGrades = dynamic(() => import("./GradeCalc"), { ssr: false, loading: Loading });
