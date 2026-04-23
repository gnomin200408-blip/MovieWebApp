"use client";
import Image from "next/image";
import { Navigation } from "@/app/components/Navigation";
import { Upcoming } from "@/app/components/Upcoming";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { Genres, Movie } from "./types";

export default function Home() {
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d67d8bebd0f4ff345f6505c99e9d0289",
    )
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data.results);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d67d8bebd0f4ff345f6505c99e9d0289",
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d67d8bebd0f4ff345f6505c99e9d0289",
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d67d8bebd0f4ff345f6505c99e9d0289",
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data);
      });
  }, []);

  return (
    <div className=" flex flex-wrap">
      <>
        {genres.map((genre) => (
          <Navigation key={genre.id} genre={genre} />
        ))}
      </>

      <Upcoming />
      <div className=" w-full h-screen flex items-center flex-col">
        <div className="flex justify-start w-full pl-42 h-60 items-center">
          Upcoming
        </div>
        <div className="grid grid-cols-5 grid-rows-2  h-screen gap-25">
          {upcoming.slice(0, 10).map((upcom) => (
            <Card key={upcom.id} upcom={upcom} />
          ))}
        </div>
        <div className="flex justify-start w-full pl-42 h-60 items-center">
          Popular
        </div>
        <div className="grid grid-cols-5 grid-rows-2  h-screen gap-25">
          {popular.slice(0, 10).map((upcom) => (
            <Card key={upcom.id} upcom={upcom} />
          ))}
        </div>
        <div className="flex justify-start w-full pl-42 h-60 items-center">
          Top Rated
        </div>
        <div className="grid grid-cols-5 grid-rows-2  h-screen gap-25">
          {topRated.slice(0, 10).map((upcom) => (
            <Card key={upcom.id} upcom={upcom} />
          ))}
        </div>
      </div>
    </div>
  );
}
