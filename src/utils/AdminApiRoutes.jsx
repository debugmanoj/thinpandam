const AdminApiRoutes=

    {
        checkAdmin:{
            path: "/adminRoutes/checkAdmin",
        },
        getAllFoods:{
            path: "/adminRoutes/getAllFoods",
            authenticate:true
        },
        addFood:{
            path: "/adminRoutes/addFood",
            authenticate:true
        }

    }


export default AdminApiRoutes