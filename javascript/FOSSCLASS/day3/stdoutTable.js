//create Table
var table = document.createElement('table');

//create Table Header
var header = ['Id', 'Color', 'Car' ];
var tr=document.createElement('tr');
for(var column in header)
{   
  var th=document.createElement('th');
  th.innerHTML = header[column];
  tr.appendChild(th)
}
table.appendChild(tr);

//create Table Body
var input = [
  [8, 'Black', 'Lexus'],
  [9, 'Green', 'Mercedes'], 
  [10, 'Brown', 'Cadillac'],
  [11, 'Gray', 'Porsche']
];

for(var row in input)
{
    var tr=document.createElement('tr');
    for(var column in input[row]){
      
        var td=document.createElement('td');
        td.innerHTML = input[row][column];
        tr.appendChild(td)
        
    }
    table.appendChild(tr);
}

// append Table
document.body.appendChild(table);