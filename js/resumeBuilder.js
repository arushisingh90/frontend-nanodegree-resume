var bio = {
    name: "Arushi Singh",
    role: "Web Application Developer",
    contacts: {
        mobile: "410-330-3177",
        email: "arushi.singh90@gmail.com",
        github: "arushisingh90",
        location: "Maryland"
    },
    welcomeMessage: "Hi! I am a full stack developer with 4+ years' of experience in .NET technologies.",
    skills: ["C#.NET", "SQL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    biopic: "images/arushi.png",
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        var formattedHTMLContactGeneric = HTMLcontactGeneric.replace("%contact%", "mobile").replace("%data%", this.contacts.mobile);
        $("#topContacts,#footerContacts").append(formattedHTMLContactGeneric);

        formattedHTMLContactGeneric = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", this.contacts.email);
        $("#topContacts,#footerContacts").append(formattedHTMLContactGeneric);

        formattedHTMLContactGeneric = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", this.contacts.github);
        $("#topContacts,#footerContacts").append(formattedHTMLContactGeneric);

        formattedHTMLContactGeneric = HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", this.contacts.location);
        $("#topContacts,#footerContacts").append(formattedHTMLContactGeneric);

        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));


        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Manipal Institute of Technology",
        "location": "Manipal, India",
        "degree": "Bachelors of Engineering",
        "majors": ["Computer Science"],
        "dates": "2009 - 2013",
        "url": "https://manipal.edu/mit.html"
    }],
    "onlineCources": [{
        "title": "Front-End Web Developer Nanodegree Program",
        "school": "Udacity",
        "dates": "May 2017 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);
            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", this.schools[school].name).replace("#", this.schools[school].url);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[school].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[school].majors));

        }

        if (education.onlineCources.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var onlineCource = 0; onlineCource < education.onlineCources.length; onlineCource++) {
                $("#education").append(HTMLschoolStart);
                var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCources[onlineCource].title).replace("#", this.onlineCources[onlineCource].url);
                var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCources[onlineCource].school);
                $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", this.onlineCources[onlineCource].dates));
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.onlineCources[onlineCource].url));
            }
        }

    }

};

var work = {
    "jobs": [{
            "employer": "DCCA",
            "title": "Sr. Software Developer",
            "location": "Ellicott City, MD",
            "dates": "Aug 2015 - Present",
            "description": "Developed Automated unit testing for entire business layer using Mock. Worked on several enhancements from requirement, design, and development to unit testing. Used C#.NET, SQL Server, JQuery, JavaScript, Mock and CSS to achieve it. Peer reviewed fellow team member’s design and development work, which helped minimize bugs. Created requirement and design documents for each work request using CMMI Level 4 standards",
            "url": "http://www.dcca.com/"
        },
        {
            "employer": "A2Z Inc.",
            "title": "Web Application Developer",
            "location": "Columbia, MD",
            "dates": "Dec 2012 - Aug 2015",
            "description": "Built a new website to manage mobile apps by providing flexibility to change application configurations from web UI. Revamped existing product to HTML5. Made the UI responsive, beautiful and intuitive. Collaborated with designers to achieve this. Built an internal tool for controlling external API access. Implemented features that allowed testing of web service and viewing log of calls made to the API. Remodeled static aspx pages to be XSLT driven which improved flexibility and maintainability. Upgraded sites to newer versions while maintaining client specific features. Worked on a number of issues and feature enhancements during each sprint. Managed each issue from requirement analysis, development to testing. Provided day-to-day customer service to clients within SLA. Collaborated with the Project Managers to achieve this. Managed issues by proper resource allocation and initial requirement analysis. Addressed customer service in parallel with sprints by doing proper effort estimation and time management.",
            "url": "http://www.a2zinc.net/show6/public/enter.aspx"
        }
    ],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer).replace("#", this.jobs[job].url);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
            $(".work-entry:last").append(HTMLschoolLocation.replace("%data%", this.jobs[job].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
        }
    }
};

var projects = {
    "projects": [{
            "title": "TAGGS",
            "dates": "2017",
            "description": "Developed Web based, highly customizable application to help clients to move from cumborsom VBA and access based excel application",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Coded Unit Testing",
            "dates": "2016",
            "description": "Developed coded unit testing for entire business layer.",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Front End Re-Design",
            "dates": "2015",
            "description": "Revamped existing product to HTML5. Made the UI responsive, beautiful and intuitive.",
            "images": ["images/proj3Img1.PNG", "images/proj3Img2.PNG"]
        },
        {
            "title": "Partner Services",
            "dates": "2013",
            "description": "Built an internal tool for controlling external API access. Implemented features that allowed testing of web service and viewing log of calls made to the API",
            "images": ["images/proj4Img1.PNG", "images/proj4Img2.PNG", "images/proj4Img3.PNG"]
        }
    ],
    "display": function() {
        for (var project = 0; project < this.projects.length; project++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[project].description));

            for (var image = 0; image < this.projects[project].images.length; image++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].images[image]));
            }
        }
    }

};

bio.display();
education.display();
work.display();
projects.display();



$("#mapDiv").append(googleMap);