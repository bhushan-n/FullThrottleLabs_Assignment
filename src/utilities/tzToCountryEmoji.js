const tzToCountryEmoji = (timezone) => {
  //Publicly available TimeZone to country-code mapping
  const tzData = [
    {
      IsoAlpha3: 'AFG',
      TimeZones: ['Asia/Kabul'],
      WindowsTimeZones: [
        { Id: 'Afghanistan Standard Time', Name: '(UTC+04:30) Kabul' },
      ],
      CountryName: 'Afghanistan',
      IsoAlpha2: 'AF',
    },
    {
      IsoAlpha3: 'ALB',
      TimeZones: ['Europe/Tirane'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Albania',
      IsoAlpha2: 'AL',
    },
    {
      IsoAlpha3: 'DZA',
      TimeZones: ['Africa/Algiers'],
      WindowsTimeZones: [
        {
          Id: 'W. Central Africa Standard Time',
          Name: '(UTC+01:00) West Central Africa',
        },
      ],
      CountryName: 'Algeria',
      IsoAlpha2: 'DZ',
    },
    {
      IsoAlpha3: 'ARG',
      TimeZones: [
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Cordoba',
        'America/Argentina/Salta',
        'America/Argentina/Jujuy',
        'America/Argentina/Tucuman',
        'America/Argentina/Catamarca',
        'America/Argentina/La_Rioja',
        'America/Argentina/San_Juan',
        'America/Argentina/Mendoza',
        'America/Argentina/San_Luis',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Ushuaia',
      ],
      WindowsTimeZones: [
        {
          Id: 'Argentina Standard Time',
          Name: '(UTC-03:00) City of Buenos Aires',
        },
      ],
      CountryName: 'Argentina',
      IsoAlpha2: 'AR',
    },
    {
      IsoAlpha3: 'ARM',
      TimeZones: ['Asia/Yerevan'],
      WindowsTimeZones: [
        { Id: 'Caucasus Standard Time', Name: '(UTC+04:00) Yerevan' },
      ],
      CountryName: 'Armenia',
      IsoAlpha2: 'AM',
    },
    {
      IsoAlpha3: 'AUS',
      TimeZones: [
        'Australia/Lord_Howe',
        'Antarctica/Macquarie',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
      ],
      WindowsTimeZones: [
        {
          Id: 'Central Pacific Standard Time',
          Name: '(UTC+11:00) Solomon Is., New Caledonia',
        },
        { Id: 'Tasmania Standard Time', Name: '(UTC+10:00) Hobart' },
        {
          Id: 'AUS Eastern Standard Time',
          Name: '(UTC+10:00) Canberra, Melbourne, Sydney',
        },
        { Id: 'Cen. Australia Standard Time', Name: '(UTC+09:30) Adelaide' },
        { Id: 'E. Australia Standard Time', Name: '(UTC+10:00) Brisbane' },
        { Id: 'AUS Central Standard Time', Name: '(UTC+09:30) Darwin' },
        { Id: 'W. Australia Standard Time', Name: '(UTC+08:00) Perth' },
      ],
      CountryName: 'Australia',
      IsoAlpha2: 'AU',
    },
    {
      IsoAlpha3: 'AUT',
      TimeZones: ['Europe/Vienna'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Austria',
      IsoAlpha2: 'AT',
    },
    {
      IsoAlpha3: 'AZE',
      TimeZones: ['Asia/Baku'],
      WindowsTimeZones: [
        { Id: 'Azerbaijan Standard Time', Name: '(UTC+04:00) Baku' },
      ],
      CountryName: 'Azerbaijan',
      IsoAlpha2: 'AZ',
    },
    {
      IsoAlpha3: 'BHR',
      TimeZones: ['Asia/Bahrain'],
      WindowsTimeZones: [
        { Id: 'Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
      ],
      CountryName: 'Bahrain',
      IsoAlpha2: 'BH',
    },
    {
      IsoAlpha3: 'BGD',
      TimeZones: ['Asia/Dhaka'],
      WindowsTimeZones: [
        { Id: 'Bangladesh Standard Time', Name: '(UTC+06:00) Dhaka' },
      ],
      CountryName: 'Bangladesh',
      IsoAlpha2: 'BD',
    },
    {
      IsoAlpha3: 'BLR',
      TimeZones: ['Europe/Minsk'],
      WindowsTimeZones: [
        { Id: 'Belarus Standard Time', Name: '(UTC+03:00) Minsk' },
      ],
      CountryName: 'Belarus',
      IsoAlpha2: 'BY',
    },
    {
      IsoAlpha3: 'BEL',
      TimeZones: ['Europe/Brussels'],
      WindowsTimeZones: [
        {
          Id: 'Romance Standard Time',
          Name: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        },
      ],
      CountryName: 'Belgium',
      IsoAlpha2: 'BE',
    },
    {
      IsoAlpha3: 'BLZ',
      TimeZones: ['America/Belize'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Belize',
      IsoAlpha2: 'BZ',
    },
    {
      IsoAlpha3: 'BTN',
      TimeZones: ['Asia/Thimphu'],
      WindowsTimeZones: [
        { Id: 'Bangladesh Standard Time', Name: '(UTC+06:00) Dhaka' },
      ],
      CountryName: 'Bhutan',
      IsoAlpha2: 'BT',
    },
    {
      IsoAlpha3: 'BOL',
      TimeZones: ['America/La_Paz'],
      WindowsTimeZones: [
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
      ],
      CountryName: 'Bolivia',
      IsoAlpha2: 'BO',
    },
    {
      IsoAlpha3: 'BIH',
      TimeZones: ['Europe/Sarajevo'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Bosnia and Herzegovina',
      IsoAlpha2: 'BA',
    },
    {
      IsoAlpha3: 'BWA',
      TimeZones: ['Africa/Gaborone'],
      WindowsTimeZones: [
        {
          Id: 'South Africa Standard Time',
          Name: '(UTC+02:00) Harare, Pretoria',
        },
      ],
      CountryName: 'Botswana',
      IsoAlpha2: 'BW',
    },
    {
      IsoAlpha3: 'BRA',
      TimeZones: [
        'America/Noronha',
        'America/Belem',
        'America/Fortaleza',
        'America/Recife',
        'America/Araguaina',
        'America/Maceio',
        'America/Bahia',
        'America/Sao_Paulo',
        'America/Campo_Grande',
        'America/Cuiaba',
        'America/Santarem',
        'America/Porto_Velho',
        'America/Boa_Vista',
        'America/Manaus',
        'America/Eirunepe',
        'America/Rio_Branco',
      ],
      WindowsTimeZones: [
        { Id: 'UTC-02', Name: '(UTC-02:00) Coordinated Universal Time-02' },
        {
          Id: 'SA Eastern Standard Time',
          Name: '(UTC-03:00) Cayenne, Fortaleza',
        },
        { Id: 'Bahia Standard Time', Name: '(UTC-03:00) Salvador' },
        {
          Id: 'E. South America Standard Time',
          Name: '(UTC-03:00) Brasilia',
        },
        { Id: 'Central Brazilian Standard Time', Name: '(UTC-04:00) Cuiaba' },
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Brazil',
      IsoAlpha2: 'BR',
    },
    {
      IsoAlpha3: 'BRN',
      TimeZones: ['Asia/Brunei'],
      WindowsTimeZones: [
        {
          Id: 'Singapore Standard Time',
          Name: '(UTC+08:00) Kuala Lumpur, Singapore',
        },
      ],
      CountryName: 'Brunei',
      IsoAlpha2: 'BN',
    },
    {
      IsoAlpha3: 'BGR',
      TimeZones: ['Europe/Sofia'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Bulgaria',
      IsoAlpha2: 'BG',
    },
    {
      IsoAlpha3: 'KHM',
      TimeZones: ['Asia/Phnom_Penh'],
      WindowsTimeZones: [
        {
          Id: 'SE Asia Standard Time',
          Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        },
      ],
      CountryName: 'Cambodia',
      IsoAlpha2: 'KH',
    },
    {
      IsoAlpha3: 'CMR',
      TimeZones: ['Africa/Douala'],
      WindowsTimeZones: [
        {
          Id: 'W. Central Africa Standard Time',
          Name: '(UTC+01:00) West Central Africa',
        },
      ],
      CountryName: 'Cameroon',
      IsoAlpha2: 'CM',
    },
    {
      IsoAlpha3: 'CAN',
      TimeZones: [
        'America/St_Johns',
        'America/Halifax',
        'America/Glace_Bay',
        'America/Moncton',
        'America/Goose_Bay',
        'America/Blanc-Sablon',
        'America/Toronto',
        'America/Nipigon',
        'America/Thunder_Bay',
        'America/Iqaluit',
        'America/Pangnirtung',
        'America/Atikokan',
        'America/Winnipeg',
        'America/Rainy_River',
        'America/Resolute',
        'America/Rankin_Inlet',
        'America/Regina',
        'America/Swift_Current',
        'America/Edmonton',
        'America/Cambridge_Bay',
        'America/Yellowknife',
        'America/Inuvik',
        'America/Creston',
        'America/Dawson_Creek',
        'America/Fort_Nelson',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Dawson',
      ],
      WindowsTimeZones: [
        {
          Id: 'Newfoundland Standard Time',
          Name: '(UTC-03:30) Newfoundland',
        },
        {
          Id: 'Atlantic Standard Time',
          Name: '(UTC-04:00) Atlantic Time (Canada)',
        },
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
        {
          Id: 'Eastern Standard Time',
          Name: '(UTC-05:00) Eastern Time (US & Canada)',
        },
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
        {
          Id: 'Central Standard Time',
          Name: '(UTC-06:00) Central Time (US & Canada)',
        },
        {
          Id: 'Canada Central Standard Time',
          Name: '(UTC-06:00) Saskatchewan',
        },
        {
          Id: 'Mountain Standard Time',
          Name: '(UTC-07:00) Mountain Time (US & Canada)',
        },
        { Id: 'US Mountain Standard Time', Name: '(UTC-07:00) Arizona' },
        {
          Id: 'Pacific Standard Time',
          Name: '(UTC-08:00) Pacific Time (US & Canada)',
        },
      ],
      CountryName: 'Canada',
      IsoAlpha2: 'CA',
    },
    {
      IsoAlpha3: 'CHL',
      TimeZones: ['America/Santiago', 'Pacific/Easter'],
      WindowsTimeZones: [
        { Id: 'Pacific SA Standard Time', Name: '(UTC-04:00) Santiago' },
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Chile',
      IsoAlpha2: 'CL',
    },
    {
      IsoAlpha3: 'CHN',
      TimeZones: ['Asia/Shanghai', 'Asia/Urumqi'],
      WindowsTimeZones: [
        {
          Id: 'China Standard Time',
          Name: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        },
        { Id: 'Central Asia Standard Time', Name: '(UTC+06:00) Astana' },
      ],
      CountryName: 'China',
      IsoAlpha2: 'CN',
    },
    {
      IsoAlpha3: 'COL',
      TimeZones: ['America/Bogota'],
      WindowsTimeZones: [
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Colombia',
      IsoAlpha2: 'CO',
    },
    {
      IsoAlpha3: 'COD',
      TimeZones: ['Africa/Kinshasa', 'Africa/Lubumbashi'],
      WindowsTimeZones: [
        {
          Id: 'W. Central Africa Standard Time',
          Name: '(UTC+01:00) West Central Africa',
        },
        {
          Id: 'South Africa Standard Time',
          Name: '(UTC+02:00) Harare, Pretoria',
        },
      ],
      CountryName: 'Congo (DRC)',
      IsoAlpha2: 'CD',
    },
    {
      IsoAlpha3: 'CRI',
      TimeZones: ['America/Costa_Rica'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Costa Rica',
      IsoAlpha2: 'CR',
    },
    {
      IsoAlpha3: 'CIV',
      TimeZones: ['Africa/Abidjan'],
      WindowsTimeZones: [
        {
          Id: 'Greenwich Standard Time',
          Name: '(UTC+00:00) Monrovia, Reykjavik',
        },
      ],
      CountryName: 'Côte d’Ivoire',
      IsoAlpha2: 'CI',
    },
    {
      IsoAlpha3: 'HRV',
      TimeZones: ['Europe/Zagreb'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Croatia',
      IsoAlpha2: 'HR',
    },
    {
      IsoAlpha3: 'CUB',
      TimeZones: ['America/Havana'],
      WindowsTimeZones: [
        {
          Id: 'Eastern Standard Time',
          Name: '(UTC-05:00) Eastern Time (US & Canada)',
        },
      ],
      CountryName: 'Cuba',
      IsoAlpha2: 'CU',
    },
    {
      IsoAlpha3: 'CZE',
      TimeZones: ['Europe/Prague'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Czech Republic',
      IsoAlpha2: 'CZ',
    },
    {
      IsoAlpha3: 'DNK',
      TimeZones: ['Europe/Copenhagen'],
      WindowsTimeZones: [
        {
          Id: 'Romance Standard Time',
          Name: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        },
      ],
      CountryName: 'Denmark',
      IsoAlpha2: 'DK',
    },
    {
      IsoAlpha3: 'DJI',
      TimeZones: ['Africa/Djibouti'],
      WindowsTimeZones: [
        { Id: 'E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
      ],
      CountryName: 'Djibouti',
      IsoAlpha2: 'DJ',
    },
    {
      IsoAlpha3: 'DOM',
      TimeZones: ['America/Santo_Domingo'],
      WindowsTimeZones: [
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
      ],
      CountryName: 'Dominican Republic',
      IsoAlpha2: 'DO',
    },
    {
      IsoAlpha3: 'ECU',
      TimeZones: ['America/Guayaquil', 'Pacific/Galapagos'],
      WindowsTimeZones: [
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Ecuador',
      IsoAlpha2: 'EC',
    },
    {
      IsoAlpha3: 'EGY',
      TimeZones: ['Africa/Cairo'],
      WindowsTimeZones: [
        { Id: 'Egypt Standard Time', Name: '(UTC+02:00) Cairo' },
      ],
      CountryName: 'Egypt',
      IsoAlpha2: 'EG',
    },
    {
      IsoAlpha3: 'SLV',
      TimeZones: ['America/El_Salvador'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'El Salvador',
      IsoAlpha2: 'SV',
    },
    {
      IsoAlpha3: 'ERI',
      TimeZones: ['Africa/Asmara'],
      WindowsTimeZones: [
        { Id: 'E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
      ],
      CountryName: 'Eritrea',
      IsoAlpha2: 'ER',
    },
    {
      IsoAlpha3: 'EST',
      TimeZones: ['Europe/Tallinn'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Estonia',
      IsoAlpha2: 'EE',
    },
    {
      IsoAlpha3: 'ETH',
      TimeZones: ['Africa/Addis_Ababa'],
      WindowsTimeZones: [
        { Id: 'E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
      ],
      CountryName: 'Ethiopia',
      IsoAlpha2: 'ET',
    },
    {
      IsoAlpha3: 'FRO',
      TimeZones: ['Atlantic/Faroe'],
      WindowsTimeZones: [
        {
          Id: 'GMT Standard Time',
          Name: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
        },
      ],
      CountryName: 'Faroe Islands',
      IsoAlpha2: 'FO',
    },
    {
      IsoAlpha3: 'FIN',
      TimeZones: ['Europe/Helsinki'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Finland',
      IsoAlpha2: 'FI',
    },
    {
      IsoAlpha3: 'FRA',
      TimeZones: ['Europe/Paris'],
      WindowsTimeZones: [
        {
          Id: 'Romance Standard Time',
          Name: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        },
      ],
      CountryName: 'France',
      IsoAlpha2: 'FR',
    },
    {
      IsoAlpha3: 'GEO',
      TimeZones: ['Asia/Tbilisi'],
      WindowsTimeZones: [
        { Id: 'Georgian Standard Time', Name: '(UTC+04:00) Tbilisi' },
      ],
      CountryName: 'Georgia',
      IsoAlpha2: 'GE',
    },
    {
      IsoAlpha3: 'DEU',
      TimeZones: ['Europe/Berlin', 'Europe/Busingen'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Germany',
      IsoAlpha2: 'DE',
    },
    {
      IsoAlpha3: 'GRC',
      TimeZones: ['Europe/Athens'],
      WindowsTimeZones: [
        { Id: 'GTB Standard Time', Name: '(UTC+02:00) Athens, Bucharest' },
      ],
      CountryName: 'Greece',
      IsoAlpha2: 'GR',
    },
    {
      IsoAlpha3: 'GRL',
      TimeZones: [
        'America/Godthab',
        'America/Danmarkshavn',
        'America/Scoresbysund',
        'America/Thule',
      ],
      WindowsTimeZones: [
        { Id: 'Greenland Standard Time', Name: '(UTC-03:00) Greenland' },
        { Id: 'UTC', Name: 'UTC' },
        { Id: 'Azores Standard Time', Name: '(UTC-01:00) Azores' },
        {
          Id: 'Atlantic Standard Time',
          Name: '(UTC-04:00) Atlantic Time (Canada)',
        },
      ],
      CountryName: 'Greenland',
      IsoAlpha2: 'GL',
    },
    {
      IsoAlpha3: 'GTM',
      TimeZones: ['America/Guatemala'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Guatemala',
      IsoAlpha2: 'GT',
    },
    {
      IsoAlpha3: 'HTI',
      TimeZones: ['America/Port-au-Prince'],
      WindowsTimeZones: [
        {
          Id: 'Eastern Standard Time',
          Name: '(UTC-05:00) Eastern Time (US & Canada)',
        },
      ],
      CountryName: 'Haiti',
      IsoAlpha2: 'HT',
    },
    {
      IsoAlpha3: 'HND',
      TimeZones: ['America/Tegucigalpa'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Honduras',
      IsoAlpha2: 'HN',
    },
    {
      IsoAlpha3: 'HKG',
      TimeZones: ['Asia/Hong_Kong'],
      WindowsTimeZones: [
        {
          Id: 'China Standard Time',
          Name: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        },
      ],
      CountryName: 'Hong Kong SAR',
      IsoAlpha2: 'HK',
    },
    {
      IsoAlpha3: 'HUN',
      TimeZones: ['Europe/Budapest'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Hungary',
      IsoAlpha2: 'HU',
    },
    {
      IsoAlpha3: 'ISL',
      TimeZones: ['Atlantic/Reykjavik'],
      WindowsTimeZones: [
        {
          Id: 'Greenwich Standard Time',
          Name: '(UTC+00:00) Monrovia, Reykjavik',
        },
      ],
      CountryName: 'Iceland',
      IsoAlpha2: 'IS',
    },
    {
      IsoAlpha3: 'IND',
      TimeZones: ['Asia/Kolkata'],
      WindowsTimeZones: [
        {
          Id: 'India Standard Time',
          Name: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        },
      ],
      CountryName: 'India',
      IsoAlpha2: 'IN',
    },
    {
      IsoAlpha3: 'IDN',
      TimeZones: [
        'Asia/Jakarta',
        'Asia/Pontianak',
        'Asia/Makassar',
        'Asia/Jayapura',
      ],
      WindowsTimeZones: [
        {
          Id: 'SE Asia Standard Time',
          Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        },
        {
          Id: 'Singapore Standard Time',
          Name: '(UTC+08:00) Kuala Lumpur, Singapore',
        },
        {
          Id: 'Tokyo Standard Time',
          Name: '(UTC+09:00) Osaka, Sapporo, Tokyo',
        },
      ],
      CountryName: 'Indonesia',
      IsoAlpha2: 'ID',
    },
    {
      IsoAlpha3: 'IRN',
      TimeZones: ['Asia/Tehran'],
      WindowsTimeZones: [
        { Id: 'Iran Standard Time', Name: '(UTC+03:30) Tehran' },
      ],
      CountryName: 'Iran',
      IsoAlpha2: 'IR',
    },
    {
      IsoAlpha3: 'IRQ',
      TimeZones: ['Asia/Baghdad'],
      WindowsTimeZones: [
        { Id: 'Arabic Standard Time', Name: '(UTC+03:00) Baghdad' },
      ],
      CountryName: 'Iraq',
      IsoAlpha2: 'IQ',
    },
    {
      IsoAlpha3: 'IRL',
      TimeZones: ['Europe/Dublin'],
      WindowsTimeZones: [
        {
          Id: 'GMT Standard Time',
          Name: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
        },
      ],
      CountryName: 'Ireland',
      IsoAlpha2: 'IE',
    },
    {
      IsoAlpha3: 'ISR',
      TimeZones: ['Asia/Jerusalem'],
      WindowsTimeZones: [
        { Id: 'Israel Standard Time', Name: '(UTC+02:00) Jerusalem' },
      ],
      CountryName: 'Israel',
      IsoAlpha2: 'IL',
    },
    {
      IsoAlpha3: 'ITA',
      TimeZones: ['Europe/Rome'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Italy',
      IsoAlpha2: 'IT',
    },
    {
      IsoAlpha3: 'JAM',
      TimeZones: ['America/Jamaica'],
      WindowsTimeZones: [
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Jamaica',
      IsoAlpha2: 'JM',
    },
    {
      IsoAlpha3: 'JPN',
      TimeZones: ['Asia/Tokyo'],
      WindowsTimeZones: [
        {
          Id: 'Tokyo Standard Time',
          Name: '(UTC+09:00) Osaka, Sapporo, Tokyo',
        },
      ],
      CountryName: 'Japan',
      IsoAlpha2: 'JP',
    },
    {
      IsoAlpha3: 'JOR',
      TimeZones: ['Asia/Amman'],
      WindowsTimeZones: [
        { Id: 'Jordan Standard Time', Name: '(UTC+02:00) Amman' },
      ],
      CountryName: 'Jordan',
      IsoAlpha2: 'JO',
    },
    {
      IsoAlpha3: 'KAZ',
      TimeZones: [
        'Asia/Almaty',
        'Asia/Qyzylorda',
        'Asia/Aqtobe',
        'Asia/Aqtau',
        'Asia/Oral',
      ],
      WindowsTimeZones: [
        { Id: 'Central Asia Standard Time', Name: '(UTC+06:00) Astana' },
        {
          Id: 'West Asia Standard Time',
          Name: '(UTC+05:00) Ashgabat, Tashkent',
        },
      ],
      CountryName: 'Kazakhstan',
      IsoAlpha2: 'KZ',
    },
    {
      IsoAlpha3: 'KEN',
      TimeZones: ['Africa/Nairobi'],
      WindowsTimeZones: [
        { Id: 'E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
      ],
      CountryName: 'Kenya',
      IsoAlpha2: 'KE',
    },
    {
      IsoAlpha3: 'KOR',
      TimeZones: ['Asia/Seoul'],
      WindowsTimeZones: [
        { Id: 'Korea Standard Time', Name: '(UTC+09:00) Seoul' },
      ],
      CountryName: 'Korea',
      IsoAlpha2: 'KR',
    },
    {
      IsoAlpha3: 'KWT',
      TimeZones: ['Asia/Kuwait'],
      WindowsTimeZones: [
        { Id: 'Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
      ],
      CountryName: 'Kuwait',
      IsoAlpha2: 'KW',
    },
    {
      IsoAlpha3: 'KGZ',
      TimeZones: ['Asia/Bishkek'],
      WindowsTimeZones: [
        { Id: 'Central Asia Standard Time', Name: '(UTC+06:00) Astana' },
      ],
      CountryName: 'Kyrgyzstan',
      IsoAlpha2: 'KG',
    },
    {
      IsoAlpha3: 'LAO',
      TimeZones: ['Asia/Vientiane'],
      WindowsTimeZones: [
        {
          Id: 'SE Asia Standard Time',
          Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        },
      ],
      CountryName: 'Laos',
      IsoAlpha2: 'LA',
    },
    {
      IsoAlpha3: 'LVA',
      TimeZones: ['Europe/Riga'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Latvia',
      IsoAlpha2: 'LV',
    },
    {
      IsoAlpha3: 'LBN',
      TimeZones: ['Asia/Beirut'],
      WindowsTimeZones: [
        { Id: 'Middle East Standard Time', Name: '(UTC+02:00) Beirut' },
      ],
      CountryName: 'Lebanon',
      IsoAlpha2: 'LB',
    },
    {
      IsoAlpha3: 'LBY',
      TimeZones: ['Africa/Tripoli'],
      WindowsTimeZones: [
        { Id: 'Libya Standard Time', Name: '(UTC+02:00) Tripoli' },
      ],
      CountryName: 'Libya',
      IsoAlpha2: 'LY',
    },
    {
      IsoAlpha3: 'LIE',
      TimeZones: ['Europe/Vaduz'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Liechtenstein',
      IsoAlpha2: 'LI',
    },
    {
      IsoAlpha3: 'LTU',
      TimeZones: ['Europe/Vilnius'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Lithuania',
      IsoAlpha2: 'LT',
    },
    {
      IsoAlpha3: 'LUX',
      TimeZones: ['Europe/Luxembourg'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Luxembourg',
      IsoAlpha2: 'LU',
    },
    {
      IsoAlpha3: 'MAC',
      TimeZones: ['Asia/Macau'],
      WindowsTimeZones: [
        {
          Id: 'China Standard Time',
          Name: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        },
      ],
      CountryName: 'Macao SAR',
      IsoAlpha2: 'MO',
    },
    {
      IsoAlpha3: 'MKD',
      TimeZones: ['Europe/Skopje'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Macedonia, FYRO',
      IsoAlpha2: 'MK',
    },
    {
      IsoAlpha3: 'MYS',
      TimeZones: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
      WindowsTimeZones: [
        {
          Id: 'Singapore Standard Time',
          Name: '(UTC+08:00) Kuala Lumpur, Singapore',
        },
      ],
      CountryName: 'Malaysia',
      IsoAlpha2: 'MY',
    },
    {
      IsoAlpha3: 'MDV',
      TimeZones: ['Indian/Maldives'],
      WindowsTimeZones: [
        {
          Id: 'West Asia Standard Time',
          Name: '(UTC+05:00) Ashgabat, Tashkent',
        },
      ],
      CountryName: 'Maldives',
      IsoAlpha2: 'MV',
    },
    {
      IsoAlpha3: 'MLI',
      TimeZones: ['Africa/Bamako'],
      WindowsTimeZones: [
        {
          Id: 'Greenwich Standard Time',
          Name: '(UTC+00:00) Monrovia, Reykjavik',
        },
      ],
      CountryName: 'Mali',
      IsoAlpha2: 'ML',
    },
    {
      IsoAlpha3: 'MLT',
      TimeZones: ['Europe/Malta'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Malta',
      IsoAlpha2: 'MT',
    },
    {
      IsoAlpha3: 'MEX',
      TimeZones: [
        'America/Mexico_City',
        'America/Cancun',
        'America/Merida',
        'America/Monterrey',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Chihuahua',
        'America/Ojinaga',
        'America/Hermosillo',
        'America/Tijuana',
        'America/Bahia_Banderas',
      ],
      WindowsTimeZones: [
        {
          Id: 'Central Standard Time (Mexico)',
          Name: '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
        },
        {
          Id: 'Eastern Standard Time (Mexico)',
          Name: '(UTC-05:00) Chetumal',
        },
        {
          Id: 'Central Standard Time',
          Name: '(UTC-06:00) Central Time (US & Canada)',
        },
        {
          Id: 'Mountain Standard Time (Mexico)',
          Name: '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
        },
        {
          Id: 'Mountain Standard Time',
          Name: '(UTC-07:00) Mountain Time (US & Canada)',
        },
        { Id: 'US Mountain Standard Time', Name: '(UTC-07:00) Arizona' },
        {
          Id: 'Pacific Standard Time',
          Name: '(UTC-08:00) Pacific Time (US & Canada)',
        },
      ],
      CountryName: 'Mexico',
      IsoAlpha2: 'MX',
    },
    {
      IsoAlpha3: 'MDA',
      TimeZones: ['Europe/Chisinau'],
      WindowsTimeZones: [
        { Id: 'E. Europe Standard Time', Name: '(UTC+02:00) Chisinau' },
      ],
      CountryName: 'Moldova',
      IsoAlpha2: 'MD',
    },
    {
      IsoAlpha3: 'MCO',
      TimeZones: ['Europe/Monaco'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Monaco',
      IsoAlpha2: 'MC',
    },
    {
      IsoAlpha3: 'MNG',
      TimeZones: ['Asia/Ulaanbaatar', 'Asia/Hovd', 'Asia/Choibalsan'],
      WindowsTimeZones: [
        { Id: 'Ulaanbaatar Standard Time', Name: '(UTC+08:00) Ulaanbaatar' },
      ],
      CountryName: 'Mongolia',
      IsoAlpha2: 'MN',
    },
    {
      IsoAlpha3: 'MNE',
      TimeZones: ['Europe/Podgorica'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Montenegro',
      IsoAlpha2: 'ME',
    },
    {
      IsoAlpha3: 'MAR',
      TimeZones: ['Africa/Casablanca'],
      WindowsTimeZones: [
        { Id: 'Morocco Standard Time', Name: '(UTC+00:00) Casablanca' },
      ],
      CountryName: 'Morocco',
      IsoAlpha2: 'MA',
    },
    {
      IsoAlpha3: 'MMR',
      TimeZones: ['Asia/Rangoon'],
      WindowsTimeZones: [
        { Id: 'Myanmar Standard Time', Name: '(UTC+06:30) Yangon (Rangoon)' },
      ],
      CountryName: 'Myanmar',
      IsoAlpha2: 'MM',
    },
    {
      IsoAlpha3: 'NPL',
      TimeZones: ['Asia/Kathmandu'],
      WindowsTimeZones: [
        { Id: 'Nepal Standard Time', Name: '(UTC+05:45) Kathmandu' },
      ],
      CountryName: 'Nepal',
      IsoAlpha2: 'NP',
    },
    {
      IsoAlpha3: 'NLD',
      TimeZones: ['Europe/Amsterdam'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Netherlands',
      IsoAlpha2: 'NL',
    },
    {
      IsoAlpha3: 'NZL',
      TimeZones: ['Pacific/Auckland', 'Pacific/Chatham'],
      WindowsTimeZones: [
        {
          Id: 'New Zealand Standard Time',
          Name: '(UTC+12:00) Auckland, Wellington',
        },
      ],
      CountryName: 'New Zealand',
      IsoAlpha2: 'NZ',
    },
    {
      IsoAlpha3: 'NIC',
      TimeZones: ['America/Managua'],
      WindowsTimeZones: [
        {
          Id: 'Central America Standard Time',
          Name: '(UTC-06:00) Central America',
        },
      ],
      CountryName: 'Nicaragua',
      IsoAlpha2: 'NI',
    },
    {
      IsoAlpha3: 'NGA',
      TimeZones: ['Africa/Lagos'],
      WindowsTimeZones: [
        {
          Id: 'W. Central Africa Standard Time',
          Name: '(UTC+01:00) West Central Africa',
        },
      ],
      CountryName: 'Nigeria',
      IsoAlpha2: 'NG',
    },
    {
      IsoAlpha3: 'NOR',
      TimeZones: ['Europe/Oslo'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Norway',
      IsoAlpha2: 'NO',
    },
    {
      IsoAlpha3: 'OMN',
      TimeZones: ['Asia/Muscat'],
      WindowsTimeZones: [
        { Id: 'Arabian Standard Time', Name: '(UTC+04:00) Abu Dhabi, Muscat' },
      ],
      CountryName: 'Oman',
      IsoAlpha2: 'OM',
    },
    {
      IsoAlpha3: 'PAK',
      TimeZones: ['Asia/Karachi'],
      WindowsTimeZones: [
        {
          Id: 'Pakistan Standard Time',
          Name: '(UTC+05:00) Islamabad, Karachi',
        },
      ],
      CountryName: 'Pakistan',
      IsoAlpha2: 'PK',
    },
    {
      IsoAlpha3: 'PAN',
      TimeZones: ['America/Panama'],
      WindowsTimeZones: [
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Panama',
      IsoAlpha2: 'PA',
    },
    {
      IsoAlpha3: 'PRY',
      TimeZones: ['America/Asuncion'],
      WindowsTimeZones: [
        { Id: 'Paraguay Standard Time', Name: '(UTC-04:00) Asuncion' },
      ],
      CountryName: 'Paraguay',
      IsoAlpha2: 'PY',
    },
    {
      IsoAlpha3: 'PER',
      TimeZones: ['America/Lima'],
      WindowsTimeZones: [
        {
          Id: 'SA Pacific Standard Time',
          Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        },
      ],
      CountryName: 'Peru',
      IsoAlpha2: 'PE',
    },
    {
      IsoAlpha3: 'PHL',
      TimeZones: ['Asia/Manila'],
      WindowsTimeZones: [
        {
          Id: 'Singapore Standard Time',
          Name: '(UTC+08:00) Kuala Lumpur, Singapore',
        },
      ],
      CountryName: 'Philippines',
      IsoAlpha2: 'PH',
    },
    {
      IsoAlpha3: 'POL',
      TimeZones: ['Europe/Warsaw'],
      WindowsTimeZones: [
        {
          Id: 'Central European Standard Time',
          Name: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
        },
      ],
      CountryName: 'Poland',
      IsoAlpha2: 'PL',
    },
    {
      IsoAlpha3: 'PRT',
      TimeZones: ['Europe/Lisbon', 'Atlantic/Madeira', 'Atlantic/Azores'],
      WindowsTimeZones: [
        {
          Id: 'GMT Standard Time',
          Name: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
        },
        { Id: 'Azores Standard Time', Name: '(UTC-01:00) Azores' },
      ],
      CountryName: 'Portugal',
      IsoAlpha2: 'PT',
    },
    {
      IsoAlpha3: 'PRI',
      TimeZones: ['America/Puerto_Rico'],
      WindowsTimeZones: [
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
      ],
      CountryName: 'Puerto Rico',
      IsoAlpha2: 'PR',
    },
    {
      IsoAlpha3: 'QAT',
      TimeZones: ['Asia/Qatar'],
      WindowsTimeZones: [
        { Id: 'Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
      ],
      CountryName: 'Qatar',
      IsoAlpha2: 'QA',
    },
    {
      IsoAlpha3: 'REU',
      TimeZones: ['Indian/Reunion'],
      WindowsTimeZones: [
        { Id: 'Mauritius Standard Time', Name: '(UTC+04:00) Port Louis' },
      ],
      CountryName: 'Réunion',
      IsoAlpha2: 'RE',
    },
    {
      IsoAlpha3: 'ROU',
      TimeZones: ['Europe/Bucharest'],
      WindowsTimeZones: [
        { Id: 'GTB Standard Time', Name: '(UTC+02:00) Athens, Bucharest' },
      ],
      CountryName: 'Romania',
      IsoAlpha2: 'RO',
    },
    {
      IsoAlpha3: 'RUS',
      TimeZones: [
        'Europe/Kaliningrad',
        'Europe/Moscow',
        'Europe/Simferopol',
        'Europe/Volgograd',
        'Europe/Astrakhan',
        'Europe/Samara',
        'Europe/Ulyanovsk',
        'Asia/Yekaterinburg',
        'Asia/Omsk',
        'Asia/Novosibirsk',
        'Asia/Barnaul',
        'Asia/Novokuznetsk',
        'Asia/Krasnoyarsk',
        'Asia/Irkutsk',
        'Asia/Chita',
        'Asia/Yakutsk',
        'Asia/Khandyga',
        'Asia/Vladivostok',
        'Asia/Ust-Nera',
        'Asia/Magadan',
        'Asia/Sakhalin',
        'Asia/Srednekolymsk',
        'Asia/Kamchatka',
        'Asia/Anadyr',
      ],
      WindowsTimeZones: [
        { Id: 'Kaliningrad Standard Time', Name: '(UTC+02:00) Kaliningrad' },
        {
          Id: 'Russian Standard Time',
          Name: '(UTC+03:00) Moscow, St. Petersburg, Volgograd',
        },
        { Id: 'Russia Time Zone 3', Name: '(UTC+04:00) Izhevsk, Samara' },
        {
          Id: 'Ekaterinburg Standard Time',
          Name: '(UTC+05:00) Ekaterinburg',
        },
        {
          Id: 'N. Central Asia Standard Time',
          Name: '(UTC+07:00) Novosibirsk',
        },
        { Id: 'North Asia Standard Time', Name: '(UTC+07:00) Krasnoyarsk' },
        { Id: 'North Asia East Standard Time', Name: '(UTC+08:00) Irkutsk' },
        { Id: 'Yakutsk Standard Time', Name: '(UTC+09:00) Yakutsk' },
        { Id: 'Vladivostok Standard Time', Name: '(UTC+10:00) Vladivostok' },
        { Id: 'Magadan Standard Time', Name: '(UTC+11:00) Magadan' },
        { Id: 'Russia Time Zone 10', Name: '(UTC+11:00) Chokurdakh' },
        {
          Id: 'Russia Time Zone 11',
          Name: '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky',
        },
      ],
      CountryName: 'Russia',
      IsoAlpha2: 'RU',
    },
    {
      IsoAlpha3: 'RWA',
      TimeZones: ['Africa/Kigali'],
      WindowsTimeZones: [
        {
          Id: 'South Africa Standard Time',
          Name: '(UTC+02:00) Harare, Pretoria',
        },
      ],
      CountryName: 'Rwanda',
      IsoAlpha2: 'RW',
    },
    {
      IsoAlpha3: 'SAU',
      TimeZones: ['Asia/Riyadh'],
      WindowsTimeZones: [
        { Id: 'Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
      ],
      CountryName: 'Saudi Arabia',
      IsoAlpha2: 'SA',
    },
    {
      IsoAlpha3: 'SEN',
      TimeZones: ['Africa/Dakar'],
      WindowsTimeZones: [
        {
          Id: 'Greenwich Standard Time',
          Name: '(UTC+00:00) Monrovia, Reykjavik',
        },
      ],
      CountryName: 'Senegal',
      IsoAlpha2: 'SN',
    },
    {
      IsoAlpha3: 'SRB',
      TimeZones: ['Europe/Belgrade'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Serbia',
      IsoAlpha2: 'RS',
    },
    {
      IsoAlpha3: 'SGP',
      TimeZones: ['Asia/Singapore'],
      WindowsTimeZones: [
        {
          Id: 'Singapore Standard Time',
          Name: '(UTC+08:00) Kuala Lumpur, Singapore',
        },
      ],
      CountryName: 'Singapore',
      IsoAlpha2: 'SG',
    },
    {
      IsoAlpha3: 'SVK',
      TimeZones: ['Europe/Bratislava'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Slovakia',
      IsoAlpha2: 'SK',
    },
    {
      IsoAlpha3: 'SVN',
      TimeZones: ['Europe/Ljubljana'],
      WindowsTimeZones: [
        {
          Id: 'Central Europe Standard Time',
          Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        },
      ],
      CountryName: 'Slovenia',
      IsoAlpha2: 'SI',
    },
    {
      IsoAlpha3: 'SOM',
      TimeZones: ['Africa/Mogadishu'],
      WindowsTimeZones: [
        { Id: 'E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
      ],
      CountryName: 'Somalia',
      IsoAlpha2: 'SO',
    },
    {
      IsoAlpha3: 'ZAF',
      TimeZones: ['Africa/Johannesburg'],
      WindowsTimeZones: [
        {
          Id: 'South Africa Standard Time',
          Name: '(UTC+02:00) Harare, Pretoria',
        },
      ],
      CountryName: 'South Africa',
      IsoAlpha2: 'ZA',
    },
    {
      IsoAlpha3: 'ESP',
      TimeZones: ['Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary'],
      WindowsTimeZones: [
        {
          Id: 'Romance Standard Time',
          Name: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        },
        {
          Id: 'GMT Standard Time',
          Name: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
        },
      ],
      CountryName: 'Spain',
      IsoAlpha2: 'ES',
    },
    {
      IsoAlpha3: 'LKA',
      TimeZones: ['Asia/Colombo'],
      WindowsTimeZones: [
        {
          Id: 'Sri Lanka Standard Time',
          Name: '(UTC+05:30) Sri Jayawardenepura',
        },
      ],
      CountryName: 'Sri Lanka',
      IsoAlpha2: 'LK',
    },
    {
      IsoAlpha3: 'SWE',
      TimeZones: ['Europe/Stockholm'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Sweden',
      IsoAlpha2: 'SE',
    },
    {
      IsoAlpha3: 'CHE',
      TimeZones: ['Europe/Zurich'],
      WindowsTimeZones: [
        {
          Id: 'W. Europe Standard Time',
          Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        },
      ],
      CountryName: 'Switzerland',
      IsoAlpha2: 'CH',
    },
    {
      IsoAlpha3: 'SYR',
      TimeZones: ['Asia/Damascus'],
      WindowsTimeZones: [
        { Id: 'Syria Standard Time', Name: '(UTC+02:00) Damascus' },
      ],
      CountryName: 'Syria',
      IsoAlpha2: 'SY',
    },
    {
      IsoAlpha3: 'TWN',
      TimeZones: ['Asia/Taipei'],
      WindowsTimeZones: [
        { Id: 'Taipei Standard Time', Name: '(UTC+08:00) Taipei' },
      ],
      CountryName: 'Taiwan',
      IsoAlpha2: 'TW',
    },
    {
      IsoAlpha3: 'TJK',
      TimeZones: ['Asia/Dushanbe'],
      WindowsTimeZones: [
        {
          Id: 'West Asia Standard Time',
          Name: '(UTC+05:00) Ashgabat, Tashkent',
        },
      ],
      CountryName: 'Tajikistan',
      IsoAlpha2: 'TJ',
    },
    {
      IsoAlpha3: 'THA',
      TimeZones: ['Asia/Bangkok'],
      WindowsTimeZones: [
        {
          Id: 'SE Asia Standard Time',
          Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        },
      ],
      CountryName: 'Thailand',
      IsoAlpha2: 'TH',
    },
    {
      IsoAlpha3: 'TTO',
      TimeZones: ['America/Port_of_Spain'],
      WindowsTimeZones: [
        {
          Id: 'SA Western Standard Time',
          Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        },
      ],
      CountryName: 'Trinidad and Tobago',
      IsoAlpha2: 'TT',
    },
    {
      IsoAlpha3: 'TUN',
      TimeZones: ['Africa/Tunis'],
      WindowsTimeZones: [
        {
          Id: 'W. Central Africa Standard Time',
          Name: '(UTC+01:00) West Central Africa',
        },
      ],
      CountryName: 'Tunisia',
      IsoAlpha2: 'TN',
    },
    {
      IsoAlpha3: 'TUR',
      TimeZones: ['Europe/Istanbul'],
      WindowsTimeZones: [
        { Id: 'Turkey Standard Time', Name: '(UTC+02:00) Istanbul' },
      ],
      CountryName: 'Turkey',
      IsoAlpha2: 'TR',
    },
    {
      IsoAlpha3: 'TKM',
      TimeZones: ['Asia/Ashgabat'],
      WindowsTimeZones: [
        {
          Id: 'West Asia Standard Time',
          Name: '(UTC+05:00) Ashgabat, Tashkent',
        },
      ],
      CountryName: 'Turkmenistan',
      IsoAlpha2: 'TM',
    },
    {
      IsoAlpha3: 'UKR',
      TimeZones: ['Europe/Kiev', 'Europe/Uzhgorod', 'Europe/Zaporozhye'],
      WindowsTimeZones: [
        {
          Id: 'FLE Standard Time',
          Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        },
      ],
      CountryName: 'Ukraine',
      IsoAlpha2: 'UA',
    },
    {
      IsoAlpha3: 'ARE',
      TimeZones: ['Asia/Dubai'],
      WindowsTimeZones: [
        { Id: 'Arabian Standard Time', Name: '(UTC+04:00) Abu Dhabi, Muscat' },
      ],
      CountryName: 'United Arab Emirates',
      IsoAlpha2: 'AE',
    },
    {
      IsoAlpha3: 'GBR',
      TimeZones: ['Europe/London'],
      WindowsTimeZones: [
        {
          Id: 'GMT Standard Time',
          Name: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
        },
      ],
      CountryName: 'United Kingdom',
      IsoAlpha2: 'GB',
    },
    {
      IsoAlpha3: 'USA',
      TimeZones: [
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Metlakatla',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'Pacific/Honolulu',
      ],
      WindowsTimeZones: [
        {
          Id: 'Eastern Standard Time',
          Name: '(UTC-05:00) Eastern Time (US & Canada)',
        },
        {
          Id: 'US Eastern Standard Time',
          Name: '(UTC-05:00) Indiana (East)',
        },
        {
          Id: 'Central Standard Time',
          Name: '(UTC-06:00) Central Time (US & Canada)',
        },
        {
          Id: 'Mountain Standard Time',
          Name: '(UTC-07:00) Mountain Time (US & Canada)',
        },
        { Id: 'US Mountain Standard Time', Name: '(UTC-07:00) Arizona' },
        {
          Id: 'Pacific Standard Time',
          Name: '(UTC-08:00) Pacific Time (US & Canada)',
        },
        { Id: 'Alaskan Standard Time', Name: '(UTC-09:00) Alaska' },
        { Id: 'Hawaiian Standard Time', Name: '(UTC-10:00) Hawaii' },
      ],
      CountryName: 'United States',
      IsoAlpha2: 'US',
    },
    {
      IsoAlpha3: 'URY',
      TimeZones: ['America/Montevideo'],
      WindowsTimeZones: [
        { Id: 'Montevideo Standard Time', Name: '(UTC-03:00) Montevideo' },
      ],
      CountryName: 'Uruguay',
      IsoAlpha2: 'UY',
    },
    {
      IsoAlpha3: 'UZB',
      TimeZones: ['Asia/Samarkand', 'Asia/Tashkent'],
      WindowsTimeZones: [
        {
          Id: 'West Asia Standard Time',
          Name: '(UTC+05:00) Ashgabat, Tashkent',
        },
      ],
      CountryName: 'Uzbekistan',
      IsoAlpha2: 'UZ',
    },
    {
      IsoAlpha3: 'VEN',
      TimeZones: ['America/Caracas'],
      WindowsTimeZones: [
        { Id: 'Venezuela Standard Time', Name: '(UTC-04:00) Caracas' },
      ],
      CountryName: 'Venezuela',
      IsoAlpha2: 'VE',
    },
    {
      IsoAlpha3: 'VNM',
      TimeZones: ['Asia/Ho_Chi_Minh'],
      WindowsTimeZones: [
        {
          Id: 'SE Asia Standard Time',
          Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        },
      ],
      CountryName: 'Vietnam',
      IsoAlpha2: 'VN',
    },
    {
      IsoAlpha3: 'YEM',
      TimeZones: ['Asia/Aden'],
      WindowsTimeZones: [
        { Id: 'Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
      ],
      CountryName: 'Yemen',
      IsoAlpha2: 'YE',
    },
    {
      IsoAlpha3: 'ZWE',
      TimeZones: ['Africa/Harare'],
      WindowsTimeZones: [
        {
          Id: 'South Africa Standard Time',
          Name: '(UTC+02:00) Harare, Pretoria',
        },
      ],
      CountryName: 'Zimbabwe',
      IsoAlpha2: 'ZW',
    },
  ];
  let countryName = tzData.find((country) => {
    if (country.TimeZones.find((tz) => tz === timezone)) return true;
    else return false;
  });
  //failsafe if timezone is invalid or if its not in the mapping JSON
  if (!countryName) return false;
  else {
    //Kudos to this article on how to tinker with emojis and bend them to match our need
    //https://medium.com/binary-passion/lets-turn-an-iso-country-code-into-a-unicode-emoji-shall-we-870c16e05aad
    const emoji = countryName.IsoAlpha2.toUpperCase().replace(/./g, (char) =>
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
    //voila! we found the emoji
    return emoji;
  }
};
export default tzToCountryEmoji;
