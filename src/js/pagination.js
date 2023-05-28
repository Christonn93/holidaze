const Pagination = () => {
 const loadPages = (direction) => {
  if (direction === "back") {
   setLimit(10);
   setOffset(offset - 10);
   setPageNumber(pageNumber - 1);
  }

  if (direction === "forward") {
   setLimit(10);
   setOffset(offset + 10);
   setPageNumber(pageNumber + 1);
  }
 };
};

export default Pagination;
