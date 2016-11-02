import React, {Component} from 'react';
import './designers-bar.css';

class DesignersSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          designs: []
        }
    };

    componentDidMount() {
        let token = this.props.token.token
        var invocation = new XMLHttpRequest();
        if (invocation) {
            fetch(`http://localhost:8080/api/userinfo/${token}`)
            .then(result => {
              var userinfo = result.json()
              return userinfo
            }).then(user => {
              // console.log(user.user_id)
              return user.user_id
            }).then(id => {
              let targetId = id;
              // console.log(targetId)
              let invocation = new XMLHttpRequest();
              if (invocation) {
                  fetch(`http://localhost:8080/api/products/${targetId}`)
                  .then(result => {
                      let theirProducts = result.json()
                      theirProducts.then(products => {
                        // console.log(products)
                        this.setState({
                          ...this.state,
                          designs: products
                        })
                        return products[0].image
                      });
                  })
              };
            });
        };
      }

    render() {
      let designStyle = {
        'width': '100%'
      }
      if(!this.state.designs) {
        return (
          <div className="no-designs-side-bar">no designs yet</div>
        )
      } else {
        return (
          <div className="user-designs-side-bar-container">
              {this.state.designs.map((design, index) => {
                  return (
                      <div className="design-side-bar-item" key={index}>
                        <p className="designer-id" style={designStyle}><b>{ design.name }</b></p>
                        <div className="shirt-container">
                            <img src={ design.image }
                            alt={ design.name }
                            className="ink" />
                          <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'
                          alt={design.name}/>
                        </div>
                        <p>Votes: { design.votes }</p>
                      </div>
                  )
              })}
          </div>
        )
      }
    }
}
export default DesignersSideBar
