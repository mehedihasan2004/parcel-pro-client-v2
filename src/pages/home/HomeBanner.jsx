import { Typography } from "@mui/material";
import React from "react";
// import ShipVideo from "../../assets/ship.mp4";

const HomeBanner = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* <video width="100%" autoPlay muted loop src={ShipVideo}></video> */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#f1f1f1",
          width: "100%",
        }}
      >
        <Typography
          align="center"
          variant="h2"
          style={{ color: "#ffffff", fontWeight: "bold", marginBottom: "30px" }}
        >
          Your <span style={{ color: "green" }}>Trusted</span> Shipping Partner
        </Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi <br />
          aspernatur cum dignissimos eaque, harum et amet laborum porro iste id
          <br />
          sapiente labore, eius dicta adipisci reiciendis dolorem at libero
          fuga. Mehedi Hasan
        </Typography>
      </div>
    </div>
  );
};

export default HomeBanner;
