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
            // Check for className prop if there is one append them.
            <div
                className={`WP-Content ${this.props.className
                    ? this.props.className
                    : ''}`}
            />
        );
    }
}

export default WpContent;
