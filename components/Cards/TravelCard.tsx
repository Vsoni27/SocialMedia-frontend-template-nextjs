"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import WorldMap from "@/public/assets/WorldMap.jpg";
import { useState } from "react";
import { Button } from "../ui/button";

export default function TravelCard() {
  return (
    <Card className="md:w-2/3 bg-[#15171B] text-white border-0 flex flex-col justify-between">
      {/* just for demo in future MapBox will be integrated */}
      <div
        className="flex rounded-lg overflow-hidden"
        style={{ width: "100%", height: "245px" }}
      >
        <Image
          src={WorldMap}
          alt="Post Image"
          priority={true}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <CardHeader>
        <CardTitle>Wagah Border Tour</CardTitle>
        <CardDescription className="flex gap-x-2 items-center">
          <FaLocationDot />
          Amritsar, India
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, rem
          dolorem! Repudiandae optio nam officiis exercitationem id saepe
          mollitia iusto dolores cum vel excepturi harum unde quam vitae,
          aspernatur veritatis provident quos tenetur in suscipit porro
          voluptates ad nemo. Temporibus dolorum tempore nihil sequi distinctio
          laudantium similique perferendis, facere reprehenderit.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-sm font-bold">$356</p>
        <Button className="w-1/5 bg-violet-700 hover:bg-violet-900 font-semibold">Book Now</Button>
      </CardFooter>
    </Card>
  );
}
