
"use client"

import type { User } from "@/lib/types";
import type { ReactNode } from 'react';
import { createContext, useCallback, useEffect, useState } from "react";

interface BookmarkContextType {
  bookmarkedUsers: User[];
  addBookmark: (user: User) => void;
  removeBookmark: (userId: number) => void;
  isBookmarked: (userId: number) => boolean;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarkedUsers, setBookmarkedUsers] = useState<User[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBookmarks = localStorage.getItem("bookmarkedUsers");
      if (storedBookmarks) {
        setBookmarkedUsers(JSON.parse(storedBookmarks));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("bookmarkedUsers", JSON.stringify(bookmarkedUsers));
    }
  }, [bookmarkedUsers]);

  const addBookmark = useCallback((user: User) => {
    setBookmarkedUsers((prev) => {
      if (prev.find(u => u.id === user.id)) return prev;
      return [...prev, user];
    });
  }, []);

  const removeBookmark = useCallback((userId: number) => {
    setBookmarkedUsers((prev) => prev.filter((user) => user.id !== userId));
  }, []);

  const isBookmarked = useCallback((userId: number) => {
    return bookmarkedUsers.some((user) => user.id === userId);
  }, [bookmarkedUsers]);

  return (
    <BookmarkContext.Provider value={{ bookmarkedUsers, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}
