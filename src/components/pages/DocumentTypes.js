import React from 'react';
import { applications, documentTypes } from '../../common/data/mocks';
import { List, ListItem, Page, Navbar } from 'framework7-react';
export default class DocumentTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'currentPath': '', application: {}, documentTypes: [], backLinkUrl: ''};
        this.$f7.once('pageInit', (pageData) => {
            console.log(pageData);
            const applicationId = pageData.route.params.applicationId;
            const application = applications.find(app => app.id == applicationId);
            const types = documentTypes[applicationId];
            this.setState({ 
                currentPath: pageData.route.path,
                application,
                documentTypes: types,
                backLinkUrl: `/applications`
            });
        });
    }
    render() {
        return (
            <Page>
                <Navbar title={this.state.application.name} backLink="Back" backLinkUrl={this.state.backLinkUrl}>
                </Navbar>
                <List>
                    {this.renderLinks()}
                </List>
            </Page>
        )
    }
    renderLinks() {
        return this.state.documentTypes.map((type) => {
            return (<ListItem key={type.id} link={`${this.state.currentPath}/${type.id}/documents`} title={type.name}></ListItem>)
        });
    }
}