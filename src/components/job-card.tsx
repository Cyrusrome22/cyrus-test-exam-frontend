import { Job } from '@/utils/job.interface';
import React from 'react';

interface JobCardProps extends Job {}

const JobCard: React.FunctionComponent<JobCardProps> = (
  props: JobCardProps
) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.jobTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.company}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.currency}
          {props.annualSalary} - Annual Salary
        </h6>
        <p className="card-text">
          {props.jobDescription.length > 150 ? (
            <span>
              {props.jobDescription.substring(0, 149)}...{' '}
              <a href={`/jobs/${props.id}`} className="card-link">
                see more
              </a>
            </span>
          ) : (
            props.jobDescription
          )}
        </p>
        <a href={`/jobs/${props.id}`} className="card-link">
          View Job
        </a>
      </div>
    </div>
  );
};

export default JobCard;
