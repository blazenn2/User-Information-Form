import { React, useState } from 'react';

import styles from './App.module.css';
import Input from './Components/InputComponent';
import Output from './Components/UserCards';
import InvalidModal from './Components/Modal/InvalidModal'

function App() {
  const [userInfo, setUser] = useState([{
    id: 1,
    name: "Dummy Data",
    age: 23
  }]);

  const [invalidStatus, setInvalid] = useState({
    status: false,
    message: ''
  });

  const invalidModalChange = () => {
    setInvalid({ status: false, message: '' });
    return 1;
  };

  const user = data => {
    console.log(data);
    if (data.name === '') {
      setInvalid({ status: true, message: 'Please enter a valid name and age (non-empty values).' });
      return;
    };

    if (data.age <= 0) return (setInvalid({
      status: true,
      message: 'Please enter a valid age (> 0)'
    }))
    setUser([...userInfo, data]);
  };

  return (
    <div className={styles.div}>
      <Input userData={user} blur={invalidStatus} />
      <InvalidModal status={invalidStatus} setInvalidStatus={invalidModalChange} />
      <Output data={userInfo} blur={invalidStatus} />
    </div>
  );
}

export default App;