// Define a class called "App"
class App {
  constructor() {}

  // Method to display the welcome message
  async greetUser(): Promise<void> {
    console.log("Welcome to the Django web application!");
  }
}

// Create an instance of the App class
const app = new App();

// Call the method to display the welcome message
await app.greetUser();
