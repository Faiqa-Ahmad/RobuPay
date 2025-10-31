'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to personal page by default
    router.push('/personal');
  }, [router]);

  return null;
}
