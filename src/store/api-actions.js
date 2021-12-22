import { changeDataStatus, loadGuitars } from './data-slice/data-slice';


export const fetchGuitars = () => (dispatch, _getState, api) => (
  api.get()
    .then(({data}) => dispatch(loadGuitars(data)))
    .catch((err) => {
      dispatch(changeDataStatus());
      throw err;
    })
);
