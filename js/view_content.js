function viewContent(option) {

    cleanContent();
    document.getElementById(option).classList.toggle('hide');
}

function cleanContent() {

    var array = ['inicio', 'importancia', 'conceptos', 'consecuencia', 'multimedia', 'referencias', 'colaboradores']

    for (var i in array) {

        document.getElementById(array[i]).classList.add('hide');

    }
}

function llamarArchivo(option) {
    /*cleanContent();*/

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("section").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "importancia.html", true);
    xhttp.send();

}
