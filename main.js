import dotnet from 'node-api-dotnet';

import { getSampleYamlFile, loadAssemblies } from './file-access.js';

loadAssemblies();

try {
  let yaml = getSampleYamlFile();
  const generator = await new dotnet.Sample.Generator.GenerateAsync(yaml, "Java", "demo", "my-namespace", "", "");
  console.log(generator);
} catch (error) {
  console.error(error)
}
