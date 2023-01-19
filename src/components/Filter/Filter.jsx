import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { Title } from 'components/Title/Title';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  if (contacts === undefined) return;

  return (
    <>
      {contacts.length > 0 && (
        <>
          <Title title="Contacts" />
          <TextField
            label="Who would you like to find?"
            margin="normal"
            fullWidth
            type="text"
            onChange={event => {
              const action = filterContacts(event.target.value);
              dispatch(action);
              
            }}
          />
        </>
      )}
    </>
  );
};
