import { TYPELOG } from "../constans.js";   //import from file outside
function logger(log, type=TYPELOG){
    console[type](log);
}

export default logger;
// 1 file can only export 1 default value