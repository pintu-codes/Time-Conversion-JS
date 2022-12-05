function timeConversion(s) {
    let timeArr = s.split(":");
    let timeFormat = s.slice(-2);
    let end = s.slice(6,8);
    let h = timeArr[0];
    let m = timeArr[1];
    let sec = timeArr[2];
    if (timeFormat === "PM" && parseInt(h) != 12) {
          h = parseInt(h) + 12;
    }else if (timeFormat === "AM" && parseInt(h) === 12 ){
            h = "00";
    }
    return h + ":" + m + ":" + end;
    
}
//Output with console.log
console.log(timeConversion("09:30:10PM"));
