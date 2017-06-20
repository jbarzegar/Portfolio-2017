import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import WpContent from '../WpContent/';
import styles from './PostPage.scss';

class PostPage extends Component {
    state = null
    postSlug = this.props.postSlug
    componentWillMount() {
        window.scrollTo(null, 0);
    }
    renderArticle(post) {
        return (
            <div className={styles.PostContainer}>
                <h2 className={styles.postTitle}>{post.title.rendered}</h2>
                <article className={styles.post}>
                    <WpContent
                        content={post.content.rendered}
                    />
                </article>
            </div>
        );
    }
    render() {
        return (
            <div className={styles.PostPage}>
                { !this.props.posts[this.postSlug]
                    ? ''
                    : this.renderArticle(this.props.posts[this.postSlug])
                }
            </div>
        );
    }
}

export default connect(state => state)(PostPage);
