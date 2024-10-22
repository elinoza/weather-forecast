import FiveDaysForecast from "../components/FiveDaysForecast";
import TodayCard from "../components/TodayCard";
import { DEFAULT_GEO } from "../constants";

export default async function Home() {
  const { lat, lon } = DEFAULT_GEO;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  return (
    <main className="flex flex-col items-center justify-center p-5">
      <section className="flex flex-col items-center justify-center p-2 my-2 gap-y-1  w-full font-light ">
        <TodayCard data={data} />
      </section>
      <section className="flex flex-col p-5 mt-3 mb-2 gap-y-1 bg-neutral-800/80 shadow-xl w-[60%] rounded-xl  ">
        <FiveDaysForecast data={data} />
      </section>
    </main>
  );
}
