import dotnet from 'node-api-dotnet';
import { loadAssemblies } from './load-assemblies.js';

loadAssemblies();

try {
  const greeter = new dotnet.Sample.Greeter();
  greeter.Greet('World');
} catch (error) {
  console.error(error)
}


