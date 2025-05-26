
import { fetchUsers } from "@/lib/data"; // Server-side fetch for initial data
import { DepartmentRatingChart } from "@/components/charts/department-rating-chart";
import { BookmarkTrendsChart } from "@/components/charts/bookmark-trends-chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart2, TrendingUp } from "lucide-react";

// This page can be a server component that fetches initial data for charts
export default async function AnalyticsPage() {
  const users = await fetchUsers(100); // Fetch more users for better analytics data

  return (
    <div className="container mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Performance Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart2 className="h-6 w-6 text-primary" />
              <CardTitle>Department Average Ratings</CardTitle>
            </div>
            <CardDescription>Average performance rating for each department.</CardDescription>
          </CardHeader>
          <CardContent>
            <DepartmentRatingChart users={users} />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-accent" />
              <CardTitle>Bookmark Trends (Mocked)</CardTitle>
            </div>
            <CardDescription>Trends in employee bookmarking over the past few months.</CardDescription>
          </CardHeader>
          <CardContent>
            <BookmarkTrendsChart />
          </CardContent>
        </Card>
      </div>
      
      {/* Placeholder for more charts or analytics data */}
      {/* 
      <Card>
        <CardHeader><CardTitle>Other Metric</CardTitle></CardHeader>
        <CardContent>
          <p className="text-muted-foreground">More analytics content can go here.</p>
        </CardContent>
      </Card>
      */}
    </div>
  );
}
