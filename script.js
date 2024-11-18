var center = 960;

//earth variables
var earth = document.getElementById('earth');
var earth_orbit = document.getElementById('earth_orbit');
var earth_degrees = 1*Math.PI;
const earth_radius = parseFloat(earth_orbit.getAttribute("r"));
var earth_cur_cx = 0;
var earth_cur_cy = 0;
const earth_per_of_rev = 365;


//mars variables
var mars = document.getElementById('mars');
var mars_orbit = document.getElementById('mars_orbit');
var mars_degrees = 1.5*Math.PI;
const mars_radius = parseFloat(mars_orbit.getAttribute("r"));
var mars_cur_cx = 0;
var mars_cur_cy = 0; 
const mars_per_of_rev = 687;

//venus variables
var venus = document.getElementById('venus');
var venus_oribt = document.getElementById('venus_orbit');
var venus_degrees = 1.5*Math.PI;
const venus_radius = parseFloat(venus_orbit.getAttribute("r"));
var venus_cur_cx = 0;
var venus_cur_cy = 0; 
const venus_per_of_rev = 225;

//mercury variables
var mercury = document.getElementById('mercury');
var mercury_orbit = document.getElementById('mercury_orbit');
var mercury_degrees = 1.5*Math.PI;
const mercury_radius = parseFloat(mercury_orbit.getAttribute("r"));
var mercury_cur_cx = 0;
var mercury_cur_cy = 0; 
const mercury_per_of_rev = 88;

mercury_degrees = Math.random() * 2*Math.PI;
venus_degrees = Math.random() * 2*Math.PI;
earth_degrees = Math.random() * 2*Math.PI;
mars_degrees = Math.random() * 2*Math.PI;
simulation_timestep();

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

    //earth
    earth_degrees+=(1/earth_per_of_rev)*2*Math.PI;

    earth_cur_cy = Math.sin(earth_degrees)*earth_radius + center;
    earth_cur_cx = Math.cos(earth_degrees)*earth_radius + center;

    earth.setAttribute("cx", earth_cur_cx);
    earth.setAttribute("cy", earth_cur_cy);

    //mars
    mars_degrees+=(1/mars_per_of_rev)*2*Math.PI;

    mars_cur_cx = Math.cos(mars_degrees)*mars_radius + center;
    mars_cur_cy = Math.sin(mars_degrees)*mars_radius + center;

    mars.setAttribute("cx", mars_cur_cx);
    mars.setAttribute("cy", mars_cur_cy);

    //venus
    venus_degrees+=(1/venus_per_of_rev)*2*Math.PI;

    venus_cur_cx = Math.cos(venus_degrees)*venus_radius + center;
    venus_cur_cy = Math.sin(venus_degrees)*venus_radius + center;

    venus.setAttribute("cx", venus_cur_cx);
    venus.setAttribute("cy", venus_cur_cy);

    //mercury
    mercury_degrees+=(1/mercury_per_of_rev)*2*Math.PI;

    mercury_cur_cx = Math.cos(mercury_degrees)*mercury_radius + center;
    mercury_cur_cy = Math.sin(mercury_degrees)*mercury_radius + center;
    
    mercury.setAttribute("cx", mercury_cur_cx);
    mercury.setAttribute("cy", mercury_cur_cy);

}

