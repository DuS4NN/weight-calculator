import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/MainScreenStyle";
import ActualWeightsHeader from "app/components/ActualWeightHeader";
import WeightList from "app/components/WeightList";
import { WEIGHTS, BAR } from "app/constants/Constants";

function MainScreen () {

    const [usedWeights, setUsedWeights] = useState([]);
    const [bannedWeights, setBannedWeights] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const resetUsedWeights = () => {
        setUsedWeights([]);
        setBannedWeights([]);
        setInputValue("");
    }

    const calculateWeights = (number, unbannedWeight, bannedWeight) => {
        setInputValue(number);
        setUsedWeights([]);

        let newUsedArray = []
        number -= BAR;

        WEIGHTS.slice(0).reverse().forEach(function (value) {
            if((!bannedWeights.includes(value) || unbannedWeight === value) && number >= value.weight*2 && bannedWeight !== value){
                newUsedArray.push(value);
                number -= value.weight*2;
            }
        });
        setUsedWeights(newUsedArray);
    }

    const banWeight = (weight) => {
        if(bannedWeights.includes(weight)){
            setBannedWeights(bannedWeights.filter(function (item) {
                return item !== weight;
            }));
            calculateWeights(inputValue, weight, null);
        }else{
            setBannedWeights([...bannedWeights, weight]);
            if(usedWeights.includes(weight)){
                setUsedWeights(usedWeights.filter(function (item) {
                    return item !== weight;
                }));
            }
            calculateWeights(inputValue, null, weight);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <ActualWeightsHeader usedWeights={usedWeights} resetUsedWeights={resetUsedWeights} />
            <WeightList usedWeights={usedWeights} setUsedWeights={setUsedWeights} calculateWeights={calculateWeights} inputValue={inputValue} setInputValue={setInputValue} bannedWeights={bannedWeights} banWeight={banWeight} />
        </View>
    )

}

export default MainScreen;
