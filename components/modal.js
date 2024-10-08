"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="backdrop" onClick={router.back}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
}
