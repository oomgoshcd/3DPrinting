// author     : Charles Fico
// Format     : OpenJSCAD
// tags       : Electronics,screwdriver
// file       : ThomasOnTheGoTrackTestArcSkinny.jscad

function getParameterDefinitions() {
  return [
    { name: 'trackLength', type: 'int', initial: 0, caption: "Length of the track:" },
    ];
}

function trackSegment(trackLength){
      return difference(
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
        translate([0,22.75,6])
        )
}

function main(params) {
    var trackLength = params.trackLength+1;
    return trackSegment(trackLength)   
        
    //Track Tester
    /*
    ,cube([2,2,1.25]).
    translate([14,20.75,6]),
    */
}
