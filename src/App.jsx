import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="justify-between flex flex-col h-full p-8 min-h-screen">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
