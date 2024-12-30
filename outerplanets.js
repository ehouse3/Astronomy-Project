/*  Euan House, Astro 5, esh5267@psui.edu. November 18th
*   This is the script file to change the locations of the OUTER planets.
*   It will declare the html elements as variables. Then it will change the elements in the html to those new variables each timestep.
*   Each timestep simulates one earth day
*   I used simple trig functions to determine the new locations of the planets by increasing the degrees and calculating from there
*/
var center_outer = 960;
//earth variables
var earth_outer = document.getElementById('earth');
var earth_orbit_outer = document.getElementById('earth_orbit');
var earth_degrees_outer = 1 * Math.PI;
var earth_radius_outer = Number(earth_orbit_outer.getAttribute("r"));
var earth_cur_cx_outer = 0;
var earth_cur_cy_outer = 0;
var earth_per_of_rev_outer = 365; //period of revolution
//neptune variables
var neptune = document.getElementById('neptune');
var neptune_orbit = document.getElementById('neptune_orbit');
var neptune_degrees = 1.5 * Math.PI;
var neptune_radius = Number(neptune_orbit.getAttribute("r"));
var neptune_cur_cx = 0;
var neptune_cur_cy = 0;
var neptune_per_of_rev = 60190; //period of revolution
//uranus variables
var uranus = document.getElementById('uranus');
var uranus_orbit = document.getElementById('uranus_orbit');
var uranus_degrees = 1 * Math.PI;
var uranus_radius = Number(uranus_orbit.getAttribute("r"));
var uranus_cur_cx = 0;
var uranus_cur_cy = 0;
var uranus_per_of_rev = 30687; //period of revolution
//saturn variables
var saturn = document.getElementById('saturn');
var saturn_orbit = document.getElementById('saturn_orbit');
var saturn_degrees = 1.5 * Math.PI;
var saturn_radius = Number(saturn_orbit.getAttribute("r"));
var saturn_cur_cx = 0;
var saturn_cur_cy = 0;
var saturn_per_of_rev = 10756; //period of revolution
//jupiter variables
var jupiter = document.getElementById('jupiter');
var jupiter_orbit = document.getElementById('jupiter_orbit');
var jupiter_degrees = 1.5 * Math.PI;
var jupiter_radius = Number(jupiter_orbit.getAttribute("r"));
var jupiter_cur_cx = 0;
var jupiter_cur_cy = 0;
var jupiter_per_of_rev = 4330;
//randomly determine starting location
jupiter_degrees = Math.random() * 2 * Math.PI;
saturn_degrees = Math.random() * 2 * Math.PI;
uranus_degrees = Math.random() * 2 * Math.PI;
neptune_degrees = Math.random() * 2 * Math.PI;
simulation_timestep_outer();
var simulation_running = false;
var interval;
function toggle_simulation_outer() {
    if (simulation_running) {
        clearInterval(interval);
        simulation_running = false;
    }
    else {
        interval = setInterval(simulation_timestep_outer, 18);
        simulation_running = true;
    }
}
//total time passed html element
var total_days_outer = 0;
var time_elem_outer = document.getElementById('time');
//timestep function to simulate one uranus day passing for all planets
function simulation_timestep_outer() {
    total_days_outer = total_days_outer + 1;
    if (time_elem_outer) {
        time_elem_outer.innerHTML = "elapsed time:" + total_days_outer + " Earth days"; //update elapsed time
    }
    //earth
    earth_degrees_outer += (1 / earth_per_of_rev_outer) * 2 * Math.PI; //increase by 1 earth day
    earth_cur_cy_outer = Math.sin(earth_degrees_outer) * earth_radius_outer + center_outer; //find new location
    earth_cur_cx_outer = Math.cos(earth_degrees_outer) * earth_radius_outer + center_outer;
    earth_outer.setAttribute("cx", String(earth_cur_cx_outer)); //set html
    earth_outer.setAttribute("cy", String(earth_cur_cy_outer));
    //uranus
    uranus_degrees += (1 / uranus_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    uranus_cur_cy = Math.sin(uranus_degrees) * uranus_radius + center_outer; //find new location
    uranus_cur_cx = Math.cos(uranus_degrees) * uranus_radius + center_outer;
    uranus.setAttribute("cx", String(uranus_cur_cx)); //set html
    uranus.setAttribute("cy", String(uranus_cur_cy));
    //neptune
    neptune_degrees += (1 / neptune_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    neptune_cur_cx = Math.cos(neptune_degrees) * neptune_radius + center_outer; //find new location
    neptune_cur_cy = Math.sin(neptune_degrees) * neptune_radius + center_outer;
    neptune.setAttribute("cx", String(neptune_cur_cx)); //set html
    neptune.setAttribute("cy", String(neptune_cur_cy));
    //saturn
    saturn_degrees += (1 / saturn_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    saturn_cur_cx = Math.cos(saturn_degrees) * saturn_radius + center_outer; //find new location
    saturn_cur_cy = Math.sin(saturn_degrees) * saturn_radius + center_outer;
    saturn.setAttribute("cx", String(saturn_cur_cx)); //set html
    saturn.setAttribute("cy", String(saturn_cur_cy));
    //jupiter
    jupiter_degrees += (1 / jupiter_per_of_rev) * 2 * Math.PI; //increase by 1 earth day
    jupiter_cur_cx = Math.cos(jupiter_degrees) * jupiter_radius + center_outer; //find new location
    jupiter_cur_cy = Math.sin(jupiter_degrees) * jupiter_radius + center_outer;
    jupiter.setAttribute("cx", String(jupiter_cur_cx)); //set html
    jupiter.setAttribute("cy", String(jupiter_cur_cy));
}
