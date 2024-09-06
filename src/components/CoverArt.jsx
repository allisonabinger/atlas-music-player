// Cover Art Component (uses placeholder)
import placeholderImage from "../assets/placeholder.svg";

function CoverArt() {
  return (
    <div className="cover-art mb-6 w-full justify-center">
      <img
        src={placeholderImage}
        alt="Placeholder Cover Art Image"
        className="rounded-md"
        width={400}
        height={400}
      />
    </div>
  );
}

export default CoverArt;
