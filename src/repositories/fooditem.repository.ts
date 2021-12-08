import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Fooditem, FooditemRelations} from '../models';

export class FooditemRepository extends DefaultCrudRepository<
  Fooditem,
  typeof Fooditem.prototype.id,
  FooditemRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Fooditem, dataSource);
  }

  public async runScenario(): Promise<(Fooditem & FooditemRelations)[]> {
    console.log(this.dataSource.settings.schema)
    console.log(this.modelClass.definition.settings)
    let a = await this.execute('SELECT * FROM "andan-scenario".do_scenario(10, \'andy94\', \'fe_in_mg\', 5000)')
    //let a = await this.execute('SELECT * FROM "andan-scenario".fooditem;')

    console.log(a)
    return this.find();
  }
}
