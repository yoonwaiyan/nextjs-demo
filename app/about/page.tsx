export default async function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="text-base leading-3">
            <p className="font-normal text-gray-700">
              Looking For Free premium components?
            </p>
          </div>

          <div className="text-base leading-3">
            <p className="font-normal text-gray-700">
              Looking for premium themes and landing pages?
            </p>
          </div>

          <div className="text-base leading-3">
            <p className="font-normal text-gray-700">
              Looking for Awesome cheatsheet for Tailwind CSS?
            </p>
          </div>

          <div className="text-base leading-7">
            <p className="font-normal text-gray-700">
              Want to dig deeper into Tailwind CSS?
            </p>
            <p>
              <a
                target="_blank"
                href="https://tailwindcss.com/docs"
                className="text-stone-400 hover:underline"
              >
                Read the docs →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
