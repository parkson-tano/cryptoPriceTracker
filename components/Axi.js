import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Axi = () => {
    const [person, setPerson] = useState([])
    const baseURL = "https://imobbis.pythonanywhere.com/user/service"
    useEffect(() => {
        axios.get(`${baseURL}`)
        .then((response) => { 
        setPerson(response.data)
        })
        .catch(error => console.log(error));
    }, []);
    
    const createPost = () => {
        axios
        .post(
            baseURL, {
                name: 'new title',
            }
        )
        .then(
            (response) => {
                setPerson(response.data)
            }
        )
        .catch(error => alert(error));
    }

    const updatePost = () => {
        axios
        .put(
            `${baseURL}/2`, {
                name: 'change title',
            }
        )
        .then(
            (response) => {
                setPerson(response.data)
            }
        )
        .catch(error => console.log(error));
    }

    const deletePost = () => {
        axios
        .delete(
            `${baseURL}/5`
        )
        .then(
            (response) => {
                alert("delete")
                setPerson(response.data)
            }
        )
    }

    if (!person) return null;
    return (
        <View>
            <Text>
                {person.name}
            </Text>

            <TouchableOpacity>
                <Button title="Create post" onPress={deletePost} />
            </TouchableOpacity>
            <FlatList
                data={person}
                renderItem={({item}) => <Text className='text-red-600 m-4'>{item.name}</Text>}

            />
        </View>
    );
};

export default Axi;
