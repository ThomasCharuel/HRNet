import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Box, Container, Button, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addEmployee } from '../../features/employees';
import { states, departments } from './constants';
import SelectDropdown from '../../components/SelectDropdown';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [stateValue, setStateValue] = useState(states[0].value);
  const [departmentValue, setDepartmentValue] = useState(departments[0]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthDateRef = useRef();
  const startDateRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const handleSaveEmployee = (event) => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dateOfBirth = birthDateRef.current.value;
    const startDate = startDateRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;
    const state = stateValue;
    const zipCode = zipCodeRef.current.value;
    const department = departmentValue;

    dispatch(
      addEmployee({
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
      }),
    );

    event.preventDefault();
    handleOpenModal();
  };

  return (
    <Container>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form onSubmit={handleSaveEmployee}>
          <TextField id="first-name" label="First Name" inputRef={firstNameRef} />
          <TextField id="last-name" label="Last Name" inputRef={lastNameRef} />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Date of Birth" id="date-of-birth" inputRef={birthDateRef} />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Start Date" id="start-date" inputRef={startDateRef} />
            </DemoContainer>
          </LocalizationProvider>

          <fieldset>
            <legend>Address</legend>

            <TextField id="street" label="Street" inputRef={streetRef} />
            <TextField id="city" label="City" inputRef={cityRef} />

            <SelectDropdown
              label="State"
              choices={states}
              onValueChange={(value) => setStateValue(value)}
            />

            <TextField
              id="zip-code"
              label="Zip Code"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              inputRef={zipCodeRef}
            />
          </fieldset>

          <SelectDropdown
            label="Department"
            choices={departments.map((item) => ({ value: item, label: item }))}
            onValueChange={(value) => setDepartmentValue(value)}
          />

          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <p>Employee Created!</p>
        </Box>
      </Modal>
    </Container>
  );
}
