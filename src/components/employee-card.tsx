
"use client";

import type { User } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/star-rating";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useToast } from "@/hooks/use-toast";
import { Bookmark, Eye, TrendingUp, Trash2 } from "lucide-react";

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
    toast({ title: "Promotion Initiated", description: `Promotion process for ${user.firstName} ${user.lastName} has been noted.` });
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4 p-4 bg-secondary/30">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          width={64}
          height={64}
          className="rounded-full border-2 border-primary"
          data-ai-hint="user avatar"
        />
        <div>
          <CardTitle className="text-lg">{`${user.firstName} ${user.lastName}`}</CardTitle>
          <CardDescription className="text-xs">{user.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3 flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Department:</span>
          <Badge variant="secondary">{user.department}</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Age:</span>
          <span className="text-sm">{user.age}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Performance:</span>
          <StarRating rating={user.performanceRating} />
        </div>
      </CardContent>
      <CardFooter className="p-4 grid grid-cols-3 gap-2 bg-secondary/30">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/employee/${user.id}`} className="flex items-center gap-1">
            <Eye size={16} /> View
          </Link>
        </Button>
        <Button variant={bookmarked ? "destructive" : "outline"} size="sm" onClick={handleBookmarkToggle} className="flex items-center gap-1">
          {bookmarked ? <Trash2 size={16} /> : <Bookmark size={16} />}
          {bookmarked ? "Remove" : "Bookmark"}
        </Button>
        <Button variant="default" size="sm" onClick={handlePromote} className="flex items-center gap-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <TrendingUp size={16} /> Promote
        </Button>
      </CardFooter>
    </Card>
  );
}
