import { set_job, add_job, delete_job } from "./actions"
export const reducer = (state, action) => {
    switch (action.type) {
        case set_job:
            return {
                ...state,
                job: action.payload
            }
        case add_job:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case delete_job:
            const newJobs = state.jobs.filter((job) => job !== state.jobs[action.payload])
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('invalid action');
    }
}