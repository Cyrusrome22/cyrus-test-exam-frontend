import api from '@/utils/api';

const fetchJobs = async (params: any) => {
  const response = await api.get('/jobs', {
    params: { ...params, limit: 10 },
  });
  return response.data;
};

const fetchJob = async (id: string) => {
  return await api.get(`/jobs/${id}`);
};

export default {
  fetchJob,
  fetchJobs,
};
