import { h, Component } from 'preact';
import { getState } from 'jumpstate';
import { connect } from 'preact-redux';
import { Link } from 'preact-router';
import styles from './BlogPage.scss';

import WpContent from '../WpContent/';

class BlogPage extends Component {
    componentWillMount() {
        window.scrollTo(null, getState().scroll['/blog']);
    }
    renderBlogCards(post) {
        return (
            <section className={styles.cardWrap}>
                <div
                    className={`${styles.card} flex flex-col flex-wrap`}
                >
                    <h4>{post.title.rendered}</h4>
                    <WpContent content={post.excerpt.rendered} className={styles.excerpt} />
                    <div className={`${styles.readMoreContainer} flex align-center`}>
                        <Link className={styles.readMore} href={`/blog/${post.slug}`}>Read more.</Link>
                    </div>
                </div>
            </section>
        );
    }
    render() {
        return (
            <div className="BlogPage">
                <div className={`${styles.cardContainerWrap} flex flex-wrap align-all-center`}>
                    { this.props.posts === {} && this.props.work === {}
                        ? ''
                        : Object.keys(this.props.posts).map(el => this.renderBlogCards(this.props.posts[el]))
                    }
                </div>
            </div>
        );
    }
}

export default connect(state => state)(BlogPage);
