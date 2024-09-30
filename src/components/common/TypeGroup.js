import React from "react";
import { useLocation } from "react-router-dom";

//we can use this types/categories comp with any kind of list/items.
const TypeGroup = ({ types, onTypeSelect, selectedType, totalCount }) => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/projects"
          ? "container type d-block"
          : "container type d-none"
      }
    >
      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h5 className="type__title">Select Organizations / Type:</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-12 type__col">
                  {types.map((type) => (
                    <button
                      key={type._ID}
                      onClick={() => onTypeSelect(type)}
                      className={
                        type === selectedType
                          ? "btn btn-lg btn-success shadow-sm"
                          : "btn btn-lg btn-light border shadow-sm"
                      }
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="text-success mt-4">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        {""} {""}
        Showing {totalCount} projects down below
      </h5>
    </div>
  );
};

//to make this comp more flexible and not coupled with only fishID and name, this default props is used
// so that if database has different objects, this comp can fetch them.
// TypeGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_ID",
// };

export default TypeGroup;
