import React, {useState, useEffect} from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { BAR } from "app/constants/Constants";
import styles from "app/styles/MainScreenStyle";
import colors from "app/styles/Colors";

function ActualWeightsHeader(props) {

    const {usedWeights, resetUsedWeights} = props;
    const [totalWeight, setTotalWeight] = useState(0);

    useEffect(() => {
        let newTotalWeight = usedWeights.reduce(function (acc, val) {
            return acc + val.weight;
        }, 0);
        setTotalWeight(newTotalWeight*2 + BAR);
    }, [usedWeights]);

    return (
        <View style={styles.headerBackground}>
            <Text style={styles.headerDescription}>Tvoja váha:</Text>

            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{totalWeight}</Text>
                <Text style={styles.headerTextKG}>kg</Text>
            </View>

            <TouchableHighlight style={styles.headerResetContainer} underlayColor={colors.highlightOrange} onPress={()=>{resetUsedWeights()}}>
                <Text style={styles.headerReset}>Reset</Text>
            </TouchableHighlight>

        </View>
    )
}

export default ActualWeightsHeader;
