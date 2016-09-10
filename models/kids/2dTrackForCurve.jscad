// title      : Chain Hull
// author     : Rene K. Mueller
// license    : MIT License
// date       : 2013/04/18
// description: Whosa whatsis suggested "Chain Hull" as described at 
//    https://plus.google.com/u/0/105535247347788377245/posts/aZGXKFX1ACN
// file       : hull.jscad

function track(){
    return union(
        square([25,6]),
        square([2,8]).translate([-2,0,0]),
        square([2,8]).translate([25,0,0]),
        square([2,7]).translate([7,0,0]),
        square([2,7]).translate([14.5,0,0]))
}

function main() {
    //return rotate_extrude({fn:5},translate([2,0,0]),track())
    return track()
   /*
    rotate_extrude( 
       translate([4,0,0], 
       circle({r: 1, fn: 30, center: true}) ) )
    */
    
}

