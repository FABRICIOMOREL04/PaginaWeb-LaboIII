var x = document.getElementById("menu_bar");
var y = document.getElementById("icono");
        function myFunction() {

        if (x.className === "" )  {
            x.className += " responsive";
        } else {
            x.className = "";
        }

        if (y.className === "" )  {
            y.className += " click";
        } else {
            y.className = "";
        }
        
        }

        function ejecutarSiEsMenor768() {
            if (window.innerWidth > 768) {
                x.className = "";
            }
        }

        window.addEventListener('resize', ejecutarSiEsMenor768);