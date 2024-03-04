const customerapi = {
  createUser: {
    path: "/user/createUser",
  },
  checkUser: {
    path: "/user/checkUser",
  },
  updateFood: {
    path: "/user/updateFood",
    authenticate: true,
  },
  sendOldCurrentFoodList: {
    path: "/user/sendOldCurrentFoodList",
    authenticate: true,
  },
  getFood: {
    path: "/user/getFood",
    authenticate: true,
  },
  TotalOrderedFood: {
    path: "/user/TotalOrderedFood",
    authenticate: true,
  },
  editProfile: {
    path: "/user/editProfile",
    authenticate: true,
  },
  updateProfile: {
    path: "/user/updateProfile",
    authenticate: true,
  },

  //Razor pay

  razorPayOrder: {
    path: "/razorPay/order",
  },
  razorPaymentCapture: {
    path: "/razorPay/paymentCapture",
  },
};
export default customerapi;
