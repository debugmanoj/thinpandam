import { createSlice } from "@reduxjs/toolkit";
import AxiosService from "../utils/Api";
import CustomerApiRoutes from "../utils/CustomerApiRoutes"
function findIndex(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) return i;
  }
  return null;
}
const initialState={
  data:[],
  loading:false,
  error:null
}
export const CartList = createSlice({
  name: "Cart",
  initialState,
  // initialState: [
  //   {
  //     id: 1,
  //     img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4=",
  //     foodTitle: "Chicken Biriyani",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 120,
  //   },
  //   {
  //     id: 2,
  //     img: "https://media.istockphoto.com/id/1322439549/photo/indian-chicken-fry.jpg?s=1024x1024&w=is&k=20&c=kLLH1jaWiXDYeimYL4MAMpV3GLDLNI9GF4qoQ3ogPo4=",
  //     foodTitle: "Chicken 65",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     alreadyInCart: 0,
  //     isCart: false,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 40,
  //   },
  //   {
  //     id: 3,
  //     img: "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=1024x1024&w=is&k=20&c=ikpY4uMwkstungCvhwXoWV125bwnc4uvZT5FVaeOwb0=",
  //     foodTitle: "Mutton Biriyani",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 160,
  //   },
  //   {
  //     id: 4,
  //     img: "https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA=",
  //     foodTitle: "Meals",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 70,
  //   },
  //   {
  //     id: 5,
  //     img: "https://media.istockphoto.com/id/1124973765/photo/chicken-curry.jpg?s=1024x1024&w=is&k=20&c=wwE3L9ftL7Vfnt750kYzNFW_nUhFS_IJ-EpWZ2Ua29o=",
  //     foodTitle: "Chicken Gravy",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 140,
  //   },
  //   {
  //     id: 6,
  //     img: "  https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Hyderabad_Style_Kuska_Recipe_Biryani_Rice_Recipe.jpg",
  //     foodTitle: "kuska",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 60,
  //   },
  //   {
  //     id: 7,
  //     img: "  https://static.toiimg.com/thumb/61203720.cms?imgsize=670417&width=800&height=800",
  //     foodTitle: "Chapathi",
  //     price: 0,
  //     qty: 0,
  //     isClicked: false,
  //     isCart: false,
  //     alreadyInCart: 0,
  //     Cart: "Add to Cart",
  //     totalCart: 0,
  //     orgPrice: 20,
  //   },
  // ],

  reducers: {
    fetchFoodStart (state){
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    handleAdd: (state, action) => {
      let { id } = action.payload;

      //Finding Index of the clicked Object

      let index = findIndex(state.data, id);
      //Updating the qty of particular object

      console.log((state.data[index].qty += 1));

      //Setting clicked products for Cart Page

      state.data[index].isClicked = !state.data[index].isClicked;
      console.log((state.data[index].isCart = !state.data[index].isCart));
      (state.data[index].alreadyInCart = 1),
        //Changing Add to Cart and Remove from Cart

        state.data[index].Cart === "Add to Cart"
          ? (state.data[index].Cart = "Remove From Cart")
          : (state.data[index].Cart = "Add to Cart");

      state.data[index].totalCart += 1;
      state.data[index].price += state.data[index].orgPrice;
      console.log(state.data[index].price);
    },
    handleDelete: (state, action) => {
      let { id } = action.payload;

      //Finding Index of the clicked Object

      let index = findIndex(state.data, id);
      //Updating the qty of particular object

      state.data[index].qty -= 1;

      //Setting clicked products for Cart Page

      state.data[index].isClicked = !state.data[index].isClicked;

      console.log((state.data[index].isCart = !state.data[index].isCart));
      (state.data[index].alreadyInCart = 0),
        //Changing Add to Cart and Remove from Cart

        state.data[index].Cart === "Add to Cart"
          ? (state.data[index].Cart = "Remove From Cart")
          : (state.data[index].Cart = "Add to Cart");

      state.data[index].totalCart -= 1;

      state.data[index].price -= state.data[index].orgPrice;
    },
    handleCartAdd: (state, action) => {
      let { id } = action.payload;

      let index = findIndex(state.data, id);

      state.data[index].qty += 1;

      state.data[index].price += state.data[index].orgPrice;
    },
    handleCartRemove: (state, action) => {
      let { id } = action.payload;
      let index = findIndex(state, id);
      state.data[index].qty -= 1;
      state.data[index].price -= state.data[index].orgPrice;
    },
  },
});
export const { fetchFoodStart,fetchDataSuccess,fetchDataFailure, handleAdd, handleDelete, handleCartAdd, handleCartRemove } =
  CartList.actions;
export default CartList.reducer;

export const fetchFoods=()=>{
  return async(dispatch)=>{
    dispatch(fetchFoodStart())
    try {
      const response =await AxiosService.get(`${CustomerApiRoutes.getFoodList.path}`, {
        authenticate: CustomerApiRoutes.getFoodList.authenticate,
      })
      dispatch(fetchDataSuccess(response.data))
    } catch (error) {
      dispatch(fetchDataFailure(error.message))
    }
  }
}
