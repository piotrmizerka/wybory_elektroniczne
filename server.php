<?php  
 header("Access-Control-Allow-Origin: *"); //enable CORS
    $postdata = file_get_contents("php://input"); //dane przychodzące z metodyPOST
    $request = json_decode($postdata); // dekodowanie otrzymanego JSONa
    @$method = $request->method; //przypisanie zmiennych
    //echo "Your method: " . $method . "  ### " . "Your id: " . $id; // output przeznaczony dla JS'a

    switch ($method) {
    	case "kandydaci":
            try{   
                $db = new PDO('mysql:host=mysql.hostinger.pl;dbname=u862439804_wybor;encoding=utf8', 'u862439804_admin', 'okonokon1');
                $array = $db->query("SELECT * FROM Kandydat")->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($array);
            }
                catch (PDOException $e){
                 print "Błąd połączenia z bazą!: " . $e->getMessage() . "<br/>";
                   die();
            }
            break;


    }

?>
