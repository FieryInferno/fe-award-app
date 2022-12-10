import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authenticate} from '../slices/auth.slice';
import {populateError} from '../helpers';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAction = (values) => {
    dispatch(authenticate(values))
        .unwrap()
        .then(() => navigate('/awards'))
        .catch((error) => populateError(error));
  };

  const data = useSelector((state) => state.auth);

  return {
    ...data,
    loginAction,
  };
};

export default useAuth;
