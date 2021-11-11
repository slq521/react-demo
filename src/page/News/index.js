import React from 'react';
import { Route, Switch, Redirect, useParams, useRouteMatch } from 'react-router-dom';
import DynamicLink from '../../component/DynamicLink';
import Error from '../../component/Error';

const NewDetail = () => {
  const { type } = useParams();
  return (
    <div>新闻：{type}</div>
  )
}

const News = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <DynamicLink to={`${url}/military`} text="军事" /><br/>

        <DynamicLink to={`${url}/entertainment`} text="娱乐" /><br/>

        <DynamicLink to={`${url}/movie`} text="电影" />
      </div><br />

      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/military`} />
        </Route>
        <Route path={`${path}/:type`}>
          <NewDetail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  )
}

export default News;