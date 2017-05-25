import { h, Component } from 'preact';
import styles from './Work.scss';

import CmsProvider from '../../api/cms';

CmsProvider.getAllWork();

class Work extends Component {
    state = {
        work: []
    }
    componentWillMount() {
        CmsProvider.getAllWork()
            .then(data => this.setState({ work: data }));
    }
    renderWorkCards(work) {
        function shade(color, percent) {
            let f=parseInt(color.slice(1),16),
                t=percent<0?0:255,
                p=percent<0?percent*-1:percent,
                R=f>>16,
                G=f>>8&0x00FF,
                B=f&0x0000FF;

            return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B))
                .toString(16).slice(1);
        }
        const cardStyles = `background: linear-gradient(to top left, ${shade('#d500f9', -0.15)}, #d500f9);`;
        return (
            <div
                className={`flex align-all-center ${styles.card}`}
                style={cardStyles}
            >
                <h4>{work.title.rendered}</h4>
            </div>
        );
    }
    render() {
        return (
            <div className={styles.Work}>
                <section className="pinnedWork">
                    <h2>What I'm plugging away at.</h2>
                    <h3>Keep in mind these are all personal projects, see my resume for professinal work</h3>
                    <section className={`flex justify-sb flex-wrap`}>
                        { this.state.work.map(this.renderWorkCards) }
                    </section>
                </section>
            </div>
        );
    }
}

export default Work;
