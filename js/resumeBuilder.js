/*
This is empty on purpose! Your code to build the resume will go here.
 */



//-------- bio ---------------------
var bio = {
 	"name": "Rath Prak",
 	"role": "Web Developer",
 	"contacts": {
 		"email": "rathanap@gmail.com",
 		"github": "https://github.com/rath-prak",
 		"mobile": "021 126 0568",
 		"location": "Wellington",
 		"twitter": "@rath-prak"
 	},
 	"welcome": "Welome to my interactive resume, build Javascript",
 	"skills": ["HTML", "  CSS", "  Javascript", "  Photoshop"],
 	"pic": "images/rath-pic.jpeg"
 };

var formattedaName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);

var formattedPic= HTMLbioPic.replace('%data%', bio.pic)

var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);



$("#header").prepend(formattedaName, formattedRole);
$("#topContacts").append(formattedEmail, formattedGithub, formattedMobile, formattedLocation, formattedTwitter);
$("#header").append(formattedPic, formattedWelcome);

// if(bio.skills.length > 0){
// 	$("#header").append(HTMLskillsStart);

// 	var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
// 	$("#skills").append(formattedSkills);

// 	var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
// 	$("#skills").append(formattedSkills);

// 	var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
// 	$("#skills").append(formattedSkills);

// 	var formattedSkills = HTMLskills.replace('%data%', bio.skills[3]);
// 	$("#skills").append(formattedSkills);

// };

$("#header").append(HTMLskillsStart); //use the 'for in' loop to access objects and arrays. The 'i' is an iterator and can be called whatever.
for (i in bio.skills) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);
}


//-------- work ---------------------
var work = {
	"jobs":[
		{
		"employer": "TBD Design",
		"title": "Graphic Designer",
		"location": "Wellington, New Zealand",
		"dates": " 2009 - 2015",
		"description":"create visual concepts, communicate and liase with clients. Develop layout and production design for brochures, magazines, and corporate reports."
		},
		{
		"employer": "Medivet",
		"title": "Marketing Assistant",
		"location": "Phnom Penh, Cambodia",
		"dates": "2005 - 2006",
		"description":"Organise and analyse market research and surveys.Input data into database, analyse and produce reports. Identify and implement communication strategies, such as Print media, promotions and technical seminars to attract new customers."
		},
		{
		"employer": "New World Supermarket",
		"title": "Grocery Assistant",
		"location": "Wellington, New Zealand",
		"dates": "2000 - 2001",
		"description": "Spent all day putting things on the shelves and facing(tidying the shelves so the look presentable)"
		}
	]
};

var displayWork = function(){

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    var formattedworklocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedworklocation);

    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description)
    $(".work-entry:last").append(formattedDescription);
  }
};

displayWork(); //calls the function


//-------- collecting click locations ---------------------
// grabbing click location from the 'document', which is pretty much the whole website
	$(document).click(function(loc){
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x, y);
	});


//-------- projects ---------------------
var projects = {
	"projects":[
		{
		"title": "Capturegram Photography",
		"dates": "2012-2016",
		"discription": "Corporate photography business, offer services in all types of photography",
		"images":["images/rath-pic.jpeg", "images/rath-pic.jpeg", "images/rath-pic.jpeg"]
		},
		{
		"title": "Sprout Media",
		"dates": "2014-2016",
		"discription": "Video production company",
		"images":["images/rath-pic.jpeg", "images/rath-pic.jpeg", "images/rath-pic.jpeg"]
		}
	]
};


//-------- education ---------------------
var education = {
	"school": [
		{
	 	"name": "Natcoll",
	 	"city": "Wellington",
	 	"major": "Graphic Design",
	 	"dates": "2007-2009",
	 	"url": "https//www.natcoll.co.nz"
	 	},
		{
	 	"name": "Victoria University",
	 	"city": "Wellington",
	 	"major": "Economics",
	 	"dates": "2000-2004",
	 	"url": "https//www.vuw.co.nz"
	 	}
	],

	"onlineCourse": [
		{
		"title": "HTML and CSS",
		"school": "Udacity",
		"dates": "Jan 2016",
		"url": "https://www.udacity.com/"
		}, 
		{
		"title": "Javascript",
		"school": "Codecademy",
		"dates": "Dec 2015",
		"url": "https://www.codecademy.com/"
		} 
	]
};



	





