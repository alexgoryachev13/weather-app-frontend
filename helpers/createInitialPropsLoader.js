import asyncDispatch from './asyncDispatch';

export default createAction => async ({ store, req, query }) => {
  const initialProps = { isLoaded: false, error: null };

  if (!req) {
    return { initialProps };
  }

  const action = createAction(query);
  const response = await asyncDispatch(store.dispatch, action);

  if (response.error) {
    initialProps.error = response.error;
    return { initialProps };
  }

  initialProps.isLoaded = true;
  return { initialProps };
};
