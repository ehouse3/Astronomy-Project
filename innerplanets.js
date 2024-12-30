/*  Euan House, Astro 5, esh5267@psui.edu. November 18th
*   This is the script file to change the locations of the INNER planets.
*   It will declare the html elements as variables. Then it will change the elements in the html to those new variables each timestep.
*   Each timestep simulates one earth day
*   I used simple trig functions to determine the new locations of the planets by increasing the degrees and calculating from there
*/
var center_inner = 960;
//earth variables
var earth_inner = document.getElementById('earth');
var earth_orbit_inner = document.getElementById('earth_orbit');
var earth_degrees_inner = 1 * Math.PI;
var earth_radius_inner = Number(earth_orbit_inner.getAttribute("r"));
var earth_cur_cx_inner = 0;
var earth_cur_cy_inner = 0;
var earth_per_of_rev_inner = 365; //period of revolution
//mars variables
var mars = document.getElementById('mars');
var mars_orbit = document.getElementById('mars_orbit');
var mars_degrees = 1.5 * Math.PI;
var mars_radius = Number(mars_orbit.getAttribute("r"));
var mars_cur_cx = 0;
var mars_cur_cy = 0;
var mars_per_of_rev = 687; //period of revolution
//venus variables
var venus = document.getElementById('venus');
var venus_orbit = document.getElementById('venus_orbit');
var venus_degrees = 1.5 * Math.PI;
var venus_radius = Number(venus_orbit.getAttribute("r"));
var venus_cur_cx = 0;
var venus_cur_cy = 0;
var venus_per_of_rev = 225; //period of revolution
//mercury variables
var mercury = document.getElementById('mercury');
var mercury_orbit = document.getElementById('mercury_orbit');
var mercury_degrees = 1.5 * Math.PI;
var mercury_radius = Number(mercury_orbit.getAttribute("r"));
var mercury_cur_cx = 0;
var mercury_cur_cy = 0;
var mercury_per_of_rev = 88; //period of revolution
//randomly determine starting location
mercury_degrees = Math.random() * 2 * Math.PI;
venus_degrees = Math.random() * 2 * Math.PI;
earth_degrees_inner = Math.random() * 2 * Math.PI;
mars_degrees = Math.random() * 2 * Math.PI;
simulation_timestep_inner();
var simulation_running = false;
var interval;
function toggle_simulation_inner() {
    if (simulation_running) {
        clearInterval(interval);
        simulation_running = false;
    }
    else {
        interval = setInterval(simulation_timestep_inner, 25);
        simulation_running = true;
    }
}
//total time passed html element
var total_days_inner = 0;
var time_elem_inner = document.getElementById('time');
//timestep function to simulate one earth day passing for all planets
function simulation_timestep_inner() {
    total_days_inner = total_days_inner + 1;
    if (time_elem_inner) {
        time_elem_inner.innerHTML = "elapsed time:" + total_days_inner + " earth days"; //update elapsed time
    }
    //earth
    earth_degrees_inner += (1 / earth_per_of_rev_inner) * 2 * Math.PI; //increase by 1 earth day
    earth_cur_cy_inner = Math.sin(earth_degrees_inner) * earth_radius_inner + center_inner; //find new location
    earth_cur_cx_inner = Math.cos(earth_degrees_inner) * earth_radius_inner + center_inner;
    earth_inner.setAttribute("cx", String(earth_cur_cx_inner)); //set html
    earth_inner.setAttribute("cy", String(earth_cur_cy_inner));
    //mars
    mars_degrees += (1 / mars_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    mars_cur_cx = Math.cos(mars_degrees) * mars_radius + center_inner;
    mars_cur_cy = Math.sin(mars_degrees) * mars_radius + center_inner;
    mars.setAttribute("cx", String(mars_cur_cx)); //set html
    mars.setAttribute("cy", String(mars_cur_cy));
    //venus
    venus_degrees += (1 / venus_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    venus_cur_cx = Math.cos(venus_degrees) * venus_radius + center_inner; //find new location
    venus_cur_cy = Math.sin(venus_degrees) * venus_radius + center_inner;
    venus.setAttribute("cx", String(venus_cur_cx)); //set html
    venus.setAttribute("cy", String(venus_cur_cy));
    //mercury
    mercury_degrees += (1 / mercury_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    mercury_cur_cx = Math.cos(mercury_degrees) * mercury_radius + center_inner; //find new location
    mercury_cur_cy = Math.sin(mercury_degrees) * mercury_radius + center_inner;
    mercury.setAttribute("cx", String(mercury_cur_cx)); //set html
    mercury.setAttribute("cy", String(mercury_cur_cy));
}
