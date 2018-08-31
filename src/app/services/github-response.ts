export interface GitHubResponse {
    years: Array<any>;
    contributions: Array<contribution>;
}

export class contribution {
    date: string;
    count: number;
    color: string;
    intensity: number;
}