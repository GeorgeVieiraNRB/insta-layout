"use client";
import User from "./User";
import React, { useState } from "react";
import { FaHeart, FaShare, FaComment, FaBookmark } from "react-icons/fa";

interface parametros {
  postUrl: string;
  userUrl: string;
  userName: string;
  userLocation: string;
  content?: string;
  hashtags?: string;
  like: boolean;
}

export default function Postagem({
  postUrl,
  userUrl,
  userLocation,
  userName,
  content,
  hashtags,
  like,
}: parametros) {
  const [heartColor, setHeartColor] = like ? useState("red") : useState("gray");
  const [commentColor, setCommentColor] = useState("gray");
  const [shareColor, setShareColor] = useState("gray");
  const [bookmarkColor, setBookmarkColor] = useState("gray");
  const [likes, setLikes] = useState(like ? 1 : 0); // iniciei com 1 só pra não ficar estranho
  return (
    <div className="flex flex-col items-stretch justify-start  bg-slate-50 p-2 m-0 mx-4 w-[80] border-zinc-950 border-spacing-5">
      <User
        url={userUrl}
        userLocation={userLocation}
        userName={userName}
      ></User>
      <img src={postUrl} className="h-80 w-80 my-4 rounded-lg" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row mr-10 cursor-pointer">
          <FaHeart
            size={30}
            color={heartColor}
            onClick={() => {
              if (heartColor == "gray") {
                setHeartColor("red");
                setLikes(likes + 1);
              } else {
                setHeartColor("gray");
                setLikes(likes - 1);
              }
            }}
          />
          <FaComment
            size={30}
            color={commentColor}
            onMouseOver={() => setCommentColor("black")}
            onMouseOut={() => setCommentColor("gray")}
            className="mx-4"
          />
          <FaShare
            size={30}
            color={shareColor}
            onMouseOver={() => setShareColor("black")}
            onMouseOut={() => setShareColor("gray")}
          />
        </div>
        <FaBookmark
          size={30}
          color={bookmarkColor}
          onMouseOver={() => setBookmarkColor("black")}
          onMouseOut={() => setBookmarkColor("gray")}
        />
      </div>
      <div className="flex flex-row items-center justify-start ml-2">
        <FaHeart size={15} color="black" className="mr-2" />
        <span className="text-black"> {likes} likes</span>
      </div>
      <div className="flex flex-row">
        <p className="max-w-80 text-sm text-slate-950 text-justify">
          <span className="text-black text-sm font-bold mr-4 text-left">
            {userName}
          </span>
          {content}
        </p>
      </div>
      <span className="text-blue-700">{hashtags ? hashtags : ""}</span>
    </div>
  );
}
