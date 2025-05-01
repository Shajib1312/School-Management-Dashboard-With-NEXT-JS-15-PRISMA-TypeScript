import Image from "next/image";

export const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-priButton even:bg-secButton p-4 flex-1 transition-colors duration-300 ease-in-out hover:bg-iconPrimary hover:text-secButtonText shadow-bg">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 bg-paragraph rounded-full py-1 text-cardText">
          12/08/2025
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl my-4 text-cardBackground font-semibold">1232</h1>
      <h2 className="text-sm font-medium capitalize">{type}</h2>
    </div>
  );
};
export default UserCard;
