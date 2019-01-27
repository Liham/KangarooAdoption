//display value of state list option in ownership input
function stateSelect() {
    var stateList = document.getElementById("stateList");
    document.getElementById("ownership").value = stateList.options[stateList.selectedIndex].value;
}

//change the display of the other pages to none and the about page to block
function aboutPage() {
    var mainPage = document.getElementById("mainPage");
    var aboutPage = document.getElementById("aboutPage");
    var listingsPage = document.getElementById("listingsPage");
  
    if(mainPage.style.display != "none") {
        mainPage.style.display = "none";
    }
    
    if(aboutPage.style.display != "block") {
        aboutPage.style.display = "block";
    }
    
    if(listingsPage.style.display != "none") {
        listingsPage.style.display = "none";
    }
    
}

//change the display of the other pages to none and the listings page to block
function listingsPage() {
    var mainPage = document.getElementById("mainPage");
    var aboutPage = document.getElementById("aboutPage");
    var listingsPage = document.getElementById("listingsPage");
    
    if(mainPage.style.display != "none") {
        mainPage.style.display = "none";
    }
    
    if(aboutPage.style.display != "none") {
        aboutPage.style.display = "none";
    }
    
    if(listingsPage.style.display != "block") {
        listingsPage.style.display = "block";
    }
    
}

//generates random stats for kangaroos
function randomListings() {
    var kangarooNames = ["Liam", "Emma", "Noah", "Olivia", "William",	"Ava", "James", "Isabella",	"Logan", "Sophia", "Benjamin", "Mia", 
                         "Mason",	"Charlotte", "Elijah", "Amelia", "Oliver", "Evelyn", "Jacob",	"Abigail", "Lucas",	"Harper",	"Michael", "Emily",
                         "Alexander", "Elizabeth", "Ethan",	"Avery", "Daniel", "Sofia",	"Matthew", "Ella", "Aiden",	"Madison", "Henry",	"Scarlett",	
                         "Joseph", "Victoria", "Jackson",	"Aria",	"Samuel",	"Grace", "Sebastian",	"Chloe", "David",	"Camila",	"Carter",	"Penelope",
                         "Wyatt",	"Riley", "Jayden", "Layla",	"John",	"Lillian", "Owen", "Nora", "Dylan",	"Zoey",	"Luke",	"Mila",	"Gabriel", "Aubrey", 
                         "Anthony",	"Hannah",	"Isaac", "Lily", "Grayson",	"Addison", "Jack", "Eleanor",	"Julian",	"Natalie", "Levi", "Luna", "Christopher",
                         "Savannah", "Joshua", "Brooklyn", "Andrew", "Leah", "Lincoln",	"Zoe", "Mateo",	"Stella",	"Ryan",	"Hazel", "Jaxon",	"Ellie",
                         "Nathan", "Paisley",	"Aaron", "Audrey", "Isaiah", "Skylar", "Thomas", "Violet", "Charles",	"Claire",	"Caleb", "Bella",	"Josiah",
                         "Aurora", "Christian",	"Lucy",	"Hunter",	"Anna",	"Eli", "Samantha", "Jonathan", "Caroline", "Connor", "Genesis",	"Landon",
                         "Aaliyah", "Adrian",	"Kennedy", "Asher",	"Kinsley", "Cameron",	"Allison", "Leo",	"Maya",	"Theodore",	"Sarah", "Jeremiah", "Madelyn",
                         "Hudson", "Adeline",	"Robert",	"Alexa", "Easton", "Ariana", "Nolan",	"Elena", "Nicholas", "Gabriella",	"Ezra",	"Naomi", "Colton",
                         "Alice",	"Angel", "Sadie",	"Brayden", "Hailey", "Jordan", "Eva",	"Dominic", "Emilia", "Austin", "Autumn", "Ian",	"Quinn", "Adam",
                         "Nevaeh", "Elias",	"Piper", "Jaxson", "Ruby", "Greyson",	"Serenity",	"Jose",	"Willow",	"Ezekiel", "Everly", "Carson", "Cora", 
                         "Evan", "Kaylee", "Maverick", "Lydia",	"Bryson",	"Aubree",	"Jace",	"Arianna", "Cooper",	"Eliana",	"Xavier",	"Peyton",	"Parker",
                         "Melanie",	"Roman", "Gianna", "Jason",	"Isabelle", "Santiago", "Julia", "Chase",	"Valentina", "Sawyer", "Nova", "Gavin",	"Clara",
                         "Leonardo", "Vivian", "Kayden", "Reagan", "Ayden",	"Mackenzie", "Jameson",	"Madeline"];
  
    var name = Math.floor(Math.random() * kangarooNames.length);
    var age = Math.floor(Math.random() * 18) + 1;
    var heightFeet = Math.floor(Math.random() * 3) + 4;
    if (heightFeet == 6) {
        var heightInch = Math.floor(Math.random() * 5);
    } else {
        var heightInch = Math.floor(Math.random() * 11);
    }
    var weightLbs = Math.floor(Math.random() * 41) + 55;
  
    document.getElementById("name").innerHTML = kangarooNames[name];
    document.getElementById("age").innerHTML = age;
    document.getElementById("heightFeet").innerHTML = heightFeet;
    document.getElementById("heightInch").innerHTML = heightInch;
    document.getElementById("weightLbs").innerHTML = weightLbs;
    
}

//Does not display image and I don't know why, but it does run the random generation
function kangarooRdmImg() {
  
     var kangarooImages = ["https://cdn.glitch.com/2216f874-ba54-4092-8b6e-3908c00935c8%2Fkangaroo1.jpg?1547655328379", 
                           "https://cdn.glitch.com/2216f874-ba54-4092-8b6e-3908c00935c8%2Fkangaroo2.jpg?1547655330647",
                           "https://cdn.glitch.com/2216f874-ba54-4092-8b6e-3908c00935c8%2Fkangaroo3.jpg?1547658723525", 
                           "https://cdn.glitch.com/2216f874-ba54-4092-8b6e-3908c00935c8%2Fkangaroo4.jpg?1547655312430",
                           "https://cdn.glitch.com/2216f874-ba54-4092-8b6e-3908c00935c8%2Fkangaroo5.jpg?1547655320458"];
  
    var picture = Math.floor(Math.random * kangarooImages.length);
    
    document.getElementById("picture").src = kangarooImages[picture];
}
