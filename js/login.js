//akun
function login(){
    //var done=0;
    var username=document.getElementById('email').value;
    //username=username.toLowerCase();
    console.log(username);
    var password=document.getElementById('password').value;
    console.log(password);
    // password=password.toLowerCase();
    if(username != "" && password != ""){
        if (username=="ira@gmail.com" && password=="iraganteng") { 
            location.replace('katalog.html'); 
            }
        else{
            var str = "password atau username anda salah!"
            // alert("password atau username anda salah!");
            document.getElementById("pesan").innerHTML = str;
            document.getElementById("pesan").style.backgroundColor = "white";
        } 
    }
    else{
        var str = "password atau username tidak boleh kosong!" 
        //alert("password atau username tidak boleh kosong!");
        document.getElementById("pesan").innerHTML = str;
        document.getElementById("pesan").style.backgroundColor = "white";
    }
    // if (done==0) { alert("Invalid login!"); }
    }
