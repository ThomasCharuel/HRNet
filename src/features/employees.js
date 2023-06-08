import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      firstName: 'Emily',
      lastName: 'Johnson',
      startDate: '2019-03-15',
      department: 'Sales',
      dateOfBirth: '1987-09-12',
      street: '123 Main Street',
      city: 'Anytown',
      state: 'CA',
      zipCode: 12345,
    },
    {
      firstName: 'Ethan',
      lastName: 'Wilson',
      startDate: '2018-11-20',
      department: 'Engineering',
      dateOfBirth: '1992-07-18',
      street: '321 Maple Lane',
      city: 'Riversville',
      state: 'AS',
      zipCode: 98765,
    },
    {
      firstName: 'Olivia',
      lastName: 'Thompson',
      startDate: '2023-02-05',
      department: 'Finance',
      dateOfBirth: '1988-04-30',
      street: '567 Pine Road',
      city: 'Harborville',
      state: 'CO',
      zipCode: 23456,
    },
  ],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export const selectEmployees = (state) => state.employees.data;

export default employeesSlice.reducer;
