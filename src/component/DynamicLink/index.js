import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './index.css';

const DynamicLink = (props) => {
  const { text, to, activeOnlyWhenExact } = props;
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  })

  return (
    <div className={match?.isExact ? 'active' : ''}>
      <Link to={to}>{text}</Link>
    </div>
  )
}

export default DynamicLink;