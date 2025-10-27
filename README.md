# Gym Tracker

A simple web app to track my activity at the gym.

## Target Device

This application is designed to run on an Apple Watch, which means it is optimized for a very small screen.

## App Functionality

- **No Authentication:** The app does not require user authentication.
- **Default View:** When the page is opened, it displays the latest training session.
- **Training Sessions:** There are three types of training sessions: "Legs," "Back," and "Chest."
- **Registering a New Session:**
  - A button is available to register a new session.
  - Clicking this button reveals three options (buttons) to choose the new session type.
  - When a session is registered, the current date is automatically recorded with it.

## Tech Stack

- Vercel
- Vite
- React
- Tailwind
- Supabase

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd gym-tracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Supabase (via Vercel):**

    The recommended setup for this project is to use the Vercel-Supabase integration.

      * In your project's Vercel dashboard, go to the **Storage** tab and create a new **Supabase** database.
      * After the database is created, Vercel will provide you with a set of environment variables.
      * Link your local project to your Vercel project by running:
        ```bash
        vercel link
        ```
      * Pull the environment variables to your local project. This will create a `.env.local` file with the correct keys.
        ```bash
        vercel env pull .env.local
        ```
      * The key variables for the frontend are `VITE_PUBLIC_SUPABASE_URL` and `VITE_PUBLIC_SUPABASE_ANON_KEY`.

    ```
    VITE_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL_FROM_VERCEL"
    VITE_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY_FROM_VERCEL"
    ```
4.  **Run the app**
    ```bash
    npm run dev
    ```
