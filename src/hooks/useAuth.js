import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authenticate} from '../slices/auth.slice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAction = (values) => {
    dispatch(authenticate(values))
        .unwrap()
        .then(() => navigate('/awards'))
        .catch((error) => {
          let errorText;

          if (typeof error === 'object') {
            // eslint-disable-next-line max-len
            errorText = `<ul class="space-y-1 max-w-md list-disc list-inside text-red-600">`;

            error.errors.map((err) => {
              errorText += `<li>${err.msg}</li>`;
            });

            errorText += '</ul>';
          } else {
            errorText = error;
          }

          MySwal.fire({
            title: 'Failed',
            html: errorText,
            icon: 'error',
          });
        });
  };

  const data = useSelector((state) => state.auth);

  return {
    ...data,
    loginAction,
  };
};

export default useAuth;
