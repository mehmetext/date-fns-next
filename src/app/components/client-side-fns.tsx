"use client";

import {
  addMonths,
  endOfMonth,
  format,
  parse,
  startOfMonth,
  subMonths,
} from "date-fns";

export default function ClientSideFns() {
  const currentDate = new Date();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Client Side Fns</h1>
      <div className="flex flex-col gap-1">
        <p>
          <b>Şu anki timezone offset:</b> {currentDate.getTimezoneOffset()}
        </p>
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
          <b>1 ay sonra:</b> {addMonths(currentDate, 1).toString()}
        </p>
        <p>
          <b>Ay başı:</b> {startOfMonth(currentDate).toString()}
        </p>
        <p>
          <b>Ay sonu:</b> {endOfMonth(currentDate).toString()}
        </p>
        <p>
          <b>Ay başı (ISO):</b> {startOfMonth(currentDate).toISOString()}
        </p>
        <p>
          <b>Ay sonu (ISO):</b> {endOfMonth(currentDate).toISOString()}
        </p>
        <p>
          <b>Ay başı (timestamp):</b> {startOfMonth(currentDate).getTime()}
        </p>
        <p>
          <b>Ay sonu (timestamp):</b> {endOfMonth(currentDate).getTime()}
        </p>
        <p>
          <b>2025-02-02:</b> {new Date("2025-02-02").toString()}
        </p>
        <p>
          <b>2025-02-02T00:00:00Z:</b>{" "}
          {new Date("2025-02-02T00:00:00Z").toString()}
        </p>
        <p>
          <b>2025-02-02T05:00:00Z:</b>{" "}
          {new Date("2025-02-02T05:00:00Z").toString()}
        </p>
        <p>
          <b>parse(2025-02):</b>{" "}
          {parse("2025-02", "yyyy-MM", new Date()).toString()}
        </p>
        <p>
          <b>2025-02:</b> {new Date("2025-02").toString()}
        </p>
      </div>
    </div>
  );
}
