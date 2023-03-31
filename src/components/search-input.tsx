import useDebounce from '@/hooks/useDebounce';
import { JobQuery } from '@/utils/common.interface';
import React from 'react';

interface SearchInputProps {
  q: string;
  onUpdateQuery: (q: string) => void;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = (
  props: SearchInputProps
) => {
  const [q, setQ] = React.useState<string>('');

  const debounceValue = useDebounce(q);

  React.useEffect(() => {
    props.onUpdateQuery(debounceValue);
  }, [debounceValue]);

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (!e) return;
    e.preventDefault();
    setQ(e.target.value);
  };

  return (
    <div>
      <h1>Search Jobs</h1>
      <div>
        <input
          type="text"
          className="form-control border border-dark"
          id="jobTitle"
          aria-describedby="jobTitle"
          placeholder="Enter Job Title"
          value={q}
          onChange={onChangeValue}
        />
        <small id="jobTitle" className="form-text text-muted">
          Search to view other available jobs.
        </small>
      </div>
    </div>
  );
};

export default SearchInput;
