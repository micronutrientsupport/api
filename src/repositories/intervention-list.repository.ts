import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionList, InterventionListRelations} from '../models';

export class InterventionListRepository extends DefaultCrudRepository<
  InterventionList,
  typeof InterventionList.prototype.id,
  InterventionListRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(InterventionList, dataSource);
  }

  public async createNewIntervention(
    parentInterventionId: number,
    userId = 1,
  ): Promise<(InterventionList & InterventionListRelations)[]> {
    // Set the search path to include the current schema
    await this.dataSource.execute(
      'SET search_path TO "bmgf",' +
        this.dataSource.settings.schema +
        ',public;',
    );

    // Execute the query
    const sql =
      'SELECT * FROM create_derived_intervention($1::numeric,$2::numeric)';
    const result: unknown[] = await this.dataSource.execute(sql, [
      parentInterventionId,
      userId,
    ]);

    // Hydrate database rows into loopback models
    const resultModels: InterventionList[] = result.map(res => {
      if (this.dataSource.connector) {
        return this.dataSource.connector.fromRow(this.modelClass.name, res);
      } else {
        return res;
      }
    });

    return resultModels;
  }
}
