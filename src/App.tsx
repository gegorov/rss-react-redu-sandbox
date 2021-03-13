import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from './types';
import { PostList } from './components/posts-list/PostList';
import './App.css';
import { fetchPosts } from './store/actions';
import { MyState } from './store/types';
import { Loader } from './components/loader/Loader';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: MyState) => state.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loader /> : <PostList />}

    </div>
  );
}

export default App;
