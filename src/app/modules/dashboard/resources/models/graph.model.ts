export interface Graph {
    data: Data;
    type: string;
}

interface Data {
    agreeableness: number;
    drive: number;
    luck: number;
    openess: number;
}