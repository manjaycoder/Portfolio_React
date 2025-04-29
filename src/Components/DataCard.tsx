const DataCard = ({ image, text }:any) => {
  return (
    <div className=" border rounded-xl shadow-md text-zinc-400 p-4 text-center ">
      <h3 className="text-3xl md:text-xl text-zinc-300 font-sans">{text}</h3>
    </div>
  );
};

export default DataCard;
