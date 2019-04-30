// Joyce Liao
// Softdev2 pd8
// K21 -- Onions, Bell Peppers, and Celery, Oh My!
// M 2019-04-29

// average enrollment in schools with a female enrollment of more than 50% in the 2005-2006 school year
var female_maj = json.filter(function(n) {
    return (n["schoolyear"] == "20052006" && n["female_per"] > 50)
});

var avg_enroll = female_maj.map(function(n) {
    return n["total_enrollment"]
});

var num_targets = avg_enroll.length;

avg_enroll = avg_enroll.reduce(function(a,b) {
    return a+b
});

avg_enroll = Math.floor(avg_enroll / num_targets);

// console.log(female_maj);
// console.log(avg_enroll);
document.getElementById("uno").innerHTML = avg_enroll;
// ============================================================

// median percentage of ELL students in schools with more than 15% Asian American Students in the 2008-2009 school year
var asian_stat = json.filter(function(n) {
    return n["asian_per"] > 15
});

var ell_stat = asian_stat.map(function(n) {
    return n["ell_percent"]
});

var ell_median = ell_stat.sort()[ell_stat.length / 2];

// console.log(ell_median);
document.getElementById("dos").innerHTML = ell_median;
// ============================================================

// Highest total number of students in k-3 in a school in the 2011-2012 school year
var school_year = json.filter(function(n) {
    return n["schoolyear"] == "20112012"
});

var num_students = school_year.map(function(n) {
    return n["k"] + n["grade1"] + n["grade2"] + n["grade3"]
});

num_students = num_students.filter(function(n) {
    return !isNaN(n)
});

var max = num_students.reduce(function(a,b) {
    if (a > b) return a;
    return b;
})
// console.log(num_students);
// console.log(max);
document.getElementById("tres").innerHTML = max;
