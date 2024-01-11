form = document.querySelector("form");
details=[]
primary_form=document.querySelector("#primary-form");
console.log(primary_form);
op_table=document.querySelector("#op-table");

output=document.getElementById("op-body");
main_btn=document.getElementById("submit-btn");
edit_form=document.getElementById("edit-form");
edit=document.getElementById("edit");
save_button=document.getElementById("save-btn");
function add_record()
{
    let new_record={
        "fname": form.fname.value,
        "lname":form.lname.value,
        "email":form.email.value,
        "age":form.age.value,
        "num":form.num.value
    }
    details.push(new_record)
    display();
}
function display()
{   
    output.innerHTML="";
    for(let i=0;i<details.length;i++)
    {
        output.innerHTML+=`
        <tr>
        <td>${details[i].fname}</td>
        <td>${details[i].lname}</td>
        <td>${details[i].email}</td>
        <td>${details[i].age}</td>
        <td>${details[i].num}</td>
        <td><input type="button" value="EDIT" onclick="edit_info(this,`+i+`)" ></td>
        <td><input type="button" value="X" onclick="delete_info(this)" ></td>
        </tr>`
        
    }
    form.reset();
}
function delete_info(e)
{
    e.parentElement.parentElement.remove();
}

function edit_info(e,i)

{   
    main_btn.classList.add("blurred");
    
    form.classList.add("blurred");
    
    op_table.classList.add("blurred");

    edit.style.display="block";

    let new_form=e.parentElement.parentElement;
    edit_form.fname.value=new_form.children[0].innerHTML;
    edit_form.lname.value=new_form.children[1].innerHTML;
    edit_form.email.value=new_form.children[2].innerHTML;
    edit_form.age.value=new_form.children[3].innerHTML;
    edit_form.num.value=new_form.children[4].innerHTML;
    save_button.setAttribute('onclick',"save_edited_record("+i+")");
    
}
function save_edited_record(i)
{
    let new_record={
        "fname": edit_form.fname.value,
        "lname":edit_form.lname.value,
        "email":edit_form.email.value,
        "age":edit_form.age.value,
        "num":edit_form.num.value
    }
    
    details[i]=new_record;
    edit.style.display="none";
    display();
    main_btn.classList.remove("blurred");
    
    form.classList.remove("blurred");
    
    op_table.classList.remove("blurred");
}