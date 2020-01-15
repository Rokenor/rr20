import _ from 'lodash';
import jsonPlaseholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));
  // refactored to code after this

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/posts`);
    
    dispatch({ 
      type: 'FETCH_POSTS', 
      payload: response.data 
    });
  }
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({ type: 'FETCH_USER',  payload: response.data });
};

// memoize variant
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);

//   dispatch({ type: 'FETCH_USER',  payload: response.data });
// });