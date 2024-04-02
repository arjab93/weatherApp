import React from 'react';
import UpperSection from './upperSection';
import MiddleSection from './middleSection';
import LowerSection from './lowerSection';

const getTemperatureRange = (temp) => {
  if (temp >= 30) {
    return 'bg-hot';
  } else if (temp >= 20 && temp < 30) {
    return 'bg-warm';
  } else if (temp >= 10 && temp < 20) {
    return 'bg-cool';
  } else {
    return 'bg-cold';
  }
};

const MainSection = ({ place, data }) => {
  const temp = Math.round(data?.main?.temp - 273);
  const temperatureRange = getTemperatureRange(temp);

  return (
    <div
      className={`text-white ${temperatureRange} w-[500px] h-[600px] rounded-2xl flex flex-col justify-start items-center`}
    >
      <UpperSection place={place} temp={temp} />
      <MiddleSection
        lat={data?.coord?.lat}
        lon={data?.coord?.lon}
        sunrise={data?.sys?.sunrise}
        sunset={data?.sys?.sunset}
      />
      <LowerSection
        status={data?.weather[0]?.description}
        pressure={data?.main?.pressure}
        humidity={data?.main?.humidity}
        windSpeed={data?.wind?.speed}
      />
    </div>
  );
};

export default MainSection;