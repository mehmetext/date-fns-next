"use client";

export default function C2SButton({
  onClick,
}: {
  onClick: (date: Date) => void;
}) {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-md"
      onClick={() => onClick(new Date())}
    >
      Client to Server
    </button>
  );
}
