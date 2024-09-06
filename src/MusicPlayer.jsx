// Music Player Component
import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls";

export default function MusicPlayer() {
  return (
    <div className="m-auto">
      <CoverArt />
      <SongTitle title="Tidal Drift" artist="Echoes of the Sea" />
      <PlayControls />
    </div>
  );
}
