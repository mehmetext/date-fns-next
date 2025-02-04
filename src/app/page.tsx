import ClientSideFns from "./components/client-side-fns";
import LogFns from "./components/log-fns";
import ServerSideFns from "./components/server-side-fns";

export default function Home() {
  return (
    <div className="container my-4 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <b>Notlar:</b>
        <ul className="list-disc pl-5">
          <li>
            Server side fonksiyonların çalıştığı ortamda timezone offset değeri
            0 olur. UTC timezone&apos;da çalışır.
          </li>
          <li>
            Kullanıcıya gösterirken client side göstermeliyiz. Çünkü server side
            tek bir UTC tarih alır. Fakat kullanıcılar farklı
            timezone&apos;larda olabilir.
          </li>
        </ul>
      </div>
      <ServerSideFns />
      <ClientSideFns />
      <LogFns />
    </div>
  );
}
