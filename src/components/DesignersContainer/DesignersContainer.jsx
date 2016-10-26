import React, {Component} from 'react';
import './designers_container.css';

class DesignersContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        return (
            <div className='designer-list'>
                {this.props.designers.map((designer, index) => {
                    return <div key={index} className="designer-item">
                        <img className='profileImg' src={designer.profileImg} alt={designer.name}/>
                        <p>Name: {designer.name}</p>
                        <p>Location: {designer.location}</p>
                    </div>
                })}
            </div>
        )
    }
}
export default DesignersContainer
