export const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600) / 60;
    const seconds = totalSeconds % 60;

    return {
        hours : hours.toString().padStart(2, '0'),
        minutes : minutes.toString().padStart(2, '0'),
        seconds : seconds.toString().padStart(2, '0')
    }
}


export const calculateTime = () => {
    const calculatedTime = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    return NaN(calculateTime) ? 0 : calculateTime;  //return 0 is any value is NaN
}