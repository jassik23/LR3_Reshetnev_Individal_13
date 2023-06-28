function CardioidDraw_02(count) {
    const width = 500;
    const height = 400;
    const radius = 40;
    const pointCount = count; // number of points to draw
  
    const svg = d3.select(".curr-graff")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    const angles = d3.range(0, 2 * Math.PI, 2 * Math.PI / pointCount);
  
    const points = angles.map(d => ({
      x: radius * (4 * Math.cos(d) - Math.cos(4 * d)),
      y: radius * (4 * Math.sin(d) - Math.sin(4 * d))
    }));
  
    const dots = svg.selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", d => d.x + width / 2)
      .attr("cy", d => d.y + height / 2)
      .attr("r", 9)
      .attr("fill", "rgba(117, 250, 0, 0.8)");
}

function GetIntForInput(Elem) {
    let inp = Elem.value;
    //console.log(inp);
    inp = parseInt(inp);
    //console.log(inp);
    if (!(isNaN(parseInt(inp)) || !isFinite(inp))){
        console.log(inp);
        if(inp >= 10 && inp <= 300) {
            return inp;
        } else return 0;
    } else return 0;
}


let graf_container = document.getElementById('graf-container');
let buttDraw = document.getElementById('butt-02');
let textError = document.getElementById('p-1-1');
textError.style.display = 'none';

let inpEl = document.querySelector("div.r-block input");

// Выполняется при нажатии на кнопку "Построить" в блоке графика
buttDraw.addEventListener('click', () => {

    let count = GetIntForInput(inpEl);

    let mainGraf = document.getElementsByClassName('curr-graff');

    if(count != 0) {
        mainGraf[0].style.display = 'block';
        textError.style.display = 'none';
        mainGraf[0].remove();
        let mainGraf2 = document.createElement("div");
        mainGraf2.className = "curr-graff";
        graf_container.insertBefore(mainGraf2, graf_container.firstChild);
        CardioidDraw_02(count);
    } else {
        mainGraf[0].style.display = 'none';
        textError.style.display = 'block';
    }
});


