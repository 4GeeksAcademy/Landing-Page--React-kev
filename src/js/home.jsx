import React from "react";
import NavBar from "./components/NavBar";
import HeroImage from "./components/HeroImage";
import Card from "./components/card";
import Footer from "./components/footer";

//create your first component
const Home = () => {
  return (
    <>
      <main className="d-flex flex-column justify-content-between vh-100">
        <nav className="container-fluid p-0 ">
          <NavBar />
        </nav>

        <section className="container d-flex flex-column p-3 justify-content-between gap-5">
          <HeroImage />

          <div className="row justify-content-center gap-2">
            <Card className="col" />
            <Card className="col" />
            <Card className="col" />
            <Card className="col" />
          </div>
        </section>

        <footer className="container p-0 m-0 mw-100" style={{ height: "70px" }}>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Home;
