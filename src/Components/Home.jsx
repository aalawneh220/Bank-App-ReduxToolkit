import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Form from "./Form";
import {DELETE_ACCOUNT} from '../Store/accounsReducer'

function Home() {

  const accounts = useSelector((state) => state.accounts.accounts);
  const dispatch = useDispatch();

  return (
    <>
      <Form />
      <div className="container col-12 mt-5">
        <h2 className="">Number Of Customers : {accounts.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Account Number</th>
              <th scope="col">Account Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => {
              return (
                <tr
                  key={account.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account.id}
                  </th>
                  <td className="py-4 px-6">{account.customerName}</td>
                  <td className="py-4 px-6">{account.accountNumber}</td>
                  <td className="py-4 px-6">{account.accountType}</td>
                  <td className="py-4 px-6">
                    <button className="btn btn-danger" onClick={()=>dispatch(DELETE_ACCOUNT(account.id))}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;