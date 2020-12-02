let arr = [23,45,67,234,56,23,56,45,34,45,67,6,5];
let flag = 0;

for (let i = 0 ; i<arr.length ; i++){

if (arr[i]%2===0)
{
    flag++;
}
}
console.log("even numbers",flag);


var matrix = [1,1]
for (let i = 0 ; i<1 ;i++)
{

    for (let j = 0 ; j<1 ; j++)
    {
        matrix[i][j].push(+prompt(`Enter value of clumn ${j}`))
    }
}

for (let i = 0 ; i<matrix.length ; i++)
{
    for (let j = 0 ;j<matrix.length;j++)
    {
        console.log("",matrix[i][j])
    }
}




var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
 var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);

 }
 }
