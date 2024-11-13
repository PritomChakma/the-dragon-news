import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUSOn = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-semibold'>Find Us On</h2>

            <div className="join flex join-vertical">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twiter</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
</div>
        </div>
    );
};

export default FindUSOn;