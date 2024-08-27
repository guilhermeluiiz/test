import React from 'react';
import { Button, View, Text } from 'react-native';

export default function UserScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User Screen</Text>
            <Button 
                title="Go back"
                onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
