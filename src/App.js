import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/framework7/css/framework7.ios.css';
import LoginScreen from '../node_modules/framework7/components/login-screen/login-screen';
import VanillaInput from '../node_modules/framework7/components/input/input';
import VanillaDialog from '../node_modules/framework7/components/dialog/dialog';
import Framework7 from 'framework7';
import Framework7React, { Block, Navbar, List, ListItem, Button, Label, Input, LoginScreenTitle, ListButton, BlockFooter, F7App, F7View, F7Page, F7LoginScreen } from 'framework7-react';
Framework7.use([VanillaDialog, VanillaInput, LoginScreen, Framework7React]);

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
                            <LoginScreenTitle>Framework7</LoginScreenTitle>
                            <List form>
                                <ListItem>
                                    <Label>Username</Label>
                                    <Input type="text" placeholder="Your username" onInput={(e) => {
                                        this.setState({ username: e.target.value});
                                    }}></Input>
                                </ListItem>
                                <ListItem>
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="Your password" onInput={(e) => {
                                        this.setState({ password: e.target.value});
                                    }}></Input>
                                </ListItem>
                            </List>
                            <List>
                                <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
                                <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
                            </List>
                    </F7Page>
                </F7LoginScreen>
            </F7Page>
        );
    }

    signIn() {
        const self = this;
        const app = self.$f7;

        app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
            app.loginScreen.close();
        });
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
