import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { isObjectEmpty } from "../../Utils/ObjectUtils";
import { deleteUserDetails } from "../Reducer/LoginReducer";

const DisplayUser = ({  formikProps, setInitialValue }) => {
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

let {firstName, middleName, lastName, email, phoneNumber, country, address} = row.original

console.log(row.original);

setInitialValue({firstName, middleName, lastName, email, phoneNumber, country, address})

// console.log(initialValue);
// formikProps.initialValues.firstName = firstName
// formikProps.initialValues.middleName = middleName
// formikProps.initialValues.lastName = lastName
// formikProps.initialValues.email = email
// formikProps.initialValues.phoneNumber = phoneNumber
// formikProps.initialValues.country = country
// formikProps.initialValues.address = address






    // setEmpValue({
    //   firstName,
    //   middleName,
    //   lastName,
    //   email,
    //   phoneNumber,
    //   country,
    //   address,
    // });
  };

  const handleDeleteClick = (row) => {
    dispatch(deleteUserDetails(row._original));

   

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
