import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormSelect from '../../components/FormSelect';

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

const states = [
  {
    name: 'Alabama',
    value: 'AL',
  },
  {
    name: 'Alaska',
    value: 'AK',
  },
  {
    name: 'American Samoa',
    value: 'AS',
  },
  {
    name: 'Arizona',
    value: 'AZ',
  },
  {
    name: 'Arkansas',
    value: 'AR',
  },
  {
    name: 'California',
    value: 'CA',
  },
  {
    name: 'Colorado',
    value: 'CO',
  },
  {
    name: 'Connecticut',
    value: 'CT',
  },
  {
    name: 'Delaware',
    value: 'DE',
  },
  {
    name: 'District Of Columbia',
    value: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    value: 'FM',
  },
  {
    name: 'Florida',
    value: 'FL',
  },
  {
    name: 'Georgia',
    value: 'GA',
  },
  {
    name: 'Guam',
    value: 'GU',
  },
  {
    name: 'Hawaii',
    value: 'HI',
  },
  {
    name: 'Idaho',
    value: 'ID',
  },
  {
    name: 'Illinois',
    value: 'IL',
  },
  {
    name: 'Indiana',
    value: 'IN',
  },
  {
    name: 'Iowa',
    value: 'IA',
  },
  {
    name: 'Kansas',
    value: 'KS',
  },
  {
    name: 'Kentucky',
    value: 'KY',
  },
  {
    name: 'Louisiana',
    value: 'LA',
  },
  {
    name: 'Maine',
    value: 'ME',
  },
  {
    name: 'Marshall Islands',
    value: 'MH',
  },
  {
    name: 'Maryland',
    value: 'MD',
  },
  {
    name: 'Massachusetts',
    value: 'MA',
  },
  {
    name: 'Michigan',
    value: 'MI',
  },
  {
    name: 'Minnesota',
    value: 'MN',
  },
  {
    name: 'Mississippi',
    value: 'MS',
  },
  {
    name: 'Missouri',
    value: 'MO',
  },
  {
    name: 'Montana',
    value: 'MT',
  },
  {
    name: 'Nebraska',
    value: 'NE',
  },
  {
    name: 'Nevada',
    value: 'NV',
  },
  {
    name: 'New Hampshire',
    value: 'NH',
  },
  {
    name: 'New Jersey',
    value: 'NJ',
  },
  {
    name: 'New Mexico',
    value: 'NM',
  },
  {
    name: 'New York',
    value: 'NY',
  },
  {
    name: 'North Carolina',
    value: 'NC',
  },
  {
    name: 'North Dakota',
    value: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    value: 'MP',
  },
  {
    name: 'Ohio',
    value: 'OH',
  },
  {
    name: 'Oklahoma',
    value: 'OK',
  },
  {
    name: 'Oregon',
    value: 'OR',
  },
  {
    name: 'Palau',
    value: 'PW',
  },
  {
    name: 'Pennsylvania',
    value: 'PA',
  },
  {
    name: 'Puerto Rico',
    value: 'PR',
  },
  {
    name: 'Rhode Island',
    value: 'RI',
  },
  {
    name: 'South Carolina',
    value: 'SC',
  },
  {
    name: 'South Dakota',
    value: 'SD',
  },
  {
    name: 'Tennessee',
    value: 'TN',
  },
  {
    name: 'Texas',
    value: 'TX',
  },
  {
    name: 'Utah',
    value: 'UT',
  },
  {
    name: 'Vermont',
    value: 'VT',
  },
  {
    name: 'Virgin Islands',
    value: 'VI',
  },
  {
    name: 'Virginia',
    value: 'VA',
  },
  {
    name: 'Washington',
    value: 'WA',
  },
  {
    name: 'West Virginia',
    value: 'WV',
  },
  {
    name: 'Wisconsin',
    value: 'WI',
  },
  {
    name: 'Wyoming',
    value: 'WY',
  },
];
const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveEmployee = () => {
    handleOpenModal();
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Date of Birth" id="date-of-birth" />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Start Date" id="start-date" />
            </DemoContainer>
          </LocalizationProvider>

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <FormSelect label="State" choices={states} />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <FormSelect
            label="Department"
            choices={departments.map((item) => ({ name: item, value: item }))}
          />
        </form>

        <button onClick={handleSaveEmployee}>Save</button>
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <p>Employee Created!</p>
        </Box>
      </Modal>
    </>
  );
}
