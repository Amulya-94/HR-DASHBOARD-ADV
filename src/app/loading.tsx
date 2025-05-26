
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      {/* Header-like skeleton */}
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-1/4" />
        <Skeleton className="h-10 w-16" />
      </div>

      {/* Search/Filter-like skeleton */}
      <div className="p-6 bg-card rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      
      {/* Card grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="border bg-card rounded-lg shadow p-4 space-y-3">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-8 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
