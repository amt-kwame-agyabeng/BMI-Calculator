var metricButton = document.getElementById('metric');
var imperialButton = document.getElementById('imperial');
var metricContent = document.querySelector('.measurement-metric');
var imperialContent = document.querySelector('.measurement-imperial');
var rightLine = document.querySelector('.right-line');
var heightCMInput = document.getElementById('heightCM');
var weightKGInput = document.getElementById('weightKG');
var heightFTInput = document.getElementById('heightFT');
var heightINInput = document.getElementById('heightIN');
var weightSTInput = document.getElementById('weightST');
var weightLBSInput = document.getElementById('weightLBS');
var welcomeMessage = document.querySelector('.welcome');
var welcomeInput = document.getElementById('open');
var result = document.querySelector('.result');
var resultValue = document.querySelector('.result-value');
var finalResult = document.querySelector('.final_results');
// Function to show the metric content and hide the imperial content
function showMetricContent() {
    if (metricButton)
        metricButton.checked = true; // Ensure Metric is checked
    if (imperialButton)
        imperialButton.checked = false; // Uncheck Imperial
    if (metricContent)
        metricContent.classList.remove("hidden");
    if (imperialContent)
        imperialContent.classList.add("hidden");
}
// Function to show the imperial content and hide the metric content
function showImperialContent() {
    if (imperialButton)
        imperialButton.checked = true;
    if (metricButton)
        metricButton.checked = false;
    if (imperialContent)
        imperialContent.classList.remove("hidden");
    if (metricContent)
        metricContent.classList.add("hidden");
    if (rightLine)
        rightLine.style.display = "none";
}
// Add event listeners to the radio buttons
if (metricButton)
    metricButton.addEventListener("click", showMetricContent);
if (imperialButton)
    imperialButton.addEventListener("click", showImperialContent);
// Initially, show the metric content (since it's the default)
showMetricContent();
function calculateBMI() {
    // Get the height in centimeters and weight in kilograms from input fields
    var heightInCM = parseFloat(heightCMInput.value);
    var weightInKG = parseFloat(weightKGInput.value);
    // Check if height and weight are valid numbers
    if (isNaN(heightInCM) || isNaN(weightInKG)) {
        // Display the "welcome" message if either value is empty
        if (welcomeMessage) {
            welcomeMessage.style.display = 'block';
            welcomeInput.style.display = 'block';
            result.style.display = 'none';
        }
        return;
    }
    //Calculate BMI using the metric units
    var metricBMI = weightInKG / (Math.pow((heightInCM / 100), 2));
    //hide welcome message and display results
    if (welcomeMessage)
        welcomeMessage.style.display = 'none';
    if (welcomeInput)
        welcomeInput.style.display = 'none';
    if (result)
        result.style.display = 'flex';
    // Display the BMI result in the "result" div
    if (finalResult)
        finalResult.innerText = metricBMI.toFixed(1);
}
// Add input event listeners to trigger BMI calculation
if (heightCMInput)
    heightCMInput.addEventListener("input", calculateBMI);
if (weightKGInput)
    weightKGInput.addEventListener("input", calculateBMI);
