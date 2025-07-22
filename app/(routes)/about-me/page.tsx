import Avatar from "@/components/Avatar";
import Container from "@/components/Container";
import CounterServices from "@/components/CounterServices";
import CoverParticles from "@/components/CoverParticles";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransitionPage";

const AboutMe = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <CoverParticles />
        <Avatar />
        <h1
          className="text-2xl leading-tight
         text-center text-white md:text-left md:text-5xl md:mt-10 mx-auto max-w-3xl"
        >
          Toda mi{" "}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
        <TimeLine />
      </Container>
    </>
  );
};

export default AboutMe;
