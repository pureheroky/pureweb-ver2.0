import React, { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const AddProjectForm: React.FC<{
  close: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ close }) => {
  const [formData, setFormData] = useState({
    name: "",
    prjgitlink: "",
    prjstatus: "",
    prjcomplete: "",
    prjdate: "",
    prjdesc: "",
    prjweblink: "",
    id: "",
  });

  const [imageData, setImageData] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.currentTarget.name == "image") {
      setImageData(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, imageData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/projects",
        formData
      );
      console.log("Project added:", response.data);
      setTimeout(async () => {
        await axios.get(
          `http://127.0.0.1:8080/uploadimage/projects/${formData.id}/${imageData}`
        );
      }, 5000);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <form
      className="absolute flex flex-col items-center justify-center w-full m-auto left-0 bottom-0 top-0 right-0 rounded-md 2xl:w-3/5 2xl:h-2/3 md:w-4/5 h-4/5 bg-black-blue-dark z-30"
      onSubmit={handleSubmit}
    >
      <div
        className="w-full flex justify-end cursor-pointer"
        onClick={() => {
          close(false);
        }}
      >
        <CloseIcon className="text-vanilla" />
      </div>
      <input
        type="text"
        name="name"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.name}
        onChange={handleChange}
        placeholder="Project Name"
        required
      />
      <input
        type="text"
        name="prjgitlink"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjgitlink}
        onChange={handleChange}
        placeholder="GitHub Link"
        required
      />
      <input
        type="text"
        name="prjstatus"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjstatus}
        onChange={handleChange}
        placeholder="Status"
        required
      />
      <input
        type="text"
        name="prjcomplete"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjcomplete}
        onChange={handleChange}
        placeholder="Complete"
        required
      />
      <input
        type="date"
        name="prjdate"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjdate}
        onChange={handleChange}
        required
      />
      <textarea
        name="prjdesc"
        className=" resize-none rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjdesc}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="url"
        name="prjweblink"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.prjweblink}
        onChange={handleChange}
        placeholder="Website Link"
      />
      <input
        type="text"
        name="id"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="image"
        className=" rounded-sm p-2 m-2 w-1/2 font-Poppins text-eerie outline-none text-center"
        value={imageData}
        onChange={handleChange}
        placeholder="Image"
        required
      />
      <button type="submit" className="font-Poppins text-vanilla">
        Add Project
      </button>
    </form>
  );
};

export default AddProjectForm;
