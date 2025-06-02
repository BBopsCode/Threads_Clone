export type User = {
    id: string;
    username: string;
    name: string;
    image: string;
}

export type Workout = {
    id: string;
    name: string;
    description: string;
    goal: number;
    completed_amount: number;

    created_at: string;
    updated_at: string;
    
    user_id: string;
    user: User;

    comments: Comment[];
    encouragements: number;
}

export type Comment = {
    id: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    user: User;
}
