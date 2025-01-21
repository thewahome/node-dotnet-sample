import { loadAssemblies } from './file-access.js';
import { generatePlugin } from './generate-plugin.js';

loadAssemblies();
await generatePlugin();
