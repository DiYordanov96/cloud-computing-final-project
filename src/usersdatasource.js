
export const userColumns=[
    {
        field: "id",
        headerName: "ID",
        width: 70,
    },
    {
        field: "firstName",
        headerName: "First Name",
        width: 200,
    },
    {
        field: "lastName",
        headerName: "Last Name",
        width: 200,
    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
    },
    {
        field: "age",
        headerName: "Age",
        width: 50,
    },
    {
        field: "address",
        headerName: "Address",
        width: 250,
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


