import fs from 'fs';
import dotnet from 'node-api-dotnet';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

function loadAssemblies () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

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

export { loadAssemblies };
