import React from 'react'

function Delivery() {
  return <>
    <h2 class="mb-5 text-center">Choose the delivery person</h2>
    
    <div class="container">
      <div class="row"> 
        <div class="col-md-2">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body text-center ">
              <h5 class="card-title CardTitleColor" >Kumar Manoj</h5>
              <p class="card-text p-2">⭐⭐⭐★★</p>
              <p class="card-text p-2"><small class="text-body-secondary"><button class="btn btn-primary"> Give Bid</button></small></p>
            </div>
          </div>
        </div>
        <br/>
        <div class="col-md-2">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body text-center ">
              <h5 class="card-title CardTitleColor" >Joe</h5>
              <p class="card-text p-2">⭐★★★</p>
              <p class="card-text p-2"><small class="text-body-secondary"><button class="btn btn-primary"> Give Bid</button></small></p>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body text-center ">
              <h5 class="card-title CardTitleColor" >Srinivasa</h5>
              <p class="card-text p-2">⭐⭐★★★</p>
              <p class="card-text p-2"><small class="text-body-secondary"><a href="amount.html"> <button class="btn btn-primary"> Give Bid</button></a></small></p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </>
}
export default Delivery