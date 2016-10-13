import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
  Text,
  Navigator,
  View
} from 'react-native';

import { ArtObjectInList } from './ArtObjectInList'
import fetchArtObjects from './fetch'

export default class ArtList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows([])
    };

    fetchArtObjects((json) => {
        this.setState({ dataSource : this.state.dataSource.cloneWithRows(json)});
    });
  }

  render() {
    return (
        <View style={{paddingTop: 22, flex: 1}}>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this.renderRowData}
          />
        </View>
    );
  }

  renderRowData(rowData) {
      let url = rowData.photos[0].image
      let onPress = () => {
          console.log("Ok. This button was pressed!");
      }
      return (
          <ArtObjectInList image={url}/>
      )
  }
}

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
