import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "../styles/theme.css";

import { ThemeProvider } from "../hooks/useTheme";

export const metadata: Metadata = {
  title: "Lighter Theme Toggle",
  description: "A flame-inspired lighter toggle that switches between light and dark themes.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
