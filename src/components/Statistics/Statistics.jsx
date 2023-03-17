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

// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
