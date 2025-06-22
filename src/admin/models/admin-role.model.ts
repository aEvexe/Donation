import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Role } from "src/role/models/role.model";
import { Admin } from "src/admin/models/admin.model";

interface IAdminRoleCreationAtrr{
    adminId: number
    roleId: number
}

@Table({tableName: "admin-role"})
export class AdminRole extends Model<AdminRole, IAdminRoleCreationAtrr>{
    @ForeignKey(()=>Admin)
    @Column({
        type: DataType.INTEGER,
    })
    declare adminId: number;

    @ForeignKey(()=>Role)
    @Column({
        type: DataType.INTEGER,
    })
    declare roleId: number;
}

