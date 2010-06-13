/**
 * jQuery GPS Plugin
 *
 * @author Greg Schoen <greg.schoen@gmail.com>
 * @version 0.1
 */

(function($) {
	$.gps = {        
		approximate:function(loc1, loc2, success)
		{
			x = 69.1 * (loc2.latitude - loc1.latitude);
			y = 53.0 * (loc2.longitude - loc1.longitude);

			mi = Math.sqrt(x * x + y * y);
			success(mi);
		},		
		distance:function(loc1, loc2, success)
		{
			mi = (3963 * 3.1415926 * Math.sqrt(
				(loc2.latitude-loc1.latitude) * 
				(loc2.latitude-loc1.latitude) + 
				Math.cos(loc2.latitude/57.29578) * 
				Math.cos(loc1.latitude/57.29578) * 
				(loc2.longitude-loc1.longitude) * 
				(loc2.longitude-loc1.longitude)
			)/180);

			success(mi);
		},
		km2mi:function(km){ return km * 0.621371192; },
		mi2km:function(mi){ return mi * 1.609344; }
	}
})(jQuery);