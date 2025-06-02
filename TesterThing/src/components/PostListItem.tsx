import { View, Text, Image } from "react-native";
import { Workout } from "@/types";
import { Ionicons } from '@expo/vector-icons';

export default function PostListItem({ workout }: { workout: Workout }) {
    const isCompleted = workout.completed_amount === workout.goal;
    const isExceeded = workout.completed_amount > workout.goal;
    
    return (
        <View className="p-4 border-b border-gray-800 bg-gray-900">
            {/* User info and post header */}
            <View className="flex-row items-center mb-2">
                <Image 
                    source={{ uri: workout.user.image }} 
                    className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                    <Text className="font-bold text-base text-gray-100">{workout.user.name}</Text>
                    <Text className="text-gray-400 text-sm">@{workout.user.username}</Text>
                </View>
            </View>

            {/* Workout content */}
            <View className="mb-3">
                <Text className="text-xl font-bold mb-1 text-gray-100">{workout.name}</Text>
                <Text className="text-gray-300 mb-2">{workout.description}</Text>
                
                {/* Progress bar */}
                <View className="h-2 bg-gray-800 rounded-full mb-2">
                    <View 
                        className={`h-2 rounded-full ${
                            (() => {
                                switch (true) {
                                    case isCompleted:
                                        return 'bg-emerald-500';
                                    case isExceeded:
                                        return 'bg-yellow-500';
                                    default:
                                        return 'bg-blue-500';
                                }
                            })()
                        }`}
                        style={{ width: `${
                            (() => {
                                switch (true) {
                                    case isCompleted:
                                        return 100;
                                    case isExceeded:
                                        return 100;
                                    default:
                                        return (workout.completed_amount / workout.goal) * 100;
                                }
                            })()
                        }%` }}
                    />
                </View>
                
                <Text className="text-gray-400 text-sm">
                    Progress: {workout.completed_amount} / {workout.goal}
                </Text>
            </View>

            {/* Comments section */}
            {workout.comments.length > 0 && (
                <View className="mt-2 flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={20} color="#9CA3AF" />
                    <Text className="text-gray-400 text-lg ml-1">
                        {workout.comments.length}
                    </Text>
                </View>
            )}
            {workout.encouragements > 0 && (
                <View className="mt-2 flex-row items-center">
                    <Ionicons name="heart-outline" size={20} color="#9CA3AF" />
                    <Text className="text-gray-400 text-lg ml-1">
                        {workout.encouragements}
                    </Text>
                </View>
            )}

            {/* Timestamp */}
            <Text className="text-gray-500 text-xs mt-2">
                {new Date(workout.created_at).toLocaleDateString()}
            </Text>
        </View>
    );
}