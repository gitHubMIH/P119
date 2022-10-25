function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("smokewhite");
    canvas.mouseReleased(classifieCanvas);
sint=window.speechSynthesis;
classifier=ml5.imageClassifier("doodleNet");
}
function limpar() {
    background("smokewhite");
}
function draw() {
    strokeWeight(5);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifieCanvas() {
    classifier.classify(canvas, gotResults);
}
function gotResults(error, results) {
    if (error){
    console.error(error);
}
else {
    console.log(results);

    document.getElementById("label").innerHTML="nome: "+ results[0].label;
    document.getElementById("precisao").innerHTML="precisao: "+ Math.round (results[0].confidence*100)+"%";
}
}