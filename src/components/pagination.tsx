import { JobQuery } from '@/utils/common.interface';
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  page: number;
  totalPage: number;
  onUpdatePagination: (page: number) => void;
}

const Pagination: React.FunctionComponent<PaginationProps> = (
  props: PaginationProps
) => {
  const handlePageClick = (e: any) => {
    props.onUpdatePagination(e.selected + 1);
  };

  return (
    <ReactPaginate
      forcePage={props.page - 1}
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={props.totalPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
