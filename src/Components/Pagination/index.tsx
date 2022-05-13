import React, { Dispatch, useState } from 'react';
import { PaginationContainer } from './styles';

type PaginationProps = {
  setPageNumber: Dispatch<React.SetStateAction<number>>
};

export function Pagination({ setPageNumber }: PaginationProps) {
  const [pages, setPages] = useState([1, 2, 3, 4, 5])


  // function newPages() {
  //   console.log(pageNumbers[2] - 2)
  // }
  // newPages()


  function renderPagination() {

    return (
      pages.map(number => (
        <p onClick={() => { setPageNumber(number) }} key={number}>{number}</p>
      ))
    )
  }

  return (
    <PaginationContainer>
      {renderPagination()}
    </PaginationContainer>
  )
}
