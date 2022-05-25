import React, {useState} from 'react';
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
  name: PropTypes.string,
};

export default function RHFSwitch({ name, ...other }) {
  const { control } = useFormContext();
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={
        <Controller name={name} control={control} render={({ field }) => <Switch onChange={toggleChecked} checked={checked} />} />
      }
      {...other}
    />
  );
}
