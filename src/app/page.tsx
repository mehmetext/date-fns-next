import ClientSideFns from "./components/client-side-fns";
import LogFns from "./components/log-fns";
import ServerSideFns from "./components/server-side-fns";

export default function Home() {
  return (
    <div className="container my-4 flex flex-col gap-10">
      <ServerSideFns />
      <ClientSideFns />
      <LogFns />
    </div>
  );
}
