import React, {Component} from 'react';
import  {Consumer} from './App.js'

class User extends Component {

    render() {
        return (
            <div>
                <Consumer>
                    {
                        (value) => {
                            return <div>{value}</div>
                        }
                    }
                </Consumer>
            </div>
        );
    }
}
export default User;