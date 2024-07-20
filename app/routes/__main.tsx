import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-6xl py-10 sm:py-20 lg:py-20">
        <div className="font-sans p-4 flex flex-col">
          <div className="">
            <h1 className="text-6xl sm:text-7xl text-white">ilo studios</h1>
          </div>
          <div className="my-10 sm:my-20">
            <Outlet />
          </div>
          <ul className="content-center mt-6 space-y-4 text-center">
            <li className="m-auto">
              <a
                href="https://www.instagram.com/ilo_studios_"
                className="text-md text-gray-300"
              >
                instagram
              </a>
            </li>
            <li className="m-auto">
              <a
                href="mailto:hello@ilo-studios.com"
                className="text-md text-gray-300"
              >
                hello@ilo-studios.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
