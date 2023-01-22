import { SmallButton } from "../components";

function Pagination({ productsPerPage, TotalProducts, onPaginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <SmallButton onClick={() => onPaginate(number)}>{number}</SmallButton>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
