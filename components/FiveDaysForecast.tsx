'use client';

import ForecastDayItem from '@/components/ForecastDayItem';
import { useEffect, useState } from 'react';

export function getMaxTemp(array: any) {
  const firstMaxTemp = array[0].main.temp_max;
  const maxTemp = array.reduce(
    (acc: any, curr: any) => Math.max(acc, curr.main.temp_max),
    firstMaxTemp
  );
  return maxTemp;
}
export function getMinTemp(array: any) {
  const firstMinTemp = array[0].main.temp_min;
  const minTemp = array.reduce(
    (acc: any, curr: any) => Math.min(acc, curr.main.temp_min),
    firstMinTemp
  );
  return minTemp;
}
export function makeChunkedArray(array: any) {
  const Tomorrow = array.findIndex((elem: any) =>
    elem.dt_txt.includes('00:00:00')
  );
  const arrayFromTomorrow = array.slice(Tomorrow);
  const arrayToday = array.slice(0, Tomorrow);
  const chunkedArray = [];
  chunkedArray.push(arrayToday);
  let tempArray = [];
  for (let i = 0; i < arrayFromTomorrow.length; i++) {
    tempArray.push(arrayFromTomorrow[i]);
    if ((i + 1) % 8 === 0) {
      chunkedArray.push(tempArray);
      tempArray = [];
    }
  }
  return chunkedArray;
}

const FiveDaysForecast = ({ data }: { data: any }) => {
  const [chunkedArray, setChunkedArray] = useState<any[]>([]);
  useEffect(() => {
    const chunkedArr = makeChunkedArray(data?.list);
    setChunkedArray(chunkedArr);
  }, []);
  return (
    <>
      <h1 className="text-white/50 text-xs">5-day Forecast</h1>
      <div className="flex flex-col gap-y-2 overflow-y-auto">
        {chunkedArray?.map((day: any, index: number) => (
          <ForecastDayItem key={index} data={day} />
        ))}
      </div>
    </>
  );
};
export default FiveDaysForecast;
