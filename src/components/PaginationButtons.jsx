import ReactPaginate from "react-paginate";
import {useMediaQuery} from "@uidotdev/usehooks";


const PaginationButtons = ({
  pageCount,
  searchParams,
  setSearchParams,
  setPage,
  page
}) => {
  
  const handlePageClick = ({ selected }) => {
    const page = selected + 1;
    setPage(page);
    setSearchParams({ page });
  };

  const handlePageClickNext = () => {
    setPage(Number(searchParams.get("page")) + 1);
    setSearchParams({page: (Number(searchParams.get("page")) + 1)})
  }

  const handlePageClickPrev = () => {
    setPage(Number(searchParams.get("page")) - 1);
    setSearchParams({page: Number(searchParams.get("page")) - 1})
  }
  
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const currentPage = Number(searchParams.get("page"));

  if (isSmallDevice) {
    return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={handlePageClickPrev}
          disabled={page === 1}
          className={(page === pageCount) ? "" : "rounded-xl bg-dun hover:bg-yellow-500 font-bold text-hpdarkbrown py-2 px-4"}
      >
        {(page === pageCount) ? "" : "<"}
      </button>
      <p className="font-bold text-dun">
        Page <strong className="text-dun" >{page}</strong> of{" "}
        <strong className="text-dun">{pageCount}</strong>
      </p>
      <button
        onClick={handlePageClickNext}
          disabled={page === pageCount}
          className={(page === pageCount) ? "" : "rounded-xl bg-dun hover:bg-yellow-500 font-bold text-hpdarkbrown py-2 px-4"}
      >
        {(page === pageCount) ? "" : ">"}
      </button>
    </div>
  );
  }
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
  );}

export default PaginationButtons;
