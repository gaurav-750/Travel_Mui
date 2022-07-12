import * as React from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
// import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { DatePicker } from '@mui/x-date-picker'
// import { DatePicker } from '@mui/x-date-picker/DatePicker'
// import { DatePicker } from '@mui/x-date-picker-pro'
// import {DateRange} from '@mui/lab';

import Box from '@mui/material/Box';

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState<DatePicker<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
