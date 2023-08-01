import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
   
    <div>
      <img src={atlassian} />
    </div>
  </div>
);

export default Brand;