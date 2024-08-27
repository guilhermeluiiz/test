import React from 'react';
import { Button, View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            <Button 
                title="Go to user" 
                onPress={() => navigation.navigate('User')} />
        </View>
    );
}
