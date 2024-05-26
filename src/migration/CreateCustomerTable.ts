import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMedicTable1614660586514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'customer',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar(120)',
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'amount',
                    type: 'varchar',
                },
               
              
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customer')
    }

}
