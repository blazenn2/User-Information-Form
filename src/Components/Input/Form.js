import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ userData }) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const userInput = e => setUserName(e.target.value);
    const ageInput = e => setAge(e.target.value);

    const formSubmit = e => {
        e.preventDefault();

        const idGenerator = Math.floor(Math.random() * 10000) + 1;
        const userInfoObject = {
            id: idGenerator,
            name: userName,
            age: Number(age)
        };

        userData(userInfoObject);

        setUserName('');
        setAge('');
    };

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            <div className={styles.form_control}>
                <label>Username</label>
                <input type="text" className={styles.form_control_input} value={userName} onChange={userInput} />
            </div>
            <div className={styles.form_control}>
                <label>Age (Years)</label>
                <input type="number" className={styles.form_control_input} value={age} onChange={ageInput} />
            </div>
            <div className={styles.form_submit}>
                <input type="submit" value="Add User" />
            </div>
        </form>
    );
}

export default Form;
