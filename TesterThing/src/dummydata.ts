import { User, Workout, Comment } from './types';

export const dummyUsers: User[] = [
    {
        id: "1",
        username: "fitness_freak",
        name: "Alex Johnson",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: "2",
        username: "gym_warrior",
        name: "Sarah Smithinsburgerton",
        image: "https://i.pravatar.cc/150?img=2"
    },
    {
        id: "3",
        username: "yoga_master",
        name: "Michael Chen",
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        id: "4",
        username: "crossfit_queen",
        name: "Emma Wilson",
        image: "https://i.pravatar.cc/150?img=4"
    },
    {
        id: "5",
        username: "running_man",
        name: "David Brown",
        image: "https://i.pravatar.cc/150?img=5"
    }
];

export const dummyWorkouts: Workout[] = [
    {
        id: "1",
        name: "Morning HIIT Session",
        description: "Intense 30-minute HIIT workout to start the day right!",
        goal: 30,
        completed_amount: 30,
        created_at: "2025-06-05T08:00:00Z",
        updated_at: "2025-06-05T08:35:00Z",
        user_id: "1",
        user: dummyUsers[0],
        comments: [],
        encouragements: 6
    },
    {
        id: "2",
        name: "Upper Body Strength",
        description: "Focusing on chest, shoulders, and arms today.",
        goal: 45,
        completed_amount: 45,
        created_at: "2025-06-04T16:00:00Z",
        updated_at: "2025-06-04T16:50:00Z",
        user_id: "2",
        user: dummyUsers[1],
        comments: [],
        encouragements: 9
    },
    {
        id: "3",
        name: "Yoga Flow",
        description: "Relaxing evening yoga session to unwind.",
        goal: 60,
        completed_amount: 60,
        created_at: "2025-06-03T19:00:00Z",
        updated_at: "2025-06-03T20:00:00Z",
        user_id: "3",
        user: dummyUsers[2],
        comments: [],
        encouragements: 5
    },
    {
        id: "4",
        name: "CrossFit WOD",
        description: "Today's workout of the day: AMRAP in 20 minutes",
        goal: 20,
        completed_amount: 20,
        created_at: "2025-06-02T17:00:00Z",
        updated_at: "2025-06-02T17:25:00Z",
        user_id: "4",
        user: dummyUsers[3],
        comments: [],
        encouragements: 12
    },
    {
        id: "5",
        name: "5K Run",
        description: "Morning run around the park",
        goal: 25,
        completed_amount: 24,
        created_at: "2025-06-01T06:00:00Z",
        updated_at: "2025-06-01T06:30:00Z",
        user_id: "5",
        user: dummyUsers[4],
        comments: [],
        encouragements: 8
    },
    {
        id: "6",
        name: "Leg Day",
        description: "Squats, lunges, and deadlifts",
        goal: 60,
        completed_amount: 29,
        created_at: "2025-05-31T15:00:00Z",
        updated_at: "2025-05-31T16:05:00Z",
        user_id: "1",
        user: dummyUsers[0],
        comments: [],
        encouragements: 10
    },
    {
        id: "7",
        name: "Core Crusher",
        description: "Ab workout with planks and crunches",
        goal: 30,
        completed_amount: 8,
        created_at: "2025-05-30T12:00:00Z",
        updated_at: "2025-05-30T12:35:00Z",
        user_id: "2",
        user: dummyUsers[1],
        comments: [],
        encouragements: 10
    },
    {
        id: "8",
        name: "Meditation Session",
        description: "Guided meditation for stress relief",
        goal: 20,
        completed_amount: 29,
        created_at: "2025-05-29T21:00:00Z",
        updated_at: "2025-05-29T21:20:00Z",
        user_id: "3",
        user: dummyUsers[2],
        comments: [],
        encouragements: 4
    },
    {
        id: "9",
        name: "Boxing Workout",
        description: "Heavy bag and shadow boxing",
        goal: 45,
        completed_amount: 45,
        created_at: "2025-06-06T18:00:00Z",
        updated_at: "2025-06-06T18:50:00Z",
        user_id: "4",
        user: dummyUsers[3],
        comments: [],
        encouragements: 6
    },
    {
        id: "10",
        name: "Hill Sprints",
        description: "10 hill sprints with 2-minute rest between",
        goal: 30,
        completed_amount: 20,
        created_at: "2025-06-07T07:00:00Z",
        updated_at: "2025-06-07T07:35:00Z",
        user_id: "5",
        user: dummyUsers[4],
        comments: [],
        encouragements: 65
    }
];

// Add comments to each workout
dummyWorkouts.forEach(workout => {
    workout.comments = [
        {
            id: `${workout.id}_comment_1`,
            content: "Great workout! Keep it up! 💪",
            created_at: new Date(workout.created_at).toISOString(),
            updated_at: new Date(workout.created_at).toISOString(),
            user_id: dummyUsers[Math.floor(Math.random() * dummyUsers.length)].id,
            user: dummyUsers[Math.floor(Math.random() * dummyUsers.length)]
        },
        {
            id: `${workout.id}_comment_2`,
            content: "This looks intense! How was it?",
            created_at: new Date(workout.created_at).toISOString(),
            updated_at: new Date(workout.created_at).toISOString(),
            user_id: dummyUsers[Math.floor(Math.random() * dummyUsers.length)].id,
            user: dummyUsers[Math.floor(Math.random() * dummyUsers.length)]
        },
        {
            id: `${workout.id}_comment_3`,
            content: "I might try this workout next time!",
            created_at: new Date(workout.created_at).toISOString(),
            updated_at: new Date(workout.created_at).toISOString(),
            user_id: dummyUsers[Math.floor(Math.random() * dummyUsers.length)].id,
            user: dummyUsers[Math.floor(Math.random() * dummyUsers.length)]
        }
    ];
});
