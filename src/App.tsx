import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './SearchInput';
import AddBtn from './AddBtn';

function App() {
  const [updateCount, setUpdateCount] = React.useState<number>(0);
  const updateState = React.useCallback(() => {
    setUpdateCount(updateCount + 1);
  }, [updateCount]);

  console.log('render in APP');
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{updateCount}</p>
        {/* <SearchInput setUpdateCount={setUpdateCount} updateCount={updateCount} /> */}
        <AddBtn setUpdateCount={updateState} />
      </header>
    </div>
  );
}

export default App;
