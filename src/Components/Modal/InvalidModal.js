import ReactDOM from 'react-dom'
import styles from "./InvalidModal.module.css"

const ModalWindow = ({ status, setInvalidStatus }) => {
  return (
    <div className={styles.modal} style={status.status ? {} : { display: "none" }}>
      <div className={styles.modal_head}>Invalid Input</div>
      <div className={styles.modal_content}>{status.message}</div>
      <button className={styles.modal_btn} onClick={() => setInvalidStatus()}>Okay</button>
    </div>
  );
}

const InvalidModal = ({ status, setInvalidStatus }) => {
  return (
    <>
      {ReactDOM.createPortal(<ModalWindow status={status} setInvalidStatus={setInvalidStatus}  />, document.getElementById('modal-root'))}
    </>
  );
}

export default InvalidModal;
