
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import type { User } from "@/lib/types"
import { DEPARTMENTS } from "@/lib/constants"
import { useMemo } from "react"

interface DepartmentRatingChartProps {
  users: User[];
}

const chartConfig = {
  averageRating: {
    label: "Avg. Rating",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function DepartmentRatingChart({ users }: DepartmentRatingChartProps) {
  const data = useMemo(() => {
    if (!users || users.length === 0) return [];
    
    const departmentData: { [key: string]: { totalRating: number; count: number } } = {};

    users.forEach(user => {
      if (!departmentData[user.department]) {
        departmentData[user.department] = { totalRating: 0, count: 0 };
      }
      departmentData[user.department].totalRating += user.performanceRating;
      departmentData[user.department].count++;
    });

    return DEPARTMENTS.map(dept => {
      const deptInfo = departmentData[dept];
      return {
        department: dept,
        averageRating: deptInfo ? parseFloat((deptInfo.totalRating / deptInfo.count).toFixed(2)) : 0,
      };
    }).filter(d => d.averageRating > 0); // Optionally filter out departments with no users or ratings
  }, [users]);

  if (!data || data.length === 0) {
    return <p className="text-muted-foreground">Not enough data to display department ratings chart.</p>;
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 50 /* Increased bottom margin for labels */ }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="department" 
            angle={-45} // Angle labels for better readability
            textAnchor="end" // Anchor angled text at the end
            interval={0} // Show all labels
            height={60} // Allocate more height for XAxis for angled labels
            tick={{ fontSize: 12 }}
          />
          <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="averageRating" fill="var(--color-averageRating)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
