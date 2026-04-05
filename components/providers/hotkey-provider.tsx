"use client";

import { useThemeToggleHotkey } from "@/hooks/use-theme-hotkey";
import { useNavigationHotkeys } from "@/hooks/use-navigation-hotkeys";

export function HotkeyProvider({ children }: { children: React.ReactNode }) {
  useThemeToggleHotkey();
  useNavigationHotkeys();

  return <>{children}</>;
}
