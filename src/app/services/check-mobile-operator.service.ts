import { Injectable } from '@angular/core';

@Injectable()
export class CheckMobileOperatorService {

  constructor() { }

  _(firstPart, secondPart){
		var result = []

    this.operators.forEach((value, index)=>{
			if (firstPart == value.codes.country_code) {

        value.codes.codes_op.forEach((value2, index)=>{
          //if ( (firstPart == value.codes.country_code) && (secondPart == value2)) result.push(value)
          //if (firstPart.indexOf(value.codes.country_code) + 1) result.push(value)
          // x 5
          for (var i=0; i<5; i++){
            var slNum = secondPart.slice(0, i)
            if ( (firstPart == value.codes.country_code) && (slNum == value2)) {
              if (!result.includes(value)) result.push(value)
            }
          }
        })
 
			}
    })
    
		if (result.length > 0) return result   
    return 'not found'
  }

  operators = [ {
        "country":"Andorra",
        "operator":"STA",
        "codes": {
            "country_code": "+376", "codes_op": [75]
        }
    }

    ,
    {
        "country":"Armenia",
        "operator":"Armentel",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Australia",
        "operator":"Telecom Australia (Telstra)",
        "codes": {
            "country_code": "+61", "codes_op": [417, 418, 419]
        }
    }

    ,
    {
        "country":"Australia",
        "operator":"Optus",
        "codes": {
            "country_code": "+61", "codes_op": [411, 412, 413]
        }
    }

    ,
    {
        "country":"Australia",
        "operator":"Vodafone PTY",
        "codes": {
            "country_code": "+61", "codes_op": [414, 415, 416]
        }
    }

    ,
    {
        "country":"Austria",
        "operator":"Mobilkom",
        "codes": {
            "country_code": "+43", "codes_op": [664]
        }
    }

    ,
    {
        "country":"Austria",
        "operator":"Max Mobil",
        "codes": {
            "country_code": "+43", "codes_op": [676]
        }
    }

    ,
    {
        "country":"Austria",
        "operator":"Connect ONE",
        "codes": {
            "country_code": "+43", "codes_op": [699]
        }
    }

    ,
    {
        "country":"Austria",
        "operator":"Telering",
        "codes": {
            "country_code": "+43", "codes_op": [650]
        }
    }

    ,
    {
        "country":"Azerbaijan",
        "operator":"Azercell",
        "codes": {
            "country_code": "+994", "codes_op": [50]
        }
    }

    ,
    {
        "country":"Azerbaijan",
        "operator":"Bakcell",
        "codes": {
            "country_code": "+994", "codes_op": [55]
        }
    }

    ,
    {
        "country":"Bahrain",
        "operator":"Bahrain Batelco",
        "codes": {
            "country_code": "+973", "codes_op": [96]
        }
    }

    ,
    {
        "country":"Bangladesh",
        "operator":"Grameen Phone Limited",
        "codes": {
            "country_code": "+880", "codes_op": [17]
        }
    }

    ,
    {
        "country":"Belarus",
        "operator":"MDC (Mobile Digital Comm.)",
        "codes": {
            "country_code": "+375", "codes_op": [296]
        }
    }

    ,
    {
        "country":"Belgium",
        "operator":"Belgacom (Proximus)",
        "codes": {
            "country_code": "+32", "codes_op": [75]
        }
    }

    ,
    {
        "country":"Belgium",
        "operator":"Mobistar",
        "codes": {
            "country_code": "+32", "codes_op": [95]
        }
    }

    ,
    {
        "country":"Belgium",
        "operator":"KPN Orange Belgium",
        "codes": {
            "country_code": "+32", "codes_op": [486]
        }
    }

    ,
    {
        "country": "Bosnia &amp; Herzegov.", "operator":"Eronet", "codes": {
            "country_code": "+387", "codes_op": [66]
        }
    }

    ,
    {
        "country": "Bosnia &amp; Herzegov.", "operator":"Mobilna Srpske", "codes": {
            "country_code": "+387", "codes_op": [66]
        }
    }

    ,
    {
        "country": "Bosnia &amp; Herzegov.", "operator":"BIH", "codes": {
            "country_code": "+387", "codes_op": [66]
        }
    }

    ,
    {
        "country":"Botswana",
        "operator":"Mascom",
        "codes": {
            "country_code": "+267", "codes_op": [71]
        }
    }

    ,
    {
        "country":"Botswana",
        "operator":"Vista Cellular",
        "codes": {
            "country_code": "+267", "codes_op": [7]
        }
    }

    ,
    {
        "country":"Brunei",
        "operator":"DST Communications Br.",
        "codes": {
            "country_code": "+673", "codes_op": [8]
        }
    }

    ,
    {
        "country":"Bulgaria",
        "operator":"MobilTEL AD",
        "codes": {
            "country_code": "+359", "codes_op": [88]
        }
    }

    ,
    {
        "country":"Cambodja",
        "operator":"CamGSM",
        "codes": {
            "country_code": "+855", "codes_op": [12]
        }
    }

    ,
    {
        "country":"Cambodja",
        "operator":"Casacom",
        "codes": {
            "country_code": "+855", "codes_op": [16]
        }
    }

    ,
    {
        "country":"Canada",
        "operator":"Microcell Canada",
        "codes": {
            "country_code": "+1", "codes_op": [514]
        }
    }

    ,
    {
        "country":"Chile",
        "operator":"Entel",
        "codes": {
            "country_code": "+56", "codes_op": [980, 981, 982]
        }
    }

    ,
    {
        "country":"China",
        "operator":"China Mobile",
        "codes": {
            "country_code": "+86", "codes_op": [139]
        }
    }

    ,
    {
        "country":"China",
        "operator":"China Unicom",
        "codes": {
            "country_code": "+86", "codes_op": [130]
        }
    }

    ,
    {
        "country":"Côte d'Ivoire",
        "operator":"SIM Ivoiris",
        "codes": {
            "country_code": "+225", "codes_op": [7]
        }
    }

    ,
    {
        "country":"Côte d'Ivoire",
        "operator":"Loteny Telecom",
        "codes": {
            "country_code": "+225", "codes_op": [5]
        }
    }

    ,
    {
        "country":"Croatia",
        "operator":"HPT Croatia",
        "codes": {
            "country_code": "+385", "codes_op": [98]
        }
    }

    ,
    {
        "country":"Croatia",
        "operator":"VIPnet",
        "codes": {
            "country_code": "+385", "codes_op": [91]
        }
    }

    ,
    {
        "country":"Cyprus",
        "operator":"CYTA",
        "codes": {
            "country_code": "+357", "codes_op": [9]
        }
    }

    ,
    {
        "country":"Czech Republic",
        "operator":"RadioMobil Czechia",
        "codes": {
            "country_code": "+420", "codes_op": [603]
        }
    }

    ,
    {
        "country":"Czech Republic",
        "operator":"EUROTEL Praha",
        "codes": {
            "country_code": "+420", "codes_op": [602]
        }
    }

    ,
    {
        "country":"Czech Republic",
        "operator":"Cesky Mobil",
        "codes": {
            "country_code": "+420", "codes_op": [608]
        }
    }

    ,
    {
        "country":"Denmark",
        "operator":"TeleDenmark Mobil",
        "codes": {
            "country_code": "+45", "codes_op": [401, 402, 403]
        }
    }

    ,
    {
        "country":"Denmark",
        "operator":"Dansk Mobil Telefon Sonofon",
        "codes": {
            "country_code": "+45", "codes_op": [405]
        }
    }

    ,
    {
        "country":"Denmark",
        "operator":"Telia AS Denmark",
        "codes": {
            "country_code": "+45", "codes_op": [28]
        }
    }

    ,
    {
        "country":"Denmark",
        "operator":"Mobilix",
        "codes": {
            "country_code": "+45", "codes_op": [26]
        }
    }

    ,
    {
        "country":"Egypt",
        "operator":"Mobinil",
        "codes": {
            "country_code": "+20", "codes_op": [12]
        }
    }

    ,
    {
        "country":"Egypt",
        "operator":"MisrFone",
        "codes": {
            "country_code": "+20", "codes_op": [10]
        }
    }

    ,
    {
        "country":"Equatorial Guinea",
        "operator":"Getesa",
        "codes": {
            "country_code": "+240", "codes_op": [7]
        }
    }

    ,
    {
        "country":"Estonia",
        "operator":"Estonian Mobile Telephone",
        "codes": {
            "country_code": "+372", "codes_op": [50]
        }
    }

    ,
    {
        "country":"Estonia",
        "operator":"Radiolinja Eesti",
        "codes": {
            "country_code": "+372", "codes_op": [565]
        }
    }

    ,
    {
        "country":"Estonia",
        "operator":"As Ritabell Estonia Q GSM",
        "codes": {
            "country_code": "+372", "codes_op": [55]
        }
    }

    ,
    {
        "country":"Faroese Island",
        "operator":"Faroese Telecom",
        "codes": {
            "country_code": "+298", "codes_op": [24]
        }
    }

    ,
    {
        "country":"Fiji",
        "operator":"Vodafone Fiji Ltd",
        "codes": {
            "country_code": "679", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Finland",
        "operator":"Radiolinja",
        "codes": {
            "country_code": "+358", "codes_op": [50]
        }
    }

    ,
    {
        "country":"Finland",
        "operator":"Sonera",
        "codes": {
            "country_code": "+358", "codes_op": [40]
        }
    }

    ,
    {
        "country":"Finland",
        "operator":"TELIA (TRP)",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"France",
        "operator":"France Télècom (Itinéris)",
        "codes": {
            "country_code": "+33", "codes_op": [607]
        }
    }

    ,
    {
        "country":"France",
        "operator":"SFR",
        "codes": {
            "country_code": "+33", "codes_op": [609]
        }
    }

    ,
    {
        "country":"France",
        "operator":"Bouygues Telecom",
        "codes": {
            "country_code": "+33", "codes_op": [660]
        }
    }

    ,
    {
        "country":"Georgia",
        "operator":"Geocell Georgia",
        "codes": {
            "country_code": "+995", "codes_op": [77]
        }
    }

    ,
    {
        "country":"Georgia",
        "operator":"Magticom Ltd.",
        "codes": {
            "country_code": "+995", "codes_op": [32]
        }
    }

    ,
    {
        "country":"Germany",
        "operator":"D1 DeTeMobil",
        "codes": {
            "country_code": "+49", "codes_op": [171]
        }
    }

    ,
    {
        "country":"Germany",
        "operator":"D2 Mannesmann",
        "codes": {
            "country_code": "+49", "codes_op": [172]
        }
    }

    ,
    {
        "country":"Germany",
        "operator":"E-plus",
        "codes": {
            "country_code": "+49", "codes_op": [177]
        }
    }

    ,
    {
        "country":"Germany",
        "operator":"VIAG Interkom",
        "codes": {
            "country_code": "+49", "codes_op": [179]
        }
    }

    ,
    {
        "country":"Ghana",
        "operator":"Scancom",
        "codes": {
            "country_code": "+233", "codes_op": [24]
        }
    }

    ,
    {
        "country":"Gibraltar",
        "operator":"Gibtel",
        "codes": {
            "country_code": "+350", "codes_op": [58]
        }
    }

    ,
    {
        "country":"Greece",
        "operator":"Cosmote",
        "codes": {
            "country_code": "+30", "codes_op": [97]
        }
    }

    ,
    {
        "country":"Greece",
        "operator":"Panafon",
        "codes": {
            "country_code": "+30", "codes_op": [94]
        }
    }

    ,
    {
        "country":"Greece",
        "operator":"STET Hellas",
        "codes": {
            "country_code": "+30", "codes_op": [93]
        }
    }

    ,
    {
        "country":"Greenland",
        "operator":"TELE Greenland",
        "codes": {
            "country_code": "+299", "codes_op": [49, 52, 53, 54, 55, 59]
        }
    }

    ,
    {
        "country":"Guadeloupe",
        "operator":"France Caraïble Mob.",
        "codes": {
            "country_code": "+590", "codes_op": [35]
        }
    }

    ,
    {
        "country":"Guernsey",
        "operator":"Guernsey Telecom",
        "codes": {
            "country_code": "+44", "codes_op": [4481]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"Cable Wireless (CWHKTCSL)",
        "codes": {
            "country_code": "+852", "codes_op": [902, 903, 904, 905, 906, 907, 908, 909]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"Hong Kong Hutchison",
        "codes": {
            "country_code": "+852", "codes_op": [904]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"SmarTone",
        "codes": {
            "country_code": "+852", "codes_op": [901]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"New World Telephone",
        "codes": {
            "country_code": "+852", "codes_op": [921]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"Peoples Phone",
        "codes": {
            "country_code": "+852", "codes_op": [920]
        }
    }

    ,
    {
        "country":"Hong Kong",
        "operator":"Sunday",
        "codes": {
            "country_code": "+852", "codes_op": [923]
        }
    }

    ,
    {
        "country":"Hungary",
        "operator":"Pannon GSM",
        "codes": {
            "country_code": "+36", "codes_op": [20]
        }
    }

    ,
    {
        "country":"Hungary",
        "operator":"Westel",
        "codes": {
            "country_code": "+36", "codes_op": [900, 30]
        }
    }

    ,
    {
        "country":"Hungary",
        "operator":"Vodafone",
        "codes": {
            "country_code": "+36", "codes_op": [70]
        }
    }

    ,
    {
        "country":"Iceland",
        "operator":"Landssiminn",
        "codes": {
            "country_code": "+354", "codes_op": [89]
        }
    }

    ,
    {
        "country":"Iceland",
        "operator":"TAL Ltd",
        "codes": {
            "country_code": "+354", "codes_op": [69]
        }
    }

    ,
    {
        "country":"India",
        "operator":"Escotel Haryana",
        "codes": {
            "country_code": "+91", "codes_op": [9812]
        }
    }

    ,
    {
        "country":"India",
        "operator":"Escotel Up West",
        "codes": {
            "country_code": "+91", "codes_op": [98370]
        }
    }

    ,
    {
        "country":"India (Bangalore, Hydera.)",
        "operator":"JTM",
        "codes": {
            "country_code": "+91", "codes_op": [9845]
        }
    }

    ,
    {
        "country":"India (Calcutta)",
        "operator":"Usha Martin",
        "codes": {
            "country_code": "+91", "codes_op": [9830]
        }
    }

    ,
    {
        "country":"India (Calcutta)",
        "operator":"Modi Telstra",
        "codes": {
            "country_code": "+91", "codes_op": [9831]
        }
    }

    ,
    {
        "country":"India (Delhi)",
        "operator":"Airtel Barthi India",
        "codes": {
            "country_code": "+91", "codes_op": [981]
        }
    }

    ,
    {
        "country":"India (Delhi)",
        "operator":"Sterling Cellular (Essar)",
        "codes": {
            "country_code": "+91", "codes_op": [9811]
        }
    }

    ,
    {
        "country": "India (Gujarat, Maha-", "operator": "Birla AT&amp;T", "codes": {
            "country_code": "+91", "codes_op": [9824]
        }
    }

    ,
    {
        "country":"India (Gujaret)",
        "operator":"Facsel",
        "codes": {
            "country_code": "+91", "codes_op": [9825]
        }
    }

    ,
    {
        "country":"India (Hyderabad)",
        "operator":"Tata Communications",
        "codes": {
            "country_code": "+91", "codes_op": [9848]
        }
    }

    ,
    {
        "country":"India (Karnataka)",
        "operator":"Spice Communications",
        "codes": {
            "country_code": "+91", "codes_op": [98440]
        }
    }

    ,
    {
        "country":"India (Madras)",
        "operator":"Skycell",
        "codes": {
            "country_code": "+91", "codes_op": [9840]
        }
    }

    ,
    {
        "country":"India (Madras)",
        "operator":"RPG Cellular Services Ltd.",
        "codes": {
            "country_code": "+91", "codes_op": [9841]
        }
    }

    ,
    {
        "country":"India (Maharashtra)",
        "operator":"BPL Cellular",
        "codes": {
            "country_code": "+91", "codes_op": [9846, 9843]
        }
    }

    ,
    {
        "country":"India (Mumbai)",
        "operator":"Hutchison Max Telecom",
        "codes": {
            "country_code": "+91", "codes_op": [9820]
        }
    }

    ,
    {
        "country":"India (Mumbai)",
        "operator":"BPL Mobile Communication",
        "codes": {
            "country_code": "+91", "codes_op": [9821]
        }
    }

    ,
    {
        "country":"India (Punjab)",
        "operator":"Spice Telecom Punjab",
        "codes": {
            "country_code": "+91", "codes_op": [9814]
        }
    }

    ,
    {
        "country":"India (Rajasthan)",
        "operator":"Hexacom",
        "codes": {
            "country_code": "+91", "codes_op": [9829]
        }
    }

    ,
    {
        "country":"India (Up West)",
        "operator":"Escotel",
        "codes": {
            "country_code": "+91", "codes_op": [98370]
        }
    }

    ,
    {
        "country":"Indonesia",
        "operator":"PT Satelit Palapa Ind. Satelindo",
        "codes": {
            "country_code": "+62", "codes_op": [816]
        }
    }

    ,
    {
        "country":"Indonesia",
        "operator":"Telekomunikasi (Telkomsel)",
        "codes": {
            "country_code": "+62", "codes_op": [811]
        }
    }

    ,
    {
        "country":"Indonesia",
        "operator":"Excelcomindo",
        "codes": {
            "country_code": "+62", "codes_op": [818]
        }
    }

    ,
    {
        "country":"Iran",
        "operator":"Telecom",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Ireland",
        "operator":"Eircell",
        "codes": {
            "country_code": "+353", "codes_op": [87]
        }
    }

    ,
    {
        "country":"Ireland",
        "operator":"Esat Digifone",
        "codes": {
            "country_code": "+353", "codes_op": [89]
        }
    }

    ,
    {
        "country":"Isle of Man (UK)",
        "operator":"Manx Telecom",
        "codes": {
            "country_code": "+44", "codes_op": [4624]
        }
    }

    ,
    {
        "country":"Israel",
        "operator":"Partner Communications",
        "codes": {
            "country_code": "+972", "codes_op": [54]
        }
    }

    ,
    {
        "country":"Italy",
        "operator":"Telecom\nItalia",
        "codes": {
            "country_code": "+39", "codes_op": [335, 338, 339]
        }
    }

    ,
    {
        "country":"Italy",
        "operator":"Omnitel\nPronto",
        "codes": {
            "country_code": "+39", "codes_op": [34]
        }
    }

    ,
    {
        "country":"Italy",
        "operator":"Wind",
        "codes": {
            "country_code": "+39", "codes_op": [320]
        }
    }

    ,
    {
        "country":"Italy",
        "operator":"Blu",
        "codes": {
            "country_code": "+39", "codes_op": [380]
        }
    }

    ,
    {
        "country":"Jersey (UK)",
        "operator":"Jersey\nTelecoms",
        "codes": {
            "country_code": "+44", "codes_op": [97]
        }
    }

    ,
    {
        "country":"Jordania",
        "operator":"Fastlink",
        "codes": {
            "country_code": "+962", "codes_op": [79]
        }
    }

    ,
    {
        "country":"Jordania",
        "operator":"MobileCom",
        "codes": {
            "country_code": "+962", "codes_op": [77]
        }
    }

    ,
    {
        "country":"Kazakhstan",
        "operator":"K-Mobile\n(Kar Tel)",
        "codes": {
            "country_code": "+7", "codes_op": [333]
        }
    }

    ,
    {
        "country":"Kazakhstan",
        "operator":"K'Cell GSM",
        "codes": {
            "country_code": "+7", "codes_op": [300]
        }
    }

    ,
    {
        "country":"Kenya",
        "operator":"Kencell",
        "codes": {
            "country_code": "63903", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Kenya",
        "operator":"Post and\nTelecom Corp.",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Kosovo",
        "operator":"Monaco\nTelecom (Vala)",
        "codes": {
            "country_code": "+377", "codes_op": [44]
        }
    }

    ,
    {
        "country":"Kuwait",
        "operator":"MTC",
        "codes": {
            "country_code": "+965", "codes_op": [96]
        }
    }

    ,
    {
        "country":"Kuwait",
        "operator":"Wataniya\nTelecom",
        "codes": {
            "country_code": "+965", "codes_op": [6]
        }
    }

    ,
    {
        "country":"Kyrgyzstan",
        "operator":"Bitel",
        "codes": {
            "country_code": "+996", "codes_op": [502]
        }
    }

    ,
    {
        "country":"Laos",
        "operator":"Shinawarta int.",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Latvia",
        "operator":"LMT",
        "codes": {
            "country_code": "+371", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Latvia",
        "operator":"TELE 2",
        "codes": {
            "country_code": "+371", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Lebanon",
        "operator":"FTML Lebanon",
        "codes": {
            "country_code": "+961", "codes_op": [34]
        }
    }

    ,
    {
        "country":"Lebanon",
        "operator":"Libancell Lebanon",
        "codes": {
            "country_code": "+961", "codes_op": [37]
        }
    }

    ,
    {
        "country":"Liechtenstein",
        "operator":"Swisscom Mobile",
        "codes": {
            "country_code": "+41", "codes_op": [79]
        }
    }

    ,
    {
        "country":"Liechtenstein",
        "operator":"TANGO",
        "codes": {
            "country_code": "+423", "codes_op": [76]
        }
    }

    ,
    {
        "country":"Lithuania",
        "operator":"Omnitel Lithuania",
        "codes": {
            "country_code": "+370", "codes_op": [98]
        }
    }

    ,
    {
        "country":"Lithuania",
        "operator":"Bite GSM",
        "codes": {
            "country_code": "+370", "codes_op": [99]
        }
    }

    ,
    {
        "country": "Luxembourg", "operator": "P&amp;T\nLuxembourg", "codes": {
            "country_code": "+352", "codes_op": [21]
        }
    }

    ,
    {
        "country":"Luxembourg",
        "operator":"Milicom/Tango",
        "codes": {
            "country_code": "+352", "codes_op": [91]
        }
    }

    ,
    {
        "country":"Macau",
        "operator":"CTM",
        "codes": {
            "country_code": "+853", "codes_op": [68]
        }
    }

    ,
    {
        "country":"Macedonia",
        "operator":"Mobimak",
        "codes": {
            "country_code": "+389", "codes_op": [70]
        }
    }

    ,
    {
        "country":"Madagascar",
        "operator":"Madacom SA",
        "codes": {
            "country_code": "+261", "codes_op": [33]
        }
    }

    ,
    {
        "country":"Malaysia",
        "operator":"Maxis (Binariang)",
        "codes": {
            "country_code": "+60", "codes_op": [12]
        }
    }

    ,
    {
        "country":"Malaysia",
        "operator":"TM Touch",
        "codes": {
            "country_code": "+60", "codes_op": [13]
        }
    }

    ,
    {
        "country":"Malaysia",
        "operator":"Mutiara",
        "codes": {
            "country_code": "+60", "codes_op": [16]
        }
    }

    ,
    {
        "country":"Malaysia",
        "operator":"Time Wireless (Sapura)",
        "codes": {
            "country_code": "+60", "codes_op": [17]
        }
    }

    ,
    {
        "country":"Malaysia",
        "operator":"Celcom Malaysia",
        "codes": {
            "country_code": "+60", "codes_op": [19]
        }
    }

    ,
    {
        "country":"Maldives",
        "operator":"Dhiraagu",
        "codes": {
            "country_code": "+960", "codes_op": [77, 78, 79]
        }
    }

    ,
    {
        "country":"Malta",
        "operator":"Vodafone",
        "codes": {
            "country_code": "+356", "codes_op": [94]
        }
    }

    ,
    {
        "country":"Marokko",
        "operator":"Meditelecom",
        "codes": {
            "country_code": "+212", "codes_op": [3]
        }
    }

    ,
    {
        "country":"Marokko",
        "operator":"ONPT",
        "codes": {
            "country_code": "+212", "codes_op": [213]
        }
    }

    ,
    {
        "country":"Martinique",
        "operator":"France Caraïble Mobiles (FCM)",
        "codes": {
            "country_code": "+590", "codes_op": [35]
        }
    }

    ,
    {
        "country":"Mauritius",
        "operator":"Cellplus",
        "codes": {
            "country_code": "+230", "codes_op": [25]
        }
    }

    ,
    {
        "country":"Mauritius",
        "operator":"Emtel",
        "codes": {
            "country_code": "+230", "codes_op": [72]
        }
    }

    ,
    {
        "country":"Moldova Rep.",
        "operator":"Moldcell",
        "codes": {
            "country_code": "+373", "codes_op": [94]
        }
    }

    ,
    {
        "country":"Moldova Rep.",
        "operator":"Voxtel SA",
        "codes": {
            "country_code": "+373", "codes_op": [91]
        }
    }

    ,
    {
        "country":"Monaco",
        "operator":"France Telecom or SFR",
        "codes": {
            "country_code": "-", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Mongolia",
        "operator":"Mobicom",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Mozambique",
        "operator":"TDM",
        "codes": {
            "country_code": "+258", "codes_op": [82]
        }
    }

    ,
    {
        "country":"Namibia",
        "operator":"MTC Namibia",
        "codes": {
            "country_code": "+264", "codes_op": [81]
        }
    }

    ,
    {
        "country":"Netherlands",
        "operator":"Libertel",
        "codes": {
            "country_code": "+31", "codes_op": [654]
        }
    }

    ,
    {
        "country":"Netherlands",
        "operator":"Telecom PTT",
        "codes": {
            "country_code": "+31", "codes_op": [653]
        }
    }

    ,
    {
        "country":"Netherlands",
        "operator":"Telfort",
        "codes": {
            "country_code": "+31", "codes_op": [626]
        }
    }

    ,
    {
        "country":"Netherlands",
        "operator":"Ben",
        "codes": {
            "country_code": "+31", "codes_op": [624]
        }
    }

    ,
    {
        "country":"Netherlands",
        "operator":"DutchTone",
        "codes": {
            "country_code": "+31", "codes_op": [628]
        }
    }

    ,
    {
        "country":"New Zealand",
        "operator":"Vodafone N.Z. (Bell N.Z.)",
        "codes": {
            "country_code": "+64", "codes_op": [21]
        }
    }

    ,
    {
        "country":"Norway",
        "operator":"Telenor Mobil",
        "codes": {
            "country_code": "+47", "codes_op": [900]
        }
    }

    ,
    {
        "country":"Norway",
        "operator":"NetCom GSM",
        "codes": {
            "country_code": "+47", "codes_op": [920]
        }
    }

    ,
    {
        "country":"Oman",
        "operator":"GTO Ministry of PTT",
        "codes": {
            "country_code": "968", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Pakistan",
        "operator":"PMC Mobilink",
        "codes": {
            "country_code": "+92", "codes_op": [300]
        }
    }

    ,
    {
        "country":"Palestinian",
        "operator":"Authority Paltel",
        "codes": {
            "country_code": "+972", "codes_op": [59]
        }
    }

    ,
    {
        "country":"Philippines",
        "operator":"ISLACOM",
        "codes": {
            "country_code": "+63", "codes_op": [915]
        }
    }

    ,
    {
        "country":"Philippines",
        "operator":"Globe Telecom",
        "codes": {
            "country_code": "+63", "codes_op": [917]
        }
    }

    ,
    {
        "country":"Philippines",
        "operator":"Smart",
        "codes": {
            "country_code": "69.55168662", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Poland",
        "operator":"Polkom Tel",
        "codes": {
            "country_code": "+48", "codes_op": [601]
        }
    }

    ,
    {
        "country":"Poland",
        "operator":"Polska Telefonia Cyfrowa",
        "codes": {
            "country_code": "+48", "codes_op": [602]
        }
    }

    ,
    {
        "country":"Poland",
        "operator":"Centertel",
        "codes": {
            "country_code": "+48", "codes_op": [501]
        }
    }

    ,
    {
        "country":"Portugal",
        "operator":"Telecel (TLCL)",
        "codes": {
            "country_code": "+351", "codes_op": [931]
        }
    }

    ,
    {
        "country":"Portugal",
        "operator":"Optimus",
        "codes": {
            "country_code": "+351", "codes_op": [933]
        }
    }

    ,
    {
        "country":"Portugal",
        "operator":"Telemovel (TMN)",
        "codes": {
            "country_code": "+351", "codes_op": [936]
        }
    }

    ,
    {
        "country":"Qatar",
        "operator":"Q-Tel",
        "codes": {
            "country_code": "+974", "codes_op": [5]
        }
    }

    ,
    {
        "country":"Rép. d'Algérie",
        "operator":"MPTT",
        "codes": {
            "country_code": "+213", "codes_op": [1]
        }
    }

    ,
    {
        "country":"Réunion",
        "operator":"SRR, Société Réun. du Radio.",
        "codes": {
            "country_code": "262", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Romania",
        "operator":"Mobifon",
        "codes": {
            "country_code": "+40", "codes_op": [92]
        }
    }

    ,
    {
        "country":"Romania",
        "operator":"CosmoRom",
        "codes": {
            "country_code": "+40", "codes_op": [96]
        }
    }

    ,
    {
        "country":"Romania",
        "operator":"Mobilrom",
        "codes": {
            "country_code": "+40", "codes_op": [94]
        }
    }

    ,
    {
        "country":"Russia",
        "operator":"Far-Eastern",
        "codes": {
            "country_code": "+7", "codes_op": [902]
        }
    }

    ,
    {
        "country":"Russia",
        "operator":"Ermak RMS",
        "codes": {
            "country_code": "+7", "codes_op": [346]
        }
    }

    ,
    {
        "country":"Russia (Ekaterinburg)",
        "operator":"Uraltel Ltd.",
        "codes": {
            "country_code": "+7", "codes_op": [343]
        }
    }

    ,
    {
        "country":"Russia (Kaliningrad)",
        "operator":"Extel",
        "codes": {
            "country_code": "+7", "codes_op": [119]
        }
    }

    ,
    {
        "country":"Russia (Krasnodar)",
        "operator":"Kuban GSM",
        "codes": {
            "country_code": "+7", "codes_op": [90243]
        }
    }

    ,
    {
        "country":"Russia (Moskau)",
        "operator":"MTS Moscow",
        "codes": {
            "country_code": "+7", "codes_op": [95]
        }
    }

    ,
    {
        "country":"Russia (Nizhny Novgorod)",
        "operator":"NCC",
        "codes": {
            "country_code": "+7", "codes_op": [90270]
        }
    }

    ,
    {
        "country":"Russia (Novosibirsk)",
        "operator":"Siberian\nCellular Systems",
        "codes": {
            "country_code": "+7", "codes_op": [902]
        }
    }

    ,
    {
        "country":"Russia (Rostov)",
        "operator":"DonTelecom",
        "codes": {
            "country_code": "+7", "codes_op": [90245]
        }
    }

    ,
    {
        "country":"Russia (Samara)",
        "operator":"Zao Smarts",
        "codes": {
            "country_code": "+7", "codes_op": [902370]
        }
    }

    ,
    {
        "country":"Russia (St.Petersb.)",
        "operator":"North-West GSM",
        "codes": {
            "country_code": "+7", "codes_op": [812]
        }
    }

    ,
    {
        "country":"Russia (Stavropol)",
        "operator":"StavTeleSot",
        "codes": {
            "country_code": "+7", "codes_op": [865]
        }
    }

    ,
    {
        "country":"Russia Moscow",
        "operator":"KB Impuls",
        "codes": {
            "country_code": "+7", "codes_op": [95]
        }
    }

    ,
    {
        "country":"San Marino",
        "operator":"Telecom Italia or Omnitel",
        "codes": {
            "country_code": "-", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Saudi Arabia",
        "operator":"MOPTT",
        "codes": {
            "country_code": "+966", "codes_op": [55]
        }
    }

    ,
    {
        "country":"Saudi Arabia",
        "operator":"EAE Aljawwal",
        "codes": {
            "country_code": "+966", "codes_op": [1299]
        }
    }

    ,
    {
        "country":"Senegal",
        "operator":"Sonatel Alize",
        "codes": {
            "country_code": "+221", "codes_op": [63]
        }
    }

    ,
    {
        "country":"Senegal",
        "operator":"Sentel",
        "codes": {
            "country_code": "+221", "codes_op": [68]
        }
    }

    ,
    {
        "country": "Seychelles", "operator": "Cable &amp; Wireless", "codes": {
            "country_code": "24851", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Seychelles",
        "operator":"Airtel Telecom Ltd",
        "codes": {
            "country_code": "+248", "codes_op": [7]
        }
    }

    ,
    {
        "country":"Singapore",
        "operator":"Singapore Telecom",
        "codes": {
            "country_code": "+65", "codes_op": [15]
        }
    }

    ,
    {
        "country":"Singapore",
        "operator":"Singapore Mobilink",
        "codes": {
            "country_code": "65", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Singapore",
        "operator":"MobileOne",
        "codes": {
            "country_code": "+65", "codes_op": [9]
        }
    }

    ,
    {
        "country":"Singapore",
        "operator":"StarHub",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Slovakia",
        "operator":"Globtel Slovakia",
        "codes": {
            "country_code": "+421", "codes_op": [905]
        }
    }

    ,
    {
        "country":"Slovakia",
        "operator":"Eurotel Bratislava",
        "codes": {
            "country_code": "+421", "codes_op": [903]
        }
    }

    ,
    {
        "country":"Slovenia",
        "operator":"SI.Mobil",
        "codes": {
            "country_code": "+386", "codes_op": [40]
        }
    }

    ,
    {
        "country":"Slovenia",
        "operator":"Mobitel",
        "codes": {
            "country_code": "+386", "codes_op": [41]
        }
    }

    ,
    {
        "country":"South Africa",
        "operator":"Vodacom",
        "codes": {
            "country_code": "+27", "codes_op": [82]
        }
    }

    ,
    {
        "country":"South Africa",
        "operator":"MTN",
        "codes": {
            "country_code": "+27", "codes_op": [83]
        }
    }

    ,
    {
        "country":"Spain",
        "operator":"Airtel Movil",
        "codes": {
            "country_code": "+34", "codes_op": [7]
        }
    }

    ,
    {
        "country":"Spain",
        "operator":"Retevision",
        "codes": {
            "country_code": "+34", "codes_op": [656]
        }
    }

    ,
    {
        "country":"Spain",
        "operator":"Telefonica Moviles",
        "codes": {
            "country_code": "+34", "codes_op": [90]
        }
    }

    ,
    {
        "country":"Sri Lanka",
        "operator":"MTN Sri Lanka",
        "codes": {
            "country_code": "+94", "codes_op": [77]
        }
    }

    ,
    {
        "country":"Sudan",
        "operator":"Mobitel",
        "codes": {
            "country_code": "+249", "codes_op": [12]
        }
    }

    ,
    {
        "country":"Sweden",
        "operator":"Telia Mobitel",
        "codes": {
            "country_code": "+46", "codes_op": [705, 706]
        }
    }

    ,
    {
        "country":"Sweden",
        "operator":"Comviq",
        "codes": {
            "country_code": "+46", "codes_op": [707]
        }
    }

    ,
    {
        "country":"Sweden",
        "operator":"NordicTel (Europolitan)",
        "codes": {
            "country_code": "+46", "codes_op": [708]
        }
    }

    ,
    {
        "country":"Switzerland",
        "operator":"Swisscom Mobile",
        "codes": {
            "country_code": "+41", "codes_op": [79]
        }
    }

    ,
    {
        "country":"Switzerland",
        "operator":"diAx",
        "codes": {
            "country_code": "+41", "codes_op": [76]
        }
    }

    ,
    {
        "country":"Switzerland",
        "operator":"Orange Communications SA",
        "codes": {
            "country_code": "+41", "codes_op": [78]
        }
    }

    ,
    {
        "country":"Tahiti",
        "operator":"Tikiphone",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"Far EasTone Telecoms",
        "codes": {
            "country_code": "+886", "codes_op": [936]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"KG Telecom",
        "codes": {
            "country_code": "+886", "codes_op": [9383]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"Chunghwa (LDTA)",
        "codes": {
            "country_code": "+886", "codes_op": [92]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"Mobitai Communications",
        "codes": {
            "country_code": "+886", "codes_op": [9316]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"Taiwan Cellular Corp.",
        "codes": {
            "country_code": "+886", "codes_op": [93]
        }
    }

    ,
    {
        "country":"Taiwan",
        "operator":"TransAsia Telecoms",
        "codes": {
            "country_code": "+886", "codes_op": [931]
        }
    }

    ,
    {
        "country":"Tanzania",
        "operator":"Tritel",
        "codes": {
            "country_code": "+855", "codes_op": [812]
        }
    }

    ,
    {
        "country":"Thailand",
        "operator":"AIS",
        "codes": {
            "country_code": "+66", "codes_op": [1]
        }
    }

    ,
    {
        "country":"Thailand",
        "operator":"TAC",
        "codes": {
            "country_code": "+66", "codes_op": [16]
        }
    }

    ,
    {
        "country":"Thailand",
        "operator":"Digital Phone Co Ltd",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Thailand",
        "operator":"WCS",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Togo",
        "operator":"Togo Cellulaire",
        "codes": {
            "country_code": "-", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Tunisia",
        "operator":"Tunicell",
        "codes": {
            "country_code": "+216", "codes_op": [9]
        }
    }

    ,
    {
        "country":"Turkey",
        "operator":"Turkcell",
        "codes": {
            "country_code": "+90", "codes_op": [532]
        }
    }

    ,
    {
        "country":"Turkey",
        "operator":"Telsim",
        "codes": {
            "country_code": "+90", "codes_op": [542]
        }
    }

    ,
    {
        "country":"Uganda",
        "operator":"CelTel",
        "codes": {
            "country_code": "+256", "codes_op": [75]
        }
    }

    ,
    {
        "country":"Uganda",
        "operator":"MTN Uganda Limited",
        "codes": {
            "country_code": "+256", "codes_op": [77]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"UMC Ukrainian Mobile Communication",
        "codes": {
            "country_code": "+380", "codes_op": [50]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"UMC, Sim-Sim",
        "codes": {
            "country_code": "+380", "codes_op": [95]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"UMC, Jeans",
        "codes": {
            "country_code": "+380", "codes_op": [66]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"UMC, Jeans",
        "codes": {
            "country_code": "+380", "codes_op": [96]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"UMC, Jeans",
        "codes": {
            "country_code": "+380", "codes_op": [99]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"Ukrainian Beeline, Wellcome, Mobi",
        "codes": {
            "country_code": "+380", "codes_op": [68]
        }
    }

    ,
    {
        "country": "Ukraine", "operator": "Kyivstar GSM, Ace &amp; Base", "codes": {
            "country_code": "+380", "codes_op": [67]
        }
    }

    ,
    {
        "country": "Ukraine", "operator": "Kyivstar GSM, Ace &amp; Base", "codes": {
            "country_code": "+380", "codes_op": [96]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"Kyivstar GSM, DJuice",
        "codes": {
            "country_code": "+380", "codes_op": [97]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"Kyivstar GSM, DJuice",
        "codes": {
            "country_code": "+380", "codes_op": [98]
        }
    }

    ,
    {
        "country": "Ukraine", "operator": "Life:) Astelit", "codes": {
            "country_code": "+380", "codes_op": [63]
        }
    }

    ,
    {
        "country": "Ukraine", "operator": "Life:) Astelit", "codes": {
            "country_code": "+380", "codes_op": [93]
        }
    }

    ,
    {
        "country":"Ukraine",
        "operator":"Golden Telecom",
        "codes": {
            "country_code": "+380", "codes_op": [39]
        }
    }

    ,
    {
        "country":"United Arab Emirates",
        "operator":"Etisalat",
        "codes": {
            "country_code": "+971", "codes_op": [50]
        }
    }

    ,
    {
        "country":"United Kingdom",
        "operator":"Cellnet Securicor",
        "codes": {
            "country_code": "+44", "codes_op": [802]
        }
    }

    ,
    {
        "country":"United Kingdom",
        "operator":"Vodafone",
        "codes": {
            "country_code": "+44", "codes_op": [385]
        }
    }

    ,
    {
        "country":"United Kingdom",
        "operator":"Mercury ONE 2 ONE",
        "codes": {
            "country_code": "+44", "codes_op": [956]
        }
    }

    ,
    {
        "country":"United Kingdom",
        "operator":"ORANGE",
        "codes": {
            "country_code": "+44", "codes_op": [973]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Bell South Mobility",
        "codes": {
            "country_code": "+1", "codes_op": [423, null]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Voicestream Eastcoast",
        "codes": {
            "country_code": "+1", "codes_op": [201]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Pacific Bell Mobile",
        "codes": {
            "country_code": "+1", "codes_op": [209]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Powertel",
        "codes": {
            "country_code": "-366", "codes_op": [null]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Voicestream Midwest",
        "codes": {
            "country_code": "+1", "codes_op": [813]
        }
    }

    ,
    {
        "country":"USA",
        "operator":"Voicestream Wireless",
        "codes": {
            "country_code": "+1", "codes_op": [179]
        }
    }

    ,
    {
        "country":"Uzbekistan",
        "operator":"Coscom",
        "codes": {
            "country_code": "+998", "codes_op": [93]
        }
    }

    ,
    {
        "country":"Vatican",
        "operator":"Telecom Italia or Omnitel",
        "codes": {
            "country_code": "-", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Venezuela",
        "operator":"Digitel",
        "codes": {
            "country_code": "+58", "codes_op": [12]
        }
    }

    ,
    {
        "country":"Venezuela",
        "operator":"Diginet",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Venezuela",
        "operator":"Infonet",
        "codes": {
            "country_code": "planned", "codes_op": [null]
        }
    }

    ,
    {
        "country":"Vietnam",
        "operator":"VMS MobiFone",
        "codes": {
            "country_code": "+84", "codes_op": [90]
        }
    }

    ,
    {
        "country":"Vietnam",
        "operator":"VinaPhone GSM",
        "codes": {
            "country_code": "+84", "codes_op": [91]
        }
    }

    ,
    {
        "country":"Yugoslavia",
        "operator":"Montenegro Promonte GSM",
        "codes": {
            "country_code": "+381", "codes_op": [69]
        }
    }

    ,
    {
        "country":"Yugoslavia, Srbija",
        "operator":"Mobtel",
        "codes": {
            "country_code": "+381", "codes_op": [63]
        }
    }

    ,
    {
        "country":"Zimbabwe",
        "operator":"NetOne",
        "codes": {
            "country_code": "+263", "codes_op": [11]
        }
    }

    ,
    {
        "country":"Zimbabwe",
        "operator":"Telecel",
        "codes": {
            "country_code": "+263", "codes_op": [23]
        }
    }

    ,
    {
        "country":"Zimbabwe",
        "operator":"Econet",
        "codes": {
            "country_code": "+263", "codes_op": [91]
        }
    }

  ]

}
