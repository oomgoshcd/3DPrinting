// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : POT adjuster

function main() {
   return union(
      difference(
         cylinder({h:10,d:5}),
         cylinder({h:5,d:2}).translate([0,0,5])
      ),
      //Screwdriver blade 1mm below the surface 0.4mm thick
      cube([4,0.4,9])
      //Center the blade in the cylinder
      .translate([-2,-0.2,0])
   )
}
