'use client';

import { format } from 'date-fns';

const TodayCard = ({ data }: { data: any }) => {
  const { name, country } = data.city;
  const currentDate = data.list[0]?.dt_txt;
  const currentWeatherDescription = data?.list[0]?.weather[0].description;
  const currentWeatherTemp = Math.floor(data?.list[0]?.main?.temp);

  function formatDate(dateString: any) {
    const date = new Date(dateString);
    return format(date, 'eeee, MMM, yyyy');
  }
  return (
    <>
      {/* <div>icon</div> */}
      <p className="text-[5rem]">
        {currentWeatherTemp} {'°'}F
      </p>
      <p>{currentWeatherDescription}</p>
      <p>{name && ',' && country}</p>
      <div className="h-[0.5px] bg-neutral-700 w-1/5 my-2 "></div>
      <p className="font-thin text-sm">
        {' '}
        {currentDate && formatDate(currentDate)}
      </p>
    </>
  );
};
export default TodayCard;
