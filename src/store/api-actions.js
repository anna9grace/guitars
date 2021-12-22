import { loadGuitars } from './data-slice/data-slice';


export const fetchGuitars = () => (dispatch, _getState, api) => (
  api.get()
    .then(({data}) => dispatch(loadGuitars(data)))
    .catch((err) => {
      throw new Error (err.response);
    })
);
