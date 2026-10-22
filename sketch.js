function setup() {
  createCanvas(800, 784);
  pixelDensity(1);
  frameRate(12);
}

function draw() {
  noStroke();

  let espV = 11;  
  let espH = 16;  
  let espH3 = 15;

  let xLinhaAmarelo = 76;  
  let xLinhaCentral = 363; 
  let xLinhaAzul    = 610; 

  let yLinhaH1 = 310;
  let yLinhaH2 = 502;   
  let yLinhaH3 = 740;     

  let xDirAmarelo = xLinhaAmarelo + espV; 
  let xDirCentral = xLinhaCentral + espV; 
  let xDirAzul    = xLinhaAzul + espV;    

  let yBaixoH1 = yLinhaH1 + espH;         
  let yBaixoH2 = yLinhaH2 + espH;         
  let yBaixoH3 = yLinhaH3 + espH3;        

  fill(241, 241, 244);
  rect(xDirCentral, 0, width - xDirCentral, yLinhaH1);

  fill(237, 238, 239);
  rect(0, yBaixoH1, xLinhaCentral, yLinhaH2 - yBaixoH1);

  fill(239, 239, 242);
  rect(xDirCentral, yBaixoH1, width - xDirCentral, yLinhaH2 - yBaixoH1);

  fill(218, 217, 222);
  rect(xDirAmarelo, yBaixoH2, xLinhaCentral - xDirAmarelo, height - yBaixoH2);

  fill(214, 211, 218);
  rect(xDirCentral, yBaixoH3, xLinhaAzul - xDirCentral, height - yBaixoH3);

  fill(222, 218, 225);
  rect(xDirAzul, yBaixoH2, width - xDirAzul, height - yBaixoH2);

  desenharBlocoVermelho(0, 0, xLinhaCentral, yLinhaH1);

  fill(253, 230, 2);
  rect(0, yBaixoH2, xLinhaAmarelo, height - yBaixoH2);

  desenharBlocoAzul(xDirCentral, yBaixoH2, xLinhaAzul - xDirCentral, yLinhaH3 - yBaixoH2);

  desenharLinhaPreta(xLinhaCentral, 0, espV, height, true);

  fill(65, 75, 82, 95);
  rect(xLinhaCentral + 1, 70, espV - 2, 23);

  desenharLinhaPreta(xLinhaAmarelo, yBaixoH2, espV, height - yBaixoH2, true);

  desenharLinhaPreta(xLinhaAzul, yBaixoH2, espV, height - yBaixoH2, true);

  desenharLinhaPreta(0, yLinhaH1, width, espH, false);

  desenharLinhaPreta(0, yLinhaH2, width, espH, false);

  desenharLinhaPreta(xDirCentral, yLinhaH3 + random(-1.5, 1.5), xLinhaAzul - xDirCentral, espH3, false);
}

function desenharBlocoVermelho(x, y, w, h) {
  for (let py = y; py < y + h; py++) {
    let r = 246;
    let g = map(py, 0, h, 28, 17);
    let b = 2;

    if (py > 46 && py < 85) {
      g += 5;
      b += 2;
    }
    stroke(r, g, b);
    line(x, py, x + w, py);
  }
  noStroke();
}

function desenharBlocoAzul(x, y, w, h) {
  for (let py = y; py < y + h; py++) {
    let n = noise(py * 0.05) * 6;
    stroke(26 + n, 31 + n, 134 + n);
    line(x, py, x + w, py);
  }
  noStroke();
}

function desenharLinhaPreta(x, y, w, h, vertical) {
  noStroke();
  fill(12, 10, 13);
  rect(x, y, w, h);

  fill(18, 12, 14, 180);
}