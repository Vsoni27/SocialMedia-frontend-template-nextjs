import PostsCard from "@/components/Cards/PostsCard";
import { connectToDB } from "@/lib/mongoose";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <main className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-4 p-4 md:p-0 mt-0 w-full max-h-[85%] overflow-y-auto rounded-lg">
        {arr.map((item) => (
          <PostsCard key={item} />
        ))}
      </div>
    </main>
  );
}
