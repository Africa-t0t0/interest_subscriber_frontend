"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

            router.push("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </form>
      );
};