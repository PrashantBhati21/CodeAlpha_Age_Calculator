function calculateAge() {
    // Get the birthdate value from the input
    var birthdate = new Date(document.getElementById("birthdate").value);

    // Get the current date
    var currentDate = new Date();

    // Calculate the age in milliseconds
    var ageInMilliseconds = currentDate - birthdate;

    // Convert milliseconds to years, months, and days
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.44; // average days in a month
    var ageInYears = ageInMonths / 12;

    // Extract the remaining months after getting the years
    var remainingMonths = Math.floor((ageInMonths % 12));

    // Extract the remaining days after getting the years and months
    var remainingDays = Math.floor((ageInDays % 30.44));

    // Display the result
    document.getElementById("result").innerHTML =
        " Your Current Age: " + Math.floor(ageInYears) + " years, " +
        remainingMonths + " months, and " +
        remainingDays + " days.";
}
