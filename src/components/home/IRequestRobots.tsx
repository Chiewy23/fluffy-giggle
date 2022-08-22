export interface IRequestRobots {
    robots: Array<IRobot>,
    isPending: boolean,
    error: string
}

interface IRobot {
    id: string,
    name: string,
    email: string,
    text: string,
}