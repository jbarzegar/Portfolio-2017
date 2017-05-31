import { h, Component } from 'preact';

class WpContent extends Component {
    componentDidUpdate() {
        this.base.innerHTML = this.props.content;
    }
    componentDidMount() {
        this.base.innerHTML = this.props.content;
    }
    render() {
        return (
            <div className="WP-Content" />
        );
    }
}

export default WpContent;
