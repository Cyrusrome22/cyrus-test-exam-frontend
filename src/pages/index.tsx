import React from 'react';
import SearchInput from '@/components/search-input';
import { useQuery } from 'react-query';
import jobService from '@/services/job.service';
import { Job } from '@/utils/job.interface';
import JobCard from '@/components/job-card';
import { JobQuery } from '@/utils/common.interface';
import Pagination from '@/components/pagination';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props: any) => {
  const [query, setQuery] = React.useState<JobQuery>({
    q: '',
    page: 1,
  });

  const onUpdateQuery = (q: string) => {
    setQuery({
      q: q,
      page: 1,
    });
  };

  const onUpdatePagination = (page: number) => {
    setQuery({
      ...query,
      page: page,
    });
  };

  const jobsQuery = useQuery({
    queryFn: async ({ queryKey }) => {
      return await jobService.fetchJobs(queryKey[1]);
    },
    queryKey: ['job', query],
  });

  return (
    <div className="row">
      <div className="col-12 d-flex flex-column justify-content-center mt-5 mb-4">
        <SearchInput q={query.q} onUpdateQuery={onUpdateQuery} />
      </div>
      <div className="w-100">
        <div className="row">
          <div className="col col-lg-6 col-xl-6 d-flex align-items-center">
            <span>
              Total Jobs: {jobsQuery.data ? jobsQuery.data.total : 0}
            </span>
          </div>
          <div className="col col-lg-6 col-xl-6 d-flex align-items-center justify-content-end">
            <Pagination
              page={query.page || 1}
              totalPage={jobsQuery.data?.totalPage || 1}
              onUpdatePagination={onUpdatePagination}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        {jobsQuery.data &&
          jobsQuery.data.data.map((job: Job, i: number) => (
            <JobCard key={`job-detail-${i}`} {...job} />
          ))}
        {jobsQuery.data && jobsQuery.data.data.length === 0 && (
          <div className="alert alert-dark" role="alert">
            No jobs available
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
