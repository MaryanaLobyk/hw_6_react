import React, {Component} from 'react';
import {UserService} from "./services/user_service/UserService";
import User from "./User";

export const {Consumer, Provider} = React.createContext();

class App extends Component {
    mainInput = React.createRef();
    userServices = new UserService();
    state = {inputValue: '', user: 0};

    onInputFill = () => {
        this.setState({inputValue: this.mainInput.current.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let id = this.mainInput.current.value;
        let user =   this.userServices.getUser(id).then(user => {
            console.log(user)
            this.setState({user})
            })
    }

    render() {
        let {inputValue, user} = this.state
        return (
            <Provider value={`${user.id} - ${user.name} - ${user.email}`}>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input ref={this.mainInput} type="number" onInput={this.onInputFill} value={inputValue}/>
                        <button>Find</button>
                        {
                            inputValue > 0 && inputValue < 11
                        }
                    </form>
                    <User/>

            </div>
            </Provider>

        );
    }
}

export default App;