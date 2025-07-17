import AvatarPortfolio from "@/components/AvatarPortfolio";
import CircleImage from "@/components/CircleImage";
import Container from "@/components/Container";
import CoverParticles from "@/components/CoverParticles";
import PortfolioBox from "@/components/PortfolioBox";
import TransitionPage from "@/components/TransitionPage";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <Container>
      <TransitionPage />
      <CoverParticles />
      <AvatarPortfolio />
      <CircleImage />

      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 text-white font-bold">
          Mis últimos
          <span className="text-secondary font-bold"> trabajos realizados</span>
        </h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4 text-white">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PortfolioPage;
