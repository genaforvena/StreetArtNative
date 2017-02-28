'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image,
    MapView,
    Text,
    TabBarIOS,
    View
} from 'react-native';

import DetailArtScene from './DetailArtScene'

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
        if (name == 'map') {
            return (
                <ArtMap navigator = {this.props.navigator}/>
            )
        } else if (name == 'list') {
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

class ArtMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers :[]
        }
    }

    componentDidMount() {
        this._loadData().done()
    }

    _loadData = async () => {
        let data = await AsyncStorage.getItem('data')
        let json = JSON.parse(data);
        let markers = json.map(item => {
            return {
                latitude: item.lat,
                longitude: item.lng,
                subtitle: item.address,
                title: item.title,
                onFocus: () => {
                    this.props.navigator.push({
                        component: DetailArtScene,
                        title: item.title,
                        passProps: { data: item }
                    })
                }
            }
        });
        this.setState({
            markers: markers
        })
    }


    render() {
        return (
            <MapView
                zoomEnabled = { true }
                showsUserLocation = { true }
                region = {{
                    latitude: 56.32,
                    longitude: 44,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                annotations = { this.state.markers }
                style = {{ flex: 1 }}/>
        );
    }
}

class ArtList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
        this.setState({ dataSource : this.state.dataSource.cloneWithRows(json)});
    }

    render() {
        return (
            <ListView
                enableEmptySections={true}
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this.renderRowData.bind(this)}
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
