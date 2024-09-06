// PlayList Item Component

function PlayListItem({ title, artist, length }) {
  return (
    <div className="w-full mb-1 pr-2 flex justify-between font-medium">
      <div className="wrapper text-left text-sm">
        <div className="">{title}</div>
        <div className="text-slate-500">{artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-sm text-slate-400">{length}</div>
      </div>
    </div>
  );
}
export default PlayListItem;
