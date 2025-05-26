
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function EmployeeNotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-4xl font-bold mb-2">Employee Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Sorry, we couldn't find the employee profile you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
}
