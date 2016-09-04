// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : ThomasOnTheGoTrackTestMale.jscad

function main() {
    return union(
    //Track
      difference(
        cube([15,29,9.5]).
        translate([0,3.5,0]).
        setColor([0,0,255]),
        //Left Track
        cube([15,11.25,3.5]).
        translate([0,2,6]),
        //Center Track
        cube([15,5.5,3.5]).
        translate([0,15.25,6]),
        //Shorten Center Track
        cube([15,10,3.5]).
        translate([0,13,7.25]),
        //Right Track
        cube([15,11.25,3.5]).
        translate([0,22.75,6]),
        //Female End
        cylinder({d:5, h:6}).
        translate([10.5,18,0]),
        cube([3.5,3.5,6]).
        translate([12,16.25,0])
        ),
    //Track Tester
    
    cube([2,25,1.25]).
    translate([14,5.5,6]),
    
    //Male End
      union(
          cube([2,3.5,6]).
          translate([0,0,0]),
          cylinder({d: 5.25, h: 6}).
          translate([-2,1.75,0])
          ).translate([-2,16.25,0])
   )
}
