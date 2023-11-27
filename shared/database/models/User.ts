import { DataTypes, Model } from "sequelize";
import { makeModelOptions } from "../../helpers/makeModelOption";
import { sequelize } from "../sequelize";

class User extends Model {
    public uuid: string;
    public email: string;
    public phone: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public isActive: boolean;
    public type: string;
    public isVerified: boolean;
    public isSuspicious: boolean;
    public feedback: string;
    public referralUuid: string;
    public verifiedOn: Date;
    public verifiedBy: string;
    public createdBy: string;
    public updatedBy: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
}

User.init({
    uuid: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
    },
    email: {
        allowNull: false,
        // unique: true,
        type: DataTypes.STRING(100),
    },
    phone: {
        // unique: true,
        type: DataTypes.STRING(15),
    },
    password: {
        allowNull: true,
        type: DataTypes.STRING(100),
    },
    firstName: {
        allowNull: true,
        type: DataTypes.STRING(64),
    },
    lastName: {
        allowNull: true,
        type: DataTypes.STRING(64),
    },
    isActive: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
    },
    type: {
        allowNull: true,
        type: DataTypes.ENUM("CUSTOMER", "ADMIN"),
    },
    isVerified: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
    },
    isSuspicious: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
    },
    feedback: {
        type: DataTypes.TEXT,
    },
    verifiedOn: {
        type: DataTypes.DATE,
    },
    verifiedBy: {
        type: DataTypes.UUID,
    },
    createdBy: {
        type: DataTypes.UUID,
    },
    updatedBy: {
        type: DataTypes.UUID,
    }
}, makeModelOptions(sequelize, "Users"));

export default User;
