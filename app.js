class SpeechRecognitionAPI{
    constructor(options){
        const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechApi =  new SpeechToText();
        this.options.output ? options.options : document.createElement("div");
        this.speechApi.continous = true;
        this.speechApi.interinResult = false;
        this.speechApi.onresult = (event) => {
            var resultIndex = event.resultIndex;
            var transcrip = event[resultIndex][0].transcript;
            this.output.textContent = transcript;

        }
    }
    init(){
        this.speechApi.start();
    }
    stop(){
        this.speechApi.stop();
    }
}
window.onload = function (){
    var speech = new SpeechRecognitionAPI({
        output:document.querySelector(".output");
    })
    document.querySelector(".btn-start").addEventListener("click", () =>{
        speech.init();

    })
    document.querySelector(".btn-end").addEventListener("click", () => {
        speech.stop();
    })
}