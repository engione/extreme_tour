import Avatar from "react-avatar";
import profile from "./UserProfile.module.scss";
import { useState } from "react";
import { BtnEdit } from "../BtnEdit/BtnEdit";
import { useNavigate } from "react-router-dom";

type TUserProfile = {
  img?: string;
  fullName: string;
  size?: string;
  btn?: boolean;
};

export const UserProfile = ({
  size = "200",
  fullName,
  img,
  btn = false,
}: TUserProfile) => {
  const [imgUpload, setImgUpload] = useState<string>();
  const onImageChange = (e: any) => {
    const [file] = e.target?.files;
    setImgUpload(URL.createObjectURL(file));
  };

  const navigate = useNavigate();
  return (
    <>
      {btn ? (
        <button className={profile.btn} onClick={() => navigate("/account", {replace: true})}>
          <Avatar
            src={img ? img : imgUpload}
            name={fullName}
            maxInitials={2}
            size={size}
            round={true}
          />
        </button>
      ) : (
        <div className={profile.profile}>
          <Avatar
            src={img ? img : imgUpload}
            name={fullName}
            maxInitials={2}
            size={size}
            round={true}
          />
          <BtnEdit className={profile.edit} onChange={onImageChange} />
        </div>
      )}
    </>
  );
};
