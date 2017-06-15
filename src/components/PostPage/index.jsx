import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import WpContent from '../WpContent/';
import styles from './PostPage.scss';

class PostPage extends Component {
    state = null
    postSlug = this.props.postSlug
    renderArticle(post) {
        return (
            <article>
                <h2>{post.title.rendered}</h2>
                <WpContent content={post.content.rendered} />
            </article>
        );
    }
    render() {
        return (
            <div className="PostPage">
                { !this.props.posts[this.postSlug]
                    ? ''
                    : this.renderArticle(this.props.posts[this.postSlug])
                }
            </div>
        );
    }
}

export default connect(state => state)(PostPage);
