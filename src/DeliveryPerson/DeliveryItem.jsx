import React from "react";

function DeliveryItem({ val }) {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={` card ${val.borderDesign} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {val.title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {val.monthEarn}
                </div>
              </div>
              <div className="col-auto">
                <i className={`${val.icon}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryItem;
