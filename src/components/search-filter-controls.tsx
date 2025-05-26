
"use client";

import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENTS, PERFORMANCE_RATINGS } from "@/lib/constants";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ALL_DEPARTMENTS_FILTER_VALUE = "__ALL_DEPARTMENTS__";
export const ALL_RATINGS_FILTER_VALUE = "__ALL_RATINGS__";

interface SearchFilterControlsProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedDepartment: string;
  setSelectedDepartment: Dispatch<SetStateAction<string>>;
  selectedRating: string;
  setSelectedRating: Dispatch<SetStateAction<string>>;
}

export function SearchFilterControls({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedRating,
  setSelectedRating,
}: SearchFilterControlsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const commonDivClasses = "mb-8 p-6 bg-card rounded-lg shadow sticky top-16 z-40 w-full";

  if (!mounted) {
    return (
      <div className={commonDivClasses}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className={commonDivClasses}> {/* Adjusted top for header height, added w-full */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, email, department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchTerm("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_DEPARTMENTS_FILTER_VALUE}>All Departments</SelectItem>
            {DEPARTMENTS.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedRating} onValueChange={setSelectedRating}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_RATINGS_FILTER_VALUE}>All Ratings</SelectItem>
            {PERFORMANCE_RATINGS.map((rating) => (
              <SelectItem key={rating} value={String(rating)}>
                {rating} Star{rating > 1 ? 's' : ''}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
