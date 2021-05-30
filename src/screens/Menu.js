import React from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import FontAwesomeButton from '../components/FontAwesomeButton';
import * as strings from '../utils/strings.json';
import * as menuItems from '../utils/menu/menu.json';
import colors from '../styles/colors.json';
import * as mainMenu from '../utils/menu/mainMenu.json';
import * as Playlist from '../utils/Playlist';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={mainMenu.default}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <FontAwesomeButton
                text={strings[item.title]}
                iconName={item.iconName}
                iconSize={28}
                iconStyle={styles.icon}
                buttonStyle={{...styles.button}}
                textStyle={styles.text}
                onPress={() => {
                  const menuItem = menuItems[item.title];
                  this.props.navigation.navigate(
                    item.nextScreen,
                    item.title === 'settings'
                      ? {
                        title: strings[item.title],
                      }
                      : {
                          title: strings[item.title],
                          collection:
                            menuItem.chapters[menuItem.firstChapter].collection,
                          chapters: menuItem.chapters,
                          chapterNum:
                            menuItem.chapters[menuItem.firstChapter].chapterNum,
                        },
                  )
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  button: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-start',
    backgroundColor: colors.tertiary,
  },
  icon: {
    backgroundColor: colors.tertiaryDark,
    color: colors.secondary,
    borderRadius: 50,
    width: 50,
    padding: 10,
    aspectRatio: 1,
    textAlign: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Menu;
