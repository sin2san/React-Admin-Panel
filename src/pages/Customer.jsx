import React from "react";

import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";
import { Link } from "react-router-dom";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customer = () => {
  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Customers</h2>
        <ul className="breadcrumb">
          <li className="breadcrumb__item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb__item active">Customers</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
