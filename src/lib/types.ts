
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

// Stripped down version of DummyJSON user for what we'll use
export interface DummyUser {
    id: number;
    firstName: string;
    lastName:string;
    age: number;
    email: string;
    phone: string;
    username: string;
    image: string;
    address: {
        address: string;
        city: string;
        postalCode: string;
        state: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
    };
}

export interface DummyUserApiResponse {
  users: DummyUser[];
  total: number;
  skip: number;
  limit: number;
}
