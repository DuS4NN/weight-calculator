import React from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from "app/styles/MainScreenStyle";
import colors from "app/styles/Colors";

function WeightChip(props) {

    const {weight, used, handleClickOnWeightChip, banned, banWeight} = props;

    return (
        <TouchableHighlight style={[styles.chipContainer,  used && styles.chipUsed, banned && styles.chipBanned]} underlayColor={colors.highlightGray} onPress={()=>{handleClickOnWeightChip(weight)}} onLongPress={() => banWeight(weight)}>
            <Text style={styles.chipText}>{weight.weight}</Text>
        </TouchableHighlight>
    )
}

export default WeightChip;
