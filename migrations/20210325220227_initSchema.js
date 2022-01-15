import dividendsType from '../src/enum/dividendsType';
import transactionType from '../src/enum/transactionType';

const createdAt = (knex, table) => table.timestamp('createdAt', { precision: 3 })
  .notNullable()
  .defaultTo(knex.fn.now(3));

const updatedAt = (knex, table) => table.timestamp('updatedAt', { precision: 3 })
  .notNullable()
  .defaultTo(knex.raw('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'));

/**
* @param {import('knex').Knex} knex
*/
exports.up = async function(knex) {
    await knex.schema.createTable('category', (table)=>{
      table.bigIncrements('id').unsigned();
      table.string('name').notNullable();
      table.unique('name');
      createdAt(knex, table);
      updatedAt(knex, table);
    });

    await knex.schema.createTable('investment', (table)=>{
      table.bigIncrements('id').unsigned();
      table.bigInteger('categoryId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('category')
      .onUpdate('CASCADE');
      table.string('name').notNullable();
      table.unique('name');
      table.bigInteger('regularMarketPrice').nullable();
      table.bigInteger('regularMarketDayHigh').nullable();
      table.bigInteger('regularMarketDayLow').nullable();
      createdAt(knex, table);
      updatedAt(knex, table);
    });

    await knex.schema.createTable('broker', (table)=>{
      table.bigIncrements('id').unsigned();
      table.string('name').notNullable();
      table.unique('name');
      createdAt(knex, table);
      updatedAt(knex, table);
    });

    await knex.schema.createTable('transaction', (table)=>{
      table.bigIncrements('id').unsigned();
      table.bigInteger('brokerId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('broker')
      .onUpdate('CASCADE');
      table.bigInteger('investmentId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('investment')
      .onUpdate('CASCADE');
      table.enum('type', Object.keys(transactionType)).notNullable();
      table.date('negotiationDate').notNullable();
      table.date('dueDate').nullable();
      table.integer('qnt').notNullable();
      table.bigInteger('price').notNullable();
      table.bigInteger('total').notNullable();
      createdAt(knex, table);
      updatedAt(knex, table);
    });

    await knex.schema.createTable('dividends', (table)=>{
      table.bigInteger('investmentId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('investment')
      .onUpdate('CASCADE');
      table.enum('type', Object.keys(dividendsType)).notNullable();
      table.integer('qnt').notNullable();
      table.date('dueDate').notNullable();
      table.bigInteger('price').notNullable();
      table.bigInteger('total').notNullable();
      createdAt(knex, table);
      updatedAt(knex, table);
    });

};

/**
* @param {import('knex').Knex} knex
*/
exports.down = async function(knex) {
  await knex.schema.dropTable('dividends');
  await knex.schema.dropTable('transaction');
  await knex.schema.dropTable('broker');
  await knex.schema.dropTable('investment');
  await knex.schema.dropTable('category');
};
