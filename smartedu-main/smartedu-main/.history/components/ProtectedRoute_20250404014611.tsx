'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({
    children,
    allowedRoles = ['USER', 'TEACHER', 'ADMIN'],
}: {
    children: React.ReactNode;
    allowedRoles?: string[];
}) {
    const { user, isLoading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Check authentication after initial loading
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }

        // Check role-based access if roles are specified
        if (!isLoading && isAuthenticated && user && allowedRoles.length > 0) {
            if (!allowedRoles.includes(user.role)) {
                // Redirect based on role if not authorized
                switch (user.role) {
                    case 'ADMIN':
                        router.push('/admin/dashboard');
                        break;
                    case 'TEACHER':
                        router.push('/teacher/dashboard');
                        break;
                    case 'USER':
                        router.push('/dashboard');
                        break;
                    default:
                        router.push('/login');
                }
            }
        }
    }, [isLoading, isAuthenticated, router, user, allowedRoles]);

    // Show nothing while checking authentication
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen" data-oid="06hoq3t">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"
                    data-oid="2frghb7"
                ></div>
            </div>
        );
    }

    // If not authenticated, don't render children
    if (!isAuthenticated) {
        return null;
    }

    // If authenticated but wrong role, don't render
    if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return null;
    }

    // If all checks pass, render the protected content
    return <>{children}</>;
}
