<?php

foreach ($_FILES as $archivo) {
    print_r($archivo);
    move_uploaded_file($archivo["tmp_name"],$archivo["name"]);
}

//Entrar a XAMPP
//Hacer click en config de apache
//Entrar al archivo php.ini
// buscar las variables 
// upload_max_filesize = 2M
// max_file_uploads = 20
// post_max_size=8M 

?>