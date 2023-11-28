
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Customers = () => {
  const [iconTexts, setIconTexts] = useState({
    icon1: '',
    icon2: '',
    icon3: '',
    icon4: ''
  });

  const toggleIconText = (iconId) => {
    setIconTexts((prevIconTexts) => ({
      ...prevIconTexts,
      [iconId]: prevIconTexts[iconId] ? '' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }));
  };

  return (
    <div className="col-md-8">
      <div className="container card-body">
        <h5 className="card-title d-flex justify-content-between">
          <span className="align-self-center">NEW GRADIENT COLOR FINISHES</span>
          <FontAwesomeIcon
            id="icon1"
            icon={faPlus}
            onClick={() => toggleIconText('icon1')}
            className={iconTexts.icon1 ? 'fa-rotate-45' : ''}
          />
        </h5>
        <hr />
        <h6 id="text1" className="mb-5 mt-5">{iconTexts.icon1}</h6>
        <h5 className="card-title d-flex justify-content-between">
          <span className="align-self-center">FOUR-SIDED CURVED CERAMIC BODY</span>
          <FontAwesomeIcon
            id="icon2"
            icon={faPlus}
            onClick={() => toggleIconText('icon2')}
            className={iconTexts.icon2 ? 'fa-rotate-45' : ''}
          />
        </h5>
        <hr />
        <h6 id="text2" className="mb-5 mt-5">{iconTexts.icon2}</h6>
        <h5 className="card-title d-flex justify-content-between">
          <span className="align-self-center">4000MAH HIGH-CAPACITY BATTERY</span>
          <FontAwesomeIcon
            id="icon3"
            icon={faPlus}
            onClick={() => toggleIconText('icon3')}
            className={iconTexts.icon3 ? 'fa-rotate-45' : ''}
          />
        </h5>
        <hr />
        <h6 id="text3" className="mb-5 mt-5">{iconTexts.icon3}</h6>
        <h5 className="card-title d-flex justify-content-between">
          <span className="align-self-center">FULLY HIDDEN CAMERA LENS</span>
          <FontAwesomeIcon
            id="icon4"
            icon={faPlus}
            onClick={() => toggleIconText('icon4')}
            className={iconTexts.icon4 ? 'fa-rotate-45' : ''}
          />
        </h5>
        <hr />
        <h6 id="text4" className="mb-5 mt-5">{iconTexts.icon4}</h6>
      </div>
    </div>
  );
}

export default Customers;
