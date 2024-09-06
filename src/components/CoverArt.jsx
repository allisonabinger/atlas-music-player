// Cover Art Component (uses placeholder)
import placeholderImage from "../assets/placeholder.svg";

function CoverArt() {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={placeholderImage}
        alt="Placeholder Cover Art Image"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}

export default CoverArt;
