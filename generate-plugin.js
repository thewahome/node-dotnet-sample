import dotnet from 'node-api-dotnet';

import { getSampleYamlFile } from './file-access.js';

async function generatePlugin () {
  try {
    let yaml = getSampleYamlFile();
    const generationResults = await new dotnet.Sample.Generator.GeneratePluginAsync(yaml, "Petstore", "Petstore", "", "");
    if (generationResults) {
      console.log('Generated');
    }
  } catch (error) {
    console.error(error);
  }
}

export { generatePlugin };