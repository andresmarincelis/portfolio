import CoverParticles from "@/components/CoverParticles";
import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <main className="pt-24 md:pt-0">
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
