'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    ListView,
    TouchableHighlight,
    View
} from 'react-native';

import ArtObjectInList from './ArtObjectInList';
import DetailArtScene from './DetailArtScene';

export default class ArtList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentDidMount() {
        this._loadData().done();
    }

    _loadData = async () => {
        let data = await AsyncStorage.getItem('data');
        let json = JSON.parse(data);
        this.setState({ dataSource : this.state.dataSource.cloneWithRows(json) });
    }

    render() {
        return (
            <ListView
                enableEmptySections={ true }
                contentContainerStyle={ styles.list }
                dataSource={ this.state.dataSource }
                renderRow={ this.renderRowData.bind(this) }
                />
        );
    }

    onItemPress(rowData) {
        this.props.navigator.push({
            component: DetailArtScene,
            title: rowData.title,
            passProps: { data: rowData }
        })
    }

    renderRowData(rowData) {
        let { image }  = rowData
        return (
            <TouchableHighlight
                onPress = { () => this.onItemPress(rowData) }
                style = {styles.itemContainer}>
                <View style = {{ flex: 1 }}>
                    <ArtObjectInList image = { image }/>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
