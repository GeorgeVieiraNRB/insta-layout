import { FaEllipsisH } from "react-icons/fa";

interface user {
  url: string;
  userName: string;
  userLocation: string;
}

export default function User({ url, userName, userLocation }: user) {
  return (
    <div className="flex justify-between">
      <div className="flex mr-2">
        <img src={url} alt="" className=" h-14 w-14 rounded-full" />
        <div className="flex flex-col ml-2 mr-2">
          <h1 className="text-black font-bold">{userName}</h1>
          <p className="text-base text-stone-700">{userLocation}</p>
        </div>
      </div>
      <FaEllipsisH color="black" className="mr=2"></FaEllipsisH>
    </div>
  );
}
