import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics(props) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.stat_list}>
                <li className={styles.item}>
                    <span className={styles.label}>.docx</span>
                    <span className={styles.percentage}>4%</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>.mp3</span>
                    <span className={styles.percentage}>14%</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>.pdf</span>
                    <span className={styles.percentage}>41%</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>.mp4</span>
                    <span className={styles.percentage}>12%</span>
                </li>
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let button = document.getElementById('butId');

button.addEventListener('click', function (e) {
    let tags = document.getElementsByTagName('li');
    for (let i = 0; i < tags.length; i++) {
        tags[i].style.background = getRandomColor();
    }
});
