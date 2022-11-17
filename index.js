function shout(string) {
    return string.toUpperCase(); 
}


function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}
logShout("hello");

function logWhisper(string) {
    console.log(whisper(string));
}
logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
    if string = whisper(string) {
        console.log("I can\'t hear you!");
    } else if string = shout(string) {
        console.log.toUpperCase("Yes indeed!");
    } else if string = "Let\'s have dinner together!" {
        console.log("I would love to!");
    } else {
        console.log('ERROR')
    }
}
sayHiToHeadphonedRoommate(whisper("hello"));