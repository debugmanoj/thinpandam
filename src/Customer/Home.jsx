import React, { useEffect, useState } from "react";
import Navbar from "../CustomerCommon/Navbar";
import HomeItems from "./HomeItems";
import carouselone from "../../images/carousel_image/one.jpg";
import carouseltwo from "../../images/carousel_image/two.jpg";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  let dispatch = useDispatch();
  let CartLists = useSelector((state) => state.Cart);
  let [cart, setCart] = useState(0);
  // let homeItems=CartList.Cart;
  let homeItems = CartLists;
  // let homeItems=
  // [
  // {
  //     id:1,
  //     img:"https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4=",
  //     foodTitle:"Chicken Biriyani",
  //     price:200
  // },
  // {
  //     id:2,
  //     img:"https://media.istockphoto.com/id/1322439549/photo/indian-chicken-fry.jpg?s=1024x1024&w=is&k=20&c=kLLH1jaWiXDYeimYL4MAMpV3GLDLNI9GF4qoQ3ogPo4=",
  //     foodTitle:"Chicken 65",
  //     price:200
  // },
  // {
  //     id:3,
  //     img:"https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=1024x1024&w=is&k=20&c=ikpY4uMwkstungCvhwXoWV125bwnc4uvZT5FVaeOwb0=",
  //     foodTitle:"Mutton Biriyani",
  //     price: 200

  // },
  // {
  //     id:4,
  //     img:"https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA=",
  //     foodTitle:"Meals",
  //     price: 200

  // },
  // {
  //     id:5,
  //     img:"https://media.istockphoto.com/id/1124973765/photo/chicken-curry.jpg?s=1024x1024&w=is&k=20&c=wwE3L9ftL7Vfnt750kYzNFW_nUhFS_IJ-EpWZ2Ua29o=",
  //     foodTitle:"Chicken Gravy",
  //     price: 200,
  // },
  // {
  //     id:6,
  //     img:"  https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Hyderabad_Style_Kuska_Recipe_Biryani_Rice_Recipe.jpg",
  //     foodTitle:"kuska",
  //     price: 200
  // },
  // {
  //     id:7,
  //     img:"  https://static.toiimg.com/thumb/61203720.cms?imgsize=670417&width=800&height=800",
  //     foodTitle:"Chapathi",
  //     price: 200
  // }

  // ]

  return (
    <>
      <Navbar />

      <header className=" owncolor py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Just Select</h1>
            <p className="lead fw-bold  text-white-90 mb-0">
              We will deliver 😊
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselone}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Arabic Fast Food</h3>
              <p>Fast Food</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouseltwo}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Delicious Burger</h3>
              <p>Taste the Food</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional slides */}
        </Carousel>

        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {homeItems.map((val, i) => {
              return (
                <HomeItems cart={cart} setCart={setCart} values={val} key={i} />
              );
            })}
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Thin Pandam 2024
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;

{
  /* <div className="col mb-5">
<div className="card h-100">

    <img className="card-img-top" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4=" alt="Biriyani" />

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">Chicken Biriyani</h5>
            <h6>₹ 200</h6>

            <span className="text-muted +"></span>
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to Cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    

    <img className="card-img-top" src="https://media.istockphoto.com/id/1322439549/photo/indian-chicken-fry.jpg?s=1024x1024&w=is&k=20&c=kLLH1jaWiXDYeimYL4MAMpV3GLDLNI9GF4qoQ3ogPo4=" alt="Chicken65" />

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">Chicken 65</h5>
            <h6>₹ 200</h6>

            <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div>

            <span className="text-muted text-decoration-line-through"></span>
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">


    <img className="card-img-top" src="https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=1024x1024&w=is&k=20&c=ikpY4uMwkstungCvhwXoWV125bwnc4uvZT5FVaeOwb0=" alt="Mutton Biriyani" />

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">Mutton Biriyani</h5>
            <h6>₹ 200</h6>

            <span className="text-muted text-decoration-line-through"></span>
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    <img className="card-img-top" src="https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA=" alt="Meals" />

    <div className="card-body p-4">
        <div className="text-center">
 
            <h5 className="fw-bolder">Meals</h5>
            <h6>₹ 200</h6>
    
            <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div>
    
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    <img className="card-img-top" src="https://media.istockphoto.com/id/1124973765/photo/chicken-curry.jpg?s=1024x1024&w=is&k=20&c=wwE3L9ftL7Vfnt750kYzNFW_nUhFS_IJ-EpWZ2Ua29o=" alt="Biriyani" />

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">Chicken Gravy</h5>
            <h6>₹ 200</h6>

            <span className="text-muted +"></span>
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to Cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>

    <img className="card-img-top" src="https://media.istockphoto.com/id/1124973765/photo/chicken-curry.jpg?s=1024x1024&w=is&k=20&c=wwE3L9ftL7Vfnt750kYzNFW_nUhFS_IJ-EpWZ2Ua29o=" alt="..." />

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">Chicken Gravy</h5>
            <h6>₹ 200</h6>
      
            <span className="text-muted text-decoration-line-through"></span>
           
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    <img className="card-img-top" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Hyderabad_Style_Kuska_Recipe_Biryani_Rice_Recipe.jpg" alt="..." />

    <div className="card-body p-4">
        <div className="text-center">
     
            <h5 className="fw-bolder">kuska</h5>
            <h6>₹ 200</h6>
     
           
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">

    <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem" , right: "0.5rem"}}>Sale</div>

    <img className="card-img-top" src="https://static.toiimg.com/thumb/61203720.cms?imgsize=670417&width=800&height=800" alt="..." />

    <div className="card-body p-4">
        <div className="text-center">
       
            <h5 className="fw-bolder">Chapathi</h5>
            <h6>₹ 200</h6>
     
            <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div>
          
            <span className="text-muted text-decoration-line-through"></span>
            
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div> */
}
