import ReactPaginate from "react-paginate";
import { useState } from "react";

const PaginationButtons = ({
  pageCount,
  searchParams,
  setSearchParams,
  setPage,
}) => {
  const handlePageClick = ({ selected }) => {
    const page = selected + 1;
    setPage(page);
    setSearchParams({ page });
  };

  const currentPage = Number(searchParams.get("page"));

  return (
    <div className="flex justify-center items-center mt-4 pb-6">
      <ReactPaginate
        forcePage={currentPage - 1}
        breakLabel={
          <span className="mx-2 px-3 py-1 rounded-full bg-dun hover:bg-yellow-500">
            ...
          </span>
        }
        nextLabel={
          currentPage < pageCount ? (
            <span className="mx-2">next &gt;</span>
          ) : (
            <></>
          )
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={Number(pageCount)}
        previousLabel={
          currentPage < 2 ? <></> : <span className="mx-2">&lt; previous</span>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex"
        pageLinkClassName="mx-2 px-3 py-1 rounded-full bg-dun hover:bg-yellow-500"
        activeLinkClassName="mx-2 px-3 py-1 rounded-full bg-yellow-700 text-white"
        previousLinkClassName={
          currentPage < 2
            ? ""
            : "mx-2 px-3 py-1 rounded-full bg-dun hover:bg-yellow-500"
        }
        nextLinkClassName={
          currentPage < pageCount
            ? "mx-2 px-3 py-1 rounded-full bg-dun hover:bg-yellow-500"
            : ""
        }
        breakClassName=""
      />
    </div>
  );
};

export default PaginationButtons;
