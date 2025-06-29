import { Metadata } from 'next';
import AuthCheck from '@/components/auth-check';

export const metadata: Metadata = {
  title: 'Profile | Food Recipe App',
  description: 'Your profile page',
};

export default function ProfilePage() {
  return (
    <AuthCheck>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a protected page that is only accessible to authenticated users.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Your Saved Recipes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You don&apos;t have any saved recipes yet. Start exploring and save your favorites!
            </p>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}