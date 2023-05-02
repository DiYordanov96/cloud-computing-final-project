export const userColumns=[
    {
        field: "id",
        headerName: "ID",
        width: 70,
    },
    {
        field: "taskTitle",
        headerName: "Task Title",
        width: 200,
    },
    {
        field: "customer",
        headerName: "Customer",
        width: 200,
    },
    {
        field: "date",
        headerName: "Date",
        width: 200,
    },
    {
        field: "amount",
        headerName: "amount",
        width: 50,
    },
    {
        field: "payment",
        headerName: "Payment Method",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}` }>{params.row.status}</div>
        }
    },
];

export const userRows = [
    {
        id: 1234324,
        task: "shopping",
        customer:" Simon Wilson",
        date:" 10 January",
        amount: 150,
        payment: "Cash",
        status: "Aproved"
      },
      {
        id: 4324512,
        task: "lawn cut",
        customer:" Jonn Thompson",
        date:" 23 February",
        amount: 100,
        payment: "Debit Card",
        status: "Pending"
      },
      {
        id: 2343243,
        task: "bulb changing",
        customer:" Adam Williams",
        date:" 23 March",
        amount: 10,
        payment: "Cash",
        status: "Pending"
      },
      {
        id: 2543543,
        task: "bulb changing",
        customer:" Adam Williams",
        date:" 18 March",
        amount: 10,
        payment: "Cash",
        status: "Pending"
      },
      {
        id: 4253423,
        task: "bulb changing",
        customer:" Adam Williams",
        date:" 19 March",
        amount: 10,
        payment: "Cash",
        status: "Pending"
      },
      {
        id: 2343245,
        task: "bulb changing",
        customer:" Adam Williams",
        date:" 14 March",
        amount: 10,
        payment: "Cash",
        status: "Declined"
      }
    ]