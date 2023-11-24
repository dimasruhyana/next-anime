import React from "react";

interface IPagination {
  page: number;
  lastPage: number;
  setPage: any;
}

const Pagination: React.FC<IPagination> = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePage = (p: any) => {
    setPage(p);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="py-4 px-2 flex justify-center items-center gap-4 text-dark font-bold">
      <button
        className="transition-all text-dark hover:text-yellow-700 dark:text-white dark:hover:text-accent"
        onClick={() => handlePage(1)}>
        First
      </button>
      <button
        className="transition-all text-dark hover:text-yellow-700  dark:text-white dark:hover:text-accent"
        onClick={() => (page > 1 ? handlePrevPage() : null)}>
        Prev
      </button>
      <p className="text-yellow-700 dark:text-yellow-400">
        {page} of {lastPage}
      </p>
      <button
        className="transition-all text-dark hover:text-yellow-700  dark:text-white dark:hover:text-accent"
        onClick={() => (page < lastPage ? handleNextPage() : null)}>
        Next
      </button>
      <button
        className="transition-all text-dark hover:text-yellow-700  dark:text-white dark:hover:text-accent"
        onClick={() => handlePage(lastPage)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
