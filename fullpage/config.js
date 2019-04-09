var myFullpage = new fullpage('#fullpage', {
    navigation:true,
    recordHistory: false,
    responsiveWidth: 1020,
    // navigationTooltips: ['Welcome', 'Does it matter?', 'Why use it?', 'Get it!'],
    licenseKey: '3B561948-C2C24009-99DF4756-B4A83707',

    onLeave: function(origin, destination, direction){

    if(window.window.innerWidth >= 1020){

        var leavingSlide = this;
        var extendedDelay = 0;
        // needed when going from 0-2, 0-3, 3-0, 3-1

        if(origin.index == 0 && destination.index == 2){
            extendedDelay = 200;
        }

        else if(origin.index == 0 && destination.index == 3){
            extendedDelay = 250;
        }

        else if(origin.index == 3 && destination.index == 0){
            extendedDelay = 250;
        } else {
            extendedDelay = 0;
        }


        // slide 0 out
        if(origin.index == 0){
                document.getElementById('section0').classList.add('alphaOut');
                document.getElementById('arrow').classList.add('alphaOut');
        }

        // slide 0 in
        if(destination.index == 0){
            setTimeout(function() {
                document.getElementById('section0').classList.remove('alphaOut');
                document.getElementById('arrow').classList.remove('alphaOut');
            }, extendedDelay);

        }

        // slide 1 out
        if(origin.index == 1){
            document.getElementById('section1').classList.add('alphaOut');
            setTimeout(function() {
            document.getElementById('text-container').classList.remove('moveUp');
            }, 300);
        }

        // slide 1 in
        if(destination.index == 1){
            setTimeout(function() {
                document.getElementById('text-container').classList.add('moveUp');
                document.getElementById('section1').classList.remove('alphaOut');
            }, extendedDelay);
        }


        // slide 2 out
        if(origin.index == 2){
            document.getElementById('section2').classList.add('alphaOut');
            setTimeout(function() {
                document.getElementById('reason0').classList.remove('moveUp');
                document.getElementById('reason1').classList.remove('moveUp');
                document.getElementById('reason2').classList.remove('moveUp'); 
            }, 300);
        }

        // slide 2 in direction down
        if(destination.index == 2 && direction == 'down'){

            setTimeout(function() {
                document.getElementById('section2').classList.remove('alphaOut');
                document.getElementById('reason0').classList.add('moveUp');
                document.getElementById('reason1').classList.add('moveUp');
                document.getElementById('reason2').classList.add('moveUp'); 
            }, extendedDelay);

            document.getElementById('reason0').style.transition = '';
            document.getElementById('reason1').style.transition = '';
            document.getElementById('reason2').style.transition = '';                
   
        }

        // slide 2 in direction up
        if(destination.index == 2 && direction == 'up'){
            document.getElementById('section2').classList.remove('alphaOut');
            document.getElementById('reason0').classList.add('moveUp');
            document.getElementById('reason1').classList.add('moveUp');
            document.getElementById('reason2').classList.add('moveUp');

            document.getElementById('reason0').style.transition = 'none';
            document.getElementById('reason1').style.transition = 'none';
            document.getElementById('reason2').style.transition = 'none';                
        }


        // slide 3 out
        if(origin.index == 3){
            document.getElementById('left-screen').classList.remove('moveLeft');
            document.getElementById('right-screen').classList.remove('moveRight');
        }

        // slide 3 in
        if(destination.index == 3){
            setTimeout(function() {
                document.getElementById('left-screen').classList.add('moveLeft');
                document.getElementById('right-screen').classList.add('moveRight');
                document.getElementById('section3').classList.remove('alphaOut');
            }, extendedDelay);
        }

    }

    },

    afterResponsive: function(isResponsive){

    }


});

//methods
fullpage_api.setAllowScrolling(true);



// if(origin.index == 0 && direction =='down'){
//             // This goes from slide 0 to 1 -- exhaustive

//             if (arrowClicked == false){
//                 document.getElementById('arrow').classList.add('alphaOut');
//             }
//             document.getElementById('section0').classList.add('alphaOut');
//             document.getElementById('text-container').classList.add('moveUp');
//         }

//         else if(origin.index == 1 && direction =='down'){
//             // This goes from slide 1 to 2 + needs to also go from from 0 to 2
//             document.getElementById('section1').classList.add('alphaOut');

//             document.getElementById('reason0').classList.add('moveUp');
//             document.getElementById('reason1').classList.add('moveUp');
//             document.getElementById('reason2').classList.add('moveUp');                
//         }

//         else if(origin.index == 2 && direction =='down'){
//             // This goes from slide 2 to 3 + needs to also go from 0 to 3 and from 1 to 3
//             document.getElementById('section2').classList.add('alphaOut');

//             document.getElementById('left-screen').classList.add('moveLeft');
//             document.getElementById('right-screen').classList.add('moveRight');
//             document.getElementById('arrow').classList.add('alphaOut');
//         }

//         else if(origin.index == 3 && direction == 'up'){
//             // This goes from slide 3 to 2 + also needs to go from 3 to 1 and 3 to 0
//             document.getElementById('section2').classList.remove('alphaOut');

//             document.getElementById('left-screen').classList.remove('moveLeft');
//             document.getElementById('right-screen').classList.remove('moveRight');

//             if (arrowClicked == true){
//                 document.getElementById('arrow').classList.remove('alphaOut');
//             }
//         }

//         else if(origin.index == 2 && direction == 'up'){
//             // This goes from slide 2 to 1 + also needs to go from 2 to 0
//             document.getElementById('section1').classList.remove('alphaOut');
            
//             setTimeout(function() {
//                 document.getElementById('reason0').classList.remove('moveUp');
//                 document.getElementById('reason1').classList.remove('moveUp');
//                 document.getElementById('reason2').classList.remove('moveUp'); 
//             }, 300);
//         }

//         else if(origin.index == 1 && direction == 'up'){
//             // This goes from slide 1 to 0 -- exhaustive

//             if (arrowClicked == false){
//                 document.getElementById('arrow').classList.remove('alphaOut');
//             }

//             document.getElementById('section0').classList.remove('alphaOut');
//             document.getElementById('text-container').classList.remove('moveUp');
//         }