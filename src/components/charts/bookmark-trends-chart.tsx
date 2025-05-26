
"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const mockBookmarkData = [
  { month: "Jan", bookmarks: Math.floor(Math.random() * 20) + 5 },
  { month: "Feb", bookmarks: Math.floor(Math.random() * 20) + 10 },
  { month: "Mar", bookmarks: Math.floor(Math.random() * 20) + 8 },
  { month: "Apr", bookmarks: Math.floor(Math.random() * 20) + 15 },
  { month: "May", bookmarks: Math.floor(Math.random() * 20) + 12 },
  { month: "Jun", bookmarks: Math.floor(Math.random() * 20) + 18 },
];

const chartConfig = {
  bookmarks: {
    label: "Bookmarks",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig

export function BookmarkTrendsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockBookmarkData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }}/>
          <YAxis tick={{ fontSize: 12 }}/>
          <Tooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="bookmarks" stroke="var(--color-bookmarks)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
