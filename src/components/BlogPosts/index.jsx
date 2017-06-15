import { h } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router';
import styles from './BlogPosts.scss';

import WpContent from '../WpContent/';

const renderBlogCards = post => (
    <div
        className={`${styles.card} flex flex-col flex-wrap`}
    >
        <h4>{post.title.rendered}</h4>
        <WpContent content={post.excerpt.rendered} className={styles.excerpt} />
        <div className={`${styles.readMoreContainer} flex align-center`}>
            <Link className={styles.readMore} href={`/blog/${post.slug}`}>Read more.</Link>
        </div>
    </div>
);

const BlogPosts = ({ posts }) => (
    <section className="BlogPosts">
        <h2>Check out some of these posts.</h2>
        <div className="cardWrap flex flex-wrap">
            { Object.keys(posts).slice(0, 2).map(el => renderBlogCards(posts[el])) }
        </div>
    </section>
);

export default connect(state => state)(BlogPosts);
