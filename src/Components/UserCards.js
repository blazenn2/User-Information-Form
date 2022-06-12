import styles from "./UserCards.module.css";
import SingleCard from "./Output/SingleCard";

const UserCards = ({ data, blur }) => {
    return (
        <div className={styles.card_box} style={blur.status? {filter: "blur(2px)"} : {}}>
            {data.length > 0 ? data.map(val => {
                return <SingleCard key={val.id} data={val} />
            })
                : <p>There is no data to show</p>}
        </div>
    );
}

export default UserCards;
