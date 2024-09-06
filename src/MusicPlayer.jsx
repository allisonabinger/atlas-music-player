// Music Player Component
import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls";
import VolumeControl from "./components/VolumeControl";
import PlayListItem from "./components/PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="flex flex-row justify-center">
        <div className="currently-playing w-full">
          <CoverArt />
          <SongTitle title="Tidal Drift" artist="Echoes of the Sea" />
          <PlayControls />
          <VolumeControl />
        </div>
        <div className="playlist w-full">
            <PlayListItem title="Electric Fever" artist="Neon Jungle" length="8:41" />
        </div>
    </div>
  );
}
