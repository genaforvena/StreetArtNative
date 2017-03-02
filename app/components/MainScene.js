'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image,
    Easing,
    Text,
    TabBarIOS,
    View
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import update from 'immutability-helper';
import MapView from 'react-native-maps';
import DetailArtScene from './DetailArtScene'

export default class MainScene extends Component {
    static get defaultProps() {
        return {
            title: 'Main Scene'
        };
    }

    state = {
        selectedTab: 'map'
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
            markers: [],
            region: {
                latitude: 56.32,
                longitude: 44,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }
        }
    }

    componentDidMount() {
        this._loadData().done()
    }

    _loadData = async () => {
        let data = await AsyncStorage.getItem('data')
        let json = JSON.parse(data);
        console.log(json);
        let markers = json.map(item => {
            return {
                artObject: item,
                latlng: { latitude: item.lat, longitude: item.lng },
                description: item.address,
                title: item.title
            }
        });
        this.setState({
            markers: markers
        })
    }

    render() {
        return (
            <View style = {{ flex : 1 }} >
                <MapView
                    zoomEnabled = { true }
                    showsUserLocation = { true }
                    region = { this.state.region }
                    style = {{ flex: 1 }}
                    onRegionChange = { (region) => {
                        let newState = update(this.state, {
                            region: { $set: region }
                        })
                        this.setState(newState);
                    }}>
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate = { marker.latlng }
                            title = { marker.title }
                            description = { marker.description }
                            onSelect = { () => {
                                let newState = update(this.state, {
                                    preview: { $set: marker.artObject }
                                })
                                this.setState(newState);
                            }}
                            onDeselect = {() => {
                                let newState = update(this.state, {
                                    preview: { $set: null }
                                })
                                this.setState(newState);
                            }}
                            />
                    ))}
                </MapView>
                <ArtObjectPreview
                    navigator = { this.props.navigator }
                    artObject = { this.state.preview } />
            </View>
        );
    }
}

class ArtObjectPreview extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        let artObject = this.props.artObject;
        this.props.navigator.push({
            component: DetailArtScene,
            title: artObject.title,
            passProps: { data: artObject }
        })
    }

    render() {
        let artObject = this.props.artObject;
        if (artObject) {
            return (
                <Animatable.View
                    animation="fadeInUpBig"
                    iterationCount={1}
                    direction = "normal"
                    style = {{
                        position: 'absolute',
                        top: 400,
                        left: 0,
                        height: 150,
                        width: 150
                    }}>
                    <TouchableHighlight
                        style = {{
                            backgroundColor: 'white',
                        }}
                        onPress = { () => this.onPress() }>
                        <View>
                            <Text> { artObject.artist } </Text>
                            <Image source = {{ uri : artObject.image }}
                                style = {{ height: 200, width: 200 }}/>
                        </View>
                    </TouchableHighlight>
                </Animatable.View>
            );
        } else {
            return null;
        }
    }

}

class ArtList extends Component {
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

class ArtObjectInList extends Component {
    render() {
        return (
            <Image
                style = { styles.image }
                source = {{ uri: this.props.image }}/>
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
