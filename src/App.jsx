import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Services from "./pages/Services";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <div className="container mx-auto px-5">
        <Hero />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
