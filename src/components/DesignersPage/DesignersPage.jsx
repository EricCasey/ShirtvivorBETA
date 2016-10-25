import React, {Component} from 'react';
import DesignersSideBar from '../DesignersSideBar/DesignersSideBar.jsx';
import DesignersProductsContainer from '../DesignersProductsContainer/DesignersProductsContainer.jsx';
import './designers_page.css'

class DesignersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDesigner: '',
            products: []
        }
    };

    componentDidMount() {
        if (this.state.selectedDesigner === '') {
            var invocation = new XMLHttpRequest();
            if (invocation) {
                fetch(`http://localhost:8080/api/products`).then(result => {
                    var blah = result.json()
                    blah.then(products => {
                        this.setState({products: products});
                        this.forceUpdate()
                    });
                })
            };
        }
    }

    handleDesignerClick = (event) => {
        if (event === "all") {
            console.log('allclicked')

            var invocation = new XMLHttpRequest();
            if (invocation) {
                fetch(`http://localhost:8080/api/products`).then(result => {
                    var blah = result.json()
                    blah.then(products => {
                        this.setState({products: products});
                        this.forceUpdate()
                    });
                })
            };

        } else {
            let targetId = event.target.id;
            let targetUsername = event.target.className;
            this.selectedDesigner = targetUsername;
            console.log(`${this.selectedDesigner} clicked`);
            let invocation = new XMLHttpRequest();

            if (invocation) {
                fetch(`http://localhost:8080/api/products/${targetId}`).then(result => {
                    let thisDesigner = result.json()
                    console.log(thisDesigner)
                    thisDesigner.then(products => {
                        this.setState({products: products});
                        this.forceUpdate()
                        console.log(this.state.products);
                    });
                })
            };
        }
    };

    render() {
        return (
            <div className="sb">
                <DesignersSideBar designers={this.state.designers} onDesignerClick={this.handleDesignerClick}/>
                <DesignersProductsContainer products={this.state.products} current_designer={this.state.current_designer}
            />
            </div>
        )
    }
}
export default DesignersPage
