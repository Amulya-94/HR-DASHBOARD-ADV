
"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  iconClassName?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  className,
  iconClassName,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "transition-colors",
              starValue <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-muted-foreground fill-muted",
              iconClassName
            )}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
