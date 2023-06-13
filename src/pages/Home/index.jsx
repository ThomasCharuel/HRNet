import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectDropdown } from 'react-choice-select';
import { addEmployee } from '../../features/employees';
import { states, departments } from './constants';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import FieldSet from '../../components/FieldSet';
import TextField from '../../components/TextField';
import DatePicker from '../../components/DatePicker';
import styles from './index.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [firstNameValue, setFirstNameValue] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [birthDateValue, setBirthDateValue] = useState();
  const [startDateValue, setStartDateValue] = useState();
  const [streetValue, setStreetValue] = useState();
  const [cityValue, setCityValue] = useState();
  const [zipCodeValue, setZipCodeValue] = useState();
  const [stateValue, setStateValue] = useState();
  const [departmentValue, setDepartmentValue] = useState();

  const handleSaveEmployee = (event) => {
    const firstName = firstNameValue;
    const lastName = lastNameValue;
    const dateOfBirth = birthDateValue;
    const startDate = startDateValue;
    const street = streetValue;
    const city = cityValue;
    const state = stateValue;
    const zipCode = zipCodeValue;
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
    <div className={styles.container}>
      <h1 className={styles.title}>HRnet</h1>
      <h2 className={styles.title2}>Create Employee</h2>

      <form className={styles.form} onSubmit={handleSaveEmployee}>
        <TextField label="First Name" onValueChange={setFirstNameValue} />
        <TextField label="Last Name" onValueChange={setLastNameValue} />
        <DatePicker label="Date of Birth" onValueChange={(value) => setBirthDateValue(value)} />
        <DatePicker label="Start Date" onValueChange={(value) => setStartDateValue(value)} />

        <FieldSet legend="Address">
          <TextField label="Street" onValueChange={setStreetValue} />
          <TextField label="City" onValueChange={setCityValue} />

          <SelectDropdown
            label="State"
            choices={states}
            onValueChange={(value) => setStateValue(value)}
          />

          <TextField label="Zip Code" onValueChange={setZipCodeValue} type="number" />
        </FieldSet>

        <SelectDropdown
          label="Department"
          choices={departments.map((item) => ({ value: item, label: item }))}
          onValueChange={(value) => setDepartmentValue(value)}
        />

        <Button label="Save" variant="inline" />
      </form>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <div className={styles.modal__container}>
          <p>Employee Created!</p>
        </div>
      </Modal>
    </div>
  );
}
