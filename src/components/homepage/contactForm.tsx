import { SectionTitle } from "../common";

const ContactForm = () => {
  return (
    <form className="w-full max-w-lg border p-6 pb-0 rounded-md border-primary bg-white">
      <div className="pb-6">
        <SectionTitle title="Get in touch!" titleClass="!text-3xl" />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 px-3">
        <div className="w-full mb-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            placeholder="Jane Doe"
          />
          <p className="hidden text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className=" mb-3 w-full flex gap-3">
          <div className="w-full md:w-1/2 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phone"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="tel"
              placeholder="+919999999999"
            />
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="jane@doe.com"
            />{" "}
            <p className="hidden text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="w-full mb-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-subject"
            type="text"
            placeholder="Need Help in Trademark"
          />
          <p className="hidden text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full mb-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-message"
            placeholder="I own a buisness..."
          />
        </div>
        <div>
          <button
            className="flex-shrink-0 bg-primary hover:bg-teal-700 border-primary hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
