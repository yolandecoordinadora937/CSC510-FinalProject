// Define your data structure here
interface User {
    id: number;
    name: string;
}

const users: Array<User> = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    // Add more users as needed
];

// Create a route for the user data
export function getUserData(): Promise<void> {
    return new Promise((resolve) => {
        const userId = Math.floor(Math.random() * users.length);
        users[userId].id = 1; // Modify or remove this line to customize the behavior of fetching and updating data.
        resolve();
    });
}
