import React from 'react';
import DynamicLink from '../DynamicLink';
import './index.css';

const Heard = () => {
  return (
    <div>
      <div className="heard">
        <div className="heard-line">
          <DynamicLink to="/home" text="首页"/>
        </div>
        <div className="heard-line">
          <DynamicLink to="/new" text="新闻页面" />
        </div>
        <div className="heard-line">
          <DynamicLink to="/mine" text="我的" />
        </div>
      </div>
    </div>
  )
}

export default Heard;