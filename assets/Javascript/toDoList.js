particlesJS("particles-js",
{
    "particles": {
        "number": {
            "value": 24,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}
)

// Añadir el efecto de tachado a los items completados
$("ul").on("click", "li", function () {
    $(this).toggleClass("completado")
});
// Borrar los items completados
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        arreglo.push(this);//Guarda el elemento en el array
        $(this).remove();
    });
    event.stopPropagation();
});


// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function (event) {
    //filtrar para que sólo se active cuando aprietan Enter
    if (event.key == "Enter") {
        if ($(this).val() == "" || $(this).val() == " "){
            alert("porfavor, agrega una tarea")
        }else{
        $("ul").append("<li><span><i class='fa fa-trash-o 'aria - hidden = 'true'></i></span>" + $(this).val() + "</li>");
        // se borra el contenido del input
        $(this).val("");
        event.stopPropagation();
    }
}
});

//cambia iconos + , -
$("#hOne").click(function () {
    $("input").slideToggle(200)
    if (document.querySelector("i").className == "fa fa-minus"){
    document.querySelector("i").className="fa fa-plus";
    } else if (document.querySelector("i").className == "fa fa-plus") {
        document.querySelector("i").className = "fa fa-minus"; 

    }
})

//devuelve el ultimo elemento eliminado y lo quita del arreglo.
$(".fa-refresh").click(function(){
   arreglo[arreglo.length-1].removeAttribute("style")// quita el display none 
    $("ul").append(arreglo[arreglo.length-1])
    arreglo.pop();
})


var arreglo = new Array();