import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <h2 className="text-4xl text-white">Join the movement</h2>
        <p className="text-gray-300 my-5 max-w-[300px]">
          We know you are busy, no spam. Just relevant info and our opening
          date.
        </p>
        <form className="flex flex-col gap-y-3">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              required
              name="email"
              type="email"
              autoComplete="name"
              placeholder="Your email"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
            <button
              type="submit"
              className="mt-3 mx-3 text-center rounded-sm bg-yellow-500 px-3.5 py-3.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Join the movement
            </button>
        </form>
      </div>
    </div>
  );
}
