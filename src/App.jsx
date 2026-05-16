import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import SoldOut from "./components/SoldOut";
import Value from "./components/Value";
import Stats from "./components/Stats";
import Curation from "./components/Curation";
import Pitch from "./components/Pitch";
import Programme from "./components/Programme";
import Networking from "./components/Networking";
import Editors from "./components/Editors";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import EventEndedModal from "./components/EventEndedModal";

export default function App() {
  return (
    <div className="bg-ink text-cream min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Speakers />
        <SoldOut />
        <Value />
        <Stats />
        <Curation />
        <Pitch />
        <Programme />
        <Networking />
        <Gallery />
        <Editors />
        <Newsletter />
      </main>
      <Footer />
      <ScrollTop />
      <EventEndedModal />
    </div>
  );
}
