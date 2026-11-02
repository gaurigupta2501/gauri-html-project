function checkEligibility() {

    let name = document.getElementById("name").value;
    let cgpa = document.getElementById("cgpa").value;

    let result = "";

    if (cgpa >= 7) {
        result = "You are eligible for TCS, Infosys and Wipro";
    }
    else if (cgpa >= 6.5) {
        result = "You are eligible for Infosys";
    }
    else {
        result = "You are not eligible for any company";
    }

    localStorage.setItem("name", name);
    localStorage.setItem("result", result);

    window.location.href = "result.html";

    return false;
}