"use client";

import type { ReactNode } from "react";
import { WorkspaceProvider } from "@/lib/workspace";

export function Providers({ children }: { children: ReactNode }) {
  return <WorkspaceProvider>{children}</WorkspaceProvider>;
}
