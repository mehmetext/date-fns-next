"use client";

export default function S2CButton({ date }: { date: Date }) {
  return (
    <button
      className="bg-green-500 text-white px-2 py-1 rounded-md"
      onClick={() => console.log("Server to Client:", date)}
    >
      Server to Client
    </button>
  );
}
