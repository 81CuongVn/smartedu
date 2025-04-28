'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: string;
    // Add other user properties as needed
};

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user data exists in localStorage
        const initAuth = () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('token');

                if (userData && token) {
                    setUser(JSON.parse(userData));
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Authentication initialization error:', error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider
            value={{ user, isLoading, isAuthenticated: !!user, logout }}
            data-oid="lvvs9i7"
        >
            {children}
        </AuthContext.Provider>
    );
};
