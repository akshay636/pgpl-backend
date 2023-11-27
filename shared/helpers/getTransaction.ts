import { Transaction } from "sequelize";
import { sequelize } from "../database/sequelize";

/**
 * Generate controller injectable properties such as transaction and translator
 * @param req
 * @returns
 */
export const getTransaction = async (): Promise<Transaction> => {
  // try {
    return await sequelize.transaction();
  // } catch {
  //   const boolena: any = true;
  //   return boolena;
  // }finally {
  //   const boolena: any = true;
  //   return boolena;
  // }
};
