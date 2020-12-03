let arr = [23,45,67,234,56,23,56,45,34,45,67,6,5];
let flag = 0;

for (let i = 0 ; i<arr.length ; i++){

if (arr[i]%2===0)
{
    flag++;
}
}
console.log("even numbers",flag);

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
 var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);

 }
}


var newNum = [ [101,110], [177,  7] ]
var num2 = [ [101,110], [177,  7] ]
var result = [ [101,110], [177,  7] ]

for (let i = 0 ;i<newNum.length;i++)
{
    for (let j = 0 ;j<newNum[i].length;j++)
    {
        newNum[i][j] = +prompt(`enter value of ${i} and j ${j}`)
    }
}


for (let i = 0 ;i<num2.length;i++)
{
    for (let j = 0 ;j<num2[i].length;j++)
    {
        num2[i][j] = +prompt(`enter value of ${i} and j ${j}`)
    }
}

for (let i = 0 ;i<result.length;i++)
{
    for (let j = 0 ;j<result[i].length;j++)
    {
        result[i][j] = newNum[i][j] + num2[i][j];
    }
}

console.log(newNum);
console.log(num2);
console.log(result);