/*  Euan House, Astro 5, esh5267@psui.edu. November 18th
*   This is the script file to change the locations of the INNER planets.
*   It will declare the html elements as variables. Then it will change the elements in the html to those new variables each timestep.
*   Each timestep simulates one earth day
*   I used simple trig functions to determine the new locations of the planets by increasing the degrees and calculating from there
*/


var center = 960;

//earth variables
var earth = document.getElementById('earth');
var earth_orbit = document.getElementById('earth_orbit');
var earth_degrees = 1*Math.PI;
const earth_radius = parseFloat(earth_orbit.getAttribute("r"));
var earth_cur_cx = 0;
var earth_cur_cy = 0;
const earth_per_of_rev = 365; //period of revolution


//mars variables
var mars = document.getElementById('mars');
var mars_orbit = document.getElementById('mars_orbit');
var mars_degrees = 1.5*Math.PI;
const mars_radius = parseFloat(mars_orbit.getAttribute("r"));
var mars_cur_cx = 0;
var mars_cur_cy = 0; 
const mars_per_of_rev = 687; //period of revolution

//venus variables
var venus = document.getElementById('venus');
var venus_oribt = document.getElementById('venus_orbit');
var venus_degrees = 1.5*Math.PI;
const venus_radius = parseFloat(venus_orbit.getAttribute("r"));
var venus_cur_cx = 0;
var venus_cur_cy = 0; 
const venus_per_of_rev = 225; //period of revolution

//mercury variables
var mercury = document.getElementById('mercury');
var mercury_orbit = document.getElementById('mercury_orbit');
var mercury_degrees = 1.5*Math.PI;
const mercury_radius = parseFloat(mercury_orbit.getAttribute("r"));
var mercury_cur_cx = 0;
var mercury_cur_cy = 0; 
const mercury_per_of_rev = 88; //period of revolution

//randomly determine starting location
mercury_degrees = Math.random() * 2*Math.PI;
venus_degrees = Math.random() * 2*Math.PI;
earth_degrees = Math.random() * 2*Math.PI;
mars_degrees = Math.random() * 2*Math.PI;
simulation_timestep();


var simulation_running = false;
var interval;
function toggle_simulation() { //turn sim off or on
    if(simulation_running) {
        clearInterval(interval);
        simulation_running = false;
    }else{
        interval = setInterval(simulation_timestep, 25);
        simulation_running = true;
    }
}

//total time passed html element
var total_days = 0;
var time_elem = document.getElementById('time');

//timestep function to simulate one earth day passing for all planets
function simulation_timestep() {
    total_days = total_days + 1;
    if(time_elem){
        time_elem.innerHTML = "elapsed time:" + total_days + " earth days"; //update elapsed time
    }
    

    //earth
    earth_degrees+=(1/earth_per_of_rev)*2*Math.PI; //increase by 1 earth day

    earth_cur_cy = Math.sin(earth_degrees)*earth_radius + center; //find new location
    earth_cur_cx = Math.cos(earth_degrees)*earth_radius + center;

    earth.setAttribute("cx", earth_cur_cx); //set html
    earth.setAttribute("cy", earth_cur_cy);

    //mars
    mars_degrees+=(1/mars_per_of_rev)*2*Math.PI; //increase by 1 earth day

    mars_cur_cx = Math.cos(mars_degrees)*mars_radius + center;
    mars_cur_cy = Math.sin(mars_degrees)*mars_radius + center;

    mars.setAttribute("cx", mars_cur_cx); //set html
    mars.setAttribute("cy", mars_cur_cy); 

    //venus
    venus_degrees+=(1/venus_per_of_rev)*2*Math.PI; //increase by 1 earth day

    venus_cur_cx = Math.cos(venus_degrees)*venus_radius + center; //find new location
    venus_cur_cy = Math.sin(venus_degrees)*venus_radius + center;

    venus.setAttribute("cx", venus_cur_cx); //set html
    venus.setAttribute("cy", venus_cur_cy);

    //mercury
    mercury_degrees+=(1/mercury_per_of_rev)*2*Math.PI; //increase by 1 earth day

    mercury_cur_cx = Math.cos(mercury_degrees)*mercury_radius + center; //find new location
    mercury_cur_cy = Math.sin(mercury_degrees)*mercury_radius + center;
    
    mercury.setAttribute("cx", mercury_cur_cx); //set html
    mercury.setAttribute("cy", mercury_cur_cy);

}


