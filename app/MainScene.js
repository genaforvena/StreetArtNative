'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image,
    Text,
    Navigator,
    TabBarIOS,
    View
} from 'react-native';

import DetailArtScene from './DetailArtScene'
import fetchArtObjects from './fetch'

export default class MainScene extends Component {
    static get defaultProps() {
        return {
            title: 'Main Scene'
        };
    }


    state = {
        selectedTab: 'list'
    };

    _renderContent = (name: string) => {
        if (name == "map") {
            return (
                <Text style={styles.tabText}>There shall be the map!</Text>
            )
        } else if (name == "list") {
            return (
                <ArtList navigator = {this.props.navigator}/>
            )
        }
    };

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="white"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Map"
                    selected={this.state.selectedTab === 'map'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'map'
                        });
                    }}>
                    {this._renderContent('map')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    selected={this.state.selectedTab === 'list'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'list'
                        });
                    }}>
                    {this._renderContent('list')}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

class ArtList extends Component {
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
                renderRow={this.renderRowData.bind(this)}
                />
        );
    }

    onItemPress(rowData) {
        this.props.navigator.push({
            name: "Details",
            data: rowData
        })
    }

    renderRowData(rowData) {
        let { image }  = rowData.photos[0]
        return (
            <TouchableHighlight
                onPress = { () => this.onItemPress(rowData) }
                style={styles.itemContainer}>
                <View style={{ flex: 1 }}>
                    <ArtObjectInList image={ image }/>
                </View>
            </TouchableHighlight>
        )
    }
}

class ArtObjectInList extends Component {
    render() {
        return (
            <Image
                style = {styles.image}
                source = {{uri: this.props.image}}/>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 1,
        height: 122,
        width: 122
    },
    image: {
        flex: 1
    },
    list: {
        paddingTop: 22,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
