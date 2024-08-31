"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";

export default function Home() {
  const urls = [
    "https://res.cloudinary.com/dltqkhwil/image/upload/v1725037113/urpmiz9bkvgif2thkys1.webp",
    "https://res.cloudinary.com/dltqkhwil/image/upload/v1725035734/do8uf6s8rwxsibbpn60c.webp",
    "https://res.cloudinary.com/dltqkhwil/image/upload/v1724885528/lzp0prdmyracg3arnmfz.jpg",
    "https://res.cloudinary.com/dltqkhwil/image/upload/v1724873503/phsbxvsfpqqwotiap83l.jpg",
    "https://res.cloudinary.com/dltqkhwil/image/upload/v1724873521/aql9bmbvdz7imggyeven.webp",
  ];
  const state = useSearchParams();
  const imageIndex = Number(state.get("image"));
  const [image, setImage] = useState<number>(imageIndex || 0);

  const updateSearchParam = (index: number) => {
    // Get the current URL
    const currentUrl = new URL(window.location.href);
    // Set the new search parameter
    currentUrl.searchParams.set("image", index.toString());
    // Update the browser's address bar
    window.history.pushState({}, "", currentUrl);
    // Update the state
    setImage(index);
  };
  return (
    <div className="w-full grid grid-cols-2">
      <div className="ml-10 mt-10 grid grid-cols-4 gap-1">
        <div
          className="relative col-span-4 aspect-square
       rounded-3xl overflow-hidden"
        >
          <Image src={urls[image]} alt="hello" fill className="absolute" />
        </div>

        {urls.map((url, i) => (
          <div
            key={i}
            className={cn(
              "relative inline-block col-span-1 aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-black hover:scale-105 transition",
              i === imageIndex && "border-4 border-black"
            )}
            onClick={() => updateSearchParam(i)}
          >
            <Image src={url} alt="hi" fill />
          </div>
        ))}
        <div
          className={cn(
            "relative aspect-square ml-2 rounded-lg overflow-hidden hover:bg-gray-400 hover:scale-105 transition w-full h-full bg-gray-300 flex justify-center items-center"
          )}
        >
          <Plus size={40} />
        </div>
      </div>
    </div>
  );
}
