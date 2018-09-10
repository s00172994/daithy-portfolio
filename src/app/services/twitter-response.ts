export interface TwitterResponse {
    following: boolean;
    id: number;
    screen_name: string;
    name: string;
    protected: boolean;
    followers_count: number;
    formatted_followers_count: number;
    age_gated: boolean;
}
