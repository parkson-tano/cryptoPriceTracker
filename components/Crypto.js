import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Crypto = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    const [curr, setCurr] = useState(null)
    const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d'
    
    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {setCurr(response.data)
      })
      .catch(error => console.log(error))
    }, []);
    
    
    return (
        <TouchableOpacity>
            <View className="px-3 mt-3 flex-row">
                {/* left side */}
                <View className='flex-row justify-items-center flex-1'>
                    <Image
                        source={{ uri: logoUrl }}
                        className='h-14 w-14'
                    />
                    <View>
                        <Text className="ml-3 text-2xl font-bold text-gray-500">
                            {name}
                        </Text>
                        <Text className="ml-3 text-9xs mt-1">
                            {symbol.toUpperCase()}
                        </Text>
                    </View>
                </View>
                {/* right side */}
                <View className='pl-6'>
                    <Text className="ml-3 text-2xl font-bold text-gray-500 text-right">
                        ${currentPrice.toLocaleString('en-US', {currency:"USD"})}
                    </Text>
                    <Text className="ml-3 text-9xs mt-1 text-right" style={{color : priceChangeColor}}
                    >
                        {priceChangePercentage7d.toFixed(2)}%
                    </Text>
                </View>
                

            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    );
};

export default Crypto;

const styles = StyleSheet.create({
    divider: {
        height: StyleSheet.hairlineWidth,
		backgroundColor: "#A9ABB1",
		marginHorizontal: 16,
		marginTop: 16,
    }
})