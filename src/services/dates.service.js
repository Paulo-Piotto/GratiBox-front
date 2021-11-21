import dayjs from "dayjs";

export default function getNextDates(str){
    const dates = [];
    if(!isNaN(str)){
        const today = dayjs().format('DD/MM/YYYY');
        let todayArray = today.split('/');
        if(todayArray[1] < 12){
            dates.push(`${str}/${today}`)
        }
    }
}