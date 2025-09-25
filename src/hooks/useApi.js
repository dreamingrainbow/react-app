import { apiInstance } from '../store/createApiInstance';

export const useApi = () => {
  return apiInstance;
};

export default useApi;