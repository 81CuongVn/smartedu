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
        // Debugging logs
        console.log('ProtectedRoute - Authentication status:', {
            isLoading,
            isAuthenticated,
            user,
            allowedRoles,
        });

        // Check authentication after initial loading
        if (!isLoading && !isAuthenticated) {
            console.log('Not authenticated, redirecting to login');
            router.push('/login');
        }

        // Check role-based access if roles are specified
        if (!isLoading && isAuthenticated && user && allowedRoles.length > 0) {
            if (!allowedRoles.includes(user.role)) {
                console.log(`User role ${user.role} not in allowed roles`, allowedRoles);

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
            } else {
                console.log('User has appropriate role, allowing access');
            }
        }
    }, [isLoading, isAuthenticated, router, user, allowedRoles]);

    // Show nothing while checking authentication
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen" data-oid="-3vzvxo">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"
                    data-oid="jkrrbrc"
                ></div>
            </div>
        );
    }

    // If not authenticated, don't render children
    if (!isAuthenticated) {
        console.log('Protected content not rendered - not authenticated');
        return null;
    }

    // If authenticated but wrong role, don't render
    if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        console.log('Protected content not rendered - wrong role');
        return null;
    }

    // If all checks pass, render the protected content
    console.log('Rendering protected content');
    return <>{children}</>;
}
