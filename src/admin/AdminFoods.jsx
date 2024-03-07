import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from '../utils/Api';
import AdminApiRoutes from '../utils/AdminApiRoutes';
function AdminFoods() {
    let [foods,setFoods]=useState()
    let fetchFoodsData=async()=>{
        try {
            const foods =await AxiosService.get(`${AdminApiRoutes.getAllFoods.path}`, {
                authenticate: AdminApiRoutes.getAllFoods.authenticate,
              })

            if(foods){
        
                setFoods(foods.data)
            }
        } catch (error) {
            
        }
    }
    
    useEffect(()=>{
        fetchFoodsData()
    },[])
  return <>
    <Table  hover size="sm" responsive="lg">
      <thead>

        <tr>
          <th>id</th>
          <th>Image</th>
          <th>Food Title</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          foods &&  foods.map((val,i)=>{
                return <tr>
                         <td>{val.id}</td>
                         <td> <div className='tableImage'> <img
                                            src={val.img}
                                            alt={`Food ${val.id}`}
                                            style={{ maxWidth: '100px', maxHeight: '100px' }} // Set maximum width and height
                                        /></div></td>
                         <td>{val.foodTitle}</td>
                         <td>{val.orgPrice}</td>
                         <td><div>
                            <span><a className='btn btn-primary'>Update</a></span>
                            <span><a className='btn btn-danger mx-3'>Delete</a></span>

                            </div></td>

                </tr>
            })
        }

      </tbody>
    </Table>
  </>
}

export default AdminFoods