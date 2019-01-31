import * as d from '@declarations';
import { getDistCjsIndexPath } from '../app-core/app-file-naming';


export async function generateCommonJsIndex(config: d.Config, compilerCtx: d.CompilerCtx, outputTarget: d.OutputTargetDist) {
  const cjs: string[] = [
    `// ${config.namespace}: CommonJS Main`
  ];

  const distIndexCjsPath = getDistCjsIndexPath(outputTarget);

  await compilerCtx.fs.writeFile(distIndexCjsPath, cjs.join('\n'));
}
