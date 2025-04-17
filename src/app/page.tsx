import PallinoCarousel from "../components/pallino";
import DiscordStatus from "../components/discord";
import ProjectsList from "../components/projects";
import SocialsList from "../components/socials";
import GitHubStats from "../components/github";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto justify-center p-4">
      {/* Nav */}
      <div className="flex">
        <img src="https://unavatar.io/stef-00012" alt="my profile picture" className="rounded-full size-10 me-2"/>
        <h1 className="text-4xl">Stef</h1>
      </div>


    </div>
  );
}
