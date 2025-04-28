'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    email: string;
    name: string;
    // Add any other user properties you might need
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
    error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Check if user is already logged in on mount
    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                const storedToken = localStorage.getItem('token');

                if (storedUser && storedToken) {
                    // You could validate the token with your API here
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Authentication error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkLoggedIn();
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);
        setError(null);

        try {
            const domain = process.env.NEXT_PUBLIC_API_DOMAIN;
            if (!domain) {
                throw new Error('API domain not configured');
            }

            const response = await fetch(`${domain}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Assuming the API returns user data and a token
            const { user: userData, token } = data;

            // Store user data and token
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', token);

            setUser(userData);
            return true;
        } catch (err: any) {
            setError(err.message || 'An error occurred during login');
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading, error }} data-oid="yska:0k">
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
