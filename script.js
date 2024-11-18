var center = 960;

var earth = document.getElementById('earth');
var earth_orbit = document.getElementById('earth_orbit');
var degrees = 1.5*Math.PI;
const earth_radius = earth_orbit.getAttribute("r");



var simulation_running = false;
var interval;
function toggle_simulation() {
    if(simulation_running) {
        clearInterval(interval);
        simulation_running = false;
    }else{
        interval = setInterval(simulation_timestep, 20);
        simulation_running = true;
    }
}

function simulation_timestep() {

    degrees+=(1/365)*2*Math.PI;
    console.log(degrees);
    var cur_cx = parseFloat(earth.getAttribute("cx"));
    var cur_cy = parseFloat(earth.getAttribute("cy"));
    cur_cy += Math.sin(degrees)*6.9;
    cur_cx += Math.cos(degrees)*6.9;
    earth.setAttribute("cx", cur_cx);
    earth.setAttribute("cy", cur_cy);



}

