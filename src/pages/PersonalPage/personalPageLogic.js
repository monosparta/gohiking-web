import demoapi from "axios/api";
import React, { useState, useEffect } from "react";

const PersonalPageLogic = (info = null) => {
  const [isLoading, setisLoading] = useState(info ? false : true);
  const [personalInfo, setpersonalInfo] = useState(info ? info : {});
  const [nameValidation, setnameValidation] = useState("");
  const [genderValidation, setgenderValidation] = useState("");
  const [phoneValidation, setphoneValidation] = useState("");
  const [birthValidation, setbirthValidation] = useState("");
  const [countyValidation, setcountyValidation] = useState("");

  useEffect(() => {
    if (!info) getPersonalInfo();
  }, [info]);
  const getPersonalInfo = async () => {
    // const uid = localStorage.getItem("userId")
    //   ? localStorage.getItem("userId")
    //   : 1;
    const uid = 1;
    await demoapi.get("/api/user/" + uid).then(res => {
      setisLoading(false);
      res.data.users.gender = res.data.users.gender ? "男" : "女";

      console.log(res.data.users.name);
      setpersonalInfo(res.data);
    });
  };

  const handleNameChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      users: { ...personalInfo.users, name: value }
    });
    if (value == "") {
      setnameValidation("姓名不可為空");
    } else {
      setnameValidation("");
    }
  };

  const handleSexChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      users: { ...personalInfo.users, gender: value }
    });
    if (value == "男" || value == "女") {
      setgenderValidation("");
    } else {
      setgenderValidation("請填入 男 或 女");
    }
  };

  const handleTelChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      users: { ...personalInfo.users, phone_number: value }
    });
    let reg = new RegExp(/^\d*$/).test(value);
    if (reg) {
      setphoneValidation("");
    } else {
      setphoneValidation("只允許數字");
    }
  };
  const handleBirthChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      users: { ...personalInfo.users, birth: value }
    });
  };

  const handleCountyChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      users: {
        ...personalInfo.users,
        county: { ...personalInfo.users.county, name: value }
      }
    });
  };
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const updateInfo = async data => {
    setisLoading(true);
    // const uid = localStorage.getItem("userId")
    //   ? localStorage.getItem("userId")
    //   : 1;
    const uid = 1;
    if (data.croppedImage) {
      let blob = await fetch(data.croppedImage).then(r => r.blob());
      const file = new File([blob], "1234567890.jpg", {
        lastModified: new Date(),
        type: "image/jpeg"
      });
      const b64 = await getBase64(file);
      data.croppedImage = b64;
    }
    return demoapi
      .put("/api/user/" + uid, {
        name: data.name,
        gender: data.gender,
        phone_number: data.phone_number,
        birth: data.birth,
        image: data.croppedImage ? data.croppedImage : "",
        county: data.county,
        country_code_id: data.countryCode
      })
      .then(res => {
        return res.status;
      });
  };

  return {
    isLoading,
    personalInfo,
    handleNameChange,
    handleSexChange,
    handleTelChange,
    handleBirthChange,
    handleCountyChange,
    updateInfo,
    getPersonalInfo,
    validations: {
      nameValidation,
      genderValidation,
      phoneValidation,
      birthValidation,
      countyValidation
    }
  };
};
export default PersonalPageLogic;
