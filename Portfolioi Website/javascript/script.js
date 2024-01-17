document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentWindows = document.querySelectorAll('.content-window');
    const welcomeWindow = document.getElementById('welcome-window');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            console.log('Clicked link with data-target:', targetId);
            toggleContentWindow(targetId);
        });
    });

    function toggleContentWindow(windowId) {
        console.log('Toggling content window for:', windowId);

        // Hide welcome window
        if (welcomeWindow) {
            welcomeWindow.style.display = 'none';
        }

        const targetWindow = document.getElementById(`${windowId}-window`);

        if (targetWindow) {
            contentWindows.forEach(window => {
                window.style.display = 'none';
            });

            targetWindow.style.display = 'flex'; // Use 'flex' instead of 'block'
        }
    }

    // Initially hide all content windows
    contentWindows.forEach(window => {
        window.style.display = 'none';
    });

    // contact page
    emailjs.init("user_your_emailjs_user_id");

    function sendEmail() {
        // Replace these values with your actual email address and template variables
        const toEmail = "m.bhade2003@gmail.com";
        const fromName = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        emailjs.send("your_emailjs_service_id", "your_emailjs_template_id", {
            to_email: toEmail,
            from_name: fromName,
            message: message
        }).then(
            function (response) {
                console.log("Email sent successfully", response);
                // Add any additional logic after successful email sending
            },
            function (error) {
                console.log("Email failed to send", error);
                // Add any error handling logic
            }
        );
    }
});
