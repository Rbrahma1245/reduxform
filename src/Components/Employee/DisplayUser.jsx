import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { isObjectEmpty } from "../../Utils/ObjectUtils";
import { deleteUserDetails } from "../Reducer/LoginReducer";

const DisplayUser = ({ setEmpValue }) => {
  const userDetails = useSelector((state) => state.login.userDetails);
  const dispatch = useDispatch();
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Middle Name",
      accessor: "middleName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone number",
      accessor: "phoneNumber",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <button onClick={() => handleDeleteClick(row)}>Delete</button>
      ),
    },
  ];

  const handleRowClick = (row) => {
    let {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      country,
      address,
    } = row.original;

    setEmpValue({
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      country,
      address,
    });
  };

  const handleDeleteClick = (row) => {
    dispatch(deleteUserDetails(row._original));

    setEmpValue({firstName:""})

  };

  return (
    <div style={{ height: "50vh", textAlign: "center", marginTop: 50 }}>
      {isObjectEmpty(userDetails) ? (
        "No data Found..."
      ) : (
        <ReactTable
          data={userDetails}
          columns={columns}
          defaultPageSize={10}
          minRows={3}
          getTrProps={(state, rowInfo) => ({
            onClick: () => handleRowClick(rowInfo),
          })}
        />
      )}
    </div>
  );
};

export default DisplayUser;
