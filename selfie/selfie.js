function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);

strokeWeight(1); // Default

fill(237, 209, 187);//skin color
ellipse(300, 200, 200, 225); // head

strokeWeight(4); // Default

fill(255,255,255,150); // lens color
stroke (171, 3, 3);
rect(235, 160, 50, 40, 5, 5, 20, 20 ); // left lens
stroke(171, 3, 3);
rect(320, 160, 50, 40, 5, 5, 20, 20 ); // right lens

strokeWeight(1);
stroke(0, 0, 0);

fill(255,255,255);

ellipse(264, 180, 30,20) ;// left eye
ellipse(345, 180, 30,20); // right eye

fill(112, 75, 47);
ellipse(264, 180, 20, 20);// left iris
ellipse(345, 180, 20, 20); // right iris

rect(235, 150, 40, 10); // left eyebrow
rect(330, 150, 40, 10); // right eyebrow

fill(0, 0, 0); 
ellipse(264, 180, 7, 7);// left pupil
ellipse(345, 180, 7, 7); //right pupil

}
