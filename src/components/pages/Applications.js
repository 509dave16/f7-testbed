import React from 'react';
import { applications } from '../../common/data/mocks';
import { List, ListItem, Page, Navbar } from 'framework7-react';

export default class Applications extends React.Component {
    render() {
        return (
            <Page>
                <Navbar title="Applications">
                </Navbar>
                <List>
                    {this.renderLinks()}
                </List>
            </Page>
        )
    }
    renderLinks() {
        return applications.map((app) => {
            return (<ListItem key={app.id} link={`/applications/${app.id}/document-types`} title={app.name}></ListItem>)
        });
    }
}