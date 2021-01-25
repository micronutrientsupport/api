import {ApplicationConfig, Binding, BindingSelector, Component, Constructor, createBindingFromClass, inject, injectable} from '@loopback/core';
import {asModelApiBuilder, ModelApiConfig} from '@loopback/model-api-builder';
import {ApplicationWithRepositories, Entity, Model} from '@loopback/repository';
import {HttpErrors, oas, OperationVisibility} from '@loopback/rest';
import {CrudRestApiBuilder, defineCrudRestController, ModelCrudRestApiConfig} from '@loopback/rest-crud';
export {ApplicationConfig};

type T = Entity;
type Relations = {}

@injectable(asModelApiBuilder)
class ReadOnlyCrudRestApiBuilder extends CrudRestApiBuilder {

  // Pattern used in model-endpoints dir configs
  readonly pattern: string = 'ReadOnly';

  /**
 * Inject given key into a given class constructor
 *
 * @param ctor - constructor for a class (e.g. a controller class)
 * @param key - binding to use in order to resolve the value of the decorated
 * constructor parameter or property
 */
  injectFirstConstructorArg<T>(
    ctor: Constructor<T>,
    key: BindingSelector,
  ) {
    inject(key)(
      ctor,
      undefined, // constructor member
      0, // the first argument
    );
  }

  build(application: ApplicationWithRepositories, modelClass: typeof Model & {
    prototype: Model;
  }, cfg: ModelApiConfig): Promise<void> {

    // Links to models / configs
    const entityClass = modelClass as typeof Entity & {prototype: Entity};
    const config = cfg as ModelCrudRestApiConfig;

    // Create controller with full REST methods using
    // provided loopback helpers
    const controllerClass = defineCrudRestController(
      entityClass,
      config,
    );

    // Extend default rest controller to allow disabling of
    // write/update/delete routes
    class readOnlyController extends controllerClass {

      // Hide routes from OpenAPI spec and throw a 404 if they are hit
      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async count() {
        throw new HttpErrors.NotFound(
          `Endpoint "GET ${config.basePath}/count" not found.`,
        );
      }

      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async create(): Promise<Entity> {
        throw new HttpErrors.NotFound(
          `Endpoint "POST ${config.basePath}" not found.`,
        );
      }

      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async updateAll() {
        throw new HttpErrors.NotFound(
          `Endpoint "PATCH ${config.basePath}" not found.`,
        );
      }

      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async updateById() {
        throw new HttpErrors.NotFound(
          `Endpoint "PATCH ${config.basePath}" not found.`,
        );
      }

      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async replaceById() {
        throw new HttpErrors.NotFound(
          `Endpoint "PUT ${config.basePath}" not found.`,
        );
      }

      @oas.visibility(OperationVisibility.UNDOCUMENTED)
      async deleteById() {
        throw new HttpErrors.NotFound(
          `Endpoint "DELETE ${config.basePath}" not found.`,
        );
      }
    }

    // Create instance of controller named after model
    // for organisation in OpenAPI explorer and to reflect
    // default Loopback structure
    const controllerName = `${modelClass.modelName}Controller`;
    const defineNamedController = new Function(
      'readOnlyController',
      `return class ${controllerName} extends readOnlyController {}`,
    );
    const controller = defineNamedController(readOnlyController);

    // Magic?
    this.injectFirstConstructorArg(
      controller,
      `repositories.${entityClass.name}Repository`,
    );

    application.controller(controller);

    return Promise.resolve();
  }
}
export class ReadOnlyRestComponent implements Component {
  bindings: Binding[] = [createBindingFromClass(ReadOnlyCrudRestApiBuilder)];
}
