var app = angular.module('wybory', []); //tworzymy moduł AJS o nazwie microCMS, drugi parametr to tablica dla opcjonalnych dodatkowych modułów AJS

app.controller('rpc', function ($scope, $http) {  //kontroler rpc używamy go po stronie HTML'a

    $scope.wyslijZapytanie = function () { //utworzenie metody sendRequest w $scope kontrolera rpc

        $scope.method = "kandydaci";

            var request = $http({           
                method: "post",
                url: "http://halibutnie.esy.es/server/server.php",
                data: {
                    /*method: <- widoczne po stronie PHP   $scope.method <- widoczne po stronie HTML/AJS */
                    method: $scope.method    //zmienna method w $scope kontrolera rpc
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Automatycznie request pakowany jest do JSONa */
            /* Odpowiedź jeśli request się powiódł */
            request.success(function (data) {
                $scope.odpowiedz = data; //data zawiera dane zwracane w PHP
            });
    }

});
