import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Statistics({ stats }) {
    const statList = stats.map(function (item) {
        return (
            <li
                key={item.id}
                className={styles.item}
                style={{
                    backgroundColor: getRandomColor(),
                }}
            >
                <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage}</span>
            </li>
        );
    });
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.stat_list}>{statList}</ul>
        </section>
    );
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;
