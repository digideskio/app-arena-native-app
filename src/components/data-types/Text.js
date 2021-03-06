import React, {PropTypes} from "react";
import Component from "../../framework/component";
import {View, TextInput} from "react-native";
import I18n from "react-native-i18n";

export default class TextElementComponent extends Component {
    static propTypes = {
        setValue: PropTypes.func.isRequired,
        value: PropTypes.string
    };

    getInitState() {
        var multiline = (this.props.value.length >= 35);
        return ({
            multiline
        });
    }

    onChange(value) {
        this.props.setValue(value)
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={{margin: 15}}>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={this.onChange.bind(this)}
                        value={this.props.value}
                        autoCorrect={true}
                        autoFocus={true}
                        multiline={this.state.multiline}
                        keyboardType={'default'}
                        placeholderTextColor={I18n.t('input_placeholder')}
                        clearButtonMode={"while-editing"}
                        returnKeyType={'done'}
                    />
                </View>
            </View>
        )
    }
}