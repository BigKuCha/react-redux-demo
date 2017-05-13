import React from 'react'
import {connect} from 'react-redux'

let Test = ({name}) => {
    return <div>
        <h1 onClick={() => onHelloClick()}>{name}</h1>
    </div>
};

function mapStateToProps(state) {
    return {
        name: state.helloText,
        onHelloClick: () => {
            alert('Yes')
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onHelloClick: () => {
            alert('Yes');
        }
    }
}
Test = connect(mapStateToProps, mapDispatchToProps)(Test);

export default Test;