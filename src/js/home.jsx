import React from "react";
import NavBar from "./components/NavBar";
import HeroImage from "./components/HeroImage";
import Card from "./components/card";
import Footer from "./components/footer";

const Home = () => {
  return (
    <>
      <main className="d-flex flex-column justify-content-between vh-100">
        <nav className="container-fluid p-0 ">
          <NavBar />
        </nav>

        <section className="container d-flex flex-column p-3 justify-content-between gap-4">
          <HeroImage />

          <div className="row justify-content-center ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        <footer className="container p-0 m-0 mw-100">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Home;
