$(document).ready(function(){

    $("#opener-register").click(function(){
       
        var email = $("#register-email").val();
        var password = $("#register-password").val();
        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");

        ref.createUser({
           
            email: email,
            password: password
        }, function(error,userData) {
            if (error) {
                alert("incorrect email format/user already exist");
                console.log("Error creating user:", error);

            } else {
                console.log("Successfully created user account :", userData.uid);
                localStorage.setItem("email",email);
                window.location.href = "login.html";
            }

        });
        return false;
    });

    $("#opener-login").click(function(){
    
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");

        ref.authWithPassword({
            
            email: email,
            password: password
        }, function(error,authData) {
            if (error) {
                alert("incorrect email or password");
                console.log("Error login user:", error);

            } else {
                console.log("Successfully login:", authData);
                localStorage.setItem("email",email);
                window.location.href="login.html";
            }

        });
        return false;
    });

    $("#opener-logout").click(function() {

        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");
        ref.unauth();

        window.location.href="danicacademy.html";
        alert("already logged out!");
        return false;
        });
    

 });

$(function(){
var searchString = [

     { value: "Android App Development for Beginners - 1 - Introduction", url: 'https://www.youtube.com/watch?v=QAbQgLGKd3Y&list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl' },
     { value: "Android App Development for Beginners - 2 - Installing Android Studio", url: 'https://www.youtube.com/watch?v=zEsDwzjPJ5c&list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl&index=2' },
     { value: "Android App Development for Beginners - 3 - Setting up Your Project", url: 'https://www.youtube.com/watch?v=r4oIez0sfvY&list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl&index=3' },
     { value: "What is Android Activity & Activity life cycle", url: 'https://www.youtube.com/watch?v=vV7h43Iw5SY' },
     { value: "Swift Programming Tutorial For Beginners", url: 'https://www.youtube.com/watch?v=I0Meyb4ejN4' },
     { value: "Learning Swift Attempt-Creating a Calculator", url: 'https://www.youtube.com/watch?v=DGt1yBxBw9k' },
     { value: "Swift Tutorial - To Do List App", url: 'https://www.youtube.com/watch?v=war0gHL26ns' },
     { value: "How to Make Your First Swift App with Xcode (Hello World)", url: 'https://www.youtube.com/watch?v=qPfvfsx9hb8' },
     { value: "First C Program", url: 'https://www.youtube.com/watch?v=jrZtWjRAcfs' },
     { value: "C Compilation Process", url: 'https://www.youtube.com/watch?v=gUKXew-0L1I' },
     { value: "C Programming Tutorial-Passing Arguments to Functions", url: 'https://www.youtube.com/watch?v=_oyuKw3vBf8' },
     { value: "Basic Data Types In C", url: 'https://www.youtube.com/watch?v=BsdyKqF5udc' },
    ];

    $("#autocomplete-1").autocomplete({
        source: searchString,
        select: function (event, ui) {
            window.location = ui.item.url;
        }

    });
});









