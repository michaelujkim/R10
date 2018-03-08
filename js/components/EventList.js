import React from "react";
import PropTypes from "prop-types";
import {
  SectionList,
  ListItem,
  Header,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import { formatUnixDate } from "../redux/modules/helper";
import Icon from "react-native-vector-icons/Ionicons";
import { goToSession } from "../config/navigationHelpers";
import { createFave, deleteFave } from "../config/models";
import { styles } from "./styles";

export const EventList = ({ data, isLoading, faves }) => {
  return (
    console.log(faves),
    (
      <SectionList
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <TouchableOpacity
              onPress={() => {
                goToSession("schedule", item);
              }}
            >
              <Text style={styles.entry}>{item.title}</Text>
            </TouchableOpacity>
            <View style={styles.location}>
              <Text>{item.location}</Text>
              {/* {faves.includes(item.sessionId) ? (
              <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
            ) : (
              <Text />
            )} */}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.time}>{formatUnixDate(section.title)}</Text>
        )}
        sections={data}
        renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
      />
    )
  );
};
// displayHeart(){
//   if(faves.includes(item.sessionId)){
// return
// <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />}
// }else{
//   return
//   <Text></Text>
// }
