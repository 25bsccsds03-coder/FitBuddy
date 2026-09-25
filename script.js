document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {

        const inputs = document.querySelectorAll("input");
        const selects = document.querySelectorAll("select");

        const age = inputs[0].value;
        const days = inputs[1].value;

        const fitnessGoal = selects[0].value;
        const activityLevel = selects[1].value;

        if (!age || !days) {
            alert("Please enter your age and days per week.");
            return;
        }

        const oldResult = document.querySelector(".result");

        if (oldResult) {
            oldResult.remove();
        }

        const result = document.createElement("div");

        result.className = "result";

        result.innerHTML = `
            <div class="plan-card">

                <h2>Your FitBuddy Plan 🎯</h2>

                <p><strong>Age:</strong> ${age}</p>

                <p><strong>Fitness Goal:</strong> ${fitnessGoal}</p>

                <p><strong>Activity Level:</strong> ${activityLevel}</p>

                <p><strong>Days Per Week:</strong> ${days}</p>

                <h3>Weekly Workout Plan</h3>

                <ul>
                    <li>Day 1 - Full Body Workout</li>
                    <li>Day 2 - Walking & Cardio</li>
                    <li>Day 3 - Rest & Stretching</li>
                    <li>Day 4 - Strength Training</li>
                </ul>

                <h3>Healthy Tips</h3>

                <ul>
                    <li>Drink enough water.</li>
                    <li>Eat balanced meals.</li>
                    <li>Eat a balanced diet.</li>
                    <li>Get enough sleep.</li>
                    <li>Stay consistent with exercise.</li>
                </ul>

            </div>
        `;

        document.querySelector(".container").appendChild(result);

    });

});