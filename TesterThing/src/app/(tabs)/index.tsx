import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { dummyWorkouts } from '@/dummydata';
import PostListItem from '@/components/PostListItem';


export default function App() {
  return (
    <View>
      <FlatList
        data={dummyWorkouts}
        renderItem={({ item }) => <PostListItem workout={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
