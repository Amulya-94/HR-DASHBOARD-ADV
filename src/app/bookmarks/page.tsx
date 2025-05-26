
"use client";

import { useBookmarks } from "@/hooks/use-bookmarks";
import { EmployeeCard } from "@/components/employee-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Added this import

export default function BookmarksPage() {
  const { bookmarkedUsers } = useBookmarks();

  return (
    <div className="container mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bookmarked Employees</h1>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {bookmarkedUsers.length} Bookmark{bookmarkedUsers.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {bookmarkedUsers.length === 0 ? (
        <Alert>
          <Bookmark className="h-4 w-4" />
          <AlertTitle>No Bookmarks Yet</AlertTitle>
          <AlertDescription>
            You haven't bookmarked any employees. Visit the dashboard to find and bookmark profiles.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bookmarkedUsers.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
