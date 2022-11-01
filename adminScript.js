function showData()
{
  let user_records=new Array();
 
user_records=JSON.parse(localStorage.getItem("user_records"))?JSON.parse(localStorage.getItem("user_records")):[]
console.log(user_records)
  if(user_records)
  {
    
    for(let i=0;i<user_records.length;i++)
    {
      let td=document.createElement('tr');

  td.innerHTML='  <tr class="border border-slate-600"> <td class="border border-slate-600">'
  +user_records[i].name+'</td><td class="border border-slate-600">'
  +user_records[i].email+ '</td><td class="border border-slate-600">'
  +user_records[i].age+'</td><td class="border border-slate-600">' 
  +user_records[i].phone+'</td><td class="border border-slate-600">'
  +user_records[i].adhaar+'</td><td class="border border-slate-600">'
  +user_records[i].address+'</td><td class="border border-slate-600">'
  +user_records[i].date+'</td> <td class="border border-slate-600"><input type="checkbox">Done</td></tr>';
  document.getElementById("showUsers").appendChild(td);

    }
  }
  }

  showData();