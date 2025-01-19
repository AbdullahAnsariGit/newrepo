const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticGhpeHhocWFsbXptcmNxYnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNDg5NTEsImV4cCI6MjA1MjcyNDk1MX0.KY-kDW1EJEGukt6xiadnnd9tCywb5LhsCKl7kWQPqHE";
const SUPABASE_URL = "https://kbphixxhqalmzmrcqbvt.supabase.co";
const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const logoutBtn = document.getElementById("logout-btn");
const loader = document.getElementById("loaderBgg");

document.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supa_base.auth.getSession();
  console.log("data-DOmContetnLoad", data);
  console.log("error-DOmContetnLoad", error);
  if (data.session) {
    // Redirect to dashboard if not already there
    if (window.location.pathname !== "/dashboard.html") {
      window.location.href = "dashboard.html";
    }
  } 
//   else {
//     // Redirect to login if not already there
//     if (window.location.pathname !== "/index.html") {
//       window.location.href = "index.html";
//     }
//   }
});

async function handleLoginSubmit(event) {
  loader.classList.remove("hidden");
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("Username:", email);
  console.log("Password:", password);

  const { data, error } = await supa_base.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    loader.classList.add("hidden");

    alert(error);
  }
  if (data?.session !== null) {
    loader.classList.add("hidden");

    window.location.href = "dashboard.html";
  }
  console.log("data", data);
  console.log("error-login", error);
}

async function handleSignupSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("Username:", email);
  console.log("Password:", password);

  const { data, error } = await supa_base.auth.signUp({
    email: email,
    password: password,
  });

  console.log("data", data);
  console.log("error", error);
}

logoutBtn?.addEventListener("click", async () => {
  const { error } = await supa_base.auth.signOut();
  console.log("error", error);
  window.location.href = "index.html";
});

// Add event listener to the form (optional if already added inline in HTML)
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
//   if (form) {
//     form.addEventListener("submit", handleLoginSubmit);
//   }
// });
