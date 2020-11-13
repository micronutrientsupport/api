import {inject} from '@loopback/core';
import {AnyObject, DefaultCrudRepository, Filter} from '@loopback/repository';
import SqlString from 'sqlstring';
import {DbDataSource} from '../datasources';
import {Country, CountryRelations} from '../models';

export class CountryRepository extends DefaultCrudRepository<
  Country,
  typeof Country.prototype.id,
  CountryRelations
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Country, dataSource);
  }

  find(filter?: Filter<Country> | undefined, options?: AnyObject | undefined): Promise<(Country & CountryRelations)[]> {
    let self = this;
    //let ksnex = knex({client: 'pg'});

    let hasGeometryColumn: boolean = !!this.modelClass.getPropertyType('geometry')
    let sqlStmt = "SELECT *";
    if (hasGeometryColumn) {
      sqlStmt += ", ST_AsGeoJSON(geometry) as geometry"
    }
    sqlStmt += " FROM " + process.env.DB_SCHEMA + '.' + this.modelClass.name;
    if (filter?.where) {
      sqlStmt += " WHERE ?";
      let formattedSql = "";
      sqlStmt = SqlString.format(sqlStmt, filter.where)
    }
    //console.log(ksnex(process.env.DB_SCHEMA + '.' + this.modelClass.name).where(filter?.where as any).select('*').select('ST_AsGeoJSON(geometry) as geometry').toSQL().sql);
    return self.dataSource.execute(sqlStmt, []);

    // async find(filter?: Filter<Country> | undefined, options?: AnyObject | undefined): Promise<(Country & CountryRelations)[]> {
    //   let sq = SqlString.format('SELECT *, ST_AsGeoJSON(geometry) as geometry FROM bmgf.country', [])
    //   let sql = await this.dataSource.execute(sq)
    //   return sql;
    // }
  }
}
