// DesktopBanner.js
import React from 'react';
import ScriptLoader from './ScriptLoader';

const DesktopBanner = () => {
  const atOptions = {
    key: '1c38e7210224b57f1c4a9119f061542a',
    format: 'iframe',
    height: 1150,
    width: 1320,
    params: {},
  };

  return (
    <div className="desktophide">
      {/* <ScriptLoader
        scriptSrc="//www.topcreativeformat.com/1c38e7210224b57f1c4a9119f061542a/invoke.js"
        options={atOptions}
      /> */}
    </div>
  );
};

export default DesktopBanner;
