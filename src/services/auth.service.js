import AxiosInstance from '../helpers/AxiosInstance';

const authenticate = (data) => AxiosInstance.post('/login', data);
const AuthService = {authenticate};

export default AuthService;
