const deliveryApi = {
  createDeliveryUser: {
    path: "/delivery/create",
  },
  checkUser: {
    path: "/delivery/checkUser",
  },
  getDeliveryUser: {
    path: "/delivery/getDeliveryUser",
  },
  updateStatus: {
    path: "/delivery/updateStatus",
  },
  getAllValidCustomerDetails: {
    path: "/delivery/getAllValidCustomerDetails",
    authenticate: true,
  },
  handleBid: {
    path: "/delivery/handleBid",
  },
  getBid: {
    path: "/delivery/getBid",
  },
  updateBid: {
    path: "/delivery/updateBid",
  },
  getDeliveryBid: {
    path: "/delivery/getDeliveryBid",
  },
  handleFixBid: {
    path: "/delivery/handleFixBid",
  },
  ResetBid: {
    path: "/delivery/ResetBid",
  },
  acceptBid: {
    path: "/delivery/acceptBid",
  },
  resetAllFields: {
    path: "/delivery/resetAllFields",
  },
  pendingCustomer: {
    path: "/delivery/pendingCustomer",
    authenticate: true,
  },
  clearCustomerId: {
    path: "/delivery/clearCustomerId",
    authenticate: true,
  },
  deliveryDetails: {
    path: "/delivery/deliveryDetails",
    authenticate: true,
  },
};
export default deliveryApi;
