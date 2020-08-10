import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Layout from './containers/Layout/Layout';
import UserActivity from './containers/UserActivity/UserActivity';
import JsonEditor from './containers/JsonEditor/JsonEditor';
import Error from './components/Error/Error';

export default class App extends Component {
  //Adding Hard-Coded JSON to the State
  state = {
    json: {
      ok: true,
      members: [
        {
          id: 'W012A3CDE',
          real_name: 'Egon Spengler',
          tz: 'America/Los_Angeles',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 1:54PM',
            },
            {
              start_time: 'Mar 1 2020  11:11AM',
              end_time: 'Mar 1 2020 2:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
        {
          id: 'W07QCRPA4',
          real_name: 'Glinda Southgood',
          tz: 'Asia/Kolkata',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 1:54PM',
            },
            {
              start_time: 'Mar 1 2020  11:11AM',
              end_time: 'Mar 1 2020 2:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
      ],
    },
  };
  //Using Arrow fn to avoid issues with "this"
  //Function triggered by JSON editor
  updateJson = (updatedJSON) => {
    this.setState({ json: { ...updatedJSON } });
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route
              path="/"
              component={() => <UserActivity json={this.state.json} />}
              exact
            />
            <Route
              path="/json"
              component={() => (
                <JsonEditor
                  json={this.state.json}
                  updateJson={this.updateJson}
                />
              )}
            />
            <Route component={Error} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
