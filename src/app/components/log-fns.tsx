import C2SButton from "./c2s-button";
import S2CButton from "./s2c-button";

export default function LogFns() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Log Fns</h1>
      <p>Konsolu kontrol et.</p>
      <div className="flex gap-1 items-start">
        <C2SButton
          onClick={async (date) => {
            "use server";
            console.log("Client to Server:", date);
          }}
        />
        <S2CButton date={new Date()} />
      </div>
    </div>
  );
}
