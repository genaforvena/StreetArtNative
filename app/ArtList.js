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
            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this.renderRowData}
                />
        );
    }

    renderRowData(rowData) {
        let url = rowData.photos[0].image
        return (
            <TouchableHighlight
                style={styles.itemContainer}
                onPress={() => {
                    console.log(rowData);
                }}>
                <View style={{ flex: 1 }}>
                    <ArtObjectInList image={url}/>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 1,
        height: 122,
        width: 122
    },
    list: {
        paddingTop: 22,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
