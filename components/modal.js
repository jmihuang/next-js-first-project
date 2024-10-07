"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const router = useRouter();
  const closeHandler = () => {
    router.back();
  };
  return (
    <>
      <div className="backdrop" onClick={closeHandler}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
}
