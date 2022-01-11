import { set_job, add_job, delete_job } from "./actions"
export function setJob(payload){
    return {
        type: set_job,
        payload
    }
}

export function addJob(payload){
    return {
        type: add_job,
        payload
    }
}

export function deleteJob(payload){
    return {
        type: delete_job,
        payload
    }
}