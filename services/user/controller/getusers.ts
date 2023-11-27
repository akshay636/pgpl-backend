import User from "../../../shared/database/models/User";
import { IControllerParams } from "../../../shared/interface/IControllerParams";

export const getUser = async(params:IControllerParams<null>)=>{
  console.log(params);

  const user = await User.findOne({
    where:{firstName:'string'}
  })
  
  return{
    message: "Success",
    payload:user
  }
}