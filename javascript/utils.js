export const secondsToHHMM = (seconds) => {
    try {
        if(typeof(seconds) !== "number"){
            throw new Error(`it was not possible to parse the value ${seconds} of type ${typeof(seconds)}`)
        }
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        
        return hours + ":" + minutes;
    } catch (error) {
        console.error(error)
    }
}

export const getValueOrNA = (value) => {
    if(!value) return "N/A"
    return value
}
