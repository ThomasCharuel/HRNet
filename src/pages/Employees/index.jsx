import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { selectEmployees } from '../../features/employees';
import styles from './index.module.scss';

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

const options = {
  selectableRows: 'none',
};

export default function Employees() {
  useDocumentTitle('HRnet - Current Employees');

  const employees = useSelector(selectEmployees);

  return (
    <div id="employee-div" className={styles.container}>
      <h1 className={styles.title}>Current Employees</h1>
      <MUIDataTable data={employees} columns={columns} options={options} />
    </div>
  );
}
