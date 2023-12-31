import React from "react";
import emailjs from "emailjs-com";

function Touch() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      to_email: "amadsiddiqui619@gmail.com", // Change this to your recipient email address
      from_email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        "service_84r4t7l",
        "template_1yy1p65",
        templateParams,
        "gd_BJy4ulMSuk9h8P"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Please try again later.");
        }
      );

    // Reset the form fields after sending the email
    event.target.reset();
  };

  return (
    <section id="touch" class="bg-white dark:bg-white-900 font-signature">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-black">
          Get in touch
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-black dark:text-black sm:text-xl">
          Got a Project? Need help with something? Feel free to reach out to me
        </p>
        <form action="#" class="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@xyz.com"
              required
            ></input>
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            ></input>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Touch;
