import React, {Component} from 'react';
import { Block, Navbar, List, ListItem, Button, Label, Input, LoginScreenTitle, ListButton, BlockFooter, Page, F7LoginScreen, F7View } from 'framework7-react';

export default class SBLoginScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          password: '',
        };
      }
    
      render() {
        return (
          <Page id="sb-login-screen" noToolbar noNavbar noSwipeback loginScreen>
            <LoginScreenTitle>Sluicebox</LoginScreenTitle>
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
            </List>
          </Page>
        )
      }
      signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        router.navigate('/applications');
      }
}