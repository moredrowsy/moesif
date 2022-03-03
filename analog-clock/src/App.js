import React from 'react';
import AnalogClock from './AnalogClock';

const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const londonTZ = 'Europe/London';

function App() {
  return (
    <div style={{ width: 640, margin: 'auto' }}>
      <div style={{ margin: 50, textAlign: 'center' }}>{localTZ}</div>
      <div style={{ marginLeft: 150 }}>
        <AnalogClock />
      </div>
      <div style={{ margin: 50, textAlign: 'center' }}>{londonTZ}</div>
      <div style={{ marginLeft: 150 }}>
        <AnalogClock tz={'Europe/London'} />
      </div>
    </div>
  );
}

export default App;
