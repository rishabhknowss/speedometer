import PressureGauge from './components/PresureGauge';

export default function App() {
  return (
    <div className="App">
      <PressureGauge pressure={75} mainPumpOn={true} jockeyPumpOn={false} />
    </div>
  );
}