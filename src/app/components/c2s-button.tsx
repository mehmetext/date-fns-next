"use client";

export default function C2SButton({
  onClick,
}: {
  onClick: (date: Date) => Promise<Date>;
}) {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-md"
      onClick={async () => {
        const date = await onClick(new Date());
        console.log("(Client to Server) to Client:", date);
      }}
    >
      Client to Server
    </button>
  );
}
