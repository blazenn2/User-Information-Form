import styles from './SingleCard.module.css';

const SingleCard = ({ data }) => {
    return (
        <div className={styles.card}>
            <p>{data.name} ({data.age} Years old)</p>
        </div>
    );
}

export default SingleCard;
