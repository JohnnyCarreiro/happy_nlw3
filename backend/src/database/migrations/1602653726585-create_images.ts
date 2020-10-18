import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602653726585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'images',
            columns:[
                {
                    name:'id',
                    type:'varchar',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'path',
                    type:'varchar'
                },
                {
                    name:'orphanage_id',
                    type:'varchar'
                }
            ],
            foreignKeys:[
                {
                    name:'imageOrphanage',
                    columnNames:['orphanage_id'],
                    referencedTableName:'orphanages',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
