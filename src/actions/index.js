import _ from 'lodash';
import jsonPlaseholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/posts`);
    
    dispatch({ 
      type: 'FETCH_POSTS', 
      payload: response.data 
    });
  }
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({ type: 'FETCH_USER',  payload: response.data });
});