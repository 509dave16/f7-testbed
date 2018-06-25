import React from 'react';
import { documents } from '../../common/data/mocks';
import { List, ListItem, Page, Navbar, Label, Input, Button, Block } from 'framework7-react';
export default class Document extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'currentPath': '', document: {}, name: '', backLinkUrl: ''};
        this.$f7.once('pageInit', (pageData) => {
            const applicationId = pageData.route.params.applicationId;
            const documentTypeId = pageData.route.params.documentTypeId;
            const documentId = pageData.route.params.documentId;
            const doc = documents[documentTypeId].find(doc => doc.id == documentId);
            this.setState({ 
                currentPath: pageData.route.path,
                document: doc,
                name: doc.name,
                backLinkUrl: `/applications/${applicationId}/document-types/`
            });
        });
    }
    render() {
        return (
            <Page>
                <Navbar title={this.state.document.name} backLink="Back" backLinkUrl={this.state.backLinkUrl}>
                </Navbar>
                <List form>
                    <ListItem>
                        <Label>Name</Label>
                        <Input value={this.state.name} type="text" placeholder="Name" onInput={(e) => {
                        this.setState({ name: e.target.value});
                        }}></Input>
                    </ListItem>
                </List>
                <Block>
                    <Button raised big fill onClick={ (e) => console.log(e) }>Submit</Button>
                </Block>
            </Page>
        )
    }
}