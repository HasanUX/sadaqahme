/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";
//npm i lodash@4.17.10
// optimized version of js library 'underscore'

import PropTypes from "prop-types";
//npm i prop-types@15.6.2 -  to use typechecking to fix bugs (bugs that will not be shown in console)
//doc: https://reactjs.org/docs/typechecking-with-proptypes.html
//Good practice is to use propTypes to check bugs specially in reusable comp

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //lodash added to count pages
  //it will return an arr thats why need to add +1 to count
  // to make sure the last page also included

  //[1,2,3].map()

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            {/* conditional rendering used above  */}
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//this propTypes implementation can be used as documentation of a component so that other dev can check what type of props are passing

//By using this, we can see WARNING/ERROR msg when user gives irrelevant input (instead of giving number, user may give text which wil create error)
//But if we DONT use proptypes, there will be no WARNING in the console.
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, //if any string is sent to this from from 'table' comp, warning will be shown to console.
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
