import {AxiosAuth} from '../helpers/AxiosInstance';
import {stringify} from 'query-string';

const get = (data) => AxiosAuth.get(`/awards?${stringify(data)}`);
const AwardService = {get};

export default AwardService;
