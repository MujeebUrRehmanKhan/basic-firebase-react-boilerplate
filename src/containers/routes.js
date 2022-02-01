import React from 'react';

const Post = React.lazy(() => import('../views/pages/Post'));
const NewPost = React.lazy(() => import('../views/pages/NewPost'));
const NewChannel = React.lazy(() => import('../views/pages/NewChannel'));
const PostDetail = React.lazy(() => import('../views/pages/PostDetail'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/post', name: 'Post', component: Post },
  { path: '/post-detail/:id', name: 'Post Detail', component: PostDetail },
  { path: '/new-post', name: 'New Post', component: NewPost },
  { path: '/new-channel', name: 'Locations', component: NewChannel },
];

export default routes;
