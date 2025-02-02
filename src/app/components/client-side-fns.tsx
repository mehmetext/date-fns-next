"use client";

import { endOfMonth, format, startOfMonth, subMonths } from "date-fns";

export default function ClientSideFns() {
  const currentDate = new Date();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Client Side Fns</h1>
      <div className="flex flex-col gap-1">
        <p>
          <b>Şu anki tarih:</b> {currentDate.toString()}
        </p>
        <p>
          <b>Formatlanmış şu anki tarih:</b>{" "}
          {format(currentDate, "dd/MM/yyyy HH:mm:ss")}
        </p>
        <p>
          <b>1 ay önce:</b> {subMonths(currentDate, 1).toString()}
        </p>
        <p>
          <b>Ay başı:</b> {startOfMonth(currentDate).toString()}
        </p>
        <p>
          <b>Ay sonu:</b> {endOfMonth(currentDate).toString()}
        </p>
      </div>
    </div>
  );
}
