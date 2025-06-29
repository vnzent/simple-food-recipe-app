# Food Recipe App

A Next.js application for discovering and saving delicious recipes from around the world. This project includes user authentication with Supabase.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- User authentication (sign up, sign in, sign out)
- Protected routes for authenticated users
- Recipe browsing by categories
- Responsive design with dark mode support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.io/) - Backend as a Service (BaaS) for authentication and database
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Authentication Implementation

This project uses Supabase for authentication. The implementation includes:

- Server-side authentication with `@supabase/ssr`
- Client-side authentication components
- Middleware for session management
- Protected routes with authentication checks

### Authentication Flow

1. Users can sign up with email, password, and name
2. Users can sign in with email and password
3. Authentication state is maintained across the application
4. Protected routes redirect unauthenticated users to the sign-in page

## Project Structure

```
/app
  /auth
    /sign-in
      page.tsx
      sign-in-form.tsx
    /sign-up
      page.tsx
      sign-up-form.tsx
    actions.ts
  /profile
    page.tsx
  /recipes
    page.tsx
  layout.tsx
  page.tsx
/components
  auth-check.tsx
  header.tsx
  user-nav.tsx
/utils
  /supabase
    client.ts
    middleware.ts
    server.ts
middleware.ts
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account and project

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
