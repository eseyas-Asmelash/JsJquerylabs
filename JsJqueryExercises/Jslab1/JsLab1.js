// 1st exercise
function sumThreenum(strarray) {
    var total = 0;
    strarray.forEach(element => {
        var num = parseInt(element,10);
        total += num;

    });
    console.log("Sum Three Numbers");
    console.log(total);
    console.log("\n");
}
sumThreenum(['2', '3', '4']);
sumThreenum(['1.5', '1.5', '-1']);

//2nd exercise
function sumandVat(strarray) {
    var total = 0;
    strarray.forEach(element => {
        var num = parseFloat(element,10);
        total += num;
    });
    console.log("Sum And Show Vat");
    console.log("SUM: " + total);
    console.log("VAT: " + total * 0.2);
    console.log("TOTAL: " + total * 1.2);
    console.log("\n");
}

sumandVat(['1.20', '2.60', '3.50']);
sumandVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);

function LetterOccurance(strarray) {
    var total = 0;
    var word = strarray[0].split('');
    word.forEach(element => {
        if(element === strarray[1]) {
            total++;
        }
    });
    console.log("letter occurance");
    console.log(total);
    console.log("\n");;
}

LetterOccurance(['hello', 'l']);
LetterOccurance(['panther', 'n']);

function FilterToAge(strarray) {
    var p = [
        {Name: strarray[1], Age: strarray[2]},
        {Name: strarray[3], Age: strarray[4]}
   ];
   console.log("Filter By Age");
        p.forEach(person => {
        if(parseInt(person.Age, 10) > parseInt(strarray[0], 10)) {
            console.log(person);
        }
    });
    console.log("\n");
}

FilterToAge(['12', 'Ivan', '15', 'Asen', '9']);

function strOfNumbs(num) {
    var str = "";
    for(let i = 1; i <= parseInt(num,10); i++){
        str += i.toString();
    }
    console.log("String to Numbers");
    console.log(str);
    console.log("\n");
}

strOfNumbs("11")


function FigureArea(arr)
{
    var area1strec = Number(arr[0]) *  Number(arr[1]);
    var area2ndrec = Number(arr[2]) *  Number(arr[3]);
    var width = Math.min(Number(arr[0]),  Number(arr[2]));
    var height = Math.min(Number(arr[1]),  Number(arr[3]));
    var rectactrec = width * height;
    console.log("calculate L-shaped figure area");
    console.log(area1strec + area2ndrec - rectactrec);
    console.log("\n");
}

FigureArea(['2', '4', '5', '3']);
FigureArea(['13', '2', '5', '8']);

function NextDay(arr) {
    var day =  new Date();
    day.setFullYear(arr[0]);
    day.setMonth(arr[1] - 1);
    day.setDate(arr[2]);
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    console.log("show next day");
    console.log(`${nextDay.getFullYear()}-${(nextDay.getMonth() + 1)}-${nextDay.getDate()}`);
    console.log("\n");
}

NextDay(['2016', '9', '30']);

function Distancebtwn2Points(arr) {
    var d = Math.sqrt(Math.pow((arr[2] - arr[0]),2) + Math.pow((arr[3] - arr[1]),2));
    console.log("Calculate distance between 2 points");
    console.log(d);
    console.log("\n");
}
Distancebtwn2Points(['2', '4', '5', '0']);
Distancebtwn2Points(['2.34', '15.66', '-13.55', '-2.9985']);