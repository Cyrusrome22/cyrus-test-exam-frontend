import React from 'react';
import jobService from '@/services/job.service';
import { GetServerSidePropsContext } from 'next';
import { Job } from '@/utils/job.interface';

interface JobProfileProps extends Job {}

const JobProfile: React.FunctionComponent<JobProfileProps> = (
  props: JobProfileProps
) => {
  return (
    <div className="d-flex flex-column mt-5">
      <div className="mb-4">
        <a
          href="/"
          className="btn btn-dark btn-sm btn-lg"
          role="button"
          aria-disabled="true"
        >
          Back
        </a>
      </div>
      <div className="mb-4">
        <h1>{props.jobTitle}</h1>
        <h6 className="mb-2 text-muted">{props.company}</h6>
      </div>
      <div className="mb-4">
        <h3>Company</h3>
        <p>{props.companyDescription}</p>
      </div>
      <div className="mb-4">
        <h3>Address</h3>
        <p>{props.address}</p>
      </div>
      <div className="mb-4">
        <h3>Job Description</h3>
        <p>{props.jobDescription}</p>
      </div>
      <div className="mb-4">
        <h3>Job Requirements</h3>
        <ul>
          {props.requirements.map(
            (requirement: string, i: number) => {
              return <li key={`requirement-${i}`}>{requirement}</li>;
            }
          )}
        </ul>
      </div>
      <div className="mb-4">
        <h3>
          Salary (Annuall): {props.currency}
          {props.annualSalary}
        </h3>
      </div>
      <div className="mb-4">
        <h3>Contact us through email/phone</h3>
        <p>
          {props.email} / {props.phone}
        </p>
      </div>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  try {
    const response = await jobService.fetchJob(
      context.query.id as string
    );
    context.res.setHeader('Cache-Control', 'max-age=60');

    return {
      props: { ...response.data },
    };
  } catch (err: any) {
    if (err.response?.data) {
      return {
        props: {
          encounteredServerError: true,
          errors: err.response.data.errors || [],
        },
      };
    }

    return {
      props: { encounteredServerError: true },
    };
  }
}

export default JobProfile;
