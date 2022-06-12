import Form from "./Input/Form.js";
import styles from "./InputComponents.module.css";

const InputComponent = ({ userData, blur }) => {
    return (
        <div className={styles.div} style={blur.status ? { filter: "blur(2px)" } : {}}>
            <Form userData={userData} />
        </div>
    );
}

export default InputComponent;
