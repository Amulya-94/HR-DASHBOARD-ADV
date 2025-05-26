
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

interface SearchFilterControlsProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedDepartments: string[];
  setSelectedDepartments: Dispatch<SetStateAction<string[]>>;
  selectedRatings: number[];
  setSelectedRatings: Dispatch<SetStateAction<number[]>>;
}

// This is a simplified version. Multi-select for ShadCN Select is not standard.
// For a true multi-select, a more complex component (e.g. using Popover and Checkboxes) would be needed.
// Here, we'll use single select for department and rating for simplicity of this exercise.
// To implement multi-select: use `DropdownMenu` with `DropdownMenuCheckboxItem`.

export function SearchFilterControls({
  searchTerm,
  setSearchTerm,
  // selectedDepartments, setSelectedDepartments, // For multi-select
  // selectedRatings, setSelectedRatings, // For multi-select
  // Using single select for this example:
  selectedDepartment, setSelectedDepartment,
  selectedRating, setSelectedRating,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedDepartment: string;
  setSelectedDepartment: Dispatch<SetStateAction<string>>;
  selectedRating: string; // Storing as string due to Select component value
  setSelectedRating: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mb-8 p-6 bg-card rounded-lg shadow sticky top-16 z-40"> {/* Adjusted top for header height */}
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
            <SelectItem value="">All Departments</SelectItem>
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
            <SelectItem value="">All Ratings</SelectItem>
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
