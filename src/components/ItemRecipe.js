import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../theme/color";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";

const ItemRecipe = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('RecipeDetailScreen', {
                recipeId: item.id
            })}
            style={styles.itemContainer}>

            <Image
                style={styles.imageRecipes}
                source={{ uri: item.image }}
                resizeMode="cover" />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name={'star'} size={16} color={colors.start} />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        flexDirection: "row",
    },
    imageRecipes: {
        backgroundColor: colors.border,
        width: 78,
        height: 78,
        borderRadius: 8,
    },
    name: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "bold",
    },
    infoContainer: {
        marginLeft: 16,
        flex: 1,
    },
    ratingContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    rating: {
        fontSize: 16,
        color: colors.primary,
        marginLeft: 8,
    }
})

export default ItemRecipe;