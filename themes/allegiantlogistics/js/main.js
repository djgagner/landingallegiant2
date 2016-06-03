jQuery(document).ready(function($){

	jQuery('body').on('click', 'a[href=#]', function(e){
		e.preventDefault();
	});

	//Animated
	setInterval(function(){
		var tada = jQuery('.why a');
		if( tada.hasClass('tada') ) tada.removeClass('tada animated');
		else tada.addClass('tada animated');
	}, 2500);

	//Google API Places
  var ShipCarFrom = document.querySelector('#ShipCarFrom'),
  ShipCarTo = document.querySelector('#ShipCarTo'),
  options = {
    types: ['address'],
    componentRestrictions: {
      country: 'us'
    }
  }
  autocomplete = new google.maps.places.Autocomplete(ShipCarFrom, options);
  autocomplete = new google.maps.places.Autocomplete(ShipCarTo, options);


  //Automation Car Model Select
  var $SelectMake = jQuery('#SelectMake'),
  $SelectModel = jQuery('#SelectModel');

  jQuery('body').on('change', '#SelectMake', function(e){

    //Set default value for options
    var $model = [],
    $options = '<option value="" selected="">---</option>';

    //Load $model values according to $make selected
    switch( jQuery(this).val() ){
      case 'Acura':
        $model = ["CL", "ILX", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TSX", "Vigor", "ZDX"];
      break;
      case 'Alfa Romeo':
        $model = ["12c", "164", "1900", "2600", "308", "4C", "6c", "8c", "Alfasud", "Alfetta", "Berlina", "Bimotore", "Canguro", "Corsa", "Disco Volante", "Duetto", "G1", "Giulia", "Giulietta", "GP", "Grand Prix", "GTA", "GTV", "Iguana", "Junior Z", "Milano", "Montreal", "Navajo", "P1", "P2", "P3", "Quadrifoglio", "RL", "RM", "Scarabeo", "Spider", "Sports Car", "Sportwagon", "Stradale", "Tipo", "Torpedo"];
      break;
      case 'AMC':
        $model = ["Alliance", "Ambassador", "AMX", "Cherokee", "CJ", "Comanche", "Concord", "Eagle", "Encore", "Grand Wagoneer", "Gremlin", "Hornet", "J10", "J20", "Javelin", "Marlin", "Matador", "Pacer", "Rambler American", "Rebel Machine", "Scrambler", "Spirit", "Sport Wagon", "Wagoneer", "Wrangler"];
      break;
      case 'Aston Martin':
        $model = ["Am Vantage", "Atom", "Bulldog", "DB1", "DB2", "DB3", "DB4", "DB5", "DB6", "DB7", "DB9", "DBS", "DBS Volante", "Lagonda", "Le Mans (1932)", "MK II", "Rapide", "Standard (1932)", "T Type (1927)", "Ulster (1934)", "V12 Vanquish", "V12 Vantage", "V8", "V8 Vantage", "V8 Volante", "Virage", "Zagato"];
      break;
      case 'ATV':
        $model = ["small"];
      break;
      case 'Auburn':
        $model = ["653", "851", "852", "Custom", "Eight", "Model 115", "Model 12-160", "Model 12-160A", "Model 12-161"];
      break;
      case 'Audi':
        $model = ["100", "200", "225", "4000", "50", "5000", "60/D-B Heron", "80", "90", "920", "A3", "A4", "A5", "A6", "A7", "A8", "Allroad Quattro", "Cabriolet", "coupe 100 S", "Front", "GT Coupe", "Q3", "Q5", "Q7", "Quattro", "R8", "RS4", "RS5", "RS6", "RS7", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "TT", "Type P", "Type R", "Type S Zwickau", "Type T Dresden", "UR Quattro", "V8", "Variant"];
      break;
      case 'Austin-Healey':
        $model = ["100", "3000 MK I", "3000 MK II", "3000 MK III", "Nash Healey", "Sports Convertible", "Sprite MK I", "Sprite MK II", "Sprite MK III", "Sprite MK IV", "Sprite MK V", "Tickford Saloon"];
      break;
      case 'Bentley':
        $model = ["3.5 Litre Classic", "4 Litre Classic", "4.25 Litre Classic", "4.5 Litre Classic", "8 Litre Classic", "Arnage", "Azure", "Brooklands", "Continental Flying Spur", "Continental GT", "Continental GTC", "Eight", "Mark V", "Mark VI", "Mulsanne", "R Type", "R Type Continental", "S1 Series Classic", "S2 Series Classic", "S3 Series Classic", "T Series Classic", "Turbo"];
      break;
      case 'BMW':
        $model = ["128", "135", "1M", "2002", "228 Coupe", "24", "3.0", "318", "320", "323", "325", "328", "330", "335", "428", "435", "525", "528", "530", "533", "535", "540", "545", "550", "633", "635", "645", "650", "733", "735", "740", "745", "750", "760", "840", "850", "i3", "i8", "L6", "L7", "M Coupe", "M Roadster", "M235 Coupe", "M3", "M4", "M5", "M6", "X1", "X3", "X5", "X6", "Z3", "Z4", "Z8"];
      break;
      case 'Bricklin':
        $model = ["SV1"];
      break;
      case 'Buick':
        $model = ["Centurion", "Century", "Electra", "Enclave", "Encore", "Estate Wagon", "Gran Sport", "Grand National", "Invicta", "LaCrosse", "LeSabre", "LeSabre classic prior 1980", "Lucerne", "Park Avenue", "Rainier", "Reatta", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Series 100", "Series 30", "Series 40", "Series 50", "Series 60", "Series 70", "Series 700", "Series 75", "Series 80", "Series 90", "Skyhawk", "Skylark", "Somerset", "Special", "Super", "Terraza", "Verano", "Wildcat", "Y-Job"];
      break;
      case 'Cadillac':
        $model = ["Allante", "ATS", "Brougham", "Calais", "Catera", "Cimarron", "Concours", "CTS", "CTS-V", "DeVille", "DeVille classic prior 1985", "DTS", "Eldorado", "Eldorado classic prior 1985", "ELR", "Escalade", "Escalade ESV", "Escalade EXT", "Fleetwood", "Fleetwood classic prior 1985", "Fleetwood Sixty Special", "Hearse", "Sedan", "Series 300", "Series 62", "Seville", "Seville classic prior 1985", "Sixty Special", "SRX", "STS", "XLR", "XTS"];
      break;
      case 'Chevy':
        $model = ["1/2 Ton Pickups", "210", "Astro Cargo", "Astro Van", "Avalanche", "Aveo", "Bel Air", "Beretta", "Biscayne", "Blazer", "C/K 1500", "C/K 2500", "C/K 3500 SRW", "C10/K10", "C20/K20", "C30/K30", "Camaro", "Camaro classic prior 1980", "Caprice", "Caprice classic prior 1980", "Captiva", "Cavalier", "Celebrity", "Chevelle", "Chevette", "Cheyenne", "Citation", "City Express", "Cobalt", "Colorado 2dr Short Bed", "Colorado 4dr Short Bed", "Corsica", "Corvair", "Corvette", "Corvette classic prior 1980", "Cruze", "Del Ray", "El Camino", "Equinox", "Express 1500 - 8 Passenger", "Express 2500 - 12 Passenger", "Express 3500 - 15 Pass Extended", "Express 3500 - 15 Passenger", "Express Cargo 1500", "Express Cargo 2500", "Express Cargo 3500", "Express Cargo 3500 Extended", "Fleetline", "Grand Blazer", "Half Ton Pick-up", "HHR", "Impala", "Impala classic prior 1980", "Lumina", "Lumina APV", "Luv", "Malibu", "Malibu classic prior 1985", "Master Deluxe", "Metro", "Model 490", "Model AC 1929-31", "Model DA Master 6", "Monte Carlo", "Monte Carlo classic prior 1990", "Monza", "Nomad", "Nova", "Pickup 3100", "Prizm", "Roadster", "S-10 Pickup", "Silverado 1500 2dr Long Bed", "Silverado 1500 2dr Short Bed", "Silverado 1500 4dr Long Bed", "Silverado 1500 4dr Short Bed", "Silverado 2500 2dr Long Bed", "Silverado 2500 4dr Short Bed", "Silverado 3500 2dr Long Bed SRW", "Silverado 3500 4dr Long Bed SRW", "Silverado 3500 Dually", "Sonic", "Spark", "Spectrum", "Sportvan", "Sprint", "SSR 2dr Short Bed", "Standard 6", "Styleline", "Suburban 1500", "Suburban 2500", "Suburban Old", "Tahoe", "Tracker", "TrailBlazer", "Traverse", "Trax", "Uplander", "Van G10", "Van G20", "Van G30", "Vega", "Venture", "Volt"];
      break;
      case 'Chrysler':
        $model = ["200", "300", "72", "77", "Aspen", "Caravan", "Cirrus", "Concorde", "Conquest", "Cordoba", "Crossfire", "E class", "Fifth Avenue", "Grand Voyager", "Imperial", "Imperial classic prior 1990", "Intrepid", "Laser", "LeBaron", "LeBaron classic prior 1980", "LHS", "Neon", "New Yorker", "New Yorker classic prior 1981", "Newport", "Pacifica", "Prowler", "PT Cruiser", "Saratoga", "Saratoga classic prior 1990", "Sebring 2-Door", "Sebring 4-Door", "Six", "Town &amp; Country MiniVan", "Town &amp; Country Wagon", "Voyager"];
      break;
      case 'Citroen':
        $model = ["11CV", "15CV", "2CV", "AMI", "Charleston", "CX", "DS Wagons", "DS/ID", "DS/ID Cabrio", "DS23", "Dyane", "GS", "Mehari", "SM", "Truckette", "XM"];
      break;
      case 'Daewoo':
        $model = ["Lanos", "Leganza", "Nubira"];
      break;
      case 'Daihatsu':
        $model = ["Charade", "Charmant", "Compagno", "Consorte", "Fellow Max", "Hi Jet", "Rocky", "Taft"];
      break;
      case 'Datsun':
        $model = ["1600", "200sx", "210", "240z", "280zx", "300zx", "310", "510", "720 Pickup", "810", "King Cab", "Maxima", "Pickup", "Pulsar", "Sentra", "Stanza"];
      break;
      case 'Delorean':
        $model = ["DMC-12"];
      break;
      case 'Dodge':
        $model = ["1/2 Ton Trucks", "400", "600", "A100", "Aries", "Aspen", "Avenger", "Caliber", "Caravan", "Challenger", "Challenger classic prior 1983", "Charger", "Charger classic prior 1980", "Colt", "Conquest", "Coronet", "Custom", "D150", "D250", "D350", "D50 Pickup", "Dakota 2dr Short Bed", "Dakota 4dr Short Bed", "Dart", "Dart classic prior 1980", "Daytona", "Demon", "DeSoto", "Diplomat", "Durango", "Dynasty", "Grand Caravan", "Intrepid", "Journey", "Lancer", "Magnum", "Magnum classic prior 1990", "Mirada", "Monaco", "Neon", "Nitro", "Omni", "Polara", "Power Wagon", "Raider", "Ram 1500 2dr Long Bed", "Ram 1500 2dr Short Bed", "Ram 1500 4dr Short Bed", "Ram 2500 2dr Long Bed", "Ram 2500 4dr Long Bed", "Ram 2500 4dr Short Bed", "Ram 3500 2dr Long Bed SRW", "Ram 3500 4dr Long Bed SRW", "Ram 3500 4dr Short Bed SRW", "Ram 3500 Dually", "Ram Cargo Van 1500", "Ram Cargo Van 2500", "Ram Cargo Van 3500", "Ram Mini Van", "RAM SRT-10", "Ram Wagon 1500 - 8 Passenger", "Ram Wagon 2500 - 12 Passenger", "Ram Wagon 3500 - 15 Passenger", "Ramcharger", "Rampage", "Shadow", "Spirit", "SRT-4", "St Regis", "Stealth", "Stratus", "Super B", "Viper", "Wayfarer", "WC 51"];
      break;
      case 'Eagle':
        $model = ["Eagle", "Medallion", "Premier", "Summit", "Talon", "Vision"];
      break;
      case 'Edsel':
        $model = ["Citation", "Pacer", "Ranger Convertible", "Station Wagon"];
      break;
      case 'Ferrari':
        $model = ["250 GTE", "308", "328", "348", "360 Modena", "360 Spider", "400i", "456", "458 Italia", "458 Spider", "512", "550 Barchetta", "599", "612 Scaglietti", "Berlinetta", "California", "Challenge Stradale", "Daytona", "Enzo", "F355", "F40", "F430", "F50", "GTO", "Maranello", "Mondial", "Superamerica", "Testarossa"];
      break;
      case 'Fiat':
        $model = ["124", "500", "500X", "501", "600", "Bravo", "Classic", "Croma", "Grande Punto", "Palio", "Panda", "Punto", "Saloon", "Spider 2000", "Spider 850", "Strada", "Tempra", "X1-9"];
      break;
      case 'Fisker':
        $model = ["Karma"];
      break;
      case 'Ford':
        $model = ["3 window coupe", "Aerostar", "Aspire", "Brewster", "Bronco", "Bronco II", "Brougham", "C-MAX", "Club Wagon", "Cobra", "Contour", "Cortina", "Country Squire", "Country Station Wagon", "Courier", "Crestline", "Crown Victoria", "Custom", "Del Rio Station Wagon", "Deluxe", "Econoline 150 - 8 Pass Extended", "Econoline 150 - 8 Passenger", "Econoline 350 - 15 Pass Extended", "Econoline 350 - 15 Passenger", "Econoline Cargo 150", "Econoline Cargo 150 Extended", "Econoline Cargo 250", "Econoline Cargo 250 Extended", "Econoline Cargo 350", "Econoline Cargo 350 Extended", "Edge", "Elite", "Escape", "Escort", "Escort ZX2", "Excursion", "EXP", "Expedition", "Expedition EL", "Explorer", "Explorer Sport Trac", "F Truck (1948-86)", "F-100 2dr Long Bed", "F-100 2dr Short Bed", "F-150 2dr Long Bed", "F-150 2dr Short Bed", "F-150 2dr SVT Raptor", "F-150 4dr Long Bed", "F-150 4dr Short Bed", "F-150 4dr SVT Raptor", "F-250 2dr Long Bed", "F-250 4dr Long Bed", "F-250 4dr Short Bed", "F-350 2dr Long Bed SRW", "F-350 4dr Long Bed SRW", "F-350 4dr Short Bed SRW", "F-350 Dually", "Fairlane", "Fairmont", "Falcon", "Festiva", "Fiesta", "Five Hundred", "Flex", "Focus", "Freestar", "Freestyle", "Fusion", "Futura", "Galaxie", "Granada", "GT", "GT 40", "LTD", "LTD Country Squire", "LTD Wagon", "Mainline", "Maverick", "Model A 1928-31", "Model B 1932", "Model C 1935-37", "Model T 1908-27", "Model V8", "Model Y", "Mustang", "Mustang classic prior 1980", "Parklane Station Wagon", "Pinto", "Probe", "Ranch Station Wagon", "Ranchero", "Ranger 2dr Short Bed", "Ranger 4dr Short Bed", "Roadster", "Runabout", "Shelby GT", "Shelby GT classic prior 1970", "Skyliner", "Station Wagon", "Sunliner", "Taurus", "Taurus X", "Tempo", "Thunderbird", "Thunderbird classic prior 1982", "Torino", "Transit", "Transit Connect", "Transit Wagon", "Tudor", "Victoria", "Voyager", "Windstar", "Woodie Wagon", "Zephyr"];
      break;
      case 'Geo':
        $model = ["Metro", "Prizm", "Spectrum", "Storm", "Tracker"];
      break;
      case 'GMC':
        $model = ["1/2 Ton Pickups", "150 2 door pick-up", "Acadia", "Blazer", "Caballero", "Canyon 2dr Short Bed", "Canyon 4dr Short Bed", "Envoy", "Envoy XL", "Envoy XUV", "Jimmy", "Rally Wagon", "S15 Pickup", "Safari Cargo Van", "Safari SUV", "Savana 1500 - 8 Pass Van", "Savana 2500 - 12 Pass Van", "Savana 3500 - 15 Pass Van", "Savana 3500 - 15 Pass Van Extended", "Savana Cargo 1500 Van", "Savana Cargo 2500 Van", "Savana Cargo 2500 Van Extended", "Savana Cargo 3500 Van", "Savana Cargo 3500 Van Extended", "Sierra 1500 2dr Long Bed", "Sierra 1500 2dr Short Bed", "Sierra 1500 4dr Long Bed", "Sierra 1500 4dr Short Bed", "Sierra 2500 2dr Long Bed", "Sierra 2500 4dr Long Bed", "Sierra 2500 4dr Short Bed", "Sierra 3500 2dr Long Bed SRW", "Sierra 3500 4dr Long Bed SRW", "Sierra 3500 Dually", "Sonoma", "Suburban", "Syclone", "Terrain", "Typhoon", "Vandura", "Yukon", "Yukon XL"];
      break;
      case 'Graham':
        $model = ["Coupe", "Custom Special 96", "Deluxe Model 108", "Model 97", "Special Model 96"];
      break;
      case 'Harley Davidson':
        $model = ["V-Rod", "VRSCDX Night Rod"];
      break;
      case 'Honda':
        $model = ["1300", "145", "360 Cabriolet", "Accord", "Ballade", "Civic", "CR-V", "CR-Z", "Crosstour", "CRX", "Del Sol", "Element", "Fit", "Insight", "Life", "N 600", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S 500", "S 600", "S 800 Cabriolet", "S2000", "Z 600"];
      break;
      case 'Hudson':
        $model = ["Big Boy", "Commodore", "Country Club", "Custom", "Deluxe", "Great Eight", "Greater Hudson", "Hornet", "Italia", "Jet", "LTS", "Major", "Metropolitan", "Model 33", "Model 37", "Model T", "Model U", "Pacemaker", "Rambler", "Series 44", "Series 48", "Series 92", "Series LL", "Standard", "Sterling", "Super Six Speedster", "Terraplane", "Terraplane Deluxe", "Terraplane Super", "Traveler", "Wasp"];
      break;
      case 'Hummer':
        $model = ["H1", "H2", "H2 SUT 4dr SB", "H3"];
      break;
      case 'Hyundai':
        $model = ["Accent", "Azera", "Elantra", "Entourage", "Equus", "Excel", "Genesis 2 door coupe", "Genesis 4 door", "Pony", "Santa Fe", "Scoupe", "Sonata", "Tiburon", "Tucson", "Veloster", "Veracruz", "XG 300", "XG 350"];
      break;
      case 'Infiniti':
        $model = ["EX35", "EX37", "FX35", "FX37", "FX45", "FX50", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "JX", "M30", "M35", "M37", "M45", "M56", "Q45", "Q50", "Q60", "Q70", "QX4", "QX56", "QX60", "QX70", "QX80"];
      break;
      case 'International':
        $model = ["Pickup", "Scout", "Travelall"];
      break;
      case 'Isuzu':
        $model = ["117", "Amigo", "Ascender", "Axiom", "Bellel", "Bellett", "Florian", "Gemini", "Hombre 2dr SB", "I 280", "I 290", "I 370", "I-Mark", "Impulse", "Minx", "Oasis", "Pickup", "Rodeo", "Stylus", "Trooper", "Trooper II", "VehiCROSS"];
      break;
      case 'Jaguar':
        $model = ["240 / 340", "420", "E Type", "F Type", "Mark 5", "Mark 9", "MK", "S Type", "S Type classic prior 1970", "SS Type", "VandenPlas", "X Type", "XF", "XFR", "XJ", "XJL", "XJR", "XJS", "XK", "XKE", "XKR"];
      break;
      case 'Jeep':
        $model = ["Cherokee", "CJ-2", "CJ-3", "CJ-5", "CJ-7", "Comanche", "Commander", "Commando", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "J10", "J20", "Jeepster", "Laredo", "Liberty", "MB", "Patriot", "Renegade", "Rubicon", "Scrambler", "Station Wagon", "VJ2", "Wagoneer", "Willy", "Wrangler 2 door", "Wrangler 4 door"];
      break;
      case 'Kia':
        $model = ["Amanti", "Borego", "Brisa", "Cadenza", "Forte", "K900", "Optima", "Rio", "Rondo", "Sedona", "Sephia", "Sorento", "Soul", "Spectra", "Sportage"];
      break;
      case 'Lamborghini':
        $model = ["Aventador", "Countach", "Diablo", "Espada", "Gallardo", "Huracan", "Jalpa", "Miura", "Murcielago", "Reventon", "Superleggera", "Veneno"];
      break;
      case 'Land Rover':
        $model = ["Defender", "Discovery", "Discovery Series II", "Evoque", "Freelander", "LR2", "LR3", "LR4", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Series 1", "Series 2", "Series 3"];
      break;
      case 'Lasalle':
        $model = ["303"];
      break;
      case 'Lexus':
        $model = ["CT", "ES 250", "ES 300", "ES 330", "ES 350", "GS 300", "GS 350", "GS 400", "GS 430", "GS 450", "GS 460", "GX 460", "GX 470", "HS 250h", "IS 250", "IS 300", "IS 350", "IS C", "IS F", "LFA", "LS 400", "LS 430", "LS 460", "LS 600", "LX 450", "LX 460", "LX 470", "LX 570", "NX 200t", "RC 350", "RC F", "RX 300", "RX 330", "RX 350", "RX 400", "RX 450", "SC 300", "SC 400", "SC 430"];
      break;
      case 'Lincoln':
        $model = ["Aviator", "Blackwood 4dr Short Bed", "Continental", "Continental classic prior 1980", "Cosmopolitan", "K", "L", "LS", "Mark I", "Mark II", "Mark III", "Mark IV", "Mark LT 4dr Short Bed", "Mark V", "Mark VI", "Mark VII", "Mark VIII", "MKC", "MKS", "MKT", "MKX", "MKZ", "Navigator", "Navigator L", "Premiere", "Town Car", "Versailles", "Zephyr", "Zephyr classic prior 1980"];
      break;
      case 'Lotus':
        $model = ["Elan", "Elise", "Elite", "Esprit", "Europa", "Evora", "Exige", "Seven"];
      break;
      case 'Marmon':
        $model = ["34"];
      break;
      case 'Maserati':
        $model = ["228", "3200GT", "430", "Biturbo", "Bora", "cambiocorsa", "Coupe", "Ghibli", "GranSport", "Granturismo", "Merak", "Mistral", "Quattroporte", "Spyder"];
      break;
      case 'Maybach':
        $model = ["57", "62"];
      break;
      case 'Mazda':
        $model = ["323", "626", "929", "B-Series 2dr SB", "B-Series 4dr Short Bed", "CX-5", "CX-7", "CX-9", "GLC", "Mazda2", "Mazda3", "Mazda5", "Mazda6", "Miata MX5", "Millenia", "MPV", "MX- 3", "MX- 5", "MX- 6", "Navajo", "Protege", "RX- 7", "RX- 8", "Tribute"];
      break;
      case 'McLaren':
        $model = ["650S Spider", "F1", "MP4-12C", "X-1"];
      break;
      case 'Mercedes-Benz':
        $model = ["170", "180", "190", "220", "240", "250", "260", "280", "300", "350", "380", "400", "420", "500", "560", "600", "AMG GT S", "B-Class", "C 220", "C 230", "C 240", "C 250", "C 280", "C 300", "C 32 AMG", "C 320", "C 350", "C 36 AMG", "C 43", "C 63 AMG", "CL 500", "CL 55 AMG", "CL 550", "CL 600", "CL 63 AMG", "CL 65 AMG", "CLA", "CLK 320", "CLK 350", "CLK 430", "CLK 500", "CLK 55 AMG", "CLK 550", "CLS 500", "CLS 55 AMG", "CLS 63 AMG", "E 250", "E 300", "E 320", "E 350", "E 420", "E 430", "E 500", "E 55 AMG", "E 550", "E 63 AMG", "G 500", "G 55 AMG", "G 550", "G 63 AMG", "GL 320", "GL 350", "GL 450", "GL 550", "GLA", "GLC", "GLK 350", "ML 320", "ML 350", "ML 430", "ML 450", "ML 500", "ML 55 AMG", "ML 550", "ML 63 AMG", "R 320", "R 350", "R 500", "R 63 AMG", "S 280", "S 320", "S 350", "S 400", "S 420", "S 430", "S 450", "S 500", "S 55 AMG", "S 550", "S 600", "S 63 AMG", "S 65 AMG", "SEL 300", "SEL 420", "SEL 560", "SL 230", "SL 320", "SL 380", "SL 450", "SL 500", "SL 55 AMG", "SL 550", "SL 560", "SL 600", "SL 63 AMG", "SL 65 AMG", "SLK 230", "SLK 280", "SLK 300", "SLK 32 AMG", "SLK 320", "SLK 350", "SLK 55 AMG", "SLR McLaren", "SLS"];
      break;
      case 'Mercury':
        $model = ["Capri", "Comet", "Cougar", "Cougar classic prior 1980", "Coupe", "Grand Marquis", "Grand Marquis classic prior 1980", "LN7", "Lynx", "Marauder", "Marauder classic prior 1970", "Mariner", "Marquis", "Milan", "Montclair", "Montego", "Montego classic prior 1980", "Monterey", "Mountaineer", "Mystique", "Park Lane", "Sable", "Sedan", "Topaz", "Tracer", "Villager", "Woody"];
      break;
      case 'Merkur':
        $model = ["Scorpio", "XR4Ti"];
      break;
      case 'MG':
        $model = ["1100", "B", "F Type", "J2", "K3", "Magnette", "MGA", "MGB", "MGC", "Midget", "PA", "TA", "TC", "TD", "TF", "Triumph", "YB"];
      break;
      case 'MINI':
        $model = ["Clubman", "Cooper", "Countryman", "MK 1", "MK 2", "MK 3", "MK 4"];
      break;
      case 'Mitsubishi':
        $model = ["3000GT", "Celeste", "Colt", "Cordia", "Debonair", "Delica Van", "Diamante", "Eclipse", "Eclipse Spyder", "Endeavor", "Evolution", "Expo", "Galant", "i-MiEV", "Jeep", "Lancer", "MiEV", "Mighty Max Pickup", "Minica", "Mirage", "Model A", "Montero", "Outlander", "Precis", "Raider", "Sapporo", "Sigma", "Starion", "Tredia", "Vanwagon"];
      break;
      case 'Morgan':
        $model = ["4 / 4", "Aero 8", "Plus 4", "Plus 8", "Super Sport"];
      break;
      case 'Nash':
        $model = ["Ambassador", "Ambassador Suburban", "Fraser", "Healey Coupe", "Metropolitan", "Rambler"];
      break;
      case 'Nissan':
        $model = ["110", "200 SX", "240 SX", "260 ZX", "280 ZX", "300 ZX", "350 Z", "370 Z", "A 50", "Altima", "Armada", "Axxess", "Bluebird", "Cedric", "Cherry", "Cube", "Frontier 2dr Long Bed", "Frontier 4dr Short Bed", "Gloria", "GTR", "Juke", "Laurel", "Leaf", "Maxima", "Model 14", "Murano", "NV200", "NV2500", "NX", "Pathfinder", "Patrol-Safari", "Pickup 2dr Short Bed", "Pulsar", "Quest", "Rogue", "SE-R", "Sedan DA", "Sedan DB", "Sedan DS-2", "Sentra", "Silvia", "Skyline", "Sports DC-3", "Sportscar 211", "Stanza", "Sunny", "Titan 4dr Short Bed", "Van", "Versa", "Violet", "Xterra"];
      break;
      case 'Oldsmobile':
        $model = ["442", "66 Station Wagon", "Achieva", "Alero", "Aurora", "Bravada", "Calais", "Custom Cruiser Wagon", "Cutlass", "Cutlass Calais", "Cutlass Ciera", "Cutlass Cruiser", "Cutlass Salon", "Cutlass Supreme", "Delta 88", "Eighty-Eight", "F-29", "Firenza", "Futuramic", "Intrigue", "LSS", "Ninety-Eight", "Omega", "Regency", "Silhouette", "Starfire", "Toronado", "Toronado classic prior 1980", "Touring", "Vista Cruiser"];
      break;
      case 'Opel':
        $model = ["GT"];
      break;
      case 'Packard':
        $model = ["110", "120", "400", "58 L", "Caribbean", "Clipper", "Custom", "Eight", "Patrician", "Super Eight", "Twin Six"];
      break;
      case 'Panoz':
        $model = ["AIV", "Esperante"];
      break;
      case 'Plymouth':
        $model = ["Acclaim", "Arrow Pickup", "Barracuda", "Belvedere", "Breeze", "Cambridge", "Caravelle", "Champ", "Classic 4dr sedan", "Colt", "Conquest", "Coupe", "Duster", "Fury", "Grand Voyager", "GranFury", "Horizon", "Laser", "Model Q", "Model U", "Neon", "Plaza", "Prowler", "Reliant", "Road Runner", "Satellite", "Savoy", "Scamp", "Suburban", "Sundance", "Superbird", "Trail Duster", "Turismo", "Valiant", "Volare", "Voyager"];
      break;
      case 'Pontiac':
        $model = ["1000", "2000", "6000", "Aztek", "Bonneville", "Bonneville prior 1980", "Catalina", "Chieftan", "Executive", "Farago", "Fiero", "Firebird", "G3", "G5", "G6", "G8", "Grand Am", "Grand Prix", "Grand Prix classic prior 1977", "Grand Safari", "Grand Ville", "GTO after 2003", "GTO classic prior 1980", "LeMans", "Montana", "Parisienne", "Phoenix", "Safari", "Solstice", "Star Chief", "Streamliner", "Sunbird", "Sunfire", "Tempest", "Torrent", "Trans Am", "Trans Sport", "Ventura", "Vibe"];
      break;
      case 'Porsche':
        $model = ["356", "911", "911 Carrera", "911 Carrera 4", "911 Carrera S", "911 GT2", "911 GT3", "911 Targa", "911 Turbo", "912", "914", "918 Spyder", "924", "928", "930", "944", "964", "968", "Boxster", "Cayenne", "Cayman", "Macan", "Panamera"];
      break;
      case 'Renault':
        $model = ["18", "Alliance", "Caravelle", "Dauphine", "Domaine", "Floride", "Fregate", "Fuego", "Sport Wagon"];
      break;
      case 'Rolls-Royce':
        $model = ["25/30", "Camargue", "Corniche", "Ghost", "Park Ward", "Phantom", "Silver Cloud", "Silver Dawn", "Silver Ghost", "Silver Seraph", "Silver Shadow", "Silver Spirit", "Silver Spur", "Silver Wraith", "Wraith"];
      break;
      case 'Saab':
        $model = ["9 / 2", "9 / 3", "9 / 5", "9-4 suv", "9-7 suv", "9/3X", "900", "9000", "Sonett"];
      break;
      case 'Saturn':
        $model = ["Astra", "Aura", "Ion", "L Series", "LS Series", "LW Series", "Outlook", "Relay", "SC Series", "Sky", "SL Series", "SW Series", "Vue"];
      break;
      case 'Scion':
        $model = ["FR-S", "iQ", "tc", "xA", "xB", "xD"];
      break;
      case 'Smart':
        $model = ["fortwofortwo"];
      break;
      case 'Sterling':
        $model = ["800 series"];
      break;
      case 'Studebaker':
        $model = ["Avanti", "Big Six", "Champion", "Commander", "Dually pick-up", "Eight", "Gran Turismo", "President State", "Silver Hawk", "Sky Hawk", "Touring"];
      break;
      case 'Subaru':
        $model = ["360", "450", "B9 Tribeca", "Baja", "Brat", "BRZ", "DL", "FF-1", "Forester", "GL", "Impreza", "Justy", "Kei", "Legacy", "Leone", "Loyale", "Outback", "R-2", "Rex", "RX", "Standard", "SVX", "XT", "XV Crosstrek"];
      break;
      case 'Sunbeam':
        $model = ["Alpine", "Talbot", "Tiger"];
      break;
      case 'Suzuki':
        $model = ["Aerio", "Alto", "Equator", "Esteem", "Forenza", "Fronte", "Grand Vitara", "Jimny", "Kizashi", "Light SS", "Reno", "Samurai Jeep", "Sidekick", "Swift", "SX4", "Verona", "Vitara", "X-90", "XL-7"];
      break;
      case 'Talbo':
        $model = ["Series 1"];
      break;
      case 'Tesla':
        $model = ["Model S", "Model X", "Roadster"];
      break;
      case 'Toyota':
        $model = ["4Runner", "AA", "Avalon", "Blizzard", "Camry", "Carina", "Celica", "Century", "Chaser", "Corolla", "Corona", "Corsa", "Cressida", "Crown", "Echo", "FJ Cruiser", "FJ40", "FJ45", "Highlander", "Land Cruiser", "Mark II", "Master RR", "Matrix", "MR2 Spyder", "Paseo", "Pickup", "Previa", "Prius", "Publica", "RAV4", "SA", "SD", "Sequoia", "SF", "Sienna", "Solara", "Sprinter", "Starlet", "Super", "Supra", "T100 2dr Short Bed", "Tacoma 2dr Short Bed", "Tacoma 4dr Long Bed", "Tacoma 4dr Short Bed", "Tercel", "Tundra 2dr Long Bed", "Tundra 2dr Short Bed", "Tundra 4dr Short Bed", "Van", "Venza", "Yaris"];
      break;
      case 'Triumph':
        $model = ["10", "1300", "1500", "2000/2500", "Dolomite", "Dove", "GT6", "Herald", "Mayflower", "Renown  MK I", "Roadster", "Spitfire", "Stag", "Toledo", "TR2", "TR3", "TR4", "TR5", "TR6", "TR7", "Vitesse"];
      break;
      case 'Vanden Plas':
        $model = ["Princess 1100", "Princess 3", "Princess 4", "Princess Limousine"];
      break;
      case 'Volkswagen':
        $model = ["411", "Beetle", "Cabrio", "Cabriolet", "CC", "Corrado", "Dasher", "Derby", "Eos", "EuroVan", "Fox", "GLI", "Golf", "GTI", "Iltis", "Jetta", "Jetta SportWagen", "Karman Ghia", "Passat", "Phaeton", "Pickup", "Polo", "Quantum", "R32", "Rabbit", "Routan", "Schwimmwagen", "Scirocco", "Thing", "Tiguan", "Touareg", "Van", "Vanagon"];
      break;
      case 'Volvo':
        $model = ["122", "140", "145", "164", "1800 ES", "240", "244", "245", "260", "262", "265", "343", "440", "66", "740", "760", "765", "780", "850", "940", "960", "C30", "C70", "Coupe", "DL", "GL", "GLT", "PV444", "PV544", "S40", "S60", "S70", "S80", "S90", "V40", "V50", "V60", "V70", "V90", "XC 70", "XC 90", "XC60"];
      break;
      case 'Willys':
        $model = ["Jeep", "Jeepster"];
      break;
      case 'Yugo':
        $model = ["Cabrio", "GV", "GVC", "GVL", "GVS", "GVX"];
      break;
      default:
        $model = [];
      break;
    }

    //Load new options
    for(var i = 0; i < $model.length; i++) {
      $options += "<option value='" + $model[i] + "'>" + $model[i] + "</option>";
    }
    $SelectModel.find('option').remove().end().append( $options );

  });

})