import {injectable} from '@loopback/core';
import {
  asSpecEnhancer,
  mergeOpenAPISpec,
  OASEnhancer,
  OpenApiSpec,
} from '@loopback/rest';

/**
 * A spec enhancer to add OpenAPI info spec
 */
@injectable(asSpecEnhancer)
export class DapperdoxSpecEnhancer implements OASEnhancer {
  // give your enhancer a proper name
  name = 'dapperdox';

  // takes in the current spec, modifies it, and returns a new one
  // NOTE: use async function if it contains async operation to the spec
  modifySpec(spec: OpenApiSpec): OpenApiSpec {
    Object.keys(spec.paths).forEach(path => {
      Object.keys(spec.paths[path]).forEach(method => {
        // See https://github.com/DapperDox/dapperdox/issues/59
        // Move examples to seperate section
        spec.paths[path][method].parameters.forEach((parameter: any) => {
          if (parameter.example) {
            parameter.type = `${parameter.schema.type} e.g. "${parameter.example}"`;
          }
        });

        //spec.paths[path][method].security = [];
        //spec.paths[path][method].security.push({apiKey: []});

        Object.keys(spec.paths[path][method].responses).forEach(response => {
          const theResponse = spec.paths[path][method].responses[response];
          if (theResponse.content?.['application/json']) {
            theResponse.schema = theResponse.content['application/json'].schema;
          }
        });
      });
    });

    // Reference components as definitions so they appear in Dapperdox
    spec.definitions = spec.components;

    // Update API spec title to match Dapperdox overlay content
    spec.info.title = 'Core Data API';

    spec.host = 'localhost:3000';
    //spec.schemes = ['https'];

    spec.securityDefinitions = {
      apiKey: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    };

    // Define list of tags to display
    const InfoPatchSpec = {
      tags: [
        {
          name: 'diet',
          description: 'Diet data',
        },
        {
          name: 'projections',
          description: 'Future dietary supply projections',
        },
        {
          name: 'geography',
          description: 'Geographies',
        },
        {
          name: 'micronutrients',
          description: 'Micronutrients',
        },
      ],
      'x-navigateMethodsByName': true,
    };
    // the example calls a default helper function to merge the fragment spec.
    const mergedSpec = mergeOpenAPISpec(spec, InfoPatchSpec);

    return mergedSpec;
  }
}
