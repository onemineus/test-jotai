"use client";
import { value } from "@/jo";
import { atom, useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <C1 />
      <C2 />
    </div>
  );
}

const C1 = () => {
  const [val, setVal] = useAtom(value);
  return (
    <div>
      <div
        onClick={() => {
          setVal(val + 1);
        }}
      >
        change
      </div>
    </div>
  );
};

const C2 = () => {
  const [val, setVal] = useAtom(value);
  return (
    <div>
      <div>{val}</div>
    </div>
  );
};
