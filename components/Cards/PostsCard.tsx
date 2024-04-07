"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Profile from "@/public/assets/MatrixProfilePic.png";
import Landscape from "@/public/assets/Landscape.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { toHumanString } from "human-readable-numbers";
import { useState } from "react";

export default function PostsCard() {
  const [Liked, setLiked] = useState<boolean>(false);

  return (
    <Card className="md:w-2/3 bg-[#15171B] text-white border-0 flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center gap-x-2">
          <div
            className="flex rounded-full overflow-hidden"
            style={{ width: "45px", height: "45px" }}
          >
            <Image
              src={Profile}
              alt="User Image"
              height={85}
              width={85}
              priority={true}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col p-2">
            <h1 className="text-sm font-semibold">Vivek</h1>
            <p className="text-xs text-gray-500">2023-05-09</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <div
          className="flex rounded-lg overflow-hidden"
            style={{ width: "100%", height: "auto" }}
        >
          <Image
            src={Landscape}
            alt="Post Image"
            priority={true}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p className="text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam
          quaerat suscipit voluptates deserunt fugiat voluptas iusto similique
          magnam, neque numquam sint ut molestias, quasi autem a asperiores?
          Iure quaerat voluptatum ut. Labore maxime odit ipsum quisquam debitis
          animi consequatur eos corrupti inventore repellendus, doloribus
          consequuntur, aperiam doloremque, nulla dignissimos.
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-x-2">
        {Liked ? (
          <FaHeart
            onClick={() => setLiked((Liked) => !Liked)}
            style={{ fill: "#956CD6" }}
            className="cursor-pointer"
          />
        ) : (
          <FaRegHeart
            onClick={() => setLiked((Liked) => !Liked)}
            className="cursor-pointer"
          />
        )}
        <p className="text-xs text-gray-300 font-semibold">
          {toHumanString(3500000)}
        </p>
      </CardFooter>
    </Card>
  );
}
