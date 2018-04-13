$( document ).ready(function() {



    $("#users-list").click(function (){
        $.ajax({
            url: "http://localhost:8080/user/list"
        }).then(function(data) {
            $(".result").html("");
            $(".result").append("<table id='users'>");
            $(".result").append("<tr><th>ID</th><th>NICKNAME</th><th>NAME</th><th>SURNAME</th><th>PASSWORD</th><th>DATE OF BIRTH</th><th>GROUPS</th></tr>");

            $(".result").append("</tr>");
            for(i=0;i<data.length;i++){





                var row =  "<tr><th>"+data[i].id+"</th><th>"+data[i].nickname+"</th><th>"+data[i].name+"</th><th>"+data[i].surname+"</th><th>"+data[i].password+"</th><th>"+data[i].date+"</th><th id='groups_place'>"+data[i].groups+"</th></tr>";
                $(".result").append(row);
            }

            $(".result").append("</table>");

        });


       // $(".action-bar").html("<button type=\"button\" id=\"add-user\" class=\"btn btn-lg\" >Add user</button>" +
           /// "<button type=\"button\" id=\"remove-user\" class=\"btn btn-lg\">Remove user</button>" +
          //  "<button type=\"button\" id=\"modify-user\" class=\"btn btn-lg\">Modify user</button>");




    });







    $("#groups-list").click(function (){
        $.ajax({
            url: "http://localhost:8080/group/list"
        }).then(function(data) {
            $(".result").html("");
            $(".result").append("<table id='users'>");
            $(".result").append("<tr><th>ID</th><th>NAME</th><th>USERS</th>");

            $(".result").append("</tr>");
            for(i=0;i<data.length;i++){


                var row =  "<tr><th>"+data[i].id+"</th><th>"+data[i].name+"</th><th>"+data[i].users+"</th></tr>";
                $(".result").append(row);
            }

            $(".result").append("</table>");

        });



       // $(".action-bar").html("<button type=\"button\" id=\"add-group\" class=\"btn btn-lg\">Add group</button>" +
          //  "<button type=\"button\" id=\"remove-group\" class=\"btn btn-lg\">Remove group</button>" +
          //  "<button type=\"button\" id=\"modify-group\" class=\"btn btn-lg\">Modify group</button>");
    });



    $("#remove-user").click(function (){
        var remove_ID = prompt("Choose user nickname");
        console.log(remove_ID);
        var url = 'http://localhost:8080/user/delete/'+remove_ID;
        console.log(url);
        $.get(url, function(data){

        });
    });
    $("#add-user").click(function (){
        var nickname = $( "form#add-user-form>input[name='nickname']" ).val();
        var name = $( "form#add-user-form>input[name='name']" ).val();
        var surname = $( "form#add-user-form>input[name='surname']" ).val();
        var password = $( "form#add-user-form>input[name='password']" ).val();
        var groups = $( "form#add-user-form>input[name='groups']" ).val();
        var date = $( "form#add-user-form>input[name='date']" ).val();


        $.ajax({
            contentType: 'application/json',
            data: JSON.stringify({"nickname": nickname, "name": name, "surname": surname, "password": password, "date": date, "groups": groups}),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'http://localhost:8080/user/add'
        });




    });

    $("#modify-user").click(function (){
        var modify_ID = prompt("Choose user ID");
        var nickname = $( "form#add-user-form>input[name='nickname']" ).val();
        var name = $( "form#add-user-form>input[name='name']" ).val();
        var surname = $( "form#add-user-form>input[name='surname']" ).val();
        var password = $( "form#add-user-form>input[name='password']" ).val();
        var groups = $( "form#add-user-form>input[name='groups']" ).val();
        var date = $( "form#add-user-form>input[name='date']" ).val();


        $.ajax({
            contentType: 'application/json',
            data: JSON.stringify({"id":modify_ID,"nickname": nickname, "name": name, "surname": surname, "password": password, "date": date, "groups": groups}),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'http://localhost:8080/user/add'
        });




    });


});

