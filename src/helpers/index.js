import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
export const populateError = (error) => {
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
};
