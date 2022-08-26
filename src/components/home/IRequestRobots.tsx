import { IRobot } from "./IRobot";

export interface IRequestRobots {
    robots: Array<IRobot>,
    isPending: boolean,
    error: string
}