import React, { Component } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        img: null,
        loading: true,
        error: false
    };

    updateItem () {
        const { selectedItem, getData, getImgUrl } = this.props;
        if (!selectedItem) {
            return;
        }
        getData(selectedItem)
        .then((item) => {
            this.setState({ 
                item,
                loading: false,
                img: getImgUrl(item)
             });
        })
        .catch(this.newError)
    };

    newError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem();
            this.setState({
                loading: true
            })
        }
    };

    componentDidMount () {
        this.updateItem();
    };

    render() {
        const { item, error, loading, img } = this.state;
        if (!item) {
            return <span>Select person from the list</span>
        }
        
        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner className="spinner" /> : null;
        const view = hasData ? <ItemView children={this.props.children}   item={item} img={img} getCrash={this.props.getCrash} /> : null;

        return (
                <ErrorBoundry>
                    <div className="jumbotron d-flex">
                        {errorMessage}
                        {spinner}
                        {view}
                    </div>
                </ErrorBoundry>
        )
    }
}

const ItemView = ({ item, img, children }) => {
    return(
        <React.Fragment>
            <div className="col-5">
                <img className="person-img" src={img} alt="Sorry somthing goes wrong" />
            </div>        
                <div className="col-6">
                    <h5>{item.name}</h5>
                    <ul className="list-group">
                        { 
                            React.Children.map(children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                         }
                    </ul>
                </div>
        </React.Fragment>
    )

}