import { Container } from "@mui/system";
import React from "react";
import {
  BestServices,
  FreightCalculate,
  // Hero,
  // HomeBanner,
  JoinTheCrew,
  MobileApp,
  OurExperience,
  OurServices,
  OurTalent,
  ReachOut,
  RecentArticles,
  ShipmentBook,
  WeDeliver,
} from ".";

const Home = () => {
  return (
    <>
      {/* <HomeBanner /> */}
      {/* <Hero /> */}
      <Container>
        <BestServices />
      </Container>
      <Container>
        <FreightCalculate />
      </Container>
      <Container>
        <OurServices />
      </Container>
      <Container>
        <WeDeliver />
      </Container>
      <Container>
        <MobileApp />
      </Container>
      <Container>
        <JoinTheCrew />
      </Container>
      <Container>
        <ReachOut />
      </Container>
      <Container>
        <OurExperience />
      </Container>
      <Container>
        <ShipmentBook />
      </Container>
      <Container>
        <OurTalent />
      </Container>
      <Container>
        <RecentArticles />
      </Container>
    </>
  );
};

export default Home;
