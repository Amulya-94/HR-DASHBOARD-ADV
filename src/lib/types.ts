
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
  department: string;
  performanceRating: number; // 1-5
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
  phone: string;
  company: {
    department: string;
    name: string;
    title: string;
  };
  username: string;
  bio?: string;
  pastPerformance?: { date: string; rating: number; comments: string }[];
}

// Removed DummyUser and DummyUserApiResponse as we are moving to local mock data
