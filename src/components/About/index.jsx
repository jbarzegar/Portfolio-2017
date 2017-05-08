import { h } from 'preact';
import styles from './About.scss';

const About = () => (
    <section className={styles.About}>
        <h2>
            How's it going?
        </h2>
        <p>
            Hey there! My name is James Barzegar. I’m a front end web developer based in Toronto, Canada. I started learning web development in 2014 when I enrolled in George Brown's Computer Programming Analysis program. I then began seeking ways of learning on my own, so that I could do it faster and beter. In January 2015, I enrolled in HackerYou's part-time Web Development courses, and enjoyed them so much that I immediately signed up for their part-time JavaScript courses. At the same time, I started exploring new technologies like GulpJs, AngularJs, Node Js, and Ruby. In January 2016, I enrolled in HackerYou's part-time Ruby on Rails courses. I'm seeking a full-time opportunity where my passion for web development, atention to detail and hunger for challenges will be appreciated. I'm excited to contribute the skills I've gained over the past couple years, and eager to keep learning and improving every day.
        </p>
    </section>
);

export default About;
