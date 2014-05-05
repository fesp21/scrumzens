if (Meteor.isServer){
Meteor.startup(function() {
	if (Projects.find().count() === 0){
	Projects.insert({
		title: "Ben Hogan's rebuild",
		description: "Re-writing Hogans' hereos",
		start: "4/16/14",
		lead: "decatur group"
	
	});
	Projects.insert({
		title: "Finish this app by Friday",
		description: "Prepping for Consultzen brief",
		start: "4/19/14",
		lead: "staineamaniacs Inc"
	
	});
	Projects.insert({
		title: "Terry Tates' newest commercial",
		description: "Creating a new line of Terry Tate commercials",
		start: "10/1/14",
		lead: "Old Spice & Toyota"
	
	});
	Projects.insert({
		title: "Replacing window sill",
		description: "fixing the damaged sustain during replacement of the windows",
		start: "4/21/14",
		lead: "FSP enterprises"
	
	});
}
});
Meteor.startup(function() {	
	if (Managers.find().count() === 0){
	  Managers.insert(
			    {
			        "id": 20,
			        "guid": "ae28f491-ce76-463a-9e6f-e9c5888b397d",
			        "isActive": false,
			        "picture": "http://placehold.it/32x32",
			        "experience": 5,
			        "name": "Sargent Odom",
			        "company": "Xymonk",
			        "price": 168,
			        "rating": "{{ \"[object Object]\" tag is not supported }}",
			        "education": "Nulla officia cillum elit commodo reprehenderit",
			        "email": "sargentodom@xymonk.com",
			        "certifications": "{{ \"[object Object]\" tag is not supported }}",
			        "phone": "+1 (964) 538-3046",
			        "address": "389 Gunther Place, Klagetoh, Colorado, 889",
			        "projects": "Est officia exercitation magna qui pariatur pariatur. Eu esse incididunt sunt laboris id officia sit in incididunt qui cupidatat occaecat. Culpa consequat occaecat quis occaecat nisi velit duis occaecat veniam ex nisi ullamco.\r\n",
			        "registered": "2005-06-12T05:35:20 +07:00",
			        "latitude": -17.703416,
			        "longitude": -40.726502,
			        "tags": [
			            "commodo",
			            "labore",
			            "magna",
			            "aliqua",
			            "et",
			            "sunt",
			            "nisi"
			        ],
			        "reviews": [
			            "Voluptate magna reprehenderit id et mollit pariatur proident id non ex nostrud. Elit id laboris velit cillum nisi id consequat veniam culpa officia. Deserunt id aute id quis",
			            "Nisi in quis officia aliquip occaecat dolor ea. Duis est duis velit occaecat qui dolore dolore magna pariatur proident. Veniam velit ad dolore labore excepteur aliqua velit tempor nulla tempor commodo ipsum",
			            "Reprehenderit sunt laborum ipsum sunt mollit exercitation elit dolor aliqua ipsum do magna. In id sint consequat adipisicing non dolore ea pariatur. Non culpa commodo cillum ex commodo quis aliqua elit cupidatat qui tempor esse labore voluptate",
			            "Sit cupidatat esse ea consequat voluptate voluptate adipisicing et ullamco eiusmod occaecat ut. Consequat sit veniam dolore irure incididunt eu culpa ipsum nisi laboris sint sit do non. Officia anim et ad magna duis elit aliquip ullamco voluptate dolor reprehenderit",
			            "Sint nisi officia fugiat ipsum excepteur duis aliqua exercitation pariatur ad veniam. Fugiat exercitation labore irure eiusmod aliquip adipisicing. Elit deserunt irure occaecat excepteur est sunt consequat",
			            "Dolor pariatur laborum eu incididunt cillum sunt dolore laboris officia officia. Sit Lorem aliquip qui mollit exercitation sit voluptate occaecat. Sunt nulla veniam quis nulla eiusmod tempor anim aute occaecat adipisicing ex nostrud dolor dolore",
			            "Sit exercitation ut sit commodo. Sint proident velit est minim nisi minim non proident. Commodo magna commodo officia sit proident eiusmod"
			        ],
			        "comments": [
			            "Minim amet irure mollit minim in. Id voluptate ex sit mollit nulla. Cillum aute consequat ad magna cillum",
			            "Magna nisi incididunt eu exercitation ullamco ullamco incididunt et. Culpa consectetur quis sit ad veniam Lorem aute pariatur aliqua qui non qui commodo consequat. Ipsum ex laboris cupidatat in est",
			            "Voluptate consequat sint ipsum Lorem occaecat nulla nisi. Aliquip Lorem id Lorem minim excepteur et sunt voluptate dolor et commodo sint minim velit. Incididunt tempor reprehenderit amet nostrud est est cillum et elit sit labore amet",
			            "Adipisicing consectetur enim incididunt occaecat pariatur aute aliqua proident. Magna do occaecat dolore labore. Minim aute labore sint ut nisi minim eu",
			            "Veniam aliqua enim commodo consequat occaecat ipsum nulla pariatur et nisi nulla incididunt consequat. Duis duis excepteur voluptate eiusmod ad ullamco id nisi aliqua esse. Cillum labore eu laboris id ullamco",
			            "Enim anim quis irure veniam officia esse minim nulla. Velit mollit dolor labore nulla Lorem consectetur quis adipisicing nostrud reprehenderit in. Aute officia commodo nostrud amet anim id quis do culpa laboris",
			            "Pariatur exercitation dolore sit reprehenderit cupidatat exercitation laboris. Sint in occaecat tempor Lorem eu. Adipisicing pariatur laboris mollit sit nisi eu et esse",
			            "Nostrud esse laboris esse cupidatat mollit labore velit. Eu voluptate culpa ea voluptate officia sint dolore quis minim. Tempor excepteur veniam anim pariatur aliquip dolor duis aliquip consequat Lorem magna ad consequat sit",
			            "Laborum consectetur qui officia ex duis Lorem. Mollit laboris velit fugiat tempor minim magna. Non magna ad in labore quis nisi id aliqua aliqua",
			            "Lorem ex sit deserunt laboris occaecat magna ad quis irure. Elit occaecat deserunt fugiat nostrud dolore consequat duis sit in ad laboris. Eiusmod enim laborum nulla laboris excepteur velit magna excepteur qui eu aliqua culpa cillum",
			            "Cupidatat cupidatat irure sit labore amet labore proident enim laborum et. Excepteur deserunt labore sint velit. Excepteur incididunt voluptate incididunt in adipisicing ipsum aute nostrud culpa sit enim",
			            "Non exercitation consectetur minim voluptate sit proident nostrud culpa cupidatat consectetur commodo adipisicing eu. Sunt ea in ipsum culpa labore eu fugiat qui reprehenderit incididunt proident dolore. Reprehenderit magna id mollit commodo est qui incididunt occaecat labore incididunt aliqua ad non",
			            "Adipisicing eiusmod tempor cupidatat aute eiusmod quis laboris proident excepteur anim officia aliquip. Elit duis consectetur ex excepteur quis minim Lorem consequat enim minim sint commodo aliquip est. Nostrud est velit mollit reprehenderit elit exercitation esse est",
			            "Cillum veniam laborum eiusmod eiusmod proident mollit irure do proident. Quis dolore veniam duis sunt. In nisi aute nisi amet occaecat consectetur nulla est amet minim id",
			            "Fugiat dolore proident ipsum nisi pariatur eiusmod non velit laborum dolor. Minim do esse duis non excepteur et dolore ipsum fugiat. Excepteur aute voluptate nisi cillum est"
			        ]
			    });
			
 Managers.insert(
    {
        "id": 21,
        "guid": "557d25b4-ae0a-4c39-9774-eff34c0a28a6",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "experience": 24,
        "name": "Rebecca Morse",
        "company": "Quarex",
        "price": 233,
        "rating": "{{ \"[object Object]\" tag is not supported }}",
        "education": "Sit sit non qui cupidatat in deserunt qui irure adipisicing et aute",
        "email": "rebeccamorse@quarex.com",
        "certifications": "{{ \"[object Object]\" tag is not supported }}",
        "phone": "+1 (879) 421-2561",
        "address": "640 Waldane Court, Albany, Maine, 8175",
        "projects": "Sunt nostrud ut enim Lorem consectetur eiusmod ut est anim ullamco nulla. Et amet nisi ad dolor ullamco fugiat aliqua ea labore incididunt. Labore labore magna ipsum aliquip nulla enim quis sunt occaecat pariatur elit. Amet minim magna amet quis. In et ut non ex eu adipisicing consequat exercitation id dolore exercitation cupidatat. Quis eiusmod velit veniam anim tempor ex laboris commodo ad minim nostrud incididunt sit.\r\n",
        "registered": "2011-12-08T17:05:37 +08:00",
        "latitude": 82.588114,
        "longitude": 75.168795,
        "tags": [
            "culpa",
            "minim",
            "consectetur",
            "ad",
            "eu",
            "cillum",
            "anim"
        ],
        "reviews": [
            "Esse consequat incididunt incididunt adipisicing. Do enim cillum eu pariatur nisi occaecat officia pariatur eu. Irure consequat eu irure minim aliquip ut",
            "Officia pariatur ea in exercitation magna occaecat nostrud dolor esse. Magna tempor qui magna enim reprehenderit in nulla officia cupidatat pariatur adipisicing et. Laborum magna est laboris deserunt magna",
            "Culpa occaecat sunt laboris id quis officia mollit nisi pariatur dolor reprehenderit fugiat. Ipsum non incididunt duis cillum labore cupidatat in eu et nisi ullamco. Aute nostrud sit ut ex sit duis cillum fugiat eu labore in eiusmod elit",
            "Aute eiusmod nulla do culpa sunt. Quis dolore ex amet voluptate deserunt sint commodo incididunt cillum qui laboris. Proident cillum est deserunt quis do eu",
            "Duis laborum qui non sit esse magna laboris eiusmod consequat et nulla nulla reprehenderit in. Ullamco magna eu voluptate qui ex reprehenderit non fugiat consectetur cillum ullamco. Qui anim enim non cillum anim officia adipisicing labore sint elit qui exercitation fugiat irure",
            "Ex sunt ad eu eiusmod. Velit sit reprehenderit culpa officia pariatur. Sunt elit nulla deserunt magna proident ea culpa aute sint qui in",
            "Sint nostrud voluptate Lorem reprehenderit magna eiusmod commodo pariatur in ea ad culpa. Irure cupidatat deserunt ullamco minim deserunt ut esse fugiat. In elit sint ex cillum eiusmod elit reprehenderit esse Lorem ipsum"
        ],
        "comments": [
            "Nisi mollit reprehenderit exercitation enim. Mollit anim amet aute commodo sit. Officia ex id nisi nisi nostrud labore reprehenderit eu mollit",
            "Sint tempor do anim aliqua Lorem tempor deserunt qui anim ad irure aliqua nulla sunt. Cillum enim sit reprehenderit aliquip do dolore do veniam. Do adipisicing excepteur do do velit officia",
            "Labore laborum occaecat ut ad. Cillum labore enim qui nulla est sint dolore ullamco. Nulla dolor incididunt reprehenderit esse sint in tempor est sunt dolore",
            "Elit officia exercitation laborum voluptate mollit ad duis. Non cupidatat labore velit reprehenderit nulla aute consequat id pariatur tempor et aliqua ea commodo. Amet ipsum eu incididunt duis ut adipisicing Lorem ad aliqua magna ut ut occaecat",
            "Occaecat nulla non non ipsum elit reprehenderit sunt. Ipsum reprehenderit culpa deserunt et nisi sit amet aliqua exercitation officia minim enim ex ex. Ex enim ex ea consequat aute non eu duis commodo sint",
            "Duis nulla aliqua exercitation pariatur commodo ullamco in. Mollit sit pariatur quis ipsum veniam sit voluptate officia aliqua commodo. Exercitation ipsum labore exercitation consequat",
            "Ullamco laboris excepteur excepteur dolor duis dolor ullamco occaecat qui exercitation Lorem commodo. Ad commodo est quis nisi dolore. Pariatur anim laborum in ad et excepteur proident veniam eu id labore",
            "Labore veniam aliqua nulla et tempor voluptate ut ad. Aute qui occaecat laboris aute. Ad reprehenderit non deserunt occaecat do ad sint officia nisi esse",
            "Non ex sunt consequat aute consectetur laboris cillum. Laborum qui tempor do aute. Do exercitation eiusmod aliqua aliqua ad anim sint eu ex voluptate consectetur cillum voluptate nisi",
            "Incididunt cillum id laborum nostrud do laboris cupidatat velit. Sit aliqua eiusmod occaecat in laboris ex in. Eu excepteur ad sunt deserunt consectetur elit id ea esse non veniam excepteur ea",
            "Ad commodo non velit eu ut anim dolor velit irure dolore reprehenderit pariatur. Deserunt aliqua cupidatat sint ad elit minim irure fugiat aliquip ea sunt anim laborum aliqua. Aliquip ipsum nostrud consequat velit magna incididunt aliqua ad commodo magna cillum ipsum non nisi",
            "Cillum id dolor excepteur fugiat qui do fugiat cillum non aute. Eiusmod nulla ad ad pariatur ullamco incididunt fugiat consectetur non. Do fugiat sunt nisi aliquip duis adipisicing eu incididunt",
            "Ipsum aliquip ut excepteur ad labore aliqua nisi non sint et nisi qui commodo minim. Qui ipsum et excepteur labore aliquip eiusmod nostrud ea est in eiusmod enim ullamco. Minim fugiat aute culpa anim ut",
            "Laboris eiusmod sit aute pariatur nostrud do eu amet duis culpa. Sit ut esse eu esse esse aliquip nisi qui qui nostrud est. Veniam eiusmod sunt veniam minim officia anim occaecat velit",
            "Sunt ea nulla laboris sunt velit ut do. Culpa laboris magna in ipsum. Adipisicing nisi enim magna excepteur id qui enim qui"
        ]
    });
 Managers.insert(
    {
        "id": 18,
        "guid": "806f0f8b-6533-4524-a772-5268c7e367f9",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "experience": 25,
        "name": "Delia Day",
        "company": "Dognost",
        "price": 100,
        "rating": "{{ \"[object Object]\" tag is not supported }}",
        "education": "Deserunt elit ex culpa tempor enim quis eu ea duis incididunt ex occaecat adipisicing",
        "email": "deliaday@dognost.com",
        "certifications": "{{ \"[object Object]\" tag is not supported }}",
        "phone": "+1 (946) 412-2002",
        "address": "243 Kings Place, Sehili, North Carolina, 6939",
        "projects": "Ad voluptate nulla elit elit ipsum tempor irure cupidatat aliqua labore. Fugiat dolore laborum veniam officia mollit Lorem officia consequat aliqua et. Ad culpa sunt tempor consequat commodo sint quis culpa laborum ad sunt Lorem aliqua. Commodo consectetur pariatur duis eu dolor esse consequat dolor consequat deserunt. Cupidatat eu magna id aute aute sunt eu occaecat dolor ea tempor deserunt exercitation id. Ad Lorem sit ullamco consectetur non reprehenderit labore anim deserunt magna anim.\r\n",
        "registered": "1989-07-06T19:38:28 +07:00",
        "latitude": 86.258835,
        "longitude": 172.499798,
        "tags": [
            "et",
            "mollit",
            "nisi",
            "culpa",
            "elit",
            "culpa",
            "nostrud"
        ],
        "reviews": [
            "Anim Lorem eu anim ad duis eiusmod ex laborum anim est enim. Eiusmod exercitation sit non reprehenderit. Ea in minim et ex consequat ea irure non tempor nulla quis",
            "Amet sint enim dolore occaecat aliqua sint tempor eiusmod. Ut amet sit ex exercitation sint dolor sit mollit incididunt adipisicing. Lorem laborum culpa exercitation eiusmod culpa ad",
            "Nulla mollit anim amet quis occaecat sint. Ullamco sunt est velit veniam. Veniam amet cillum duis aliqua esse cillum proident eu laborum commodo ea enim adipisicing irure",
            "Do aliquip Lorem laborum sunt anim proident. Commodo incididunt commodo voluptate Lorem consequat laboris voluptate dolor eiusmod qui. Aliqua sint exercitation ea dolore minim mollit reprehenderit et adipisicing non laborum ex do veniam",
            "Do voluptate do irure non commodo ullamco proident ea fugiat ex elit exercitation labore ut. Ex duis do ad ex cillum Lorem enim labore reprehenderit cupidatat ipsum nulla. Quis non qui ullamco ex exercitation",
            "Irure sint tempor reprehenderit nostrud irure ut commodo. Quis esse culpa culpa ex occaecat deserunt et dolor adipisicing non laborum voluptate. Aliqua magna incididunt duis cupidatat quis ea labore consectetur anim labore amet",
            "Et nostrud anim enim ullamco fugiat duis exercitation deserunt excepteur consequat exercitation magna magna. Cupidatat fugiat aute aliquip officia amet. Sunt elit veniam sint magna occaecat consequat duis deserunt"
        ],
        "comments": [
            "Esse enim est ullamco pariatur ipsum sint elit labore laborum eu adipisicing. Id voluptate proident nulla excepteur aute. Deserunt consectetur eu laboris cillum amet ad veniam ad ut anim velit tempor id",
            "Elit proident laboris sunt aute pariatur. Proident enim minim Lorem dolore aliqua irure duis. Cupidatat magna elit esse pariatur nostrud nulla",
            "Non deserunt laboris in dolore. Fugiat quis nostrud Lorem Lorem aute magna amet laboris dolore nisi. Incididunt pariatur sint non magna enim esse",
            "Velit ullamco laboris laboris elit exercitation ea. Ut sit eiusmod excepteur culpa nisi. Id reprehenderit in deserunt non pariatur ex magna veniam est culpa esse",
            "Excepteur eu occaecat aliquip proident cillum dolore laboris nostrud Lorem velit eiusmod est. Pariatur sunt voluptate nisi velit dolore ad fugiat pariatur. Enim qui ut mollit id consequat officia",
            "Amet aute exercitation ex et. Nostrud ut non irure commodo pariatur nisi enim aliquip nostrud. Dolore excepteur excepteur do cupidatat Lorem occaecat Lorem",
            "Aliquip incididunt velit sit nostrud dolor quis Lorem dolore duis magna velit ut nostrud non. Exercitation aute nulla quis sint dolore sint anim esse consectetur Lorem id exercitation duis. Magna minim incididunt ea aliqua excepteur et voluptate amet id adipisicing",
            "Aliquip commodo ad anim quis esse esse ullamco officia qui non esse. Et elit occaecat tempor adipisicing dolore officia est in excepteur duis ad reprehenderit sit exercitation. Commodo enim ut eiusmod occaecat occaecat amet",
            "Ut Lorem adipisicing laboris ex incididunt anim mollit incididunt irure aliquip labore reprehenderit occaecat. Ullamco laboris tempor incididunt et occaecat enim. Fugiat adipisicing id magna ex laborum est id officia anim fugiat occaecat in",
            "Elit ad mollit velit veniam ullamco enim aliquip. Enim ut quis magna sint aliqua minim qui occaecat eiusmod ut mollit nulla. Duis deserunt Lorem irure est ut reprehenderit proident aute culpa laborum pariatur proident ut occaecat",
            "Aute sit proident veniam magna excepteur sint pariatur incididunt veniam adipisicing aute in irure. Sit eu commodo consectetur ea sunt elit cillum elit et nisi. Laborum elit amet exercitation occaecat proident aute velit consectetur est dolore quis aute",
            "Sint fugiat minim mollit voluptate. Ea in nisi aliquip aliqua laborum cupidatat aute aliqua consequat id. Ullamco nulla duis deserunt dolor officia velit proident",
            "Reprehenderit minim enim sint sint laborum sint cillum est excepteur cupidatat. Sunt dolore adipisicing reprehenderit ullamco laboris labore. Lorem incididunt dolore quis ut eiusmod incididunt nisi voluptate adipisicing tempor ea proident esse commodo",
            "Commodo Lorem reprehenderit voluptate laboris incididunt sunt adipisicing. Aliquip elit ad adipisicing aliquip in amet irure elit laboris. Nisi et et minim fugiat proident cupidatat sit excepteur laborum cillum irure nulla ipsum",
            "Pariatur esse ex excepteur cillum fugiat consectetur elit dolore deserunt. Labore culpa non mollit veniam nulla amet ex incididunt id qui in. Ex occaecat irure ex consectetur dolore officia"
        ]
    });

}
});
Meteor.startup(function() {

if (Profiles.find().count() === 0){
	Profiles.insert({
        "id": 0,
        "guid": "f0056368-1475-402a-b3b6-fe3425e487ba",
        "isActive": true,
        "rate": "$3,613.00",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": "Beatriz Stout",
        "company": "PHOLIO",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "beatrizstout@pholio.com",
        "phone": "+1 (945) 489-2661",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "564 Amherst Street, Crisman, New Hampshire, 7352",
        "about": "Ea sit excepteur ex esse pariatur. Id in ut ad nulla aliquip fugiat. Amet laborum ex in in. Esse excepteur esse id et. Esse tempor anim labore cillum et incididunt sit. Quis culpa consectetur tempor est id sint enim.\r\n",
        "latitude": -67,
        "longitude": -9,
        "tags": [
            "sunt",
            "esse",
            "proident",
            "eiusmod",
            "dolor",
            "do",
            "reprehenderit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mayo Golden"
            },
            {
                "id": 1,
                "name": "Alston Salazar"
            },
            {
                "id": 2,
                "name": "Jan Downs"
            }
        ],
        "greeting": "Hello, Beatriz Stout! You have 3 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Reprehenderit non minim dolor duis Lorem laborum occaecat. Adipisicing nostrud irure nisi est velit id esse. Mollit adipisicing aliquip nulla labore duis labore aute est ea aute non adipisicing ea.\r\n"
            },
            {
                "id": 1,
                "message": "Nulla aute proident tempor aliquip commodo minim deserunt. Cillum qui ut magna amet sit aliquip magna sunt consectetur commodo reprehenderit anim. Veniam incididunt exercitation esse ullamco deserunt officia dolor esse officia irure magna est. Sint ad ipsum consectetur id velit minim qui mollit.\r\n"
            },
            {
                "id": 2,
                "message": "Esse cupidatat fugiat duis reprehenderit do sit tempor et ea. Dolor occaecat officia sit voluptate deserunt laborum sunt. Esse culpa irure officia sint excepteur ut. Ex ullamco fugiat cupidatat aute aliquip in ea occaecat tempor aute mollit. Lorem magna et nostrud aliquip id officia proident quis in velit adipisicing ullamco. Eiusmod mollit do laboris culpa.\r\n"
            },
            {
                "id": 3,
                "message": "Lorem cupidatat minim non culpa officia velit adipisicing. Lorem veniam sint excepteur cupidatat amet nostrud fugiat consequat sunt consequat excepteur. Et consectetur voluptate cillum dolore minim in excepteur culpa minim. Cillum laborum elit veniam proident ipsum veniam irure pariatur quis qui veniam velit. Do cillum eu velit pariatur incididunt et quis eu Lorem aute do. Cupidatat voluptate consequat et magna nulla. Culpa dolor enim enim est ipsum cillum fugiat exercitation.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 1,
        "guid": "04704ff4-a4e9-417e-a372-c1e151eeea76",
        "isActive": true,
        "rate": "$1,911.00",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "April Ramirez",
        "company": "SPHERIX",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "aprilramirez@spherix.com",
        "phone": "+1 (908) 468-2697",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "384 Bergen Court, Forestburg, Louisiana, 4774",
        "about": "Tempor anim non elit excepteur proident consequat et do. Et consequat amet ullamco nisi minim consectetur sint ex sint tempor anim nostrud pariatur. Ut ipsum mollit ea ad culpa sit ut est qui anim quis dolore. Ipsum nulla eu qui elit ex esse labore adipisicing.\r\n",
        "latitude": -71,
        "longitude": 0,
        "tags": [
            "amet",
            "duis",
            "duis",
            "qui",
            "id",
            "officia",
            "Lorem"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Hopper Roberson"
            },
            {
                "id": 1,
                "name": "Twila Jensen"
            },
            {
                "id": 2,
                "name": "Michael Sweet"
            }
        ],
        "greeting": "Hello, April Ramirez! You have 2 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Eiusmod ut consectetur in sint consectetur Lorem. Adipisicing fugiat amet tempor proident. Aliqua veniam deserunt aliquip ex ad est nulla labore esse eiusmod laboris reprehenderit. Officia Lorem laborum ex anim aute nisi duis nulla occaecat quis amet. Anim sint laborum laboris culpa pariatur nisi consequat irure duis consequat proident ut ad.\r\n"
            },
            {
                "id": 1,
                "message": "Et veniam adipisicing ex officia. Ut quis minim in qui consequat aliqua est dolor reprehenderit amet esse velit. Sit dolore aliquip aliquip aliqua ipsum quis eiusmod commodo mollit quis duis laborum ipsum. Ut non occaecat qui dolor.\r\n"
            },
            {
                "id": 2,
                "message": "Officia amet id esse veniam esse pariatur incididunt ad minim. Tempor duis id et ea deserunt nisi est duis occaecat dolor cillum officia incididunt. Consectetur sit amet anim commodo voluptate labore. Id cupidatat velit adipisicing dolore ut quis quis Lorem ut commodo. Proident laborum qui tempor ea laborum fugiat mollit cillum ut ipsum labore. Irure reprehenderit excepteur commodo laboris adipisicing qui enim id commodo minim culpa duis ad nisi.\r\n"
            },
            {
                "id": 3,
                "message": "Aute eu incididunt pariatur ullamco aliqua excepteur. Reprehenderit consequat aute consequat veniam et. Do commodo Lorem irure in. Consequat quis fugiat quis esse consectetur. Nulla reprehenderit ea sunt Lorem ea enim cillum est irure deserunt nostrud magna.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 2,
        "guid": "4e805057-d136-4978-a564-f7b2f37f5ef9",
        "isActive": false,
        "rate": "$2,358.00",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Morse Taylor",
        "company": "SILODYNE",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "morsetaylor@silodyne.com",
        "phone": "+1 (861) 570-3498",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "729 Sutton Street, Fresno, Connecticut, 6799",
        "about": "Ipsum anim consectetur sit officia enim qui sint minim sunt occaecat. Pariatur voluptate occaecat ipsum ad ipsum ullamco cillum sunt. Et commodo adipisicing qui duis proident elit magna magna minim enim eiusmod mollit magna. Occaecat duis ad nulla id elit nulla nulla occaecat aute ad magna Lorem proident incididunt. Exercitation pariatur mollit ipsum Lorem non cillum tempor mollit fugiat. Incididunt sit do Lorem qui consectetur occaecat sit aute. Sunt labore fugiat et duis eu ea velit occaecat pariatur amet minim.\r\n",
        "latitude": 85,
        "longitude": 100,
        "tags": [
            "sunt",
            "anim",
            "ipsum",
            "commodo",
            "minim",
            "laborum",
            "nisi"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Lawanda Knight"
            },
            {
                "id": 1,
                "name": "Black Parrish"
            },
            {
                "id": 2,
                "name": "Keri Blake"
            }
        ],
        "greeting": "Hello, Morse Taylor! You have 10 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Magna est et veniam minim. In cillum occaecat dolore amet irure ut reprehenderit eiusmod aliqua. Esse dolore dolor voluptate duis aliquip amet ipsum ad enim sit.\r\n"
            },
            {
                "id": 1,
                "message": "Est aliquip id et pariatur magna aliqua. Commodo officia fugiat commodo laborum duis do est consectetur ad sunt velit aliquip. Nulla voluptate minim dolor ipsum do quis ut voluptate consequat cillum. Et elit sit aliquip nisi. Duis ad dolor irure enim nulla in exercitation esse veniam dolore dolore aliquip. Ex deserunt do labore amet pariatur commodo. Pariatur commodo laboris do cupidatat deserunt exercitation.\r\n"
            },
            {
                "id": 2,
                "message": "Officia qui duis irure dolore commodo aute anim ad irure culpa. Magna irure quis mollit non tempor anim sint aute consectetur aliqua. Magna amet nulla consequat irure laborum ullamco et nisi incididunt. Sit eu aute veniam et proident. Incididunt laborum esse consequat labore reprehenderit non sit ut ut exercitation enim esse. Laborum Lorem dolore qui veniam labore.\r\n"
            },
            {
                "id": 3,
                "message": "Ut Lorem duis aliqua ex enim veniam anim officia mollit est. Cillum esse dolor exercitation dolore veniam minim proident ea proident ipsum pariatur incididunt. Cupidatat irure consequat anim consectetur ut enim enim eu.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 3,
        "guid": "10d252e8-832b-4bd5-a767-f01798f54a59",
        "isActive": true,
        "rate": "$3,253.00",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Guy Avila",
        "company": "PROTODYNE",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "guyavila@protodyne.com",
        "phone": "+1 (818) 431-3384",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "942 Clark Street, Floris, South Carolina, 8555",
        "about": "Ad aute reprehenderit cupidatat sint sint sunt sunt aliqua tempor adipisicing. Id qui mollit in laborum minim. Non laborum aliquip commodo non nisi ullamco nisi culpa. Voluptate occaecat duis anim sunt adipisicing proident consectetur cillum id cupidatat aliquip deserunt et. Non consequat reprehenderit ipsum laborum minim. Nulla et cupidatat aliquip eiusmod consequat.\r\n",
        "latitude": -45,
        "longitude": 134,
        "tags": [
            "reprehenderit",
            "ea",
            "consectetur",
            "non",
            "dolor",
            "incididunt",
            "amet"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Simpson Williamson"
            },
            {
                "id": 1,
                "name": "Riddle Meadows"
            },
            {
                "id": 2,
                "name": "Felicia Santana"
            }
        ],
        "greeting": "Hello, Guy Avila! You have 3 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Pariatur ex aute ipsum laboris aliquip mollit minim pariatur est adipisicing mollit magna irure id. Exercitation commodo est eu proident ipsum aute. Nisi consequat labore esse Lorem ex commodo deserunt sunt Lorem dolor voluptate.\r\n"
            },
            {
                "id": 1,
                "message": "Cupidatat cillum ea in ut aliquip esse mollit tempor sunt adipisicing culpa anim tempor non. Eiusmod anim eiusmod ad voluptate eiusmod dolore anim ut eiusmod labore in laborum. Officia ullamco aliquip voluptate dolor irure sint reprehenderit minim amet ad.\r\n"
            },
            {
                "id": 2,
                "message": "In ex sit ullamco exercitation nulla nostrud id incididunt labore occaecat amet laboris id do. Aliqua non exercitation laborum occaecat cillum ex cupidatat nisi minim excepteur. Ipsum quis do adipisicing aute id occaecat esse elit tempor amet. Consectetur incididunt est non minim cillum ullamco eiusmod consequat in aute aliqua ullamco reprehenderit. Occaecat pariatur labore ipsum sit.\r\n"
            },
            {
                "id": 3,
                "message": "Et mollit minim nisi et ut anim proident aliquip duis occaecat magna officia pariatur id. Dolore labore nostrud exercitation cupidatat est eu voluptate qui sit sunt non. Sit velit exercitation sint incididunt amet nostrud nisi reprehenderit Lorem. Adipisicing exercitation ipsum do Lorem velit magna dolore do sint et voluptate qui.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 4,
        "guid": "0e459141-6a7e-4c8d-9a79-622ccf4e9491",
        "isActive": true,
        "rate": "$3,830.00",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Dillard Prince",
        "company": "DELPHIDE",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "dillardprince@delphide.com",
        "phone": "+1 (818) 464-2862",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "963 Aurelia Court, Takilma, North Dakota, 2632",
        "about": "Tempor cillum consequat culpa enim adipisicing. Officia sit irure pariatur pariatur exercitation enim ex cupidatat anim ad. Irure sint enim deserunt quis dolor. Est est aliqua voluptate cillum deserunt nulla Lorem esse laboris qui duis id.\r\n",
        "latitude": 15,
        "longitude": 75,
        "tags": [
            "amet",
            "do",
            "dolore",
            "magna",
            "adipisicing",
            "id",
            "dolor"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Knight Parsons"
            },
            {
                "id": 1,
                "name": "Serena Kramer"
            },
            {
                "id": 2,
                "name": "Chen Duncan"
            }
        ],
        "greeting": "Hello, Dillard Prince! You have 4 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Laborum dolore sint in esse do aliquip enim non. Consequat et labore do occaecat Lorem magna velit reprehenderit consequat est officia. Velit pariatur commodo labore ad magna commodo culpa labore sit elit consequat aliquip irure quis. Laboris eiusmod enim mollit culpa ut consequat proident eu ex irure culpa esse. Incididunt duis Lorem Lorem incididunt occaecat sint. Et pariatur proident deserunt dolor ullamco enim fugiat id eiusmod reprehenderit ullamco consectetur incididunt. Nisi dolor anim ipsum magna consequat quis pariatur veniam.\r\n"
            },
            {
                "id": 1,
                "message": "Irure incididunt ad amet nostrud cillum duis. Cillum id ex deserunt sit officia. Consequat occaecat sint pariatur ad commodo laborum ad dolor consequat ea exercitation. Esse adipisicing fugiat nulla adipisicing reprehenderit veniam cupidatat occaecat veniam velit commodo mollit. Enim minim voluptate ipsum consectetur velit officia aute mollit in. Cupidatat occaecat aute proident occaecat enim est eiusmod sint qui mollit labore. Sint commodo quis consequat sit velit officia nisi nisi Lorem cillum.\r\n"
            },
            {
                "id": 2,
                "message": "Nostrud consectetur exercitation qui ex non consectetur mollit est incididunt fugiat. Non proident quis consectetur do nostrud amet nisi. Velit enim tempor ad adipisicing veniam ex irure. Occaecat mollit ullamco ut cillum incididunt minim velit consectetur. Qui consectetur pariatur tempor adipisicing adipisicing laborum nisi voluptate consectetur aliquip deserunt dolore proident ullamco. Cupidatat esse exercitation officia est labore tempor irure est nostrud ut ipsum ad ad occaecat. Adipisicing incididunt aliquip aliquip et nulla labore occaecat dolor non culpa aute officia.\r\n"
            },
            {
                "id": 3,
                "message": "Ullamco occaecat officia deserunt nulla id laboris laboris ut veniam qui deserunt elit. Elit ea mollit fugiat mollit. Eiusmod aute tempor cupidatat deserunt minim voluptate aliqua culpa ut fugiat adipisicing. Velit quis Lorem ad ut id duis. Non deserunt nostrud cupidatat non exercitation. Lorem deserunt culpa fugiat fugiat ea dolore voluptate est.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 5,
        "guid": "be136f15-40c4-4b7b-9161-625536a99671",
        "isActive": false,
        "rate": "$2,103.00",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Alexandria Yates",
        "company": "MANTRIX",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "alexandriayates@mantrix.com",
        "phone": "+1 (859) 445-2778",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "561 Wallabout Street, Santel, Wyoming, 4694",
        "about": "Velit culpa sunt do do qui incididunt ea eu aliqua officia. Enim culpa et dolore duis et consectetur tempor dolor nisi dolore cupidatat ex id deserunt. Commodo anim aliqua magna nulla qui aute elit officia incididunt Lorem labore. Nostrud pariatur aliqua irure culpa voluptate non aliqua ut exercitation incididunt deserunt aliqua non. Nulla tempor adipisicing dolor incididunt eiusmod labore tempor commodo cupidatat sit. Est ad cupidatat veniam fugiat labore quis minim labore reprehenderit.\r\n",
        "latitude": 42,
        "longitude": -130,
        "tags": [
            "voluptate",
            "mollit",
            "aute",
            "est",
            "aliquip",
            "ullamco",
            "ullamco"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Valerie Bell"
            },
            {
                "id": 1,
                "name": "Esther Forbes"
            },
            {
                "id": 2,
                "name": "Head Ware"
            }
        ],
        "greeting": "Hello, Alexandria Yates! You have 4 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Dolore ad enim quis irure id sint enim deserunt excepteur excepteur excepteur cupidatat ipsum. Anim enim proident id duis excepteur nostrud. Est sunt ea quis voluptate deserunt dolore exercitation ut. Laboris culpa ea laborum ullamco ut consectetur.\r\n"
            },
            {
                "id": 1,
                "message": "Irure excepteur consectetur qui consectetur. Cupidatat aute nostrud reprehenderit tempor sunt eiusmod dolor anim. Excepteur voluptate eiusmod nulla mollit dolor veniam id et consequat enim Lorem. Reprehenderit Lorem voluptate sint adipisicing reprehenderit.\r\n"
            },
            {
                "id": 2,
                "message": "Sit fugiat anim elit voluptate ad esse occaecat esse eu commodo dolore ex sunt ad. Aliqua id do exercitation ea fugiat ullamco occaecat elit occaecat ut aliquip occaecat dolore ipsum. Quis sit reprehenderit quis sunt amet et pariatur laborum sit excepteur. In excepteur duis labore velit Lorem. Minim est magna aute ipsum laboris sit esse. Voluptate irure nostrud id aliqua et nostrud incididunt exercitation laborum velit ea do esse. Voluptate enim esse anim dolor aliqua.\r\n"
            },
            {
                "id": 3,
                "message": "Laboris aliquip laborum nisi enim. Do cupidatat cillum cupidatat sint veniam nulla laborum voluptate proident ullamco. Proident excepteur elit fugiat ea.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 6,
        "guid": "85ef373b-6175-453d-949e-0444662835e1",
        "isActive": true,
        "rate": "$3,242.00",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Peck Gutierrez",
        "company": "UPLINX",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "peckgutierrez@uplinx.com",
        "phone": "+1 (960) 540-3949",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "395 Albany Avenue, Shasta, North Carolina, 6900",
        "about": "Voluptate dolor pariatur eu aute ullamco consectetur occaecat aliqua commodo commodo tempor ea ullamco enim. Incididunt ex eiusmod anim laboris sint eu aute. Sunt occaecat amet dolor occaecat qui laborum irure sunt eu.\r\n",
        "latitude": -7,
        "longitude": 12,
        "tags": [
            "et",
            "dolore",
            "incididunt",
            "ut",
            "sunt",
            "sint",
            "excepteur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Jackson Humphrey"
            },
            {
                "id": 1,
                "name": "Evangeline Briggs"
            },
            {
                "id": 2,
                "name": "Georgette Price"
            }
        ],
        "greeting": "Hello, Peck Gutierrez! You have 8 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Est pariatur laboris eu nisi consequat est amet nulla eu. Sit esse cupidatat qui ad quis sint sit esse dolore. Ipsum cillum mollit eiusmod consectetur occaecat commodo velit et. Nostrud ipsum aliquip occaecat anim nisi. Magna cillum irure pariatur tempor proident ipsum ipsum elit non labore do deserunt.\r\n"
            },
            {
                "id": 1,
                "message": "Aliquip ex labore nisi tempor sit est incididunt mollit qui. Est ea enim ut dolor sint deserunt exercitation dolor est officia est adipisicing et sunt. Aliquip quis cillum commodo voluptate id. Anim quis et commodo commodo labore cupidatat nisi. Pariatur dolor ipsum esse sunt.\r\n"
            },
            {
                "id": 2,
                "message": "Culpa eiusmod amet dolor enim. Enim magna amet enim nisi sit cupidatat dolor tempor adipisicing. Labore ullamco mollit tempor aliqua commodo nostrud minim laboris mollit commodo dolore enim. Culpa ad nulla et anim eiusmod proident culpa consequat sit.\r\n"
            },
            {
                "id": 3,
                "message": "Amet nostrud ad cillum ullamco laborum voluptate commodo. Ut deserunt ex esse sunt sunt elit ex reprehenderit minim amet pariatur. Nostrud est elit ut enim cillum in aute minim esse incididunt. Officia voluptate amet consequat reprehenderit. Tempor nostrud ipsum voluptate ad. Velit consequat ea dolor nisi elit consectetur anim ea nostrud et. Excepteur nulla consectetur labore cillum consectetur non aliqua.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 7,
        "guid": "ccc98918-9b1b-4a56-af02-16f50d8774bf",
        "isActive": false,
        "rate": "$2,099.00",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Erma Bridges",
        "company": "INEAR",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "ermabridges@inear.com",
        "phone": "+1 (957) 529-2590",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "211 Sunnyside Court, Omar, Massachusetts, 9210",
        "about": "Excepteur voluptate commodo incididunt velit veniam ut magna duis sint voluptate deserunt excepteur. Non enim nostrud proident minim magna eu id adipisicing dolor aliqua. Deserunt velit dolore consectetur magna nisi et quis id tempor enim Lorem sunt anim. Esse cupidatat occaecat tempor aliqua ea dolore anim tempor eiusmod aliqua ea magna adipisicing.\r\n",
        "latitude": 25,
        "longitude": -18,
        "tags": [
            "sit",
            "laboris",
            "occaecat",
            "Lorem",
            "mollit",
            "reprehenderit",
            "et"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Alford Gilliam"
            },
            {
                "id": 1,
                "name": "Castillo Holden"
            },
            {
                "id": 2,
                "name": "Mendez Mcleod"
            }
        ],
        "greeting": "Hello, Erma Bridges! You have 4 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Qui sit minim qui nisi sit magna id quis est in. Id pariatur culpa elit dolore est magna dolore pariatur enim proident nisi velit. Ad in nostrud enim sint irure voluptate magna labore elit laboris incididunt qui eiusmod ipsum. Amet laborum duis consequat anim ad. Magna velit ut velit sunt proident dolore do elit tempor laboris.\r\n"
            },
            {
                "id": 1,
                "message": "Veniam laboris ipsum quis laborum qui culpa ex aliquip labore aliqua eiusmod mollit anim. Officia eiusmod magna ut do eu excepteur minim consequat mollit et consectetur enim. Velit ex magna culpa do.\r\n"
            },
            {
                "id": 2,
                "message": "Veniam reprehenderit commodo minim minim velit Lorem irure esse. Magna enim nulla Lorem ex do sint ad nostrud sunt sunt irure amet ad. Et qui aliquip velit Lorem magna veniam aliqua consectetur culpa non. Consequat consequat mollit ullamco excepteur dolor adipisicing non laboris consequat do tempor dolore id.\r\n"
            },
            {
                "id": 3,
                "message": "Nisi officia consectetur consectetur quis. Fugiat esse veniam do ea ea et in. Ullamco incididunt nisi sint nostrud aliquip sit dolore ipsum. Voluptate nostrud ad sint laboris esse mollit duis enim ex cupidatat cupidatat velit aute. Labore incididunt consequat in deserunt nostrud ut consequat magna amet laboris cillum.\r\n"
            }
        ]
    });
	
	Profiles.insert({
        "id": 8,
        "guid": "e1692328-de27-44b4-afd2-2e5f4d60d852",
        "isActive": false,
        "rate": "$3,415.00",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Marlene Bradshaw",
        "company": "DIGIGENE",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "marlenebradshaw@digigene.com",
        "phone": "+1 (883) 527-3165",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "834 Liberty Avenue, Dodge, South Dakota, 841",
        "about": "Nostrud minim enim elit cillum officia eiusmod eiusmod culpa proident. Non ad non nulla ea quis dolor pariatur ipsum dolore. Esse laboris nulla adipisicing sint reprehenderit in ad ea dolore et. Dolor anim Lorem et sunt cillum aliquip et aliquip culpa.\r\n",
        "latitude": -79,
        "longitude": -47,
        "tags": [
            "elit",
            "ea",
            "esse",
            "voluptate",
            "tempor",
            "pariatur",
            "quis"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Catalina Gilbert"
            },
            {
                "id": 1,
                "name": "Kaufman Lester"
            },
            {
                "id": 2,
                "name": "Susie Emerson"
            }
        ],
        "greeting": "Hello, Marlene Bradshaw! You have 8 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Reprehenderit velit dolor velit ad exercitation Lorem eiusmod occaecat sit incididunt et ea. Voluptate aliqua est cupidatat cupidatat tempor amet incididunt amet. Aute esse dolor officia sint voluptate pariatur cillum mollit. Laborum nisi amet labore ex consequat amet officia aliqua ipsum do reprehenderit culpa et.\r\n"
            },
            {
                "id": 1,
                "message": "Ipsum velit fugiat officia ea labore ipsum ea sint commodo. Fugiat incididunt anim nisi in officia. Consectetur incididunt sit culpa duis Lorem dolor Lorem ad ipsum anim. Occaecat occaecat minim quis elit aute ipsum nulla duis amet excepteur non nulla excepteur qui. Commodo mollit veniam fugiat adipisicing consectetur aliqua sint adipisicing. Incididunt esse quis excepteur culpa occaecat laborum minim ad Lorem sit enim enim occaecat.\r\n"
            },
            {
                "id": 2,
                "message": "Laboris laborum proident aute nisi esse ut laborum magna. Ipsum aute proident excepteur laborum qui anim aliquip do. Ullamco et voluptate magna dolor aute occaecat do labore mollit occaecat qui non voluptate enim. Sit fugiat ullamco mollit aliquip. Cupidatat pariatur mollit incididunt ea sit. Velit sunt et pariatur aute deserunt officia quis dolore cupidatat elit do duis id.\r\n"
            },
            {
                "id": 3,
                "message": "Duis pariatur ea veniam anim Lorem excepteur commodo. Aliqua minim cupidatat mollit culpa incididunt deserunt pariatur ullamco. Officia veniam id occaecat aliqua voluptate officia deserunt veniam exercitation. Ad et Lorem amet minim ipsum labore.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 9,
        "guid": "0a98f874-6c0a-4a0e-a323-b92d34843aa1",
        "isActive": false,
        "rate": "$2,589.00",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Corrine Knowles",
        "company": "CRUSTATIA",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "corrineknowles@crustatia.com",
        "phone": "+1 (858) 404-2276",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "468 Manhattan Court, Blairstown, Colorado, 4830",
        "about": "Enim excepteur irure voluptate magna eiusmod nisi nulla deserunt Lorem nisi consectetur occaecat. Irure eiusmod commodo adipisicing eiusmod cillum ea laborum elit. Commodo sit cupidatat est incididunt laboris irure fugiat quis nostrud consequat voluptate tempor elit. Pariatur deserunt commodo occaecat consequat deserunt sunt ullamco mollit mollit amet id. Cillum esse nisi tempor reprehenderit velit nostrud velit commodo qui officia irure reprehenderit aliquip. Proident eu consequat eiusmod elit ipsum deserunt nisi aliquip incididunt aute. Proident deserunt veniam veniam aliquip laborum aliqua ut aliqua.\r\n",
        "latitude": -15,
        "longitude": -1,
        "tags": [
            "ex",
            "et",
            "sit",
            "mollit",
            "officia",
            "cupidatat",
            "excepteur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcgowan Byers"
            },
            {
                "id": 1,
                "name": "Jacobson Ratliff"
            },
            {
                "id": 2,
                "name": "Berg Baker"
            }
        ],
        "greeting": "Hello, Corrine Knowles! You have 7 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Ad quis est voluptate nisi ex voluptate. Labore ex adipisicing anim eu pariatur labore est mollit pariatur nulla sunt. Tempor ipsum est cupidatat ut reprehenderit aute non aute cillum consectetur ullamco. Labore aliquip do reprehenderit ea pariatur fugiat duis eu Lorem cupidatat cupidatat duis sunt reprehenderit. Labore fugiat do culpa non ad proident dolor ut pariatur. Ipsum aliquip minim dolor elit culpa consequat pariatur commodo.\r\n"
            },
            {
                "id": 1,
                "message": "Cupidatat dolor id occaecat pariatur fugiat anim labore occaecat in exercitation duis qui ipsum non. Quis tempor elit do cupidatat dolore aute proident id amet commodo. Cupidatat officia aliqua exercitation anim qui laborum dolore ea excepteur laboris adipisicing exercitation ut.\r\n"
            },
            {
                "id": 2,
                "message": "Culpa ullamco est cupidatat laboris nostrud quis nulla magna cillum. Ea exercitation aliqua commodo aliqua excepteur aliquip ipsum nisi fugiat id. Excepteur Lorem ullamco magna ea nulla esse sunt laborum.\r\n"
            },
            {
                "id": 3,
                "message": "Officia consectetur commodo Lorem adipisicing voluptate veniam veniam. Enim anim ullamco amet commodo consequat dolor ad ea excepteur. Sint voluptate labore adipisicing nostrud aliquip anim sit adipisicing ut voluptate commodo minim consectetur. Mollit voluptate ea anim ea ullamco officia labore magna veniam commodo laboris dolore officia.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 10,
        "guid": "9debd6bb-18b4-4c7b-b737-b4b9f9d15f77",
        "isActive": true,
        "rate": "$3,579.00",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Stout Mccarthy",
        "company": "LUNCHPAD",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "stoutmccarthy@lunchpad.com",
        "phone": "+1 (990) 463-2011",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "976 Alton Place, Bourg, New Jersey, 5153",
        "about": "Dolore eiusmod fugiat quis sint Lorem occaecat velit reprehenderit anim cupidatat reprehenderit. Sint laborum nisi esse deserunt esse irure. Et incididunt nostrud pariatur ipsum veniam eiusmod aliquip laboris mollit ut ullamco. Aliqua occaecat ipsum tempor culpa.\r\n",
        "latitude": 43,
        "longitude": 175,
        "tags": [
            "duis",
            "et",
            "sit",
            "quis",
            "consequat",
            "ut",
            "minim"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Naomi Atkinson"
            },
            {
                "id": 1,
                "name": "Christina Wall"
            },
            {
                "id": 2,
                "name": "Grant Gaines"
            }
        ],
        "greeting": "Hello, Stout Mccarthy! You have 9 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Aute qui occaecat magna et irure proident. Duis aute minim proident mollit veniam aute. Minim sunt sunt esse exercitation adipisicing et Lorem non ea deserunt aute minim. Id occaecat nulla ipsum commodo magna culpa mollit aliquip ad excepteur anim aliquip.\r\n"
            },
            {
                "id": 1,
                "message": "Amet eiusmod occaecat non esse culpa veniam. Excepteur labore eiusmod occaecat ea quis sint laboris velit Lorem qui qui nostrud. Exercitation sit duis et magna eiusmod proident fugiat adipisicing anim enim irure. Consequat amet mollit minim aliqua reprehenderit eu exercitation deserunt sint fugiat ipsum id in. Deserunt velit ipsum sint magna minim commodo.\r\n"
            },
            {
                "id": 2,
                "message": "Cupidatat fugiat ut id dolore labore voluptate enim proident fugiat dolore ad. Voluptate eiusmod fugiat cupidatat occaecat id deserunt sunt ex excepteur ut ex culpa tempor. Est ex nulla irure ipsum consequat adipisicing qui. Aliqua proident sunt sunt magna nostrud do. Aliquip amet pariatur velit esse non officia nisi magna dolor deserunt pariatur. Excepteur irure et minim adipisicing. Consequat ad qui nostrud cillum deserunt sit excepteur.\r\n"
            },
            {
                "id": 3,
                "message": "Id voluptate ea ea cupidatat. Do minim adipisicing adipisicing non ea qui ad. Sint ad elit in elit fugiat est consequat ex proident reprehenderit mollit nisi sint.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 10,
        "guid": "9debd6bb-18b4-4c7b-b737-b4b9f9d15f77",
        "isActive": true,
        "rate": "$3,579.00",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Stout Mccarthy",
        "company": "LUNCHPAD",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "stoutmccarthy@lunchpad.com",
        "phone": "+1 (990) 463-2011",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "976 Alton Place, Bourg, New Jersey, 5153",
        "about": "Dolore eiusmod fugiat quis sint Lorem occaecat velit reprehenderit anim cupidatat reprehenderit. Sint laborum nisi esse deserunt esse irure. Et incididunt nostrud pariatur ipsum veniam eiusmod aliquip laboris mollit ut ullamco. Aliqua occaecat ipsum tempor culpa.\r\n",
        "latitude": 43,
        "longitude": 175,
        "tags": [
            "duis",
            "et",
            "sit",
            "quis",
            "consequat",
            "ut",
            "minim"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Naomi Atkinson"
            },
            {
                "id": 1,
                "name": "Christina Wall"
            },
            {
                "id": 2,
                "name": "Grant Gaines"
            }
        ],
        "greeting": "Hello, Stout Mccarthy! You have 9 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Aute qui occaecat magna et irure proident. Duis aute minim proident mollit veniam aute. Minim sunt sunt esse exercitation adipisicing et Lorem non ea deserunt aute minim. Id occaecat nulla ipsum commodo magna culpa mollit aliquip ad excepteur anim aliquip.\r\n"
            },
            {
                "id": 1,
                "message": "Amet eiusmod occaecat non esse culpa veniam. Excepteur labore eiusmod occaecat ea quis sint laboris velit Lorem qui qui nostrud. Exercitation sit duis et magna eiusmod proident fugiat adipisicing anim enim irure. Consequat amet mollit minim aliqua reprehenderit eu exercitation deserunt sint fugiat ipsum id in. Deserunt velit ipsum sint magna minim commodo.\r\n"
            },
            {
                "id": 2,
                "message": "Cupidatat fugiat ut id dolore labore voluptate enim proident fugiat dolore ad. Voluptate eiusmod fugiat cupidatat occaecat id deserunt sunt ex excepteur ut ex culpa tempor. Est ex nulla irure ipsum consequat adipisicing qui. Aliqua proident sunt sunt magna nostrud do. Aliquip amet pariatur velit esse non officia nisi magna dolor deserunt pariatur. Excepteur irure et minim adipisicing. Consequat ad qui nostrud cillum deserunt sit excepteur.\r\n"
            },
            {
                "id": 3,
                "message": "Id voluptate ea ea cupidatat. Do minim adipisicing adipisicing non ea qui ad. Sint ad elit in elit fugiat est consequat ex proident reprehenderit mollit nisi sint.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 11,
        "guid": "a405609f-37f7-4e50-940f-ab88c8fa388d",
        "isActive": true,
        "rate": "$1,003.00",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Staci Nichols",
        "company": "QUAREX",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "stacinichols@quarex.com",
        "phone": "+1 (973) 481-3773",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "741 Gem Street, Diaperville, Arizona, 5852",
        "about": "Aute consectetur aliquip pariatur velit. Enim excepteur quis esse aliquip velit aute dolore culpa officia consectetur. Eiusmod magna ut tempor culpa non voluptate sit dolor magna anim nulla. Do ad deserunt nulla eu mollit dolor est esse ipsum amet ea non irure. Dolor in est fugiat mollit incididunt non exercitation laborum ea.\r\n",
        "latitude": -50,
        "longitude": 64,
        "tags": [
            "velit",
            "proident",
            "commodo",
            "qui",
            "reprehenderit",
            "ex",
            "ex"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Campbell Lambert"
            },
            {
                "id": 1,
                "name": "Goff Grimes"
            },
            {
                "id": 2,
                "name": "Marks Howard"
            }
        ],
        "greeting": "Hello, Staci Nichols! You have 2 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Sint do ipsum qui fugiat aliqua ipsum amet dolor consectetur aute sint commodo minim velit. Non culpa fugiat aliqua commodo esse adipisicing esse cillum magna. Laboris nisi dolore laborum in magna incididunt non exercitation elit laboris.\r\n"
            },
            {
                "id": 1,
                "message": "Mollit sint sit ea nisi Lorem minim incididunt minim. Proident ut deserunt veniam exercitation veniam voluptate labore. Velit ad veniam eiusmod irure ad duis elit in ea non eu nostrud.\r\n"
            },
            {
                "id": 2,
                "message": "Id elit ea nulla culpa qui velit ex velit velit incididunt. Cupidatat Lorem consequat incididunt est id. Do Lorem minim nulla eu. Excepteur laborum in sint aute ipsum incididunt. Et excepteur ullamco cillum ad elit duis nisi proident ipsum fugiat. Culpa eu exercitation adipisicing ad ullamco sit. Laboris nulla ad aliqua dolor do pariatur ipsum eiusmod qui.\r\n"
            },
            {
                "id": 3,
                "message": "Qui veniam non deserunt pariatur cillum ullamco duis. Labore aute enim dolore aute laboris ex qui irure proident. Occaecat ullamco dolore minim amet deserunt eiusmod ullamco proident voluptate adipisicing nisi excepteur. Ex irure non do non et labore laborum nulla do aliqua reprehenderit do mollit eiusmod. Irure sunt dolore voluptate nostrud dolore qui irure eiusmod. Non sint anim sunt esse adipisicing nulla reprehenderit.\r\n"
            }
        ]
    });
	
	Profiles.insert({
        "id": 12,
        "guid": "e5d06581-d673-4510-adab-8c480353baa4",
        "isActive": false,
        "rate": "$1,610.00",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Elsie Tyler",
        "company": "QUILTIGEN",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "elsietyler@quiltigen.com",
        "phone": "+1 (838) 576-2654",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "201 Interborough Parkway, Goldfield, Vermont, 2506",
        "about": "Incididunt enim et nisi culpa occaecat tempor aliquip aute laborum anim culpa nulla voluptate. Sunt cupidatat ea ut consequat exercitation veniam velit adipisicing nulla irure ex. Dolor commodo excepteur velit cillum exercitation quis sit commodo commodo officia aliqua ad voluptate. Aute eiusmod eiusmod anim eu. Excepteur consectetur nulla amet esse ipsum aute do sunt occaecat ullamco nulla.\r\n",
        "latitude": -60,
        "longitude": 56,
        "tags": [
            "sint",
            "amet",
            "minim",
            "eiusmod",
            "ut",
            "irure",
            "quis"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Daugherty Jones"
            },
            {
                "id": 1,
                "name": "Amanda Noble"
            },
            {
                "id": 2,
                "name": "Lyons Perry"
            }
        ],
        "greeting": "Hello, Elsie Tyler! You have 7 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Fugiat irure amet qui nulla incididunt. Consequat est ad eiusmod excepteur reprehenderit occaecat culpa proident est nulla aliqua. Fugiat ut ad voluptate officia laborum anim ullamco qui ut culpa sint velit et ut. Mollit duis deserunt officia laboris consequat consectetur culpa consectetur voluptate. Eiusmod proident est sit aute magna nulla ex qui magna pariatur sint et. Nostrud est ipsum velit sint sint in officia ex nisi duis duis voluptate magna.\r\n"
            },
            {
                "id": 1,
                "message": "Incididunt fugiat reprehenderit culpa proident veniam nostrud labore veniam reprehenderit incididunt. Elit duis eiusmod culpa laboris voluptate nostrud duis. Consequat deserunt Lorem voluptate ullamco incididunt.\r\n"
            },
            {
                "id": 2,
                "message": "Reprehenderit mollit fugiat mollit dolor occaecat. Laboris ea proident ut reprehenderit occaecat consequat aute nostrud Lorem reprehenderit et deserunt. Anim cupidatat et qui dolor magna officia cupidatat elit. Et cupidatat consequat exercitation enim.\r\n"
            },
            {
                "id": 3,
                "message": "Mollit adipisicing excepteur consequat consectetur adipisicing consectetur. Dolor laboris et et excepteur adipisicing reprehenderit proident esse eiusmod quis laboris. Enim ullamco tempor ullamco ex nulla culpa id nostrud. Magna labore cupidatat Lorem nisi nisi nulla exercitation id pariatur reprehenderit. Aliquip Lorem sit aliqua tempor sunt labore tempor do proident cillum minim veniam mollit voluptate.\r\n"
            }
        ]
    });
	Profiles.insert( {
        "id": 13,
        "guid": "5f328f1a-fa4e-4259-b937-06d24289ded7",
        "isActive": true,
        "rate": "$3,848.00",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Maricela Berger",
        "company": "MAXIMIND",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "maricelaberger@maximind.com",
        "phone": "+1 (978) 427-3265",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "358 Eaton Court, Stagecoach, Hawaii, 636",
        "about": "Reprehenderit deserunt ex sint sint ea. Anim non cillum reprehenderit eu non ex adipisicing. Lorem commodo Lorem fugiat culpa. Exercitation duis aute duis ea commodo reprehenderit dolor do in et consectetur consectetur tempor. Sunt duis non nulla proident sit excepteur labore cupidatat eu nostrud veniam magna.\r\n",
        "latitude": 24,
        "longitude": -70,
        "tags": [
            "anim",
            "deserunt",
            "excepteur",
            "sunt",
            "ex",
            "excepteur",
            "ullamco"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ross Tran"
            },
            {
                "id": 1,
                "name": "Diana Carver"
            },
            {
                "id": 2,
                "name": "Olson Glover"
            }
        ],
        "greeting": "Hello, Maricela Berger! You have 4 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Ad officia cupidatat deserunt proident consequat consectetur. Adipisicing reprehenderit ut mollit mollit sunt ex non esse excepteur elit. Ut ipsum dolore et pariatur sunt ullamco ex veniam ad quis sint eu. Dolore enim do quis elit anim culpa amet esse. In occaecat veniam dolor laborum reprehenderit voluptate magna eiusmod commodo ullamco minim mollit nulla aute. Labore cupidatat consequat voluptate commodo elit ea non officia amet officia ipsum esse proident.\r\n"
            },
            {
                "id": 1,
                "message": "Aliqua Lorem consequat enim est sunt fugiat ullamco eiusmod ipsum officia qui eu. Sint consectetur culpa tempor velit sunt elit incididunt aliquip officia non incididunt. Laborum voluptate ad qui laboris mollit esse enim sit. Tempor ad sint voluptate sint consequat sint. Enim nulla officia officia incididunt aute anim. Incididunt labore ipsum culpa occaecat culpa fugiat. Nisi anim aliquip ipsum ipsum sint magna eu sint commodo veniam ut nisi.\r\n"
            },
            {
                "id": 2,
                "message": "Enim id duis commodo culpa. Eu sit culpa deserunt incididunt id. Incididunt sint dolor tempor ut culpa est deserunt sint proident. Ut dolor quis laboris velit non dolore reprehenderit quis nulla sint non amet dolor anim. Anim elit do labore sunt est ut ullamco adipisicing elit eiusmod id. Nulla dolore est cillum occaecat excepteur reprehenderit exercitation qui laborum voluptate ipsum deserunt sit.\r\n"
            },
            {
                "id": 3,
                "message": "Duis ad eiusmod elit exercitation sunt exercitation sit quis enim elit excepteur. Eiusmod fugiat ipsum consequat magna voluptate ipsum amet voluptate deserunt. Dolore duis occaecat esse dolor. Anim non culpa proident cupidatat. Lorem adipisicing voluptate reprehenderit dolore fugiat cillum ipsum.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 14,
        "guid": "a1217aa1-3691-463d-89a1-b1dcc556e4a7",
        "isActive": true,
        "rate": "$1,466.00",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Sargent Sampson",
        "company": "TETAK",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "sargentsampson@tetak.com",
        "phone": "+1 (924) 404-3142",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "445 Covert Street, Siglerville, Arkansas, 7930",
        "about": "Velit dolore qui Lorem amet aliquip exercitation dolore duis consectetur quis. Aliqua id magna Lorem excepteur dolore nostrud minim mollit sunt aliqua cillum eu aute. Dolor fugiat ea enim proident sit mollit irure eiusmod laborum proident reprehenderit labore voluptate in.\r\n",
        "latitude": -48,
        "longitude": 89,
        "tags": [
            "nostrud",
            "reprehenderit",
            "reprehenderit",
            "adipisicing",
            "cupidatat",
            "labore",
            "reprehenderit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Barry Glenn"
            },
            {
                "id": 1,
                "name": "Francisca Bradford"
            },
            {
                "id": 2,
                "name": "Lindsay Colon"
            }
        ],
        "greeting": "Hello, Sargent Sampson! You have 1 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Pariatur pariatur qui veniam fugiat dolore nostrud ad nulla aliquip aliqua. Esse ullamco id occaecat quis cillum sint minim exercitation Lorem eiusmod quis cupidatat. Sit consequat amet ipsum labore fugiat consectetur laboris cillum id elit aliquip consectetur. Nostrud aute nisi occaecat fugiat dolor et commodo tempor sit ullamco minim voluptate.\r\n"
            },
            {
                "id": 1,
                "message": "Occaecat minim pariatur magna minim sunt. Consectetur labore qui est irure sunt mollit eu exercitation cillum cupidatat cupidatat excepteur. Lorem laborum sunt elit aliquip. Proident officia commodo ad labore magna voluptate sunt esse.\r\n"
            },
            {
                "id": 2,
                "message": "Sunt sunt qui consequat ullamco duis deserunt officia Lorem pariatur nulla Lorem dolor. Et laboris et ipsum esse qui dolore enim reprehenderit ullamco officia proident et laborum sint. Cupidatat veniam pariatur commodo deserunt eu ex quis. Enim adipisicing exercitation est adipisicing nostrud reprehenderit in do incididunt cillum reprehenderit. Nisi in duis veniam veniam elit ut non dolor cupidatat tempor nulla pariatur minim. Id laborum duis incididunt sunt qui ad id Lorem anim. Cupidatat reprehenderit velit id dolor elit ea culpa.\r\n"
            },
            {
                "id": 3,
                "message": "Reprehenderit consectetur excepteur id pariatur culpa aute tempor excepteur aliqua. Nulla occaecat incididunt nisi ullamco. Eu elit velit proident amet aliqua do occaecat. Pariatur anim et esse ut labore cillum ipsum anim est eiusmod occaecat. Amet elit enim officia ut nulla do velit. Veniam magna laborum tempor anim pariatur occaecat.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 15,
        "guid": "06bb0866-a4e2-405a-877e-be9aab5f6cfa",
        "isActive": true,
        "rate": "$1,382.00",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Kate Odom",
        "company": "FUELTON",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "kateodom@fuelton.com",
        "phone": "+1 (857) 418-2654",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "195 Wolcott Street, Elfrida, West Virginia, 1560",
        "about": "Magna nisi sit ipsum minim officia exercitation laboris velit aliqua est consequat. Eiusmod ullamco ipsum anim eiusmod mollit. Voluptate culpa incididunt in adipisicing ea ea voluptate aute. Enim et duis cupidatat dolor tempor esse et enim. Reprehenderit mollit do id pariatur ex do ad culpa. Ea velit ut ut dolor.\r\n",
        "latitude": -60,
        "longitude": -43,
        "tags": [
            "duis",
            "cupidatat",
            "reprehenderit",
            "ipsum",
            "cillum",
            "laborum",
            "enim"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Flora Randolph"
            },
            {
                "id": 1,
                "name": "Heather Whitley"
            },
            {
                "id": 2,
                "name": "Casey Stafford"
            }
        ],
        "greeting": "Hello, Kate Odom! You have 3 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Sunt deserunt dolor esse ea fugiat esse consectetur dolore esse proident dolore irure nostrud cupidatat. Quis proident labore ut officia est sit magna nisi excepteur cillum velit nulla. Dolor laborum dolore deserunt nisi nulla anim.\r\n"
            },
            {
                "id": 1,
                "message": "Dolor aute occaecat duis eu. Ut voluptate eu tempor esse sunt amet labore tempor exercitation ut irure deserunt quis amet. Commodo et id do ex. Non fugiat sunt commodo irure cupidatat esse veniam. Et et Lorem qui non deserunt eu excepteur fugiat elit eu.\r\n"
            },
            {
                "id": 2,
                "message": "Reprehenderit qui irure reprehenderit sint exercitation amet sunt et dolore reprehenderit exercitation. Sit exercitation fugiat labore est minim. Mollit fugiat pariatur incididunt et laborum excepteur.\r\n"
            },
            {
                "id": 3,
                "message": "Irure quis irure proident reprehenderit aliquip. Deserunt in dolore non est nulla. Pariatur eiusmod ullamco adipisicing veniam ullamco.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 16,
        "guid": "5e23f85e-9e49-45d8-a50c-b759c2e28108",
        "isActive": false,
        "rate": "$1,566.00",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Olivia Ball",
        "company": "ZENTIME",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "oliviaball@zentime.com",
        "phone": "+1 (913) 530-2725",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "677 Sheffield Avenue, Nord, Kentucky, 8760",
        "about": "Proident nisi aliquip reprehenderit aliquip aliquip fugiat Lorem nisi anim aliqua laboris reprehenderit. Excepteur proident dolor veniam veniam est nostrud non amet incididunt minim consectetur aliquip fugiat consequat. In fugiat in laborum sit dolor nostrud. Dolore dolor laboris pariatur fugiat veniam qui ipsum irure velit eu minim Lorem nisi. Magna anim ut ex ex reprehenderit et veniam Lorem minim ad non id incididunt ad. Exercitation non pariatur aliquip consectetur cupidatat ex id exercitation incididunt nisi.\r\n",
        "latitude": 90,
        "longitude": 46,
        "tags": [
            "deserunt",
            "culpa",
            "esse",
            "consectetur",
            "dolore",
            "laborum",
            "esse"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Morgan Trujillo"
            },
            {
                "id": 1,
                "name": "Morrow Chandler"
            },
            {
                "id": 2,
                "name": "Lawrence Chang"
            }
        ],
        "greeting": "Hello, Olivia Ball! You have 9 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Excepteur consequat culpa cillum consequat laboris aliquip ipsum mollit. Nostrud amet consectetur ut labore incididunt nisi minim. Ullamco quis pariatur occaecat id pariatur.\r\n"
            },
            {
                "id": 1,
                "message": "Magna voluptate consectetur non proident consequat quis amet eu deserunt fugiat. Sunt occaecat deserunt ex voluptate officia irure esse do laborum enim dolore anim. Esse sit nostrud sunt consectetur ipsum sunt nulla ipsum minim pariatur ad aliquip. Duis Lorem qui veniam eu. Sit veniam et anim fugiat cillum labore dolor incididunt nulla dolore tempor.\r\n"
            },
            {
                "id": 2,
                "message": "Enim ut amet quis magna consequat velit. Esse eu dolore aliqua reprehenderit est consequat. Eiusmod culpa laboris aliqua fugiat aliquip ipsum proident fugiat ex sunt amet ad do.\r\n"
            },
            {
                "id": 3,
                "message": "Do fugiat pariatur exercitation ullamco ullamco minim irure. Ullamco reprehenderit commodo ea Lorem elit deserunt ipsum esse quis quis. Excepteur culpa excepteur in nostrud voluptate do dolore ad do eu cupidatat labore. Dolore pariatur occaecat magna commodo do minim aliquip in est ut labore elit. Amet aute sint esse laborum eu mollit ipsum elit incididunt dolore eiusmod tempor ex officia.\r\n"
            }
        ]
    });
	Profiles.insert({
        "id": 17,
        "guid": "d84f8ce0-7bd9-4f95-a01f-e60ca3d8b1d1",
        "isActive": false,
        "rate": "$2,588.00",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Carmela Jenkins",
        "company": "FURNAFIX",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "carmelajenkins@furnafix.com",
        "phone": "+1 (975) 597-3459",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "149 Brighton Avenue, Churchill, California, 1228",
        "about": "Exercitation ut aliquip veniam enim non officia tempor laboris consectetur aliqua amet nostrud Lorem ipsum. Anim officia voluptate non id do minim ad magna occaecat consectetur sit sit id reprehenderit. Consectetur pariatur commodo minim consequat sit ullamco ullamco. Ullamco adipisicing non eu reprehenderit pariatur voluptate proident excepteur aliqua deserunt dolor non. Adipisicing commodo excepteur amet elit culpa id tempor ad duis commodo adipisicing occaecat nisi. Quis anim exercitation ad ut aliqua nostrud dolor mollit. Aliquip enim nulla eu ullamco sit fugiat tempor.\r\n",
        "latitude": -4,
        "longitude": 89,
        "tags": [
            "cupidatat",
            "fugiat",
            "quis",
            "duis",
            "sint",
            "dolor",
            "laboris"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Allie Mcfadden"
            },
            {
                "id": 1,
                "name": "Michelle Cochran"
            },
            {
                "id": 2,
                "name": "Allyson Garrison"
            }
        ],
        "greeting": "Hello, Carmela Jenkins! You have 1 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Aute id pariatur non qui nostrud. Adipisicing cillum laborum est adipisicing minim quis. Ex excepteur duis eiusmod et aliquip commodo enim ipsum. Minim non tempor labore consectetur nisi nisi Lorem tempor nostrud reprehenderit. Eu minim pariatur labore nisi. In nulla eu in consectetur nostrud. Consequat elit amet cillum officia eu nisi est non.\r\n"
            },
            {
                "id": 1,
                "message": "Mollit Lorem veniam officia ullamco veniam exercitation ut et. Enim ad in adipisicing elit. Aliqua reprehenderit aliquip ex dolore culpa Lorem anim dolore.\r\n"
            },
            {
                "id": 2,
                "message": "Lorem cillum fugiat consectetur in reprehenderit tempor voluptate in velit officia mollit eiusmod. Non nostrud et ut ea deserunt. Eiusmod dolore consectetur fugiat cillum nulla. Commodo nulla minim in consectetur tempor laboris magna in ea aute nisi consequat ipsum est. Velit culpa labore aliquip nulla. Nostrud deserunt amet do cupidatat qui reprehenderit incididunt eiusmod.\r\n"
            },
            {
                "id": 3,
                "message": "Elit enim commodo excepteur tempor aute fugiat tempor excepteur elit reprehenderit esse proident. Voluptate voluptate ipsum amet dolor elit culpa. Cillum eiusmod sunt ex excepteur sit. Eiusmod esse reprehenderit incididunt irure aliquip amet exercitation consequat irure exercitation excepteur. Culpa occaecat Lorem nostrud nulla aliqua velit cupidatat qui nostrud voluptate dolor id et. Nulla Lorem in labore Lorem dolore.\r\n"
            }
        ]
    });
	
	Profiles.insert({
        "id": 18,
        "guid": "db327160-2705-4dc1-9aa2-0c7aa54fcefd",
        "isActive": false,
        "rate": "$3,348.00",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Madge Higgins",
        "company": "CODACT",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "madgehiggins@codact.com",
        "phone": "+1 (959) 595-3866",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "502 Montrose Avenue, Chilton, Illinois, 7824",
        "about": "Lorem fugiat aute voluptate non. Reprehenderit occaecat officia fugiat amet. Et mollit sunt commodo qui laboris nulla incididunt eiusmod. Eu anim mollit consequat ipsum culpa incididunt ut incididunt ad ea ullamco nostrud sunt. Sint duis qui laborum quis. Minim do sit laboris aliquip duis qui aliqua nulla ipsum. Ullamco nisi duis pariatur dolore cillum ut aute ad velit deserunt.\r\n",
        "latitude": -78,
        "longitude": 156,
        "tags": [
            "est",
            "incididunt",
            "dolor",
            "excepteur",
            "veniam",
            "ea",
            "do"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Consuelo Kelly"
            },
            {
                "id": 1,
                "name": "Belinda Hester"
            },
            {
                "id": 2,
                "name": "Wright Vega"
            }
        ],
        "greeting": "Hello, Madge Higgins! You have 7 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Proident elit aute non tempor cillum exercitation ipsum aliqua cupidatat id cillum velit proident. Duis qui enim cillum sint sint sunt laboris culpa. Tempor duis cupidatat in ea do aliquip dolore velit.\r\n"
            },
            {
                "id": 1,
                "message": "Excepteur nisi occaecat Lorem commodo. Laborum eiusmod nisi ipsum consectetur laborum culpa dolore. Occaecat et sit esse id enim consectetur esse. Ipsum exercitation ex velit irure cupidatat dolore exercitation. Consectetur sit amet deserunt fugiat Lorem dolor. Laboris excepteur fugiat officia ex proident culpa aliquip magna magna mollit eiusmod.\r\n"
            },
            {
                "id": 2,
                "message": "Duis mollit quis minim aliqua dolor. Minim sint reprehenderit nulla nisi esse qui. Nostrud ipsum ad deserunt minim commodo sint incididunt dolore esse minim reprehenderit est. Ut velit consequat elit exercitation excepteur amet sunt pariatur non irure veniam tempor. Fugiat deserunt aute velit magna cupidatat laboris enim sunt consequat dolore.\r\n"
            },
            {
                "id": 3,
                "message": "Exercitation aliqua proident qui velit tempor aute aliqua fugiat amet. In fugiat magna adipisicing veniam ut anim voluptate eu sit excepteur ipsum ex et excepteur. Elit id dolor aliquip nostrud magna aute ea laboris sit officia.\r\n"
            }
        ]
    });
	
	Profiles.insert({
        "id": 19,
        "guid": "defca06f-4242-4b4c-8422-0dbf7ea11dc8",
        "isActive": false,
        "rate": "$1,786.00",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Essie Casey",
        "company": "TEMORAK",
        "linkedin": "<ReferenceError: linkedin is not defined>",
        "email": "essiecasey@temorak.com",
        "phone": "+1 (815) 531-2153",
        "experience": "<ReferenceError: experience is not defined>",
        "background": "<ReferenceError: background is not defined>",
        "address": "137 Fanchon Place, Camptown, New York, 1997",
        "about": "Cupidatat eu sunt Lorem eiusmod. Excepteur excepteur commodo adipisicing eu cillum sunt pariatur. Nulla laborum dolor consectetur commodo ad ipsum sunt consequat irure Lorem. Tempor consequat quis proident et. Id eiusmod deserunt magna qui. Do in irure labore aliquip fugiat consectetur aliquip anim velit dolor.\r\n",
        "latitude": -80,
        "longitude": -162,
        "tags": [
            "qui",
            "velit",
            "reprehenderit",
            "reprehenderit",
            "ad",
            "do",
            "aliqua"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Jeannette George"
            },
            {
                "id": 1,
                "name": "Melva Harmon"
            },
            {
                "id": 2,
                "name": "May Mcfarland"
            }
        ],
        "greeting": "Hello, Essie Casey! You have 9 unread messages.",
        "reviews": [
            {
                "id": 0,
                "message": "Veniam tempor fugiat commodo qui. Dolor eu incididunt qui cillum duis nisi in dolor commodo. Tempor mollit est nostrud exercitation aute enim irure do aliquip consequat. Proident non ipsum deserunt occaecat elit sit laboris elit proident do in anim Lorem.\r\n"
            },
            {
                "id": 1,
                "message": "Cupidatat minim proident culpa ullamco nisi sit pariatur reprehenderit velit amet nulla sit non. Voluptate pariatur aute culpa duis dolore magna aute officia ea duis laboris. Velit consectetur quis commodo nisi id sint minim ad voluptate cillum est occaecat. Pariatur consectetur aute minim reprehenderit fugiat. Dolor minim minim consectetur id nostrud magna elit nostrud aliqua ullamco. Exercitation minim exercitation ex sint id magna ipsum consectetur ad.\r\n"
            },
            {
                "id": 2,
                "message": "Officia est magna occaecat veniam sunt laboris enim ea esse laboris sit eiusmod. Duis eu aliquip elit non culpa voluptate sunt nostrud ex dolore nisi commodo incididunt excepteur. Reprehenderit eiusmod magna aute fugiat irure. Non labore anim excepteur aute.\r\n"
            },
            {
                "id": 3,
                "message": "Et tempor tempor cupidatat ut tempor amet. Fugiat cupidatat commodo quis velit in aute duis quis veniam veniam magna sit nisi officia. Proident sit cillum consequat laboris mollit aliqua voluptate ut.\r\n"
            }
        ]
    });
}
});
}
