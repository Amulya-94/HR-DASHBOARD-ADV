
import type { User } from "./types";
import { DEPARTMENTS, PERFORMANCE_RATINGS } from "./constants"; // Keep if needed for new mock data generation or validation
import { indianUsers } from "./mock-indian-users";

// Helper function to simulate async fetching
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchUsers(limit?: number): Promise<User[]> {
  await simulateDelay(100); // Simulate network latency

  let usersToReturn = [...indianUsers]; // Operate on a copy to prevent accidental mutation

  if (limit && limit > 0 && limit < usersToReturn.length) {
    usersToReturn = usersToReturn.slice(0, limit);
  }
  // If no limit or an invalid limit (e.g., 0 or too large), return all users from the mock data
  return usersToReturn;
}

export async function fetchUserById(id: string): Promise<User | null> {
  await simulateDelay(50); // Simulate network latency
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    return null;
  }
  const user = indianUsers.find(u => u.id === numericId);
  return user || null;
}
