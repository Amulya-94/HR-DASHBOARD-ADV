
import { fetchUserById } from "@/lib/data";
import type { User } from "@/lib/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Import Avatar components
import { StarRating } from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { User as UserIcon, Briefcase, MessageSquare, MapPin, Phone, Info } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image"; // Keep for project images

function getPerformanceBadgeVariant(rating: number): "default" | "secondary" | "destructive" | "outline" {
  if (rating <= 2) return "destructive";
  if (rating === 3) return "secondary";
  return "default";
}

export default async function EmployeeDetailPage({ params }: { params: { id: string } }) {
  const user = await fetchUserById(params.id);

  if (!user) {
    notFound();
  }
  
  const performanceBadgeVariant = getPerformanceBadgeVariant(user.performanceRating);
  const initials = `${user.firstName[0] || ''}${user.lastName[0] || ''}`.toUpperCase();

  return (
    <div className="container mx-auto space-y-8">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-secondary/30 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Avatar className="h-32 w-32 border-4 border-primary shadow-md">
            <AvatarFallback className="text-4xl font-semibold bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-3xl font-bold">{`${user.firstName} ${user.lastName}`}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">{user.company.title} at {user.company.name}</CardDescription>
            <div className="mt-2 flex items-center gap-4">
              <StarRating rating={user.performanceRating} size={24} />
              <Badge variant={performanceBadgeVariant} className="text-sm px-3 py-1">
                {user.performanceRating}-Star Performance
              </Badge>
            </div>
             <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{`${user.address.city}, ${user.address.state}`}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{user.phone}</span>
                </div>
             </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
              <TabsTrigger value="overview" className="flex items-center gap-2"><Info size={16}/>Overview</TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2"><Briefcase size={16}/>Projects</TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center gap-2"><MessageSquare size={16}/>Feedback</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <h3 className="text-xl font-semibold">Profile Overview</h3>
              <p className="text-muted-foreground">{user.bio || "No bio available."}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div><strong>Full Name:</strong> {user.firstName} {user.lastName}</div>
                <div><strong>Username:</strong> {user.username}</div>
                <div><strong>Email:</strong> {user.email}</div>
                <div><strong>Age:</strong> {user.age}</div>
                <div><strong>Department:</strong> {user.department}</div>
                <div><strong>Company:</strong> {user.company.name}</div>
                <div><strong>Address:</strong> {`${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}`}</div>
              </div>

              <h3 className="text-xl font-semibold mt-6 pt-4 border-t">Past Performance History</h3>
              {user.pastPerformance && user.pastPerformance.length > 0 ? (
                <ul className="space-y-3">
                  {user.pastPerformance.map((perf, index) => (
                    <li key={index} className="p-3 border rounded-md bg-card shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">Date: {perf.date}</span>
                        <StarRating rating={perf.rating} size={14} />
                      </div>
                      <p className="text-sm text-muted-foreground">{perf.comments}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No past performance data available.</p>
              )}
            </TabsContent>

            <TabsContent value="projects">
              <h3 className="text-xl font-semibold">Assigned Projects</h3>
              <Alert className="mt-4">
                <Briefcase className="h-4 w-4" />
                <AlertTitle>Mock Data</AlertTitle>
                <AlertDescription>
                  This section would display projects assigned to {user.firstName}. Currently showing placeholder content.
                  Imagine a list of projects here, e.g., "Project Alpha (Q3 2024)", "New Feature Integration (Ongoing)".
                </AlertDescription>
              </Alert>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Alpha Launch', 'Client Onboarding Redesign', 'Internal Tools Upgrade'].map(proj => (
                  <Card key={proj}>
                    <CardHeader>
                      <CardTitle className="text-lg">{proj}</CardTitle>
                      <CardDescription>Status: In Progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">A brief description of the project goals and {user.firstName}'s role.</p>
                      <Image src="https://placehold.co/600x300.png" alt="Project placeholder" width={600} height={300} className="mt-2 rounded-md" data-ai-hint="project task" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="feedback">
              <h3 className="text-xl font-semibold">Feedback & Reviews</h3>
               <Alert className="mt-4">
                <MessageSquare className="h-4 w-4" />
                <AlertTitle>Mock Data</AlertTitle>
                <AlertDescription>
                  This section would display feedback received by or given about {user.firstName}. Currently showing placeholder content.
                  Could include peer reviews, manager feedback, etc. A form to submit new feedback might also be here.
                </AlertDescription>
              </Alert>
              <div className="mt-4 space-y-4">
                {[
                  {giver: 'Jane Doe (Manager)', text: 'Excellent work on the Q2 report!', rating: 5},
                  {giver: 'John Smith (Peer)', text: 'Very helpful and collaborative.', rating: 4}
                ].map((fb, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-md">{fb.giver}</CardTitle>
                        <StarRating rating={fb.rating} size={14}/>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{fb.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
