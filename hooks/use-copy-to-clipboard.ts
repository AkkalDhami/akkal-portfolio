"use client";

import { click003Sound } from "@/sounds/click-003";
import { useSound } from "@/hooks/use-sound";
import { useCallback, useRef, useState } from "react";
import { back004Sound } from "@/sounds/back-004";

export type CopyState = "idle" | "done" | "error";

export type UseCopyToClipboardOptions = {
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
  resetDelay?: number;
};

export function useCopyToClipboard({
  onCopySuccess,
  onCopyError,
  resetDelay = 1000
}: UseCopyToClipboardOptions = {}) {
  const [play] = useSound(click003Sound);
  const [playError] = useSound(back004Sound);

  const [state, setState] = useState<CopyState>("idle");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string | (() => string)) => {
      // Clear any pending reset
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }

      try {
        const finalText = typeof text === "function" ? text() : text;
        await navigator.clipboard.writeText(finalText);
        setState("done");
        onCopySuccess?.(finalText);
        play();
      } catch (error) {
        setState("error");
        onCopyError?.(
          error instanceof Error ? error : new Error("Copy failed")
        );
        playError();
      } finally {
        resetTimeoutRef.current = setTimeout(() => {
          setState("idle");
        }, resetDelay);
      }
    },
    [onCopyError, onCopySuccess, play, playError, resetDelay]
  );

  return { state, copy } as const;
}
