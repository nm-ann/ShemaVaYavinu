import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/ChapterTextStyles';

class TouchableText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelect(this.props.index);
        }}>
        <Text
          style={[
            this.props.selected ? styles.selected : styles.unselected,
            styles.text,
            this.props.style,
          ]}>
          {this.props.lineNum + ': ' + this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TouchableText;
