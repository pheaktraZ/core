import { exec } from 'child_process';
import * as path from 'path';

const command = process.argv[2];
const name = process.argv[3];

if (!command) {
    console.error('Please provide a TypeORM command.');
    process.exit(1);
}

const dataSourcePath = path.resolve(__dirname, '../config/data-source.ts');
let typeormCommand = `cross-env TYPEORM_CONFIG="${dataSourcePath}" ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js ${command}`;

if (name) {
    typeormCommand += ` ./src/database/migrations/${name}`; // Full path with .ts extension
}

exec(typeormCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});
