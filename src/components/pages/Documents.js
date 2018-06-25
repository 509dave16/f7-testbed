import React from 'react';
import { documentTypes, documents } from '../../common/data/mocks';
import { List, ListItem, Page, Navbar } from 'framework7-react';
export default class Documents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'currentPath': '', documentType: {}, documents: [], backLinkUrl: ''};
        this.$f7.once('pageInit', (pageData) => {
            const applicationId = pageData.route.params.applicationId;
            const documentTypeId = pageData.route.params.documentTypeId;
            const documentType = documentTypes[applicationId].find(type => type.id == documentTypeId);
            const docs = documents[documentTypeId];
            this.setState({ 
                currentPath: pageData.route.path,
                documentType,
                documents: docs,
                backLinkUrl: `/applications/${applicationId}/document-types`
            });
        });
    }
    render() {
        return (
            <Page>
                <Navbar title={this.state.documentType.name} backLink="Back" backLinkUrl={this.state.backLinkUrl}>
                </Navbar>
                <List>
                    {this.renderLinks()}
                </List>
            </Page>
        )
    }
    renderLinks() {
        return this.state.documents.map((doc) => {
            return (<ListItem key={doc.id} link={`${this.state.currentPath}/${doc.id}`} title={doc.name}></ListItem>)
        });
    }
}