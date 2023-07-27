const ContactPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] bg-white">
      <div className="rounded-md w-[100%] p-2 md:px-4 shadow-xl md:w-[60%] mx-auto bg-slate-5`0">
        <div className="px-2  flex flex-col  gap-4">
          <h1 className="text-xl md:text-2xl text-black font-bold text-center my-4">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border-red-200 border-2 bg-white p-2 text-sm md:text-md xl:text-xl focus:outline-red-500"
          />
          <input
            type="email"
            placeholder="your Email for further assistance"
            required
            className="border-red-200 border-2 bg-white p-2 text-sm md:text-md xl:text-xl focus:outline-red-500"
          />
          <input
            type="number"
            placeholder="your phone number for futher assistance"
            className="border-red-200 border-2 bg-white p-2 text-sm md:text-md xl:text-xl focus:outline-red-500"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Write Your complain"
            className="border-red-200 border-2 bg-white p-2 text-sm md:text-md xl:text-xl focus:outline-red-500"
          ></textarea>
          <div className="flex flex-col md:flex-row gap-4 justify-center mx-auto my-4">
            <button
              type="reset"
              className="p-2 text-white bg-slate-500 rounded-md w-1/3 min-w-[100px] max-w-[200px] text-center"
            >{`Reset`}</button>
            <button
              type="submit"
              className="p-2 text-white bg-red-500 rounded-md w-1/3 min-w-[100px] max-w-[200px] text-center"
            >{`Submit`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
