// PlayList Item Component

function PlayListItem({ title, artist, length }) {
  return (
    <div className="w-full mb-1 flex justify-between">
      <div className="wrapper text-left">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-slate-500">{artist}</div>
      </div>
      <div className="length">
        <div className="text-sm text-slate-400">{length}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
