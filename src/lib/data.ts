
import type { User, DummyUser, DummyUserApiResponse } from "./types";
import { DEPARTMENTS, PERFORMANCE_RATINGS } from "./constants";

// Helper to add random department and performance rating
function processRawUser(rawUser: DummyUser): User {
  return {
    ...rawUser,
    // Use company department if available, otherwise assign randomly
    department: rawUser.company?.department || DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
    performanceRating: PERFORMANCE_RATINGS[Math.floor(Math.random() * PERFORMANCE_RATINGS.length)],
    // Mock bio and past performance if needed for detail page, or handle it there
    bio: `This is a mock bio for ${rawUser.firstName}. They are a dedicated professional in the ${rawUser.company?.department || 'Unknown'} department.`,
    pastPerformance: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
        date: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365).toISOString().split('T')[0], // Random date in past year
        rating: PERFORMANCE_RATINGS[Math.floor(Math.random() * PERFORMANCE_RATINGS.length)],
        comments: `Mock performance review comment #${i + 1}.`
    }))
  };
}

export async function fetchUsers(limit: number = 20): Promise<User[]> {
  try {
    const response = await fetch(`https://dummyjson.com/users?limit=${limit}&select=id,firstName,lastName,age,email,phone,username,image,address,company`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const data: DummyUserApiResponse = await response.json();
    return data.users.map(processRawUser);
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return empty array on error
  }
}

export async function fetchUserById(id: string): Promise<User | null> {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}?select=id,firstName,lastName,age,email,phone,username,image,address,company`);
    if (!response.ok) {
      if (response.status === 404) return null; // User not found
      throw new Error(`Failed to fetch user ${id}: ${response.statusText}`);
    }
    const rawUser: DummyUser = await response.json();
    return processRawUser(rawUser);
  } catch (error) {
    console.error(`Error fetching user by ID ${id}:`, error);
    return null; // Return null on error
  }
}
