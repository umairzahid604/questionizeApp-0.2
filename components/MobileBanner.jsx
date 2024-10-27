// MobileBanner.js
import React from 'react';
import ScriptLoader from './ScriptLoader';

const MobileBanner = () => {
  const atOptions = {
    key: 'f25c22956b2292100785820f3d90ead9',
    format: 'iframe',
    height: 1150,
    width: 1320,
    params: {},
  };

  return (
    <div className="mobilehide">
      <ScriptLoader
        scriptSrc="//www.topcreativeformat.com/f25c22956b2292100785820f3d90ead9/invoke.js"
        options={atOptions}
      />
    </div>
  );
};

export default MobileBanner;
