import React from 'react';

//Importing CSS classes and applying them at component level
import classes from './JsonEditor.module.css';

//I tried to keep dependencies at the minimum
//but had to implement AceEditor to avoid crossing the deadline
import AceEditor from 'react-ace';
// Importing Webpack-Resolver so that following import won't fail at runtime on CRA apps
import 'ace-builds/webpack-resolver';
// Import a Mode (language)
import 'ace-builds/src-noconflict/mode-json';
// Import a Theme (okadia, github, xcode etc)
import 'ace-builds/src-noconflict/theme-github';
// Language tools for auto-complete and linter
import 'ace-builds/src-noconflict/ext-language_tools';

//Components
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Aux';

export default class JsonEditor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
    this.updateJsonButtonHandler = this.updateJsonButtonHandler.bind(this);
    this.json = {};
    //flag to avoid unnecessary updates
    this.jsonChanged = false;
  }
  //trigger by AceEditor sends two arguments
  //value, event
  //I only need the new value
  onChange(newValue) {
    this.json = newValue;
    this.jsonChanged = true;
  }

  //'Update JSON' button triggers this one
  //here I will use a function passed from the parent component
  //to update state in parent component
  updateJsonButtonHandler() {
    if (this.jsonChanged) {
      this.props.updateJson(JSON.parse(this.json));
      this.jsonChanged = false;
      //TODO: implement a MODAL here
      alert('Updated!');
    } else alert('Already up to date.');
  }
  //I found the test JSON very simple.
  //I needed a more complex JSON to cover edge cases
  //so this function adds new JSON to the Editor and then updates the parent state
  addComplexJsonButtonHandler = () => {
    this.json = {
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
        {
          id: 'W07QCRPA7',
          real_name: 'Brendan Eich',
          tz: 'Europe/Amsterdam',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 1:54PM',
            },
            {
              start_time: 'Jan 1 2020  1:33PM',
              end_time: 'Jan 1 2020 10:54PM',
            },
            {
              start_time: 'Feb 5 2020  1:33PM',
              end_time: 'Feb 5 2020 5:54PM',
            },
            {
              start_time: 'Feb 26 2020  1:33PM',
              end_time: 'Feb 26 2020 1:59PM',
            },
            {
              start_time: 'Feb 19 2020  1:33PM',
              end_time: 'Feb 19 2020 4:54PM',
            },
            {
              start_time: 'Mar 1 2020  11:11AM',
              end_time: 'Mar 1 2020 7:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 9:02PM',
            },
          ],
        },
        {
          id: 'W07QCRPA8',
          real_name: 'Douglas Crockford',
          tz: 'Europe/Kiev',
          activity_periods: [
            {
              start_time: 'Feb 2 2020  1:33PM',
              end_time: 'Feb 2 2020 2:54PM',
            },
            {
              start_time: 'Feb 6 2020  1:33PM',
              end_time: 'Feb 6 2020 3:54PM',
            },
            {
              start_time: 'Feb 9 2020  1:33PM',
              end_time: 'Feb 9 2020 1:14PM',
            },
            {
              start_time: 'Mar 1 2020  1:23PM',
              end_time: 'Mar 1 2020 8:20PM',
            },
            {
              start_time: 'Feb 19 2020  1:3PM',
              end_time: 'Feb 19 2020 5:54PM',
            },
            {
              start_time: 'Mar 15 2020  11:11AM',
              end_time: 'Mar 15 2020 10:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
        {
          id: 'W07QCRPA9',
          real_name: 'Elon Musk',
          tz: 'Europe/Rome',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 11:54PM',
            },
            {
              start_time: 'Mar 1 2020  4:11AM',
              end_time: 'Mar 1 2020 8:00PM',
            },
            {
              start_time: 'Mar 17 2020  12:33PM',
              end_time: 'Mar 17 2020 11:02PM',
            },
            {
              start_time: 'Mar 18 2020  1:33PM',
              end_time: 'Mar 18 2020 9:02PM',
            },
            {
              start_time: 'Mar 19 2020  2:33PM',
              end_time: 'Mar 19 2020 10:02PM',
            },
            {
              start_time: 'Mar 20 2020  6:33PM',
              end_time: 'Mar 20 2020 9:02PM',
            },
            {
              start_time: 'Mar 26 2020  1:33PM',
              end_time: 'Mar 26 2020 9:02PM',
            },
          ],
        },
        {
          id: 'W07QCRPB4',
          real_name: 'Mark Zuckerberg',
          tz: 'America/Vancouver',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 11:54PM',
            },
            {
              start_time: 'Feb 12 2020  12:33PM',
              end_time: 'Feb 12 2020 1:54PM',
            },
            {
              start_time: 'Feb 13 2020  12:33PM',
              end_time: 'Feb 13 2020 11:54PM',
            },
            {
              start_time: 'Feb 14 2020  4:33PM',
              end_time: 'Feb 14 2020 10:54PM',
            },
            {
              start_time: 'Mar 14 2020  11:11AM',
              end_time: 'Mar 14 2020 2:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
        {
          id: 'W07QCDPA4',
          real_name: 'Larry Page',
          tz: 'Asia/Dhaka',
          activity_periods: [
            {
              start_time: 'Feb 9 2020  1:33PM',
              end_time: 'Feb 9 2020 3:54PM',
            },
            {
              start_time: 'Mar 10 2020  7:11AM',
              end_time: 'Mar 10 2020 4:00PM',
            },
            {
              start_time: 'Mar 11 2020  2:11AM',
              end_time: 'Mar 11 2020 4:30PM',
            },
            {
              start_time: 'Mar 12 2020  4:11AM',
              end_time: 'Mar 12 2020 4:00PM',
            },
            {
              start_time: 'Mar 13 2020  11:11AM',
              end_time: 'Mar 13 2020 5:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
        {
          id: 'W07QRRPA4',
          real_name: 'Steve Wozniak',
          tz: 'Australia/Currie',
          activity_periods: [
            {
              start_time: 'Feb 14 2020  12:33PM',
              end_time: 'Feb 14 2020 1:54PM',
            },
            {
              start_time: 'Mar 1 2020  11:00AM',
              end_time: 'Mar 1 2020 12:00PM',
            },
            {
              start_time: 'Mar 2 2020  10:00AM',
              end_time: 'Mar 2 2020 11:00PM',
            },
            {
              start_time: 'Mar 4 2020  9:00AM',
              end_time: 'Mar 4 2020 12:00PM',
            },
            {
              start_time: 'Mar 10 2020  4:00AM',
              end_time: 'Mar 10 2020 1:00PM',
            },
            {
              start_time: 'Mar 11 2020  6:00AM',
              end_time: 'Mar 11 2020 2:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:30PM',
            },
          ],
        },
        {
          id: 'W07QFRPA4',
          real_name: 'Jeff Bezos',
          tz: 'America/Boise',
          activity_periods: [
            {
              start_time: 'Feb 3 2020  1:33PM',
              end_time: 'Feb 3 2020 1:54PM',
            },
            {
              start_time: 'Feb 4 2020  1:33PM',
              end_time: 'Feb 4 2020 2:56PM',
            },
            {
              start_time: 'Mar 1 2020  11:11AM',
              end_time: 'Mar 1 2020 4:00PM',
            },
            {
              start_time: 'Mar 11 2020  11:11AM',
              end_time: 'Mar 11 2020 8:00PM',
            },
            {
              start_time: 'Mar 12 2020  11:11AM',
              end_time: 'Mar 12 2020 6:00PM',
            },
            {
              start_time: 'Mar 13 2020  11:11AM',
              end_time: 'Mar 13 2020 7:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
          ],
        },
        {
          id: 'W07QCRHA4',
          real_name: 'Bill Gates',
          tz: 'America/Denver',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 10:54PM',
            },
            {
              start_time: 'Mar 1 2020  11:15AM',
              end_time: 'Mar 1 2020 2:00PM',
            },
            {
              start_time: 'Mar 4 2020  1:13AM',
              end_time: 'Mar 4 2020 2:00PM',
            },
            {
              start_time: 'Mar 17 2020  11:18AM',
              end_time: 'Mar 17 2020 6:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
            {
              start_time: 'Mar 26 2020  5:33PM',
              end_time: 'Mar 26 2020 11:02PM',
            },
            {
              start_time: 'Mar 29 2020  1:33PM',
              end_time: 'Mar 29 2020 10:02PM',
            },
          ],
        },
        {
          id: 'W07QDRPA4',
          real_name: 'Linus Torvalds',
          tz: 'America/Detroit',
          activity_periods: [
            {
              start_time: 'Feb 1 2020  1:33PM',
              end_time: 'Feb 1 2020 11:54PM',
            },
            {
              start_time: 'Jul 1 2020  11:11AM',
              end_time: 'Jul 1 2020 5:00PM',
            },
            {
              start_time: 'Mar 1 2020  11:11AM',
              end_time: 'Mar 1 2020 7:00PM',
            },
            {
              start_time: 'Mar 12 2020  11:11AM',
              end_time: 'Mar 12 2020 11:00PM',
            },
            {
              start_time: 'Mar 16 2020  5:33PM',
              end_time: 'Mar 16 2020 8:02PM',
            },
            {
              start_time: 'Mar 26 2020  5:33AM',
              end_time: 'Mar 26 2020 8:02PM',
            },
            {
              start_time: 'Mar 29 2020  5:33AM',
              end_time: 'Mar 29 2020 11:02PM',
            },
          ],
        },
      ],
    };
    this.props.updateJson(this.json);
    this.jsonChanged = false;
    //TODO: implement a MODAL here
    alert('Complex JSON added!');
  };

  //Kudos to amazing documentation at https://github.com/securingsincity/react-ace
  render() {
    //syncing json on every render cycle in-order to avoid any discrepancies
    this.json = this.props.json;
    return (
      <Aux>
        <div className={classes.JsonEditor}>
          <AceEditor
            mode="json"
            theme="monokai"
            onChange={this.onChange}
            name="JsonEditor"
            width="100%"
            defaultValue={JSON.stringify(this.json, null, 2)}
            editorProps={{
              $blockScrolling: true,
            }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
            }}
          />
        </div>
        <div className={classes.UpdateButton}>
          <Button click={this.updateJsonButtonHandler}>Update JSON</Button>
        </div>
        <div className={classes.addJsonButton}>
          <Button click={this.addComplexJsonButtonHandler}>
            Add more complex JSON
          </Button>
        </div>
      </Aux>
    );
  }
}
