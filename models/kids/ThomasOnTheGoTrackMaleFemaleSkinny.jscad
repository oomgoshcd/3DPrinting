// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : ThomasOnTheGoTrackTestMaleFemaleSkinny.jscad

function getParameterDefinitions() {
  return [
    { name: 'trackLength', type: 'int', initial: 10, caption: "Length of the track:" },
    ];
}

function femaleEnd(trackLength){
    //Female End
    return union(
        cylinder({d:5.5, h:10}).
        translate([trackLength-4,18,0]),
        cube([3.5,3.5,6]).
        translate([trackLength-3,16.25,0]),
        //Female relief left
        cube([10,1.75,6]).
        translate([trackLength-10,11.5,0]),
        //Female relief right
        cube([10,1.75,6]).
        translate([trackLength-10,22.75,0]),
        //Inner track removal for female connector (provides more flex)
        cube([12,12,3]).
        translate([trackLength-10,12,6])
        )
}

function maleEnd(){
    return union(
      cube([2,3.5,6]).
      translate([0,0,0]),
      cylinder({d: 5.25, h: 6}).
      translate([-2,1.75,0])
      ).translate([-2,16.25,0])
}

function main(params) {
    var trackLength = params.trackLength + 15;
    return union(
    //Track
      difference(
        cube([trackLength,29,9.5]).
        translate([0,3.5,0]).
        setColor([0,0,255]),
        //Left Track
        cube([trackLength,7.75,3.5]).
        translate([0,5.5,6]),
        //Center Track
        cube([trackLength,5.5,3.5]).
        translate([0,15.25,6]),
        //Shorten Center Track
        cube([trackLength,10,3.5]).
        translate([0,13,7.25]),
        //Right Track
        cube([trackLength,7.75,3.5]).
        translate([0,22.75,6]),
        femaleEnd(trackLength)
        )
        ,maleEnd()
        
    //Track Tester
    /*
    cube([2,2,1.25]).
    translate([14,20.75,6]),
    */
   )
}
