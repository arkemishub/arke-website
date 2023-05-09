import "./Form.css";
import { twMerge } from "tailwind-merge";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
    const mail = "info@mokkastudios.com";
    const subject = "Arke - Information";
    const body = `Name: ${data.name ?? "-"}%0D%0APhone: ${
      data.phone ?? "-"
    }%0D%0AEmail: ${data.email ?? "-"}%0D%0ACompany: ${
      data.company ?? "-"
    }%0D%0AMessage: ${data.message ?? "-"}%0D%0A`;
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 mb-20 form-background rounded-3xl relative"
    >
      <div className="rounded-md flex input-background">
        <div className="ml-3 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}contact/user.svg`}
            alt={"user"}
          />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
          className="w-full m-2 ml-0 pl-3 rounded input-background outline-none"
        />
      </div>
      <div className="rounded-md flex input-background mt-4">
        <div className="ml-3 flex justify-center py-2">
          <img
            src={`${import.meta.env.BASE_URL}contact/phone.svg`}
            alt={"phone icon"}
            className="h-7"
          />
        </div>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          value={data.phone}
          onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))}
          className="w-full m-2 ml-0 pl-3 rounded input-background outline-none"
        />
      </div>
      <div className="rounded-md flex input-background mt-4">
        <div className="ml-3 flex justify-center py-2">
          <img
            src={`${import.meta.env.BASE_URL}contact/email.svg`}
            alt={"email icon"}
            className="h-7"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email address"
          value={data.email}
          onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          className="w-full m-2 ml-0 pl-3 rounded input-background outline-none"
        />
      </div>
      <div className="rounded-md flex input-background mt-4">
        <div className="ml-3 flex justify-center py-2">
          <img
            src={`${import.meta.env.BASE_URL}contact/building.svg`}
            alt={"building icon"}
            className="h-7"
          />
        </div>
        <input
          type="text"
          name="company"
          id="company"
          required
          placeholder="Company name"
          value={data.company}
          onChange={(e) => setData((p) => ({ ...p, company: e.target.value }))}
          className="w-full m-2 ml-0 pl-3 rounded input-background outline-none"
        />
      </div>
      <div className="rounded-md flex input-background mt-4 h-fit">
        <div className="ml-3 flex justify-center pt-2">
          <img
            src={`${import.meta.env.BASE_URL}contact/message.svg`}
            alt={"message icon"}
            className="h-7"
          />
        </div>
        <textarea
          placeholder="Message*"
          rows={4}
          required
          className="input-background w-full h-full outline-none m-2 ml-0 pl-3 mb-12 lg:mb-16 mr-2 mt-2"
          value={data.message}
          onChange={(e) => setData((p) => ({ ...p, message: e.target.value }))}
          style={{ maxHeight: 300 }}
        />
      </div>
      <div className="absolute w-full h-fit -left-0 -bottom-14 lg:-bottom-20 flex justify-center">
        <button
          type="submit"
          className={twMerge(
            "bg-[url('/illustrations/Ellipse2.png')] btn-background border-none btn-circle z-10 w-28 h-28 lg:w-40 lg:h-40",
            "btn-hover"
          )}
        >
          Send message
        </button>
      </div>
    </form>
  );
}
