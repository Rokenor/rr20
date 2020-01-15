import jsonPlaseholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaseholder.get(`https://jsonplaceholder.typicode.com/posts`);
    
    dispatch({ type: 'FETCH_POSTS', payload: response });
  }
};