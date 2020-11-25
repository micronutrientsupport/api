import {ResponsesObject, SchemaRef} from '@loopback/rest';

type DataType = 'string' | 'number' | 'object' | 'array';

export class StandardOpenApiResponses {

  private dataType: DataType;
  private objectSchema: SchemaRef;

  constructor(
    private description: string,
  ) {}

  public setDataType(dataType: DataType): this {
    this.dataType = dataType;
    return this;
  }
  public setObjectSchema(objectSchema: SchemaRef): this {
    this.objectSchema = objectSchema;
    return this;
  }


  public toObject(): ResponsesObject {
    const dataType = (null == this.dataType)
      ? (null == this.objectSchema) ? 'string' : 'object'
      : this.dataType;

    let dataSchema: object;

    if ('array' === dataType) {
      dataSchema = {
        type: 'array',
        items: this.objectSchema,
      }
    } else if ('object' === dataType) {
      dataSchema = this.objectSchema;
    } else {
      dataSchema = {
        type: dataType,
      }
    }

    return {
      '200': {
        description: this.description,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              title: 'StandardResponse',
              properties: {
                msg: {type: 'string'},
                type: {type: 'string'},
                props: {type: 'object'},
                data: dataSchema,
                meta: {type: 'string'},
              }
            }
          }
        }
      },
      '500': {
        description: 'Failed attempt to perform the operation',
      },
    };
  }
}
