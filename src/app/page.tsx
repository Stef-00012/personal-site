import PallinoCarousel from "../components/pallino";
import ProjectsList from "../components/projects";
import SocialsList from "../components/socials";
import GitHubStats from "../components/github";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bgeffect" />
      <div className="flex flex-col items-center">
        <img
          src="https://unavatar.io/stef-00012"
          alt="my profile picture"
          className="rounded-full size-24 mb-4"
        />
        <div className="flex items-center"><h1 className="text-5xl text-primary mb-4 me-2">Stef</h1><span className="status-success status size-4 mb-3"></span></div>
        {/* in the above line, status-success for online, status-warning for idle, and status-error for do not disturb */}
        <SocialsList />

        <div className="mt-10 font-mono">
          insert discord status and activity
        </div>
      </div>
    </div>
  );
}
