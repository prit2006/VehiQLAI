import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to CarHubAI!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your one-stop destination for all things automotive.
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="/cars"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Explore Cars
        </a>
        <a
          href="/about"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          About Us
        </a>
      </div>
    </div>  
  );
}
