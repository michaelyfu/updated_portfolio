/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    title: "Arc De Triomphe",
    url: "/photos/ArcDeTriomphe.png",
  },
  {
    title: "British Museum",
    url: "/photos/BritishMuseum.png",
  },
  {
    title: "Chess",
    url: "/photos/Chess.png",
  },
  {
    title: "Clock",
    url: "/photos/Clock.png",
  },
  {
    title: "Eiffel Tower",
    url: "/photos/EiffelTower.png",
  },
  {
    title: "Montmartre",
    url: "/photos/Montmartre.png",
  },
  {
    title: "Paris",
    url: "/photos/Paris.png",
  },
  {
    title: "Pic1",
    url: "/photos/Pic1.png",
  },
  {
    title: "Pic2",
    url: "/photos/Pic2.png",
  },
  {
    title: "Victory",
    url: "/photos/Victory.png",
  },
];

function page() {
  return (
    <div className="flex flex-col justify-between mx-auto max-w-screen-md px-4 ">
      <div className="flex flex-col gap-4 font-mono text-sm lg:flex my-16 ">
        <div className="flex flex-col m-auto gap-2">
          <h1 className="text-2xl font-bold">See the world through my lens.</h1>
          <p>
            I'm an avid photographer, and below are some of my favorite shots.
          </p>
          <p className="text-primary-100">
            <Link
              href={"/"}
              className="no-underline hover:underline decoration-primary-100"
            >
              Take me home →
            </Link>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {photos.map((photo) => {
              return (
                <div key={photo.title} className="w-full">
                  <Image
                    src={photo.url}
                    height={500}
                    width={500}
                    alt={photo.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
