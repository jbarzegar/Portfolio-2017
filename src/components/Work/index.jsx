import { h, Component } from 'preact';
import styles from './Work.scss';

import { Github } from '../../api/';

class Work extends Component {
    state = {
        githubActivity: []
    }
    componentWillMount() {
        Github.getUserRepos()
            .then(data => this.setState({ githubActivity: data }))
            .then(() => console.log(this.state))
            .catch(err => err);
    }
    renderGithubCards(data) {
        return (
            <a
                href={data.html_url}
                className={`flex align-all-center ${styles.GHcard}`}
            >
                <div>
                    <h4>{data.name}</h4>
                </div>
            </a>
        );
    }
    render() {
        return (
            <div className={styles.Work}>
                <section className="pinnedWork">
                    <h2>What I'm plugging away at.</h2>
                    <h3>Keep in mind these are all personal projects, see my resume for professinal work</h3>
                    <section className={`flex justify-sb flex-wrap`}>
                        <div className={`flex align-all-center ${styles.card}`}>
                            <h4>YP_bot</h4>
                        </div>
                        <div className={`flex align-all-center ${styles.card}`}>
                            <h4>YP_bot</h4>
                        </div>
                    </section>
                </section>
                <section className="githubActivity">
                    <h2>My most recent github activity</h2>
                    <section className="flex justify-sb flex-wrap">
                        {/* Render all cards */}
                        {
                            this.state.githubActivity
                                .map(thing => this.renderGithubCards(thing))
                        }
                    </section>
                </section>
            </div>
        );
    }
}

export default Work;
