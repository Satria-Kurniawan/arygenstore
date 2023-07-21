import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Review from "./pages/Review";
import Services from "./pages/Services";

export default function App() {
  return (
    <main>
      <Nav />
      <div className="container mx-auto px-5">
        <Hero />
        <Services />
        <Review />
        <Contact />
      </div>
    </main>
  );
}
