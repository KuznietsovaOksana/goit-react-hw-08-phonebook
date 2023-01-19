import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export const Title = ({ title }) => {
  return (
    <Typography variant="h4" component="h2" color="secondary">
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
