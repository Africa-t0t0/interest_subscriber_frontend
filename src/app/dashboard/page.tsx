import Dashboard from "@/components/containers/Dashboard";
import AuthGuard from "@/components/auth/AuthGuard";

export default function Home() {

  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-100 p-8 space-y-8">
        <h1 className="text-4xl font-bold text-slate-950">
          Interest Subscriber
        </h1>
        <Dashboard />
      </main>
    </AuthGuard>

  );
};