
"use client"

import { BookmarkContext } from "@/contexts/bookmark-context";
import { useContext } from "react";

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}
