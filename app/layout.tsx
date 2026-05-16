import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Waste Minimizer – Cut AI Costs Automatically",
  description: "Analyze and optimize AI prompts to remove unnecessary tokens while maintaining output quality. A/B test original vs optimized prompts with cost savings metrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="30ff3dd1-875b-4347-a71e-ab8321c91588"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
