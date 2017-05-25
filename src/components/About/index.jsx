import { h, Component } from 'preact';
import styles from './About.scss';

import { CmsProvider } from '../../api/';

import WpContent from '../WpContent/';

class About extends Component {
    state = {
        content: null
    }
    componentWillMount() {
        CmsProvider.getPage('about')
            .then(data => {
                this.setState({ content: data.content.rendered });
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <section className={styles.About}>
                <WpContent content={this.state.content} />
            </section>
        );
    }
}

export default About;
