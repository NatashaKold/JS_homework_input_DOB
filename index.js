const currentDate = new Date();
let dob;
let inputData;
let daysDif;

document.getElementById("addDate").addEventListener("input", function(){
    inputData= this.value;
    console.log (inputData);
    dob = new Date (inputData);
    console.log (dob);
    const daysDifInMiliseconds = dob - currentDate;
    daysDif = Math.floor (daysDifInMiliseconds/(1000*60*60*24));
    
});

function showMessage(){
    let daysWord;
let daysAsString = String(daysDif);
if (daysAsString[daysAsString.length - 1] =='0' || daysAsString[daysAsString.length-1] =='5' ||  daysAsString[daysAsString.length-1] =='6' || daysAsString[daysAsString.length-1] =='7' || daysAsString[daysAsString.length-1]=='8' || daysAsString[daysAsString.length-1]=='9'){
    daysWord='дней'
}
else if(daysAsString[daysAsString.length-1]=='1'){
    daysWord='день'
}
else{
    daysWord='дня'
}

    if (inputData == undefined){ 
    document.getElementById("message").innerHTML= "Введите дату Вашего рождения";
    } 
    else{
    document.getElementById("message").innerHTML= `До Дня Рождения осталось ${daysDif} ${daysWord}!`
    }
};
