$( document ).ready(function() {

    $("#remove-group").click(function (){
        var remove_ID = prompt("Group ID");
        console.log(remove_ID);
        var url = 'http://localhost:8080/group/delete/'+remove_ID;
        console.log(url);
        $.get(url, function(data){

        });
    });

    $("#add-group").click(function (){
        var g_name = $( "input[name='group_name']" ).val();
        var g_users = $( "input[name='group_users']" ).val();

        if(g_name != null && g_users!=null){

            $.ajax({
                contentType: 'application/json',
                data: JSON.stringify({"name": g_name, "users": g_users}),
                dataType: 'json',
                processData: false,
                type: 'POST',
                url: 'http://localhost:8080/group/add'
            });
        }



    });
    $("#modify-group").click(function (){
        var modify_ID = prompt("Group ID");
        var g_name = $( "input[name='group_name']" ).val();
        var g_users = $( "input[name='group_users']" ).val();



        $.ajax({
            contentType: 'application/json',
            data: JSON.stringify({"id":modify_ID,"name": g_name, "users": g_users}),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'http://localhost:8080/group/modify'
        });




    });




});

