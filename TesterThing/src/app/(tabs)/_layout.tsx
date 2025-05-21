import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  // Define a custom larger size for your icons
  const largerIconSize = 30; // Increased from default (usually 24 or 25)

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        // You can also adjust tab bar height to accommodate larger icons
        tabBarStyle: {
          marginBottom: 15,
          paddingTop: 10,
          height: 60, // Increased from default (usually around 50)
        }
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Feed',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={largerIconSize} />
        ),
      }} />
      <Tabs.Screen name="notifications" options={{
        title: 'Notifications',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={largerIconSize} />
        ),
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={largerIconSize} />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={largerIconSize} />
        ),
      }} />
    </Tabs>
  );
}