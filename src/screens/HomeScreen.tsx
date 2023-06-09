import Hero from "../components/Hero";
import Products from "../components/Products";

function HomeScreen() {
  return (
    <div className="bg-slate-100">
      <Hero />
      <Products screen="home" />
    </div>
  );
}

export default HomeScreen;
