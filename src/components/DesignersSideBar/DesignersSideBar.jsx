import React, {Component} from 'react';
import './designers_side_bar.css';

class DesignersSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designers: [],
            selectedDesigner: ''
        }
    };

    handleDesignerClick = (event) => {
        if (event.id === 'all') {
            this.props.onDesignerClick(event.id)
        } else {
            this.props.onDesignerClick(event)
        }
    }

    componentDidMount() {
        var invocation = new XMLHttpRequest();
        if (invocation) {
            fetch(`http://localhost:8080/api/designers`).then(result => {
                var allDesigners = result.json()
                allDesigners.then(designers => {
                    this.setState({designers: designers});
                    this.forceUpdate()
                });
            })
        };
    }

    render() {
        return (
            <div className="designer-side-bar-container">
                <div className='designer-side-bar-list'>
                    <div className="designer-side-bar-item">
                        <div id="all" onClick={this.handleDesignerClick}>
                            <b>ALL DESIGNERS</b>
                        </div>
                    </div>
                    {this.state.designers.map((designer, index) => {
                        return (
                            <div key={index} className="designer-side-bar-item">
                                <div className={designer.username} id={designer.id} onClick={this.handleDesignerClick}>{designer.username}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default DesignersSideBar
