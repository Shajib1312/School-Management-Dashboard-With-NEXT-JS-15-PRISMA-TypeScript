const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-iconAccent">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-priButton text-xs font-semibold disabled:bg-paragraph disabled:text-priButton disabled:cursor-not-allowed"
      >
        prev
      </button>
      <div className="flex items-center gap-2 text-sm ">
        <button className="px-2 rounded-sm bg-priButton text-paragraph">1</button>
        <button className="">2</button>
        <button className="">3</button>
        ...
        <button className="">12</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-priButton text-xs font-semibold disabled:bg-paragraph disabled:text-priButton disabled:cursor-not-allowed hover:bg-iconPrimary hover:text-paragraph transition-all duration-200 ease-in-out">
        next
      </button>
    </div>
  );
};

export default Pagination;
