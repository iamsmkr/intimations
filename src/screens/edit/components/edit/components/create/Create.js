import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../Styles';

export default ({ stageIntimationIncompleteRequest, stageIntimationIsDirty }) => {
    return (
        <TouchableOpacity disabled={!stageIntimationIsDirty} style={Styles.createWrapper}>
            <Text style={Styles.create}>Create</Text>
        </TouchableOpacity>
    );
}
