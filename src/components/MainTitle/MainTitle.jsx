import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const MainTitle = ({ title }) => {
  return (
    <Typography variant="h3" component="h1" color="secondary">
      {title}
    </Typography>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
