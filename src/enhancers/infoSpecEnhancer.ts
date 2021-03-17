import {injectable} from '@loopback/core';
import {
  asSpecEnhancer, mergeOpenAPISpec,

  OASEnhancer,
  OpenApiSpec
} from '@loopback/rest';

/**
 * A spec enhancer to add OpenAPI info spec
 */
@injectable(asSpecEnhancer)
export class InfoSpecEnhancer implements OASEnhancer {
  // give your enhancer a proper name
  name = 'info';

  // takes in the current spec, modifies it, and returns a new one
  // NOTE: use async function if it contains async operation to the spec
  modifySpec(spec: OpenApiSpec): OpenApiSpec {
    const InfoPatchSpec = {
      info: {title: 'LoopBack Test Application', version: '1.0.1'},
      tags: [
        {
          name: "impact",
          description: "Dietary Supply Projections"
        }
      ],
      host: 'localhost:3000'
    };

    let paths: OpenApiSpec['paths'] = spec.paths;
    for (const [key, value] of Object.entries(paths)) {
      paths[key].get["x-operationName"] = paths[key].get["x-operation-name"];
    }

    // the example calls a default helper function to merge the fragment spec.
    const mergedSpec = mergeOpenAPISpec(spec, InfoPatchSpec);



    console.log(spec);

    return mergedSpec;
  }
}

    // this.api({
    //   openapi: '3.0.0',
    //   info: {
    //     title: 'MySuperAPI',
    //     version: '1.0'
    //   },
    //   paths: {},
    //   tags: [
    //     {
    //       name: "impact",
    //       description: "Dietary Supply Projections"
    //     }
    //   ]
    // })
