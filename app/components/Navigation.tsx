import Link from "next/link";
import React from "react";
import { Genres } from "../types";

export const Navigation = ({ genre }: { genre: Genres }) => {
  return (
    <div className="py-[11.5px] ">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <Link href={"/"} className="flex gap-2 items-center">
            <img className="w-5" src="/logo.svg" alt="logo" />
            <p className="text-[#4338CA] font-semibold italic">Movie Z</p>
          </Link>
          <div className="flex gap-3">
            <button className="py-2 px-4 border rounded-lg border-[#E4E4E7] flex items-center justify-center gap-2">
              <img className="w-4" src="/down.svg" alt=""></img>
              <p className="text-sm w-10.25 h-5"></p>
            </button>
            <div className="flex gap-2.5 border rounded-lg border-[#E4E4E7] w-94 h-9 pl-3 pr-3">
              <img className="w-4" src="/search.svg" alt="search" />

              <input
                className="w-83.25 outline-0"
                placeholder="search.."
              ></input>
            </div>
            <div className="p-5 border border-[#E4E4E7] bg-white rounded-lg absolute w-[577px] duration-300 mt-12 ">
              <h1 className="text-[24px] font-semibold text-[#09090B]">
                Genres
              </h1>
              <p className="text-[16px] text-[#09090B] ">
                See lists of movies by genre
              </p>
              <hr className="border border-[#E4E4E7] my-4" />
              <div>
                <div className="border cursor-pointer hover:opacity-80 duration-300 text-xs font-semibold py-0.5 pl-2.5 pr-1 border-[#E4E4E7] rounded-full flex items-center gap-2">
                  {genre.name}
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 px-4 border border-[#E4E4E7] rounded-lg flex justify-center items-center cursor-pointer">
            <img src="/moon.svg" alt="mode" />
          </div>
        </div>
      </div>
    </div>
  );
};
