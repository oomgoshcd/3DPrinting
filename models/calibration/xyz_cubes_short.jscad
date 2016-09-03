// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : POT adjuster

function main() {
   return union(
      cube([3,3,3]).
        translate([0,0,0]),
      cube([3,3,3]).
        translate([3,0,0]),
      cube([3,3,3]).
        translate([0,3,0]),
      cube([3,3,3]).
        translate([0,0,3])
   )
}
