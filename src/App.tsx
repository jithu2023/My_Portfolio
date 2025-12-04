import Navbar from "../src/components/Navbar";

function App() {
  return (
  <div
  className="min-h-screen w-full bg-no-repeat bg-cover bg-top"
  style={{
    backgroundImage: "url('/src/assets/landing-bg.jpg')",
  }}
>

      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white"></h1>
      </div>
    </div>
  );
}

export default App;
