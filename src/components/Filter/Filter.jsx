import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { Input, Text } from './Filter.styled';
import { Title } from 'components/Title/Title';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  if (contacts === undefined) return;
  console.log(contacts);
  return (
    <>
      {contacts.length > 0 && (
        <>
          <Title title="Contacts 📞" />
          <Text>Who would you like to find?</Text>
          <Input
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
