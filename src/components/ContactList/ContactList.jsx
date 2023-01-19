import { Button, List, ListItem, ListItemText } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts) return;

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {name}: {number}
          </ListItemText>
          <Button
            variant="contained"
            type="button"
            size="small"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
              toast.info('This contact was deleted!');
            }}
          >
            delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
