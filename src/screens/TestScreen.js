import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { counterIncrementor } from '../store/actions';

class TestScreen extends React.Component {
    state = {}

    render() {
        const { counter, counterIncrementor } = this.props;
        return (
            <View>
                <Text>
                    {counter}
                </Text>
                <Button title="increment" onPress={() => { counterIncrementor(2)} } />
            </View>
        );
    }
}

const mapStateToProps = ({ counter }) => ({
    counter,
});

export default connect(mapStateToProps, { counterIncrementor })(TestScreen);
