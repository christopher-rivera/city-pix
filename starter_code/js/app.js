// wait for DOM elements to load 
$(document).ready(function(){
    // prevent submit button from reloading page
    $('#submit-btn').click(function(){
        event.preventDefault();
        // take value of #city-type input and make lowercase
        var city = $('#city-type').val();
        $('#city-type').val('');
        city = city.toLowerCase().trim();
        // if user types New York, New York City or NYC change body to nyc
        if(city == 'new york city' || city == 'nyc' || city == 'new york'){
            $('body').attr('class','nyc');
        }
        // if user types San Francisco, SF or Bay Area change body to sf
        else if(city == 'san francisco' || city == 'sf' || city == 'bay area'){
            $('body').attr('class','sf');
        }
        // if user types Los Angeles, LA or LAX change body to la
        else if(city == 'los angeles' || city == 'la' || city == 'lax'){
            $('body').attr('class','la');
        }
        // if user types Austin or ATX change body to austin
        else if(city == 'austin' || city == 'atx'){
            $('body').attr('class','austin');
        }
        // if user types Sydney or SYD change body to sydney
        else if(city == 'sydney' || city == 'syd'){
            $('body').attr('class','sydney');
        }
    });
});