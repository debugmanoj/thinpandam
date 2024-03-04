import React, { useEffect, useState } from "react";
import AxiosService from "../utils/Api";
import customerapi from "../utils/CustomerApiRoutes";
import { useParams } from "react-router-dom";

function TotalOrderedFood() {
  let { id } = useParams();
  let [details, setDetails] = useState();

  let totalValue = 0;
  let getTotalOrderedFood = async () => {
    let result = await AxiosService.get(
      `${customerapi.TotalOrderedFood.path}/${id}`,
      {
        authenticate: customerapi.TotalOrderedFood.authenticate,
      }
    );
    if (result.status == 200) {
      setDetails(result.data.CustomerTotalOrderedFood);
    }
  };
  useEffect(() => {
    getTotalOrderedFood();
  }, []);
  return (
    <>
      <h5 className="text-center mt-3 mb-5">Your Total Orders</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Food </th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map((val, i) => {
              totalValue += val.price;
              return (
                <>
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{val.foodTitle}</td>
                    <td>{val.qty}</td>
                    <td>{val.price}</td>
                  </tr>
                </>
              );
            })}

          {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Spend Money : {totalValue}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TotalOrderedFood;
