
"use client"; // Make this a client component for search/filter interactivity

import { useEffect, useState, useMemo } from "react";
import type { User } from "@/lib/types";
import { fetchUsers } from "@/lib/data";
import { EmployeeCard } from "@/components/employee-card";
import { SearchFilterControls, ALL_DEPARTMENTS_FILTER_VALUE, ALL_RATINGS_FILTER_VALUE } from "@/components/search-filter-controls";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(ALL_DEPARTMENTS_FILTER_VALUE);
  const [selectedRating, setSelectedRating] = useState(ALL_RATINGS_FILTER_VALUE);

  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedUsers = await fetchUsers(20); // Fetch 20 users
        setUsers(fetchedUsers);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const term = searchTerm.toLowerCase();
      const matchesSearchTerm =
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.department.toLowerCase().includes(term);

      const matchesDepartment =
        selectedDepartment === ALL_DEPARTMENTS_FILTER_VALUE || user.department === selectedDepartment;
      
      const matchesRating =
        selectedRating === ALL_RATINGS_FILTER_VALUE || user.performanceRating === parseInt(selectedRating, 10);

      return matchesSearchTerm && matchesDepartment && matchesRating;
    });
  }, [users, searchTerm, selectedDepartment, selectedRating]);

  if (error) {
    return (
      <Alert variant="destructive" className="mt-8">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto">
      <SearchFilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3 flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
              <CardFooter className="p-4 grid grid-cols-3 gap-2">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : filteredUsers.length === 0 ? (
         <Alert className="mt-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>No Employees Found</AlertTitle>
            <AlertDescription>
              No employees match your current filter criteria. Try adjusting your search or filters.
            </AlertDescription>
          </Alert>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
