# node-dotnet-sample

This is a sample project that demonstrates how to use the [Node.js](https://nodejs.org/) runtime to build a simple web application that interacts with a [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/) backend.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [.NET SDK](https://dotnet.microsoft.com/download) installed on your machine.

## Getting Started

1. Install the .NET dependencies:
    ```sh
    dotnet restore
    ```

2. Install the Node.js dependencies:
    ```sh
    npm install
    ```

3. Build the .NET project and generate TypeScript definitions:
    ```sh
    npm run build
    ```

4. Run the application:
    ```sh
    npm start
    ```

## Usage

The application reads a sample YAML file, generates a plugin using the  class, and prints the result to the console.

## License

This project is licensed under the MIT License.
