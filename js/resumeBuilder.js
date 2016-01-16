/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Rath");

// var awesomeThoughts = 'I am Rath and I am awesome!';
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace('awesome', 'fun');
// $('#main').append(funThoughts);



var bio = {
 	"name": "Rath Prak",
 	"role": "Web Developer",
 	"contacts": {
 		"email": "rathanap@gmail.com",
 		"github": "https://github.com/rath-prak",
 		"mobile": "021 126 0568",
 		"location": "Wellington",
 		"twitter": "@rath-prak",
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


$('#header').prepend(formattedaName, formattedRole);
$("#topContacts").append(formattedEmail, formattedGithub, formattedMobile, formattedLocation, formattedTwitter);
$('#header').append(formattedPic, formattedWelcome, HTMLskillsStart, formattedSkills);






// var work = {};
//  	work.position = "Graphic Designer ";
//  	work.employer = "TBD Design";
//  	work.Years = "5";
//  	work.city = "Wellington";

// var education = {
// 	'schools': [
// 		{
// 	 		"name": "Natcoll",
// 	 		"city": 'Wellington',
// 	 		"major": 'Graphic Design',
// 	 		"graduation": 2009
// 	 	},
// 		{
// 	 		"name": "Victoria University",
// 	 		"city": 'Wellington',
// 	 		"major": 'Economics',
// 	 		"graduation": 2003
// 	 	}
// 	], 
// 		'onlineCourse': [
// 		{
// 		"title": "HTML and CSS",
// 		"school": "Udacity",
// 		"dates": "Jan 2016",
// 		"url": "https://www.udacity.com/"
// 		}, 
// 		{
// 		"title": "Javascript",
// 		"school": "Codecademy",
// 		"dates": "Dec 2015",
// 		"url": "https://www.codecademy.com/"
// 		}, 
// 		]



// };
//  	education["name"] = "Natcoll";
//  	education["years"] = "2007-2009";
//  	education["city"] = "Wellington, New Zealand";

// $('#main').append(work['position']);
// $('#main').append(education.name);	

// $('#main').append(education.schools);	





