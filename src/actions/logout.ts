import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export const logoutAction = async () => {
  // delete user
  deleteItem({
    key: "userName",
  });
  toast.success("You have deleted your account!");
  // return redirect
  return redirect("/");
};
