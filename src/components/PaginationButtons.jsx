import ReactPaginate from "react-paginate";

const PaginationButtons = ({ pageCount }) => {
  return (
    <div className="flex justify-center items-center mt-4 pb-6">
      <ReactPaginate
        breakLabel={<span className="mx-2">...</span>}
        nextLabel={<span className="mx-2">next &gt;</span>}
        //onPageChange={handlePageClick}
        pageRangeDisplayed={1} // Show only the current page
        marginPagesDisplayed={1}
        pageCount={Number(pageCount)}
        previousLabel={<span className="mx-2">&lt; previous</span>}
        renderOnZeroPageCount={null}
        containerClassName="flex"
        pageLinkClassName="mx-2 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
        activeLinkClassName="mx-2 px-3 py-1 rounded-full bg-hpbrown text-white"
        previousLinkClassName="mx-2 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
        nextLinkClassName="mx-2 px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
        breakClassName=""
      />
    </div>
  );
};

export default PaginationButtons;
