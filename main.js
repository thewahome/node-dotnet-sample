import dotnet from 'node-api-dotnet';

import { getSampleYamlFile, loadAssemblies } from './file-access.js';

loadAssemblies();

try {
  let yaml = getSampleYamlFile();
  const generationResults = await new dotnet.Sample.Generator.GeneratePluginAsync(yaml, "Petstore", "Petstore", "", "");
  if (generationResults) {
    console.log('Generated')
  }
} catch (error) {
  console.error(error)
}
