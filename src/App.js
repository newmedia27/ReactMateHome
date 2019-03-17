import React, {Component} from 'react';
import axios from 'axios';
import Menu from './Menu';
import './App.css';

class App extends Component {
    static API = 'https://swapi.co/api/'
    state = {
        data: null,
        items: null
    }


    getInfo = async value => {
        try {
            const response = await axios.get(value);

            this.setState({
                items: response.data.results
            })
        } catch (e) {
            console.log(e.response.data);
        }
    }


    async componentDidMount() {
        try {
            const response = await axios.get(App.API);

            this.setState({
                data: response.data
            })
        } catch (e) {
            console.log(e.response.data);
        }
    }

    render() {

        const {data, items} = this.state;
        console.log(this.state.items, 'res');
        return (
            <div className="App">
                <Menu
                    onSelected={(value) => {
                        console.log(value)
                        this.getInfo(value)
                    }}
                >
                    {onClick => (
                        data && Object.keys(data).map((item, index) => (
                            <Menu.Item
                                key={item}
                                value={data[item]}
                                onClick={onClick}
                            >
                                {item}
                            </Menu.Item>
                        )))
                    }
                </Menu>
                <hr/>
                <ul>
                    {
                        items && items.map(e => (
                            <li key={e.name || e.title}>{e.name || e.title}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default App;
