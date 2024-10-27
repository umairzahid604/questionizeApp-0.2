// ScriptLoader.js
import { useEffect } from 'react';

const ScriptLoader = ({ scriptSrc, options }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptSrc;
    document.head.appendChild(script);

    const conf = document.createElement('script');
    conf.type = 'text/javascript';
    conf.innerHTML = `atOptions = ${JSON.stringify(options)}`;
    document.head.appendChild(conf);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(conf);
    };
  }, [scriptSrc, options]);

  return null;
};

export default ScriptLoader;
