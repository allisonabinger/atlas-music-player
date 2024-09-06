import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

function CurrentlyPlaying() {
  return (
    <div className="currently-playing w-full p-6 justify-center items-center">
      <CoverArt />
      <SongTitle title="Tidal Drift" artist="Echoes of the Sea" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}

export default CurrentlyPlaying;
