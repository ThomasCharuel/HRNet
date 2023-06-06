import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import { selectEmployees } from '../../features/employees';

const columns = [
  {
    name: 'firstName',
    label: 'First Name',
    options: {
      sort: true,
    },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    options: {
      sort: true,
    },
  },
  {
    name: 'startDate',
    label: 'Start Date',
    options: {
      sort: true,
    },
  },
  {
    name: 'department',
    label: 'Department',
    options: {
      sort: true,
    },
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    options: {
      sort: true,
    },
  },
  {
    name: 'street',
    label: 'Street',
    options: {
      sort: true,
    },
  },
  {
    name: 'city',
    label: 'City',
    options: {
      sort: true,
    },
  },
  {
    name: 'state',
    label: 'State',
    options: {
      sort: true,
    },
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
    options: {
      sort: true,
    },
  },
];

export default function Employees() {
  const employees = useSelector(selectEmployees);
  console.log(employees);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <MUIDataTable data={employees} columns={columns} />
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </div>
  );
}
