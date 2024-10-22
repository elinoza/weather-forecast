import { getMaxTemp, getMinTemp } from '../lib/utils/manageWeatherDataset';
type ForecastDayItemProps = {
  data: any;
};

const ForecastDayItem = ({ data }: ForecastDayItemProps) => {
  const getDay = (date: any) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = new Date(date);
    const index = day.getDay();
    return days[index];
  };

  const day = getDay(data[0]?.dt_txt);
  const maxTemp = getMaxTemp(data);
  const minTemp = getMinTemp(data);

  return (
    <>
      <div className="border-t-[0.5px] border-neutral-600 px-3 py-3 font-thin flex justify-between items-start ">
        <p>{day}</p>
        {/* <div>icon</div> */}
        <div>
          <span>{Math.floor(maxTemp)}</span>/
          <span>
            {Math.floor(minTemp)} {'°'}F
          </span>
        </div>
      </div>
    </>
  );
};
export default ForecastDayItem;
