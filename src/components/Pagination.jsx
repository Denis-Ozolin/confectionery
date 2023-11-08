import { usePagination } from "../hooks";

import { SmallButton } from "../components";

function Pagination({ productsPerPage, products }) {
  const {
    // firstContentIndex,
    // lastContentIndex,
    // nextPage,
    // prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: productsPerPage,
    count: products.length,
  });

  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(TotalProducts / productsPerPage); i += 1) {
  //   pageNumbers.push(i);
  // }

  return (
    <ul className="pagination">
      {[...Array(totalPages).keys()].map((el) => (
        <SmallButton
          onClick={() => setPage(el + 1)}
          key={el}
          className={`page ${page === el + 1 ? "active" : ""}`}
        >
          {el + 1}
        </SmallButton>
      ))}
      {/* {products.slice(firstContentIndex, lastContentIndex)
        .map((number) => (
        <li key={number}>
          <SmallButton onClick={() => onPaginate(number)}>{number}</SmallButton>
        </li>
      ))} */}
    </ul>
  );
}

export default Pagination;
