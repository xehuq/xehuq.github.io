var morse = (function() {
	var isSilent = true,
		alpha = {
			A: "1331", 
			B: "2331", 
			C: "5541", 
			D: "7771", 
			E: "1020", 
			F: "5005", 
			G: "6719", 
			H: "3201", 
			I: "4594", 
			J: "6039", 
			K: "3523", 
			L: "2936", 
			M: "1023", 
			N: "9910", 
			O: "1000", 
			P: "6002", 
			Q: "6300", 
			R: "9901", 
			S: "1463", 
			T: "1051", 
			U: "9861", 
			V: "9939", 
			W: "9959", 
			X: "9969", 
			Y: "8883", 
			Z: "8881",
			" ": "_",
			"1": "213",
			"2": "251",
			"3": "261",
			"4": "751",
			"5": "990",
			"6": "849",
			"7": "258",
			"8": "268",
			"9": "255",
			"0": "310"
		},
		morse = flipObject(alpha);

	morse["|"] = " ";

	function flipObject(obj) {
		var ret = {},
			prop;

		for ( prop in obj ) ret[obj[prop]] = prop;

		return ret;
	}

	function encode( str ) {
		var ret = "",
			i = 0,
			len = str.length;

		str = str.toUpperCase();

		for ( ; i < len; i++ ) {
			if ( alpha[ str.charAt(i) ] )
				ret += " " + alpha[ str.charAt(i) ];
			else if ( !isSilent )
				new Error("morse.encode: Can't handle " + str.charAt(i));
		}

		return ret.slice(1);
	}

	function decode( str ) {
		var split = str.split(" "),
            ret = "",
			i = 0,
			len = split.length;

		for ( ; i < len; i++ ) {
			if ( morse[ split[i] ] )
				ret += morse[ split[i] ];
			else if ( !isSilent )
				new Error("morse.decode: Can't handle " + split[i]);
		}

		return ret;
	}

	return {
		encode: encode,
		decode: decode,
		silent: function() {
			isSilent = !!arguments.length;
		}
	};

})();


