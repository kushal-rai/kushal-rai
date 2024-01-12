// function ContactForm() {
//   return (
//     <form action="https://api.web3forms.com/submit" method="POST">
//       <input
//         type="hidden"
//         name="access_key"
//         value="4796184c-f5e2-489d-9f13-7d1b22169f7f"
//       ></input>
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-1">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-1">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phone" className="block mb-1">
//           Phone:
//         </label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           placeholder="Enter your phone number"
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="message" className="block mb-1">
//           Message:
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows="4"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           placeholder="Your message"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// export default ContactForm;

import React from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4796184c-f5e2-489d-9f13-7d1b22169f7f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
    } else {
      setResult(res.message);
    }

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {" "}
        <input
          type="hidden"
          name="access_key"
          value="4796184c-f5e2-489d-9f13-7d1b22169f7f"
        ></input>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-1">
            Message:
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your message"
          ></textarea>
        </div>
        <span>{result}</span>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
