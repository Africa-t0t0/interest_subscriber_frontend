"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/forms/LoginForm';

import "../../globals.css";


export default function LoginPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/auth-api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem("token", token);
            router.push("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <LoginForm
            handleLogin={handleLogin}
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
        />
  );
};