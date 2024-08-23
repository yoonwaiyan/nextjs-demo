import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-8">
        <h2 className="font-bold text-3xl">
          Let's find more that we have in common.
        </h2>
        <p className="my-4 text-gray-500">
          LinkUp is your go-to for connecting with friends, family, and people
          who share your passions. Discover new friends and strengthen existing
          relationships with features like Groups, Watch, and Marketplace.
        </p>
        <div>
          <a
            href="#"
            className="inline-block bg-blue-700 text-white px-3 py-2 rounded-lg"
          >
            Get started
          </a>
          <a
            href="#"
            className="ml-3 inline-block border border-gray-300 px-3 py-2 rounded-lg"
          >
            View more
          </a>
        </div>
      </div>
    </main>
  );
}
