# HR Central (Employee Performance Dashboard)

HR Central is a modern, interactive dashboard designed to help HR professionals and managers track and analyze employee performance, manage employee information, and gain insights into department trends. It's built with Next.js, React, Tailwind CSS, and ShadCN UI components, featuring a clean interface and responsive design.

## ✨ Features

-   **Employee Dashboard:** View a paginated list of employees with key information at a glance (name, email, department, performance rating).
-   **Search & Filtering:** Easily find employees by name, email, or department, and filter by performance rating.
-   **Detailed Employee Profiles:** Access comprehensive profiles for each employee, including:
    -   Contact information and company details.
    -   Performance rating and past performance history (mocked).
    -   Tabs for Overview, Projects (mocked), and Feedback (mocked).
-   **Bookmarking:** Save employee profiles for quick access via a dedicated Bookmarks page.
-   **Analytics Page:** Visualize data with charts:
    -   Department Average Ratings (Bar Chart).
    -   Bookmark Trends (Line Chart - mocked data).
-   **Responsive Design:** Adapts to various screen sizes for a seamless experience on desktop and mobile devices.
-   **Light/Dark Mode:** Switch between light and dark themes according to user preference.
-   **Loading States:** Skeletons provide a better user experience while data is being fetched.
-   **Error Handling:** Displays informative messages for errors or when no data is found.

## 🔧 Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Library:** [React](https://reactjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/) (built on Radix UI and Tailwind CSS)
-   **Charting:** [Recharts](https://recharts.org/) (integrated via ShadCN UI chart components)
-   **State Management:** React Context API (for theme and bookmarks)
-   **AI Integration (Backend - if used):** [Genkit (Firebase Genkit)](https://firebase.google.com/docs/genkit)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

-   [Next.js](https://nodejs.org/) (version 18.x or higher is recommended)
-   [npm](https://www.npmjs.com/) (which comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository (if applicable):**
    If you have access to the project via a Git repository, clone it to your local machine.
    ```bash
    git clone <repository-url>
    cd <project-directory-name>
    ```

2.  **Install dependencies:**
    Navigate to the project directory in your terminal and run:
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

To start the Next.js development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

This will typically start the application on [http://localhost:9002](http://localhost:9002) (the port is specified in `package.json`). Open this URL in your web browser to see the application.

### Running Genkit (for AI features)

If you are developing or using AI-powered features that rely on Genkit, you'll need to run the Genkit development server in a separate terminal:

```bash
npm run genkit:dev
```

## 📂 Project Structure

A brief overview of the key directories:

-   `src/app/`: Contains the pages and layouts for the application, following the Next.js App Router conventions.
    -   `page.tsx`: The main dashboard/homepage.
    -   `employee/[id]/page.tsx`: The dynamic route for individual employee detail pages.
    -   `bookmarks/page.tsx`: The page displaying bookmarked employees.
    -   `analytics/page.tsx`: The page for performance analytics.
-   `src/components/`: Reusable React components.
    -   `ui/`: ShadCN UI components that have been added to the project.
    -   `layout/`: Components related to the overall application layout (e.g., Header, Sidebar).
    -   `charts/`: Custom chart components built using Recharts.
    -   `employee-card.tsx`: The component for displaying individual employee cards.
    -   `search-filter-controls.tsx`: Component for search and filter inputs.
-   `src/contexts/`: React Context providers for global state management (e.g., `ThemeProvider`, `BookmarkProvider`).
-   `src/hooks/`: Custom React hooks (e.g., `useBookmarks`, `useToast`).
-   `src/lib/`:
    -   `constants.ts`: Application-wide constants (e.g., department lists, app name).
    -   `data.ts`: Functions for fetching employee data (currently from mock data).
    -   `mock-indian-users.ts`: The source of mock employee data.
    -   `types.ts`: TypeScript type definitions.
    -   `utils.ts`: Utility functions like `cn` for Tailwind class merging.
-   `src/ai/`:
    -   `genkit.ts`: Genkit initialization and configuration.
    -   `dev.ts`: Entry point for Genkit development server.
    -   `flows/`: Directory for Genkit flows (if any are implemented).
-   `public/`: Static assets that are served directly (e.g., images, favicons - though none currently).
-   `next.config.ts`: Configuration file for Next.js.
-   `tailwind.config.ts`: Configuration file for Tailwind CSS.
-   `components.json`: Configuration file for ShadCN UI.

## 📊 Data Source

The application currently uses **local mock data** for employee information, found in `src/lib/mock-indian-users.ts`. This data is designed to simulate a real-world dataset with Indian-sounding names and relevant HR details. This approach allows for full development and demonstration of features without requiring a backend database setup.

## 🎨 Theming

The application supports light and dark themes, configurable via a toggle in the header. Theme variables are defined in `src/app/globals.css` using HSL CSS variables for easy customization. The current theme is a monochrome blue.

## 🤝 Contributing (Example Section)

This section would typically outline guidelines for contributing to the project. For example:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5.  Push to the branch (`git push origin feature/AmazingFeature`).
6.  Open a Pull Request.






