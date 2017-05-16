import { h } from 'preact';
import styles from './Skills.scss';

const handleClick = (event) => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const parent = event.target.parentElement;
    if (parent.classList.contains(styles.showing)) {
        parent.classList.remove(styles.showing);
    } else {
        // Loop through the 4 cards, check if they are showing their list
        cards.forEach((card) => {
            const isShowing = card.classList.contains(styles.showing);
            // If the card is showing turn off the class
            if (isShowing) card.classList.remove(styles.showing);
        });
        // Continue onto adding the class
        parent.classList.add(styles.showing);
    }
};

const Skills = () => (
    <div className={styles.Skills}>
        <h2>The Toolkit.</h2>
        <section className={`flex flex-wrap justify-sb`}>
            <section className={`flex-col align-all-center ${styles.card} ${styles.javascriptCard}`} onClick={handleClick}>
                <i className="devicon-javascript-plain" />
                <div className={styles.lowerContainer}>
                    <h3>JavaScript</h3>
                </div>
                <ul className={`flex-col align-all-center ${styles.libList}`}>
                    <li className="es6">
                        ES6
                    </li>
                    <li className="react">
                        React
                    </li>
                    <li className="angular">
                        AngularJS
                    </li>
                    <li className="nodejs">
                        NodeJS
                    </li>
                </ul>
            </section>
            <section className={`flex-col align-all-center ${styles.card} ${styles.pythonCard}`} onClick={handleClick}>
                <i className="devicon-python-plain" />
                <div className={styles.lowerContainer}>
                    <h3>Python</h3>
                </div>
                <ul className={`flex-col align-all-center ${styles.libList}`}>
                    <li className="2.7">
                        2.7
                    </li>
                    <li className="3.5+">
                        3.x
                    </li>
                    <li className="django">
                       Django
                    </li>
                    <li className="flask">
                        Flask
                    </li>
                </ul>
            </section>
            <section className={`flex-col align-all-center ${styles.card} ${styles.devOpsCard}`} onClick={handleClick}>
                <i className="fa fa-terminal" />
                <div className={styles.lowerContainer}>
                    <h3>Devops</h3>
                </div>
                <ul className={`flex-col align-all-center ${styles.libList}`}>
                    <li className="docker">
                        Docker
                    </li>
                    <li className="automation">
                        Automation
                    </li>
                    <li className="mongo">
                        Mongo
                    </li>
                    <li className="postgres">
                        Postgres
                    </li>
                </ul>
            </section>
            <section className={`flex-col align-all-center ${styles.card} ${styles.frontEnd}`} onClick={handleClick}>
                <i className="fa fa-code" />
                <div className={styles.lowerContainer}>
                    <h3>Front-End</h3>
                </div>
                <ul className={`flex-col align-all-center ${styles.libList}`}>
                    <li className="html">
                        HTML5
                    </li>
                    <li className="css">
                        Css/Scss
                    </li>
                    <li className="gulp">
                        Gulp
                    </li>
                    <li className="webpack">
                        Webpack
                    </li>
                </ul>
            </section>
        </section>
    </div>
);

export default Skills;
