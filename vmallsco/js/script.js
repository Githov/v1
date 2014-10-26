function General_Save() {
        var brandname = $('#brand').val();
        var floor = $('#floor').val();
        var storenumber = $('#storenumber').val();
        var website = $('#website').val();
        var fb = $('#fb').val();
        var telephone = $('#telephone').val();
        var email = $('#email').val();
        if(brandname != ""){
        $(document).ready(function() {
            $.ajax({
            type: "POST",
            url: "db/save.php",
            data: ({brand: brandname}),
            dataType: 'json',
            success: function(a) {
                General_Update(brandname, floor, storenumber, website, fb, telephone, email);
            },
           error: function(a) {
                General_Insert(brandname, floor, storenumber, website, fb, telephone, email);
        }
    });
        
});
        }else{
            alert("Brand Name is neccessary");
           $('#brand').css("border-color", "#FF0000");
           $('.brnmsg').text("Brand Name is neccessary"); 
        }
         
}

    function General_Insert(brandname, floor, storenumber, website, fb, telephone, email) {  
        
        if(brandname != ""){
        $(document).ready(function() {
            $.ajax({
            type: "POST",
            url: "db/General_insert.php",
            data: ({brand: brandname, floor: floor, storenumber: storenumber, website: website, fb: fb, telephone: telephone, email: email}),
            dataType: 'json',
                success: function(a) {
            alert("Inserted");
            },
                error: function(a) {
            alert("Data is not inserted");
        }
    });
        
});
        }else{
            alert("Brand Name is neccessary");
           $('#brand').css("border-color", "#FF0000");
           $('.brnmsg').text("Brand Name is neccessary"); 
        }
        
}
 function General_Update(brandname, floor, storenumber, website, fb, telephone, email) {  
        
        if(brandname != ""){
        $(document).ready(function() {
            $.ajax({
            type: "POST",
            url: "db/General_update.php",
            data: ({brand: brandname, floor: floor, storenumber: storenumber, website: website, fb: fb, telephone: telephone, email: email}),
            dataType: 'json',
                success: function(a) {
            alert("Updated");
            },
                error: function(a) {
            alert("Data is not updated");
        }
    });
        
});
        }else{
            alert("Brand Name is neccessary");
           $('#brand').css("border-color", "#FF0000");
           $('.brnmsg').text("Brand Name is neccessary"); 
        }
        
}

   /* function submit() {
        $(document).ready(function() {
        var Brand = $("#brand").val();
        var Category = $("#category").val();
        var Floor = $("#floor").val();
        var StoreNumber = $("#stnumber").val();
        var Website = $("#website").val();
        var FB = $("#fb").val();
        var Telephone = $("#telephone").val();
        var Email = $("#email").val();
            $.ajax({
            type: "post",
            url: "submit.php",
            data: ({brand: Brand, cat: Category, floor: Floor, stnum: StoreNumber, web: Website, fb: FB, tel: Telephone, mail: Email}),
            success: function(data) {

        }
    });
});

}
*/
    function send() {
    var login = $('#login').val();
    var password = $("#password").val();
        $(document).ready(function() {
            $.ajax({
            type: "POST",
            url: "db/login.php",
            data: ({login: login, password: password}),
            dataType: 'json',
                success: function(a) {
            location.replace("general.html");
            },
                error: function(a) {
                $('#login').css("border-color", "#FF0000");
                $('#password').css("border-color", "#FF0000");
                $('.msg').text("Invalid Brand Name/Password");
        }
    });
});

}

function reload () {
	location.replace("index.html");
}
