const experienceData = [
    {
        logoImage: "images/logos/oc.png",
        title: "Developer",
        company: "OPENCOLLAB",
        employmentType: "Full-time",
        startMonth: 10,
        startYear: 2017,
        endMonth: null,
        endYear: null,
        endDay: null,
        isPresent: true,
        location: "Pretoria Area, South Africa"
    },
    {
        logoImage: "images/logos/up.png",
        title: "System Administrator / Web Developer",
        company: "University of Pretoria/Universiteit van Pretoria",
        employmentType: "Contract",
        startMonth: 1,
        startYear: 2016,
        endMonth: 9,
        endYear: 2017,
        endDay: 31,
        isPresent: false,
        location: "Pretoria Area, South Africa"
    },
    {
        logoImage: "images/logos/teqcle.jpg",
        title: "Junior PHP Developer",
        company: "Teqcle Information Technologies",
        employmentType: "Full-time",
        startMonth: 0,
        startYear: 2015,
        endMonth: 11,
        endYear: 2015,
        endDay: 31,
        isPresent: false,
        location: "Pretoria Area, South Africa"
    },
    {
        logoImage: "images/logos/nrf.png",
        title: "Junior Developer",
        company: "The National Research Foundation of South Africa (NRF)",
        employmentType: "Internship",
        startMonth: 3,
        startYear: 2014,
        endMonth: 0,
        endYear: 2015,
        endDay: 31,
        isPresent: false,
        location: "Pretoria Area, South Africa"
    },
];

const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function monthDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() + 
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

function currentYearDiff(yearFrom) {
    console.log(new Date().getFullYear() - yearFrom)
    return new Date().getFullYear() - yearFrom;
}

function yearDiff(yearStart, yearEnd) {
    console.log("Here 1")
    return yearEnd - yearStart;
}

function generateWorkExperience() {
    experienceData.forEach(experience => {
        let years, months, ends;
        let starts = moment(experience.startYear + '-' + (((experience.startMonth + 1) < 10) ? "0" + (experience.startMonth + 1):(experience.startMonth + 1)) + "-" + "01");

        if(experience.isPresent) {
           ends = moment(new Date());
        } else {
            ends = moment(experience.endYear + '-' + (((experience.endMonth + 1) < 10) ? "0" + (experience.endMonth + 1):(experience.endMonth + 1)) + "-" + experience.endDay);
        }

        console.log(starts);
        console.log(ends);
        years = ends.diff(starts, 'year');
        console.log("year = " + years);
        starts.add(years, 'years');
        months = ends.diff(starts, 'months') + 1;
        console.log("Months = " + months);
        console.log("===============================================");

        document.write(`<div class="row">`);
            document.write(`<div class="media">`);
                document.write(`<img width="56" height="56" src="${experience.logoImage}" class="mr-3" alt="...">`);
                document.write(`<div class="media-body">`);
                    document.write(`<h5 class="mt-0">${experience.title}</span></h5>`);
                    document.write(`<p class="mt-0">${experience.company} &bull; <span>${experience.employmentType}</span></p>`);
                    document.write(`<p>`);
                        document.write(`<span class="date">${yearMonths[experience.startMonth]} ${experience.startYear} &mdash; ${((experience.isPresent) ? 'Present':yearMonths[experience.endMonth] + " " + experience.endYear)} &bull; ${((years > 0) ? ((years == 1) ? years + ' yr': years + ' yrs'):'')} ${((months > 0) ? ((months == 1) ? months + ' mos': months + ' mos'):'')}</span>`);
                        document.write(`<span class="location">${experience.location}</span>`);
                    document.write(`</p>`);
                document.write(`</div>`);
            document.write(`</div>`);
        document.write(`</div>`);
        document.write("<hr>")
    });
}