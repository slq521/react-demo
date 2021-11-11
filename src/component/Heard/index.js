import React from 'react';
import DynamicLink from '../DynamicLink';

const Heard = () => {
  return (
    <ul>
      <li>
        <DynamicLink to="/home" text="首页"/>
      </li>
      <li>
        <DynamicLink to="/new" text="新闻页面" />
      </li>
      <li>
        <DynamicLink to="/mine" text="我的" />
      </li>
    </ul>
  )
}

export default Heard;