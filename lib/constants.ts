import {config} from "dotenv";
config()
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN
export const BASE_URL = process.env.BASE_URL

export enum Workflow {
    ANSIBLE_SSH_GROUP_WORKFLOW = 31
}
