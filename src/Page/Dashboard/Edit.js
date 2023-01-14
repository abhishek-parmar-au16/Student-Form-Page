import React, { useState } from 'react'
import Swal from 'sweetalert2';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'English',
  'Hindi',
  'Maths',
  'Science',
  'Social Science',
  'Games',
  'Physics',
  'Biology',
  'Chemistry',
  'Arts',
];

function Edit({ students, selectedStudents, setStudents, setIsEditing }) {

    const id = selectedStudents.id;

    const [firstName, setFirstName] = useState(selectedStudents.firstName);
    const [lastName, setLastName] = useState(selectedStudents.lastName);
    const [personName ,setPersonName]=useState(selectedStudents.personName)
    const [address, setAddress] = useState(selectedStudents.address);
    const [rollnumber , setRollnumber]=useState(selectedStudents.rollnumber)
    const [imgfile ,setImgfile] =useState(selectedStudents.imgfile)
    const [gender, setGender] = React.useState(selectedStudents.gender);

console.log(imgfile)

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName ||  !address || !rollnumber || !address || !imgfile || !personName || !gender) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            address,
            rollnumber,
            imgfile ,
            personName,
            gender
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, employee);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleGenChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
      };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Student Form</h1>
                <label htmlFor="rollnumber">Roll Number</label>
                <input
                    id="rollnumber"
                    type="number"
                    name="rollnumber"
                    value={rollnumber}
                    onChange={e => setRollnumber(e.target.value)}
                />
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="imgfile">Upload Image</label>
                <input
                    id="imgfile"
                    type="text"
                    name="imgfile"
                    value={imgfile}
                    onChange={e => setImgfile(e.target.value)}
                    readOnly
                />
                <label htmlFor="date">Subjects</label>
                <FormControl sx={{ m: 1, width: 760 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                        <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Select" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                    <label htmlFor="address">Gender</label>
                    <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        onChange={handleGenChange}
                    >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Undisclouse"}>Undisclouse</MenuItem>
                    </Select>
                    </FormControl>
                
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit