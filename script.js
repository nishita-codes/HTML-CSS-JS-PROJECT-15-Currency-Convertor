
const populate=async(currency, value)=>{
    let myStr = "";
// url="https://api.currencyapi.com/v3/latest?apikey=cur_live_DUmxoDfzihQ44zU6qQkUHcy5veZH2wBRi1Nc7PTd&base_currency"
// let response = await fetch(url);
// let data = await response.json();
let rJson = JSON.parse(`{
  "meta": {
    "last_updated_at": "2025-01-22T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 1.0182070539
    },
    "AED": {
      "code": "AED",
      "value": 3.6721106731
    },
    "AFN": {
      "code": "AFN",
      "value": 75.0109339827
    },
    "ALL": {
      "code": "ALL",
      "value": 94.4572229685
    },
    "AMD": {
      "code": "AMD",
      "value": 399.3820303136
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7864602604
    },
    "AOA": {
      "code": "AOA",
      "value": 915.0919228315
    },
    "ARB": {
      "code": "ARB",
      "value": 1.4273646003
    },
    "ARS": {
      "code": "ARS",
      "value": 1046.99002358
    },
    "AUD": {
      "code": "AUD",
      "value": 1.594110289
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.027194154
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.8772103731
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 121.7805249333
    },
    "BGN": {
      "code": "BGN",
      "value": 1.8695403559
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2910.438664772
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.0014392122
    },
    "BND": {
      "code": "BND",
      "value": 1.3540202505
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9346512904
    },
    "BRL": {
      "code": "BRL",
      "value": 5.9277906145
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000096401
    },
    "BTN": {
      "code": "BTN",
      "value": 86.5105289907
    },
    "BWP": {
      "code": "BWP",
      "value": 13.9082922867
    },
    "BYN": {
      "code": "BYN",
      "value": 3.26997247
    },
    "BYR": {
      "code": "BYR",
      "value": 32699.739591867
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.4392502835
    },
    "CDF": {
      "code": "CDF",
      "value": 2838.4840214916
    },
    "CHF": {
      "code": "CHF",
      "value": 0.9064101688
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0254200042
    },
    "CLP": {
      "code": "CLP",
      "value": 991.8057349022
    },
    "CNY": {
      "code": "CNY",
      "value": 7.2722811771
    },
    "COP": {
      "code": "COP",
      "value": 4264.7145734336
    },
    "CRC": {
      "code": "CRC",
      "value": 502.6110857396
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 105.8026884342
    },
    "CZK": {
      "code": "CZK",
      "value": 24.1349633066
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9998409879
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 7.1669712372
    },
    "DOP": {
      "code": "DOP",
      "value": 61.286180024
    },
    "DOT": {
      "code": "DOT",
      "value": 0.1552890524
    },
    "DZD": {
      "code": "DZD",
      "value": 135.469802433
    },
    "EGP": {
      "code": "EGP",
      "value": 50.3085386865
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 126.1887837253
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0003084625
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9606801457
    },
    "FJD": {
      "code": "FJD",
      "value": 2.3347402654
    },
    "FKP": {
      "code": "FKP",
      "value": 0.8120952616
    },
    "GBP": {
      "code": "GBP",
      "value": 0.8121301556
    },
    "GEL": {
      "code": "GEL",
      "value": 2.8553504513
    },
    "GGP": {
      "code": "GGP",
      "value": 0.8120957551
    },
    "GHS": {
      "code": "GHS",
      "value": 15.1010722191
    },
    "GIP": {
      "code": "GIP",
      "value": 0.8120952694
    },
    "GMD": {
      "code": "GMD",
      "value": 72.0158773329
    },
    "GNF": {
      "code": "GNF",
      "value": 8653.5709309514
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.7077708176
    },
    "GYD": {
      "code": "GYD",
      "value": 208.9090984172
    },
    "HKD": {
      "code": "HKD",
      "value": 7.7855010386
    },
    "HNL": {
      "code": "HNL",
      "value": 25.487974977
    },
    "HRK": {
      "code": "HRK",
      "value": 6.8750812005
    },
    "HTG": {
      "code": "HTG",
      "value": 132.572932114
    },
    "HUF": {
      "code": "HUF",
      "value": 394.3257259727
    },
    "IDR": {
      "code": "IDR",
      "value": 16262.579763399
    },
    "ILS": {
      "code": "ILS",
      "value": 3.546430438
    },
    "IMP": {
      "code": "IMP",
      "value": 0.8120950808
    },
    "INR": {
      "code": "INR",
      "value": 86.4358237482
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.9924060974
    },
    "IRR": {
      "code": "IRR",
      "value": 42007.915026569
    },
    "ISK": {
      "code": "ISK",
      "value": 140.232935115
    },
    "JEP": {
      "code": "JEP",
      "value": 0.8120952691
    },
    "JMD": {
      "code": "JMD",
      "value": 156.7638500787
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 156.4487397915
    },
    "KES": {
      "code": "KES",
      "value": 129.4975857114
    },
    "KGS": {
      "code": "KGS",
      "value": 87.8611024972
    },
    "KHR": {
      "code": "KHR",
      "value": 4027.994767358
    },
    "KMF": {
      "code": "KMF",
      "value": 472.4461144603
    },
    "KPW": {
      "code": "KPW",
      "value": 899.9940384199
    },
    "KRW": {
      "code": "KRW",
      "value": 1433.8481622341
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3078600458
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 520.3959298022
    },
    "LAK": {
      "code": "LAK",
      "value": 21689.55765108
    },
    "LBP": {
      "code": "LBP",
      "value": 89557.64865675
    },
    "LKR": {
      "code": "LKR",
      "value": 299.5655615863
    },
    "LRD": {
      "code": "LRD",
      "value": 194.9469662138
    },
    "LSL": {
      "code": "LSL",
      "value": 18.5004025157
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0086805474
    },
    "LTL": {
      "code": "LTL",
      "value": 3.3173166642
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6752228627
    },
    "LYD": {
      "code": "LYD",
      "value": 4.9160106229
    },
    "MAD": {
      "code": "MAD",
      "value": 9.9892014927
    },
    "MATIC": {
      "code": "MATIC",
      "value": 2.2644115
    },
    "MDL": {
      "code": "MDL",
      "value": 18.5296434846
    },
    "MGA": {
      "code": "MGA",
      "value": 4699.1877997885
    },
    "MKD": {
      "code": "MKD",
      "value": 58.9416367193
    },
    "MMK": {
      "code": "MMK",
      "value": 2098.1949526082
    },
    "MNT": {
      "code": "MNT",
      "value": 3438.3200494272
    },
    "MOP": {
      "code": "MOP",
      "value": 8.0120811762
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.8200463946
    },
    "MUR": {
      "code": "MUR",
      "value": 46.4091764161
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4476117167
    },
    "MWK": {
      "code": "MWK",
      "value": 1733.9952883286
    },
    "MXN": {
      "code": "MXN",
      "value": 20.4920739295
    },
    "MYR": {
      "code": "MYR",
      "value": 4.4358707066
    },
    "MZN": {
      "code": "MZN",
      "value": 63.5418708595
    },
    "NAD": {
      "code": "NAD",
      "value": 18.4700330116
    },
    "NGN": {
      "code": "NGN",
      "value": 1550.9005478647
    },
    "NIO": {
      "code": "NIO",
      "value": 36.8000023382
    },
    "NOK": {
      "code": "NOK",
      "value": 11.2795914927
    },
    "NPR": {
      "code": "NPR",
      "value": 138.6638971753
    },
    "NZD": {
      "code": "NZD",
      "value": 1.7658903218
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3838800545
    },
    "OP": {
      "code": "OP",
      "value": 0.5831864355
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9990201641
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7187006854
    },
    "PGK": {
      "code": "PGK",
      "value": 4.0290204159
    },
    "PHP": {
      "code": "PHP",
      "value": 58.5323258862
    },
    "PKR": {
      "code": "PKR",
      "value": 278.7920783701
    },
    "PLN": {
      "code": "PLN",
      "value": 4.0546406356
    },
    "PYG": {
      "code": "PYG",
      "value": 7933.5123204053
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6396405244
    },
    "RON": {
      "code": "RON",
      "value": 4.7791708113
    },
    "RSD": {
      "code": "RSD",
      "value": 112.2469368541
    },
    "RUB": {
      "code": "RUB",
      "value": 99.2398629964
    },
    "RWF": {
      "code": "RWF",
      "value": 1384.0646577752
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7460606972
    },
    "SBD": {
      "code": "SBD",
      "value": 8.4647391524
    },
    "SCR": {
      "code": "SCR",
      "value": 15.1026925549
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 11.0051717286
    },
    "SGD": {
      "code": "SGD",
      "value": 1.354190142
    },
    "SHP": {
      "code": "SHP",
      "value": 0.8121300897
    },
    "SLL": {
      "code": "SLL",
      "value": 22634.146343586
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0038862574
    },
    "SOS": {
      "code": "SOS",
      "value": 572.0165071827
    },
    "SRD": {
      "code": "SRD",
      "value": 34.8636055339
    },
    "STD": {
      "code": "STD",
      "value": 23756.857628523
    },
    "STN": {
      "code": "STN",
      "value": 23.7568465175
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13004.281251686
    },
    "SZL": {
      "code": "SZL",
      "value": 18.4993527792
    },
    "THB": {
      "code": "THB",
      "value": 33.8744341493
    },
    "TJS": {
      "code": "TJS",
      "value": 10.9578320208
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.180760493
    },
    "TOP": {
      "code": "TOP",
      "value": 2.403910279
    },
    "TRY": {
      "code": "TRY",
      "value": 35.6424445686
    },
    "TTD": {
      "code": "TTD",
      "value": 6.7965908609
    },
    "TWD": {
      "code": "TWD",
      "value": 32.6693954571
    },
    "TZS": {
      "code": "TZS",
      "value": 2485.3860498569
    },
    "UAH": {
      "code": "UAH",
      "value": 42.2929759065
    },
    "UGX": {
      "code": "UGX",
      "value": 3680.8742424964
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.999661912
    },
    "USDT": {
      "code": "USDT",
      "value": 1.0003836074
    },
    "UYU": {
      "code": "UYU",
      "value": 43.7920848763
    },
    "UZS": {
      "code": "UZS",
      "value": 13015.440918118
    },
    "VEF": {
      "code": "VEF",
      "value": 5569200.8272586
    },
    "VES": {
      "code": "VES",
      "value": 55.6920316255
    },
    "VND": {
      "code": "VND",
      "value": 25046.660260446
    },
    "VUV": {
      "code": "VUV",
      "value": 122.3470641946
    },
    "WST": {
      "code": "WST",
      "value": 2.8291942159
    },
    "XAF": {
      "code": "XAF",
      "value": 630.1447193743
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0324877993
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0003628519
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7652501139
    },
    "XOF": {
      "code": "XOF",
      "value": 630.144740421
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0010164672
    },
    "XPF": {
      "code": "XPF",
      "value": 114.5574429206
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0010534448
    },
    "XRP": {
      "code": "XRP",
      "value": 0.3151548301
    },
    "YER": {
      "code": "YER",
      "value": 248.40378838
    },
    "ZAR": {
      "code": "ZAR",
      "value": 18.5133119853
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 28.1074155236
    },
    "ZWL": {
      "code": "ZWL",
      "value": 65611.341650601
    }
  }
}
 `)
console.log(rJson);
for(let key of Object.keys(rJson["data"])){
    myStr =`<tr>
              <td>${key}</td>
               <td>${rJson["data"][key]["code"]}</td>
               <td>${rJson["data"][key]["value"] * value}</td>
            </tr>`
}
const tableBody = document.querySelector("tbody");
tableBody.innerHTML = myStr;
}


const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("button is clicked");
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(currency, value);
})


