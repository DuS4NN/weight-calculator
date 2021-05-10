import React from "react";
import { ScrollView, View, TextInput } from "react-native";
import styles from "app/styles/MainScreenStyle";
import { WEIGHTS } from "app/constants/Constants";
import WeightChip from "app/components/WeightChip";
import colors from "../styles/Colors";

function WeightList(props) {

    const {usedWeights, setUsedWeights, calculateWeights, inputValue, bannedWeights, banWeight} = props;

    const handleClickOnWeightChip = (weight) => {
        if(bannedWeights.includes(weight)) return;

        if(usedWeights.includes(weight)){
            setUsedWeights(usedWeights.filter(function (item) {
                return item !== weight;
            }));
        }else{
            setUsedWeights([...usedWeights, weight]);
        }
    }

    return (
        <View style={styles.listContainer}>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputInput} keyboardType="numeric" placeholderTextColor={colors.lightGray} value={inputValue} placeholder="Zadaj váhu" onChangeText={number => calculateWeights(number)} />
            </View>

            <ScrollView style={{width: "100%"}}>
               <View style={{alignItems: "center"}}>
                   {WEIGHTS.map(weight => (
                       <WeightChip
                           key={weight.id}
                           weight={weight}
                           used={usedWeights.includes(weight)}
                           banned={bannedWeights.includes(weight)}
                           handleClickOnWeightChip={handleClickOnWeightChip}
                           banWeight={banWeight}
                       />
                   ))}
               </View>
            </ScrollView>
        </View>
    )
}

export default WeightList;
