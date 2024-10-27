// Banner.js
import React, { useState, useEffect, } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

const Banner = ({ slot }) => {
    // const { reload, asPath,push } = useRouter()

    // useEffect(() => {
    //     if (localStorage.getItem("previous") !== asPath) {
    //         localStorage.setItem("previous", asPath)
    //         reload(asPath)
    //     }
    // }, [asPath])


    return (
        <>
            {/* <div className='showmobile' dangerouslySetInnerHTML={{
                __html: `<div><script type="text/javascript">
        atOptions = {
          'key' : '265a7f77e8a11a4ad754e18cff1ba2be',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
  };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/265a7f77e8a11a4ad754e18cff1ba2be/invoke.js"></scr' + 'ipt>');
    </script></div>`}}></div >


            <div className='showdesktop' dangerouslySetInnerHTML={{
                __html: `<div><script type="text/javascript">
        atOptions = {
          'key' : '1c38e7210224b57f1c4a9119f061542a',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
  };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/1c38e7210224b57f1c4a9119f061542a/invoke.js"></scr' + 'ipt>');
    </script></div>`}}></div > */}
        </>


    )
};

export default Banner;

