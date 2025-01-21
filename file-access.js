import fs from 'fs';
import dotnet from 'node-api-dotnet';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function loadAssemblies () {

  const publishPath = join(__dirname, 'publish');
  const files = fs.readdirSync(publishPath);

  files.forEach(file => {
    if (file.endsWith('.dll')) {
      const dllPath = join(publishPath, file);
      console.log(`Loading .NET assembly from ${dllPath}`);
      dotnet.load(dllPath);
    }
  });
}

function getSampleYamlFile () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const files = fs.readdirSync(__dirname);

  let yaml = '';
  const file = files.find(file => file.endsWith('.yaml'));
  if (file) {
    const ymlPath = join(__dirname, file);
    yaml = fs.readFileSync(ymlPath, 'utf8');
  }
  return yaml;
}


export { loadAssemblies, getSampleYamlFile };
