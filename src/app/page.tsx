import List from "@/components/List";


export default async function Home() {


  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-slate-950">
        Interest Subscriber
      </h1>
      <div>
        <List />
      </div>
    </main>
  );
};