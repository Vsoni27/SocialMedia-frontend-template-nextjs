import TravelCard from "@/components/Cards/TravelCard";

export default function TravelSuggestion() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <main className="w-full flex justify-center items-center ">
      <div className="flex flex-col items-center gap-y-4 p-4 md:p-0 mt-0 w-full max-h-[85%] overflow-y-auto rounded-lg ">
        {arr.map((item) => (
          <TravelCard key={item} />
        ))}
      </div>
    </main>
  );
}
