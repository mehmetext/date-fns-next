import ClientSideFns from "./components/client-side-fns";
import LogFns from "./components/log-fns";
import ServerSideFns from "./components/server-side-fns";

export default function Home() {
  return (
    <div className="container my-4 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <b>Önemli Timezone Notları:</b>
        <ul className="list-disc pl-5">
          <li>
            <b>Server Side Davranışı:</b>
            <ul className="list-disc pl-5 mt-1">
              <li>
                Server tarafında çalışan fonksiyonlar her zaman UTC (Coordinated
                Universal Time) zaman diliminde çalışır
              </li>
              <li>Bu nedenle timezone offset değeri her zaman 0&apos;dır</li>
              <li>
                Örneğin, Türkiye&apos;deki bir sunucu bile olsa, tarih işlemleri
                UTC&apos;de gerçekleşir
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <b>Client Side Gerekliliği:</b>
            <ul className="list-disc pl-5 mt-1">
              <li>
                Kullanıcılar dünyanın farklı yerlerinden sitemize erişebilir
                (örn: Türkiye, Japonya, ABD)
              </li>
              <li>
                Her kullanıcının kendi yerel saat dilimine göre tarihleri
                görmesi gerekir
              </li>
              <li>
                Bu yüzden tarih gösterimlerini client tarafında yapmalı ve
                kullanıcının tarayıcısının timezone&apos;unu kullanmalıyız
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <b>Best Practice:</b>
            <ul className="list-disc pl-5 mt-1">
              <li>
                Veritabanında ve API&apos;lerde tarihleri her zaman UTC olarak
                sakla
              </li>
              <li>Kullanıcıya gösterirken client tarafında dönüşüm yap</li>
              <li>
                Tarih inputlarında da aynı şekilde önce yerel saatten
                UTC&apos;ye çevir, sonra server&apos;a gönder
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ServerSideFns />
      <ClientSideFns />
      <LogFns />
    </div>
  );
}
