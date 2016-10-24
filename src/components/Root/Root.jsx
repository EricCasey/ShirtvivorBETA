import React, {Component, PropTypes } from 'react';

class Root extends Component {

    static propTypes = {
        routes: PropTypes.object
    };

    render() {
        const { routes } = this.props;
        return (
            <div>
                { routes }
            </div>

        )
    }
}
export default Root
