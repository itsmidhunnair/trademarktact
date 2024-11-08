import { Footer } from "./components/common";
import { Header } from "./components/common/header";
import { AboutUsSection, Features, HeroSection } from "./components/homepage";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <AboutUsSection />
      <Footer />
    </>
  );
}

export default App;
