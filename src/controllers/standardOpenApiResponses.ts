import {ResponsesObject, SchemaRef} from '@loopback/rest';

type DataType = 'string' | 'number' | 'object' | 'array';

export class StandardOpenApiResponses {
  private dataType: DataType;
  private objectSchema: SchemaRef;

  constructor(private description: string) {}

  public setDataType(dataType: DataType): this {
    this.dataType = dataType;
    return this;
  }
  public setObjectSchema(objectSchema: SchemaRef): this {
    this.objectSchema = objectSchema;
    return this;
  }

  public toObject(): ResponsesObject {
    const dataType =
      null == this.dataType
        ? null == this.objectSchema
          ? 'string'
          : 'object'
        : this.dataType;

    let dataSchema: object;

    if ('array' === dataType) {
      dataSchema = {
        type: 'array',
        items: this.objectSchema,
        description: `Array of ${
          this.objectSchema.definitions[
            Object.keys(this.objectSchema.definitions)[0]
          ].title
        } Model objects`,
      };
    } else if ('object' === dataType) {
      dataSchema = this.objectSchema;
    } else {
      dataSchema = {
        type: dataType,
      };
    }
    return {
      '200': {
        description: this.description,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              title: `Standard API Response for ${
                this.objectSchema.definitions[
                  Object.keys(this.objectSchema.definitions)[0]
                ].title
              } model`,
              properties: {
                msg: {type: 'string', description: 'A human readable message'},
                type: {
                  type: 'string',
                  description: 'Response type e.g. 200 Success',
                },
                props: {
                  type: 'object',
                  description:
                    '[JSON schema](https://json-schema.org/) for the objects in the `data` array',
                },
                data: dataSchema,
                meta: {type: 'string', description: 'Response Metadata?'},
              },
            },
          },
        },
      },
      '500': {
        description: 'Failed attempt to perform the operation',
      },
    };
  }
}
