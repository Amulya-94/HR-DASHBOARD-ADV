
"use client";

import type { User } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/star-rating";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bookmark, Trash2 } from "lucide-react";

interface EmployeeCardProps {
  user: User;
}

export function EmployeeCard({ user }: EmployeeCardProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const { toast } = useToast();
  const bookmarked = isBookmarked(user.id);

  const handleBookmarkToggle = () => {
    if (bookmarked) {
      removeBookmark(user.id);
      toast({ title: "Bookmark Removed", description: `${user.firstName} ${user.lastName} removed from bookmarks.` });
    } else {
      addBookmark(user);
      toast({ title: "Bookmarked!", description: `${user.firstName} ${user.lastName} added to bookmarks.` });
    }
  };

  const handlePromote = () => {
    // In a real app, this would trigger a more complex workflow
    toast({ title: "Promotion Initiated", description: `Promotion process for ${user.firstName} ${user.lastName} has been noted.` });
  };

  const initials = `${user.firstName[0] || ''}${user.lastName[0] || ''}`.toUpperCase();

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-1">{user.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3 flex-grow">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{user.department}</Badge>
          <span className="text-sm text-muted-foreground">Age: {user.age}</span>
        </div>
        <StarRating rating={user.performanceRating} />
        <div className="pt-2 border-t border-border/50 mt-3">
          <p className="text-sm text-muted-foreground line-clamp-2 min-h-[calc(1.25rem*2)]">
            {user.bio || "No bio available."}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-center space-x-3 border-t">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/employee/${user.id}`}>
            <span>View</span>
          </Link>
        </Button>
        <Button variant={bookmarked ? "destructive" : "outline"} size="sm" onClick={handleBookmarkToggle} className="flex items-center gap-1">
          {bookmarked ? <Trash2 size={16} /> : <Bookmark size={16} />}
          {bookmarked ? "Remove" : "Bookmark"}
        </Button>
        <Button variant="default" size="sm" onClick={handlePromote}>
          Promote
        </Button>
      </CardFooter>
    </Card>
  );
}
