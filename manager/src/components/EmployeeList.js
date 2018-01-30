import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeeFetch(); // async there will be a delay
                                // that's why we added compWillRecieveProps
    this.createDataSource(this.props);
  }


  componentWillReceiveProps(nextProps) {
    // componentWillReceiveProps: will be called whenever we are about to recieve
   // a new set of props to re render the component with!

    // nextProps: next set of props that this
    // component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    // rendering a single row
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections // needed in reactnative config?
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
