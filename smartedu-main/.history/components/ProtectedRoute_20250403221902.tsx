'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div
                className="min-h-screen flex items-center justify-center bg-blue-50"
                data-oid="1qq16o2"
            >
                <div
                    className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"
                    data-oid="17.7zyx"
                ></div>
            </div>
        );
    }

    // Only render children if user is authenticated
    return user ? <>{children}</> : null;
}
