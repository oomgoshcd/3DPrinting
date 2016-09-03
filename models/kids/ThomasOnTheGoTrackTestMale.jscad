// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : POT adjuster

function main() {
    return union(
    //Track
      difference(
        cube([15,36,9.5]).
        translate([0,0,0]).
        setColor([0,0,255]),
        //Left Track
        cube([15,11.25,3.5]).
        translate([0,2,6]),
        //Center Track
        cube([15,5.5,3.5]).
        translate([0,15.25,6]),
        //Right Track
        cube([15,11.25,3.5]).
        translate([0,22.25,6])
        ),
    //Male End
      union(
          cube([2,3.5,6]).
          translate([-2,16,0]),
          
          )
   )
}
