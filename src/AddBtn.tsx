import React from 'react';
import Button from '@mui/material/Button';

type SearchInputType = {
  setUpdateCount: Function;
};

const AddBtn = ({ setUpdateCount }: SearchInputType) => {
  return (
    <>
      <div>SearchInput</div>
      <Button
        onClick={(e) => {
          setUpdateCount();
        }}
        variant='contained'
      >
        Contained
      </Button>
    </>
  );
};

export default AddBtn;
