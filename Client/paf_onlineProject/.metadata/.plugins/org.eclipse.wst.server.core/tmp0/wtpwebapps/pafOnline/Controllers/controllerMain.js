//--user
//--login
$(document).on("click","#btnLogin",function()
{
	var result = isValidFormLogin();
	if(result=="true")
		{ $("#formLogin").submit(); }
	
	else
		{ $("#divStsMsgLogin").html(result); }
		
});

//--client model
//--user
function isValidFormLogin()
{
	if($.trim($("#email").val())=="")
		{ return "Enter Username"; }
	
	if($.trim($("#password").val())=="")
	{ return "Enter Password"; }
	
	return "true";
}

function isValidFormItem()
{
	if($.trim($("#username").val())=="")
	{ return "Enter Username"; }


	if($.trim($("#email").val())=="")
	{ return "Enter Email"; }

	
	if($.trim($("#nic").val())=="")
	{ return "Enter NIC"; }
	
	
	if($.trim($("#mobile").val())=="")
	{ return "Enter Mobile"; }

	
	if($.trim($("#password").val())=="")
	{ return "Enter Password"; }

	
}







//--items   save/update
$(document).on("click","#btnSave",function()
{
			var result = isValidFormItem();
			if(result=="true")
				{ $("#formItems").submit(); }
			
			else
				{ $("#divStsMsgItem").html(result); }
				
});

//--edit
$(document).on("click","#btnEdit",function()
{
	$("#hidMode").val(update);
	$("#hidID").val($(this).attr("param"));
	$("#username").val($(this).closest("tr").find('td:eq(1)').text());
	$("#email").val($(this).closest("tr").find('td:eq(2)').text());
	$("#nic").val($(this).closest("tr").find('td:eq(3)').text());
	$("#mobile").val($(this).closest("tr").find('td:eq(4)').text());
	$("#password").val($(this).closest("tr").find('td:eq(5)').text());
	
});
//--Remove
$(document).on("click","#btnRemove", function()
{
	$("#hidMode").val("remove");
	$("#hidID").val($(this).attr("param"));
	var res = confirm("Are you sure?");
		if(res == true){
			$("#formItems").submit();
		}


});
