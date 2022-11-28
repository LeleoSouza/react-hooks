import React from 'react';
import Button from '@mui/material/Button';

type SearchInputType = {
  setUpdateCount: React.Dispatch<React.SetStateAction<number>>;
  updateCount: number;
};

const SearchInput = ({ setUpdateCount, updateCount }: SearchInputType) => {
  console.log('input Render');
  return (
    <>
      <div>SearchInput</div>
      <Button
        onClick={(e) => {
          setUpdateCount(updateCount + 1);
        }}
        variant='contained'
      >
        Contained
      </Button>
    </>
  );
};

export default SearchInput;
