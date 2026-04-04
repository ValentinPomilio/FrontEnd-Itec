const usuarios = [{"id":1,"first_name":"Audry","last_name":"Unsworth","email":"aunsworth0@acquirethisname.com","gender":"Female","ip_address":"121.58.254.18"},
{"id":2,"first_name":"Shannen","last_name":"Mossop","email":"smossop1@myspace.com","gender":"Female","ip_address":"199.49.100.40"},
{"id":3,"first_name":"Gerri","last_name":"Tollerton","email":"gtollerton2@mtv.com","gender":"Male","ip_address":"184.36.0.244"},
{"id":4,"first_name":"Vincenz","last_name":"McTavish","email":"vmctavish3@omniture.com","gender":"Male","ip_address":"226.99.179.223"},
{"id":5,"first_name":"Charin","last_name":"Sorbey","email":"csorbey4@biglobe.ne.jp","gender":"Female","ip_address":"43.155.223.177"},
{"id":6,"first_name":"Reena","last_name":"Kelwaybamber","email":"rkelwaybamber5@opensource.org","gender":"Female","ip_address":"145.43.213.189"},
{"id":7,"first_name":"Lynette","last_name":"Scullard","email":"lscullard6@blinklist.com","gender":"Female","ip_address":"10.202.179.208"},
{"id":8,"first_name":"Timofei","last_name":"Burkett","email":"tburkett7@weibo.com","gender":"Male","ip_address":"168.108.176.129"},
{"id":9,"first_name":"Norbie","last_name":"Lessmare","email":"nlessmare8@alexa.com","gender":"Male","ip_address":"200.233.148.86"},
{"id":10,"first_name":"Reade","last_name":"Chevis","email":"rchevis9@latimes.com","gender":"Male","ip_address":"232.113.72.88"},
{"id":11,"first_name":"Marcelline","last_name":"Waterworth","email":"mwaterwortha@smh.com.au","gender":"Female","ip_address":"211.234.14.233"},
{"id":12,"first_name":"Zorana","last_name":"Dudliston","email":"zdudlistonb@mlb.com","gender":"Female","ip_address":"81.61.123.175"},
{"id":13,"first_name":"Dov","last_name":"Earland","email":"dearlandc@omniture.com","gender":"Male","ip_address":"5.183.128.138"},
{"id":14,"first_name":"Mirna","last_name":"Holton","email":"mholtond@archive.org","gender":"Polygender","ip_address":"122.49.185.160"},
{"id":15,"first_name":"Odella","last_name":"Serle","email":"oserlee@fotki.com","gender":"Female","ip_address":"0.154.81.215"},
{"id":16,"first_name":"Shawn","last_name":"Daelman","email":"sdaelmanf@washington.edu","gender":"Male","ip_address":"45.46.61.146"},
{"id":17,"first_name":"Gherardo","last_name":"Byles","email":"gbylesg@aboutads.info","gender":"Genderfluid","ip_address":"144.120.44.16"},
{"id":18,"first_name":"Kienan","last_name":"Tanzig","email":"ktanzigh@blogger.com","gender":"Male","ip_address":"35.151.208.104"},
{"id":19,"first_name":"Celle","last_name":"Petruk","email":"cpetruki@bravesites.com","gender":"Female","ip_address":"118.255.199.65"},
{"id":20,"first_name":"Denny","last_name":"Klaffs","email":"dklaffsj@symantec.com","gender":"Male","ip_address":"109.164.248.151"},
{"id":21,"first_name":"Mendel","last_name":"Kimmons","email":"mkimmonsk@dagondesign.com","gender":"Male","ip_address":"146.143.203.2"},
{"id":22,"first_name":"Adrianna","last_name":"Barnfield","email":"abarnfieldl@alibaba.com","gender":"Female","ip_address":"32.182.215.97"},
{"id":23,"first_name":"Dorie","last_name":"Langabeer","email":"dlangabeerm@simplemachines.org","gender":"Male","ip_address":"162.106.233.186"},
{"id":24,"first_name":"Addi","last_name":"Pinson","email":"apinsonn@comsenz.com","gender":"Female","ip_address":"64.125.204.30"},
{"id":25,"first_name":"Alwyn","last_name":"Claughton","email":"aclaughtono@facebook.com","gender":"Male","ip_address":"100.181.219.100"},
{"id":26,"first_name":"Shelton","last_name":"Lodden","email":"sloddenp@ovh.net","gender":"Male","ip_address":"17.255.138.234"},
{"id":27,"first_name":"Carine","last_name":"Gregersen","email":"cgregersenq@360.cn","gender":"Female","ip_address":"24.33.180.171"},
{"id":28,"first_name":"Mala","last_name":"Weblin","email":"mweblinr@amazon.co.jp","gender":"Female","ip_address":"32.164.79.205"},
{"id":29,"first_name":"Humfrid","last_name":"Pavis","email":"hpaviss@google.es","gender":"Male","ip_address":"71.62.189.56"},
{"id":30,"first_name":"Langston","last_name":"Leile","email":"lleilet@4shared.com","gender":"Polygender","ip_address":"79.156.129.135"},
{"id":31,"first_name":"Tanney","last_name":"Giabuzzi","email":"tgiabuzziu@feedburner.com","gender":"Male","ip_address":"44.45.64.179"},
{"id":32,"first_name":"Mychal","last_name":"Babonau","email":"mbabonauv@oakley.com","gender":"Male","ip_address":"197.188.10.182"},
{"id":33,"first_name":"Dannie","last_name":"Scrinage","email":"dscrinagew@vinaora.com","gender":"Male","ip_address":"236.142.0.16"},
{"id":34,"first_name":"Martita","last_name":"Ferryman","email":"mferrymanx@google.com.hk","gender":"Non-binary","ip_address":"144.136.175.4"},
{"id":35,"first_name":"Codi","last_name":"Beincken","email":"cbeinckeny@japanpost.jp","gender":"Genderfluid","ip_address":"123.212.241.69"},
{"id":36,"first_name":"Clara","last_name":"Gleeson","email":"cgleesonz@hexun.com","gender":"Female","ip_address":"253.36.50.217"},
{"id":37,"first_name":"Florinda","last_name":"Howsam","email":"fhowsam10@edublogs.org","gender":"Female","ip_address":"137.47.16.51"},
{"id":38,"first_name":"Brice","last_name":"Fanner","email":"bfanner11@fda.gov","gender":"Male","ip_address":"125.212.64.79"},
{"id":39,"first_name":"Inglebert","last_name":"Bazylets","email":"ibazylets12@hp.com","gender":"Male","ip_address":"130.201.169.60"},
{"id":40,"first_name":"Alleen","last_name":"Keetley","email":"akeetley13@facebook.com","gender":"Female","ip_address":"200.63.144.141"},
{"id":41,"first_name":"Wilow","last_name":"Griswaite","email":"wgriswaite14@ycombinator.com","gender":"Female","ip_address":"135.214.6.210"},
{"id":42,"first_name":"Ody","last_name":"Perkis","email":"operkis15@cdbaby.com","gender":"Male","ip_address":"237.63.4.28"},
{"id":43,"first_name":"Zea","last_name":"McGuane","email":"zmcguane16@skype.com","gender":"Female","ip_address":"196.238.213.97"},
{"id":44,"first_name":"Spike","last_name":"Kidston","email":"skidston17@forbes.com","gender":"Genderqueer","ip_address":"22.172.148.100"},
{"id":45,"first_name":"Herbie","last_name":"Botwood","email":"hbotwood18@auda.org.au","gender":"Male","ip_address":"28.242.0.26"},
{"id":46,"first_name":"Morse","last_name":"MacKeeg","email":"mmackeeg19@cyberchimps.com","gender":"Male","ip_address":"107.240.36.132"},
{"id":47,"first_name":"Duffie","last_name":"Bish","email":"dbish1a@aol.com","gender":"Male","ip_address":"9.227.249.24"},
{"id":48,"first_name":"Tedie","last_name":"Bassford","email":"tbassford1b@scribd.com","gender":"Male","ip_address":"34.184.254.184"},
{"id":49,"first_name":"Ellary","last_name":"Connors","email":"econnors1c@wisc.edu","gender":"Male","ip_address":"5.49.212.138"},
{"id":50,"first_name":"Addy","last_name":"Peakman","email":"apeakman1d@europa.eu","gender":"Male","ip_address":"145.57.76.212"}]

function id_buscador (id){
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].id === id){
            console.log(usuarios[i])
            break
        } else {
            console.log("No se encontro a nadie")
        }
    }

}

function filtro_sexo(){
    let mujeres = [];
    let hombres = [];
    let otro = [];

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].gender === "Female"){
            mujeres.push(usuarios[i])
        } else if (usuarios[i].gender === "Male"){
            hombres.push(usuarios[i])
        } else {
            otro.push(usuarios[i])
        }
    }
    console.log("Hay " + mujeres.length + " mujeres")
    console.log("Hay " + hombres.length + " hombres")
    console.log("Hay " + otro.length + " con otro genero")
}

let id = Number(prompt("Ingresa el id de la persona"))

id_buscador(id)
filtro_sexo()