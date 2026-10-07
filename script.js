/* =========================================
   AUTOLINK JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* =========================================
   GO TO DEMO
========================================= */

function goToDemo() {

    document
        .getElementById("demo")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   DEMO SWITCHER
========================================= */

function showDemo(type) {

    const ownerDemo =
        document.getElementById("owner-demo");

    const scannerDemo =
        document.getElementById("scanner-demo");

    const ownerTab =
        document.getElementById("ownerTab");

    const scannerTab =
        document.getElementById("scannerTab");


    if (type === "owner") {

        ownerDemo.style.display = "block";
        scannerDemo.style.display = "none";

        ownerTab.classList.add("active");
        scannerTab.classList.remove("active");

    }

    else {

        ownerDemo.style.display = "none";
        scannerDemo.style.display = "block";

        ownerTab.classList.remove("active");
        scannerTab.classList.add("active");

    }

}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


/* =========================================
   VEHICLE REGISTRATION
========================================= */

function registerVehicle() {

    const owner =
        document.getElementById("ownerName").value.trim();

    const number =
        document.getElementById("vehicleNumber").value.trim();

    const model =
        document.getElementById("vehicleModel").value.trim();

    const phone =
        document.getElementById("ownerPhone").value.trim();

    const email =
        document.getElementById("ownerEmail").value.trim();


    if (
        owner === "" ||
        number === "" ||
        model === "" ||
        phone === "" ||
        email === ""
    ) {

        showToast(
            "⚠️ Please fill all vehicle details."
        );

        return;

    }


    /*
        Update vehicle profile
    */

    document.getElementById("profileOwner")
        .textContent = owner;

    document.getElementById("profileNumber")
        .textContent = number.toUpperCase();

    document.getElementById("profileModel")
        .textContent = model;

    /*
        Never show actual phone number
        in the public vehicle profile.
    */

    document.getElementById("profilePhone")
        .textContent = "Protected";


    document.getElementById("profileVehicle")
        .textContent = model;


    showToast(
        "✓ Vehicle registered successfully!"
    );


    /*
        Move to scanner demo
        after registration
    */

    setTimeout(() => {

        showDemo("scanner");

        document
            .getElementById("scanner-demo")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1000);

}


/* =========================================
   SCAN VEHICLE
========================================= */

function scanVehicle() {

    const status =
        document.getElementById("scanStatus");

    status.textContent =
        "Scanning AutoLink QR...";


    showToast(
        "📷 Scanning vehicle QR..."
    );


    setTimeout(() => {

        status.textContent =
            "✓ Vehicle successfully identified.";

        showToast(
            "✓ Vehicle found!"
        );


        /*
            In the prototype we use
            demo vehicle information.
        */

        document.getElementById("scannedModel")
            .textContent = "Hyundai Creta";

        document.getElementById("scannedNumber")
            .textContent = "PB10AB1234";


    }, 1500);

}


/* =========================================
   MASKED MESSAGE
========================================= */

function sendMaskedMessage() {

    const reason =
        document.getElementById("messageReason").value;

    const message =
        document.getElementById("maskedMessage").value.trim();

    const result =
        document.getElementById("messageResult");


    if (message === "") {

        showToast(
            "⚠️ Please write a message first."
        );

        return;

    }


    /*
        Simulated masked communication
    */

    result.innerHTML = `
        <strong style="color:#4da3ff;">
            ✓ Masked message sent
        </strong>
        <br><br>

        <strong>Reason:</strong>
        ${reason}

        <br>

        <strong>Message:</strong>
        ${message}

        <br><br>

        <span style="color:#657184;">
            Owner's private phone number remains hidden.
            This is a prototype simulation.
        </span>
    `;


    showToast(
        "💬 Masked message sent!"
    );


    /*
        Clear message box
    */

    document.getElementById("maskedMessage")
        .value = "";

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,7,11,0.97)";

    }

    else {

        navbar.style.background =
            "rgba(5,7,11,0.88)";

    }

});