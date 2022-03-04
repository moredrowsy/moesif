import React, { useState } from 'react';
import { hasDST } from '../utils';

import AnalogClock from './AnalogClock';

const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const londonTZ = 'Europe/London';
const hasDst = hasDST();

const App = () => {
  const [applyDST, setApplyDST] = useState(false);

  return (
    <div style={{ width: 640, margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <input
          type='checkbox'
          id='applyDST'
          name='applyDST'
          value={applyDST}
          onChange={() => setApplyDST(!applyDST)}
          disabled={hasDst}
        />
        <label htmlFor='applyDST'>Apply DST</label>
      </div>

      <div style={{ margin: 50, textAlign: 'center' }}>{localTZ}</div>
      <div style={{ marginLeft: 150 }}>
        <AnalogClock hourOffset={applyDST ? 1 : 0} />
      </div>

      <div style={{ margin: 50, textAlign: 'center' }}>{londonTZ}</div>
      <div style={{ marginLeft: 150 }}>
        <AnalogClock hourOffset={applyDST ? 1 : 0} tz={'Europe/London'} />
      </div>
    </div>
  );
};

export default App;
