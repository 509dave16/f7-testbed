import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/framework7/css/framework7.ios.css';
import LoginScreen from '../node_modules/framework7/components/login-screen/login-screen';
import Framework7 from 'framework7';
import Framework7React, { Block, Navbar, List, ListItem, Button, F7App, F7View, F7Page, F7LoginScreen } from 'framework7-react';
Framework7.use([LoginScreen, Framework7React]);

class TestPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginScreenOpened: false,
            username: '',
            password: '',
        };
    }
    render() {
        return (
            <F7Page>
                <Navbar title="Login Screen" backLink="Back"></Navbar>
                <Block>
                    <p>Framework7 comes with ready to use Login Screen layout. It could be used inside of page or inside of popup (Embedded) or as a standalone overlay:</p>
                </Block>

                <List>
                    <ListItem link="/login-screen-page/" title="As Separate Page"></ListItem>
                </List>

                <Block>
                    <Button raised big fill loginScreenOpen=".demo-login-screen">As Overlay</Button>
                </Block>

                <Block>
                    <Button raised big fill onClick={() => {this.setState({loginScreenOpened : true})}}>Open Via Prop Change</Button>
                </Block>
                <F7LoginScreen opened={this.state.loginScreenOpened} onLoginScreenClosed={() => {this.setState({loginScreenOpened : false})}}>
                    <F7Page loginScreen>
                        <h1>Hello World</h1>
                    </F7Page>
                </F7LoginScreen>
            </F7Page>
        );
    }
}

const routes = [{path: '/', component: TestPage,}];
class App extends Component {
    render() {
        return (
            <F7App react={React} params={{theme: 'auto', routes, id: 'io.framework7.testapp'}}>
                <F7View url="/" main className="ios-edges"/>
            </F7App>
        )
    }

    componentDidMount() {
        this.$f7ready((f7) => {
        })
    }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
