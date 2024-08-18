import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const PressureGauge = ({ pressure = 50, mainPumpOn = true, jockeyPumpOn = false }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Fire Hydrant System</div>
      <div className="flex justify-center items-center mb-6">
        <ReactSpeedometer
          value={pressure}
          minValue={0}
          maxValue={100}
          segments={3}
          segmentColors={["#ff4136", "#ffdc00", "#2ecc40"]}
          currentValueText="Pressure: ${value}%"
          textColor="#333"
          valueTextFontSize="20px"
          labelFontSize="12px"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-between">
        <PumpToggle label="Main Pump" isOn={mainPumpOn} />
        <PumpToggle label="Jockey Pump" isOn={jockeyPumpOn} />
      </div>
    </div>
  );
};

const PumpToggle = ({ label, isOn }) => (
  <div className="flex items-center">
    <span className="mr-2">{label}</span>
    <div className={`w-12 h-6 rounded-full ${isOn ? 'bg-green-500' : 'bg-gray-300'} relative`}>
      <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-300 ease-in-out ${isOn ? 'right-1' : 'left-1'}`} />
    </div>
  </div>
);

export default PressureGauge;