import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPersonalInfo } from "../../services/Student/student";
import { Style } from "@mui/icons-material";

const PersonalDetailsFaculty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age:"",
    DateOfBirth:"",
    // designation: "",
    // role: "",
    // salary: "",
    fatherName: "",
    motherName: "",
    gender: "", // default value for gender
    houseNoOrStreetAddress: "",
    city: "",
    district: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
    dispatch(insertPersonalInfo(formData, token, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      age:"",
      DateOfBirth:"",
      designation: "",
      fatherName: "",
      motherName: "",
      gender: "", // default value for gender
      houseNoOrStreetAddress: "",
      city: "",
      district: "",
      state: "",
      country: "",
      postalCode: "",
    });
  };
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <h1 className="text-2xl font-semibold pl-64 ml-10 pt-10">
          Bio Graphical Details
        </h1>
        <form
          className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10" >
            {/* First Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
                {/* age */}
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-600"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-4">
              <label
                htmlFor="DateOfBirth"
                className="block text-sm font-medium text-gray-600"
              >
                Date Of Birth
              </label>
              <input
                type="text"
                id="DateOfBirth"
                name="DateOfBirth"
                value={formData.DateOfBirth}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* designation
            <div className="mb-4">
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-600"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div> */}

            {/* Mother's Name */}
            <div className="mb-4">
              <label
                htmlFor="motherName"
                className="block text-sm font-medium text-gray-600"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Nationality */}
            <div className="mb-4">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-600"
              >
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Blood Group */}
            <div className="mb-4">
              <label
                htmlFor="BloodGroup"
                className="block text-sm font-medium text-gray-600"
              >
                Blood Group
              </label>
              <input
                type="text"
                id="BloodGroup"
                name="BloodGroup"
                value={formData.BloodGroup}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
             
            {/* Religion */}
            <div className="mb-4">
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-600"
              >
               Religion
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* pwdStatus*/}
            <div className="mb-4">
              <label
                htmlFor="pwdStatus"
                className="block text-sm font-medium text-gray-600"
              >
                pwdStatus
              </label>
              <input
                type="text"
                id="pwdStatus"
                name="pwdStatus"
                value={formData.pwdStatus}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Marital Status */}
            <div className="mb-4">
              <label
                htmlFor="maritalStatus"
                className="block text-sm font-medium text-gray-600"
              >
                Marital Status
              </label>
              <input
                type="text"
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            
            {/* Pan */}
            <div className="mb-4">
              <label
                htmlFor="pan"
                className="block text-sm font-medium text-gray-600"
              >
                Pan
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Driving Licence */}
            <div className="mb-4">
              <label
                htmlFor="drivingLicence"
                className="block text-sm font-medium text-gray-600"
              >
                Driving Licence
              </label>
              <input
                type="text"
                id="drivingLicence"
                name="drivingLicence"
                value={formData.drivingLicence}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/*passportNumber */}
            <div className="mb-4">
              <label
                htmlFor="passportNumber"
                className="block text-sm font-medium text-gray-600"
              >
                passportNumber
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/*passportValidity */}
            <div className="mb-4">
              <label
                htmlFor="passportValidity"
                className="block text-sm font-medium text-gray-600"
              >
                passportValidity
              </label>
              <input
                type="text"
                id="passportValidity"
                name="passportValidity"
                value={formData.passportValidity}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <br />


          <div className="flex gap-10">
            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <div className="mt-1">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="male" className="mr-4">
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            {/* houseNoOrStreetAddress */}
            <div className="mb-4">
              <label
                htmlFor="houseNoOrStreetAddress"
                className="block text-sm font-medium text-gray-600"
              >
                HouseNo/village
              </label>
              <input
                type="text"
                id="houseNoOrStreetAddress"
                name="houseNoOrStreetAddress"
                value={formData.houseNoOrStreetAddress}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* city */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* District */}
            <div className="mb-4">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-600"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex  gap-10">
            {/* State */}
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* country */}
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* postalCode */}
            <div className="mb-4">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-600"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Add a submit button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsFaculty;