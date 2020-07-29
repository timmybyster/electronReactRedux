import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Button, Alert} from 'react-bootstrap';

import { ping } from './actions/pingActions';

class Main extends Component{
    
    render(){
        const pong = this.props.pong;    
        return(
            <Container fluid>
                <Button onClick={this.props.ping}>Ping</Button>
                {pong ? 
                    <Alert variant="danger">{pong}</Alert> :
                    null
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        pong: state.pongReducer.pong
    }
};

const mapDispatchToProps = {
    ping
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
