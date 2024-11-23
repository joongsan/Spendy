# Spendy

Spendy is a financial ledger application that helps users manage their expenses by uploading bank statements, categorizing transactions using AI, and visualizing spending habits.

## Features

- User Authentication
- Transaction Upload (CSV, Excel, PDF)
- AI-driven Categorization
- Expense Summary Visualization
- Feedback and Learning System

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```sh
   cd Spendy.Web
   ```

3. Install spendy-web dependencies:
   ```sh
   cd spendy-web
   npm install
   # or
   yarn install
   ```
4. Install spendy-api dependencies:
   ```sh
   cd ../spendy-api
   dotnet restore
   ```

### Running the Application

1. Start the spendy-api server:

   ```sh
   cd spendy-api
   dotnet run
   ```

2. Start the spendy-web development server:

   ```sh
   cd ../spendy-web
   npm start
   # or
   yarn start
   ```

3. Open your browser and navigate to `http://localhost:{your localhsot port number}`.

### Project Structure

- `spendy-web/`: React frontend application
- `spendy-api/`: .NET backend API

### API Endpoints

- `POST /api/auth/login`: User login
- `POST /api/auth/register`: User registration
- `POST /api/transactions/upload`: Upload transactions
- `GET /api/transactions`: Fetch transactions
- `POST /api/transactions/categorize`: Categorize transactions

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
