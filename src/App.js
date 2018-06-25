import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'framework7/css/framework7.ios.css';
import SampleLoginScreen from "./components/pages/SampleLoginScreen";
import SBLoginScreen from './components/pages/SBLoginScreen';
import Framework7React, { F7App, F7View } from 'framework7-react';
import Framework7 from 'framework7';
import CoreInput from 'framework7/components/input/input';
import CoreDialog from 'framework7/components/dialog/dialog';
import CoreLoginScreen from 'framework7/components/login-screen/login-screen';
import CoreSwipeout from 'framework7/components/swipeout/swipeout';
import CoreModal from 'framework7/components/modal/modal';
import Applications from './components/pages/Applications';
import DocumentTypes from './components/pages/DocumentTypes';
import Documents from './components/pages/Documents';
import Document from './components/pages/Document';
Framework7.use([CoreModal, CoreInput, CoreDialog, CoreLoginScreen, CoreSwipeout,Framework7React]);

// const routes = [{path: '/', component: SampleLoginScreen}, {path: '/sb-login-screen/', component: SBLoginScreen}];
const routes = [
    {path: '/', component: SBLoginScreen},
    {path: '/applications', component: Applications},
    {path: '/applications/:applicationId/document-types', component: DocumentTypes},
    {path: '/applications/:applicationId/document-types/:documentTypeId/documents', component: Documents},
    {path: '/applications/:applicationId/document-types/:documentTypeId/documents/:documentId', component: Document},
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { animate: false };
    }

    componentDidMount() {
        this.setState({ animate: window.innerWidth <= 500 });
    }

    render() {
        return (
            <F7App react={React} params={{pushState: true, theme: 'auto', routes, id: 'io.framework7.sluicebox'}}>
                <F7View animate={this.state.animate} pushState={true} url="/" main className="ios-edges"/>
            </F7App>
        )
    }

    componentDidMount() {
        this.$f7ready((f7) => {
        })
    }
}

export default App;