// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex md:flex-row p-0 justify-center h-full w-full max-w-4xl ml-auto mr-auto overflow-hidden rounded-lg shadow-lg">
        <CurrentlyPlaying />
        <Playlist />
    </div>
  );
}
