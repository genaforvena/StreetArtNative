'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    Dimensions,
    StyleSheet,
    ListView,
    TouchableHighlight,
    View
} from 'react-native';

import ArtObjectInList from './ArtObjectInList';
import DetailArtScene from './DetailArtScene';

let windowWidth = Dimensions.get('window').width

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
                style = { styles.itemContainer }>
                <View style = { styles.artObjectWrapper }>
                    <ArtObjectInList image = { image }/>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    artObjectWrapper: {
        flex: 1
    },
    itemContainer: {
        padding: 1,
        height: windowWidth / 3,
        width: windowWidth / 3
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
