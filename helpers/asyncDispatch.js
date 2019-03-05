import { COMPLETE_ACTION_HANDLER } from '../constants/symbols';

export default async (dispatch, action) => new Promise((resolve) => {
  action[COMPLETE_ACTION_HANDLER] = resolve; // eslint-disable-line no-param-reassign
  dispatch(action);
});
