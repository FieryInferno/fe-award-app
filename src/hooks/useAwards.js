import {useDispatch, useSelector} from 'react-redux';
import {get} from '../slices/award.slice';
import {populateError} from '../helpers';

const useAwards = () => {
  const dispatch = useDispatch();

  const getAwards = (data) => {
    dispatch(get(data))
        .unwrap()
        .catch((error) => populateError(error));
  };

  const data = useSelector((state) => state.award);

  return {
    ...data,
    getAwards,
  };
};

export default useAwards;
