
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticGhpeHhocWFsbXptcmNxYnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNDg5NTEsImV4cCI6MjA1MjcyNDk1MX0.KY-kDW1EJEGukt6xiadnnd9tCywb5LhsCKl7kWQPqHE";
const SUPABASE_URL = "https://kbphixxhqalmzmrcqbvt.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// DOM Elements
const loginBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpEmail = document.getElementById("signup-email");
const signUpPassword = document.getElementById("signup-password");

const errorMessage = document.getElementById("error-message");
const signUpErrorMsg = document.getElementById("error-message-signup");

const showSignupLink = document.getElementById("show-signup");
const showLoginLink = document.getElementById("show-login");



(async () => {
    try {
        const { data } = await supa_base.auth.getSession();
        console.log("Session data:", data);

        // if (data.session) {
        //     // Only redirect if not already on the dashboard page
        //     if (window.location.pathname !== "/dashboard.html") {
        //         window.location.href = "dashboard.html";
        //     }
        // }
        if (data.session) {
            // Redirect to dashboard if not already there
            if (window.location.pathname !== "/dashboard.html") {
                window.location.href = "dashboard.html";
            }
        } else {
            // Redirect to login if not already there
            if (window.location.pathname !== "/index.html") {
                window.location.href = "index.html";
            }
        }
    } catch (error) {
        console.error("Error retrieving session:", error);
    }
})();

// document.addEventListener("DOMContentLoaded", (e) => {
//     const sessionToken = localStorage.getItem("access_token");

//     if (sessionToken) {
//         // Redirect to dashboard if token exists and not already there
//         if (window.location.pathname !== "/dashboard.html") {
//             window.location.href = "dashboard.html";
//         }
//     }
// });

// Login Functionality
loginBtn?.addEventListener("click", async (e) => {
    // e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        // Authenticate with Supabase
        const { data, error } = await supa_base.auth.signInWithPassword({
            email,
            password,
        });
        console.log('data', data);

        if (error) {
            // Display error message
            errorMessage.textContent = error.message;
        } else {
            // Redirect to home page on success
            errorMessage.textContent = "";
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Replace with your home page
            // localStorage.setItem("access_token", data?.session?.access_token)
        }
    } catch (err) {
        console.error("Unexpected error:", err);
        errorMessage.textContent = "Something went wrong. Please try again.";
    }
});

signUpBtn?.addEventListener("click", async () => {
    const email = signUpEmail.value;
    const password = signUpPassword.value;

    if (!email || !password) {
        signUpErrorMsg.textContent = "Please fill in all fields.";
        return;
    }

    try {
        const { data, error } = await supa_base.auth.signUp({
            email,
            password,
        })
        console.log('data:', data);
        console.log('error:', error);



    }
    catch (err) {
        console.error("Unexpected error:", err);
        signUpErrorMsg.textContent = "Something went wrong. Please try again.";
    }

}
)

logoutBtn?.addEventListener("click", async () => {
    try {
        await supa_base.auth.signOut();
        alert("Logout successful!");
        window.location.href = "index.html";
    } catch (err) {
        console.error("Unexpected error:", err);
        errorMessage.textContent = "Something went wrong. Please try again.";
    }

})

// Redirect to Sign-up Page
showSignupLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "signup.html"; // Navigate to signup page
});


showLoginLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "index.html"; // Navigate to the login page
});


// if (supa_base.auth.getSession()) {
//    window.navigator.href = "dashboard.html";
// } else {
//     // showLoginPage();
//    window.navigator.href = "index.html";
// }


