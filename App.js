import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import React, { useState, useEffect } from "react";
import Axi from './components/Axi';
import Counter from './components/Counter';
import Crypto from './components/Crypto';
import Row from './components/Row';
import { SAMPLE_DATA } from "./assets/data/sampleData"
import axios from "axios";

const ListHeader = () => (
	<>
		<View style={styles.titleWrapper}>
			<Text style={styles.largeTitle}>Markets</Text>
		</View>
		<View style={styles.divider} />
	</>
)

export default function App() {
	const [curr, setCurr] = useState(null)
	const baseURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d'

	useEffect(() => {
		axios.get(baseURL)
			.then((response) => {
				setCurr(response.data)
			})
			.catch(error => console.log(error))
	}, []);
	return (
		<TailwindProvider>
			<SafeAreaView className="bg-black">
				<View style={styles.container}>
					<FlatList
						keyExtractor={(item) => item.id}
						data={curr}
						renderItem={({ item }) =>
							<Crypto
								name={item.name}
								symbol={item.symbol}
								currentPrice={item.current_price}
								priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
								logoUrl={item.image}
							/>
						}
						ListFooterComponent =  {<Counter />}
						ListHeaderComponent={<ListHeader />}
					/>
					
				</View>
				
			</SafeAreaView>
		</TailwindProvider>



	);
}

const styles = StyleSheet.create({
	container: {
		background: "#fff",
	},
	titleWrapper: {
		marginTop: 20,
		paddingHorizontal: 16,
	},
	largeTitle: {
		fontSize: 24,
		fontWeight: "bold",
	},
	divider: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: "#A9ABB1",
		marginHorizontal: 16,
		marginTop: 16,
	}
})