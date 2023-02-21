const salida = document.querySelector('#salida'); // Texto que muestra el estado de grabacion
const microfono = document.querySelector('#microfono'); // boton para activar la grabacion
// microfono.classList.add('micro');


 microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {

    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // start recognition
    recognition.start();


    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.innerHTML = "Escuchando...";
    };
    
    recognition.onspeechend = function() {
        salida.innerHTML = "Resultados:";
        recognition.stop();
    };


    recognition.onresult = function(e) { 
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];
        const cofidenceNum = parseInt(confidence * 100); // Deja 2 lugares despues de la coma y conviere a numero

        const speech = document.createElement('P');
        speech.innerHTML = `Grabado: ${transcript}`;

        const confianza = document.createElement('P');
        confianza.innerHTML = `Exactitud: ${cofidenceNum} %`;

        salida.appendChild(speech);
        salida.append(confianza);

        
    }
}