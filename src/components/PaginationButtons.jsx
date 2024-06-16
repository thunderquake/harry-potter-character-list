import ReactPaginate from "react-paginate";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";

const PaginationButtons = ({
  pageCount,
  searchParams,
  setSearchParams,
  setPage,
}) => {
  useEffect(() => {
    const currentPage = Number(searchParams.get("page")) || 1;
    setPage(currentPage);
  }, [searchParams, setPage]);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    const newSearchParams = {};

    searchParams.keys().forEach((param) => {
      const paramValue = searchParams.get(param) ?? "";
      newSearchParams[param] = paramValue;
    });

    newSearchParams.page = newPage;
    setSearchParams(newSearchParams, newPage);
  };

  const handlePageClick = ({ selected }) => {
    const newPage = selected + 1;
    handlePageChange(newPage);
  };

  const handlePageClickNext = () => {
    const currentPage = Number(searchParams.get("page"));
    handlePageChange(currentPage + 1);
  };

  const handlePageClickPrev = () => {
    const currentPage = Number(searchParams.get("page"));
    handlePageChange(currentPage - 1);
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const currentPage = Number(searchParams.get("page"));

  if (isSmallDevice) {
    return (
      <div className="flex items-center justify-center gap-2">
        {currentPage > 1 && (
          <button
            onClick={handlePageClickPrev}
            className="rounded-xl bg-dun hover:bg-yellow-500 font-bold text-hpdarkbrown py-2 px-4"
          >
            {"<"}
          </button>
        )}
        <p className="font-bold text-dun">
          Page <strong className="text-dun">{currentPage}</strong> of{" "}
          <strong className="text-dun">{pageCount}</strong>
        </p>
        {currentPage < pageCount && (
          <button
            onClick={handlePageClickNext}
            className="rounded-xl bg-dun hover:bg-yellow-500 font-bold text-hpdarkbrown py-2 px-4"
          >
            {">"}
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center mt-4 pb-6">
      {pageCount > 0 && (
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
            currentPage < 2 ? (
              <></>
            ) : (
              <span className="mx-2">&lt; previous</span>
            )
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
      )}
    </div>
  );
};

export default PaginationButtons;
