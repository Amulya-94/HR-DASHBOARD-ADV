
"use client";

import { useEffect, useState, useMemo } from "react";
import type { User } from "@/lib/types";
import { fetchUsers } from "@/lib/data";
import { EmployeeCard } from "@/components/employee-card";
import { SearchFilterControls, ALL_DEPARTMENTS_FILTER_VALUE, ALL_RATINGS_FILTER_VALUE } from "@/components/search-filter-controls";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; 

const ITEMS_PER_PAGE = 6; 

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(ALL_DEPARTMENTS_FILTER_VALUE);
  const [selectedRating, setSelectedRating] = useState(ALL_RATINGS_FILTER_VALUE);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);
      setError(null);
      setCurrentPage(1); 
      try {
        
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []); 

  const globallyFilteredUsers = useMemo(() => {
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

  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment, selectedRating]);

  const totalPages = Math.ceil(globallyFilteredUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return globallyFilteredUsers.slice(startIndex, endIndex);
  }, [globallyFilteredUsers, currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </CardHeader>
              <CardContent className="p-5 space-y-3 flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                 <Skeleton className="h-4 w-full mt-2" />
                 <Skeleton className="h-4 w-5/6" />
              </CardContent>
              <CardFooter className="p-4 flex items-center justify-between">
                <Skeleton className="h-9 w-1/4" />
                <Skeleton className="h-9 w-1/3" />
                <Skeleton className="h-9 w-1/4" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : paginatedUsers.length === 0 ? (
         <Alert className="mt-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>No Employees Found</AlertTitle>
            <AlertDescription>
              No employees match your current filter criteria. Try adjusting your search or filters.
            </AlertDescription>
          </Alert>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {paginatedUsers.map((user) => (
              <EmployeeCard key={user.id} user={user} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
