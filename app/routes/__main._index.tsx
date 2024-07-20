import type { MetaFunction } from "@remix-run/node";
import logo from "../assets/logo.png";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:max-w-[350px] lg:max-w-[550px]">
        <p className="text-gray-300">
          Ice Baths and Sauna are an ancient concept used by multiple
          civilizations. Finland is the paradise of ice and saunas are a daily
          routine. We honor Finland by choosing a Finnish word for our studios.
          Ice Baths are an experience, everyone feels energized, happy and full
          of joy. Joy is the word we chose, ilo means joy in Finnish.
        </p>
        <br />
        <p className="text-gray-300">
          ilo studios makes you rediscover joy. At ilo studios you will push
          your mind, improve your presence, concentracion and awareness. You
          will meet like-minded people interested in boosting their skills,
          improving their quality of life and increasing their life expectancy.
        </p>
        <br />
        <p className="text-gray-300">
          Deep down we all know it, joy requires effort.
        </p>
      </div>
      <div className="flex flex-col max-w-[300px] items-stretch mt-10 md:mt-0">
        <img alt="logo" src={logo} className="mx-16 [w-172px] h-[125px] flex-shrink-0" />
        <Link to="/signup"
          type="button"
          className="text-center mt-10 sm:mt-20 rounded-sm bg-yellow-500 px-3.5 py-3.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Start the Journey
        </Link>
      </div>
    </div>
  );
}
