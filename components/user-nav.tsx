'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function UserNav() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleSignOut}
        className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
      >
        Sign out
      </button>
    </div>
  );
}