import { supabase } from './supabase.js';

// Login Function
export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error('Login failed:', error.message);
        return null;
    }

    return data.user;
}

// Logout Function
export async function logout() {
    await supabase.auth.signOut();
    window.location.href = 'index.html';
}

// Get Current User Session
export async function getCurrentUser() {
    const { data } = await supabase.auth.getSession();
    return data.session?.user || null;
}
