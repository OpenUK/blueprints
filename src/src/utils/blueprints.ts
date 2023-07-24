import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

interface BlueprintSummaryData {
    title: string;
    description: string;
    lastUpdated: string;
    path?: string;
}

interface ComponentDetails {
    id: string;
    name: string;
    approach?: (string | { text: string, url: string })[];
    impacts?: (string | { text: string, url: string })[];
    resources?: { url: string, title: string }[];
    case_studies?: { url: string, title: string }[];
}

interface BlueprintData extends BlueprintSummaryData {
    blueprintSchemaVersion: string;
    version: string;
    urlToNarrative: string;
    componentsHeader: string;
    components: (ComponentDetails & { subcomponents?: ComponentDetails[] })[];
    acknowledgements: string[];
}

function getBlueprintDataFromFolder(dirPath: string = '../blueprints/'): BlueprintSummaryData[] {
    const blueprintFolders = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const blueprints: BlueprintSummaryData[] = [];

    blueprintFolders.forEach(folder => {
        const blueprintPath = path.join(dirPath, folder, 'blueprint.yml');

        // Check if blueprint.yml exists
        if (!fs.existsSync(blueprintPath)) {
            throw new Error(`blueprint.yml is missing in the folder ${folder}`);
        }

        // Read and parse the yaml file
        const blueprintContent = yaml.load(fs.readFileSync(blueprintPath, 'utf8')) as BlueprintData;

        // Check required yaml elements
        if (!blueprintContent.title || !blueprintContent.description || !blueprintContent.lastUpdated) {
            throw new Error(`Required YAML elements are missing in ${folder}'s blueprint.yml`);
        }

        blueprints.push({
            title: blueprintContent.title,
            description: blueprintContent.description,
            lastUpdated: blueprintContent.lastUpdated,
            path: folder
        });
    });

    return blueprints;
}

function getBlueprintDataByPath(blueprintPath: string): BlueprintData {
    let fullPath = "../blueprints/" + blueprintPath + "/blueprint.yml";

    if (!fs.existsSync( fullPath)) {
        throw new Error(`File not found: ${blueprintPath}`);
    }

    // Load the JSON schema
    const blueprintSchema = JSON.parse(fs.readFileSync('src/utils/schemas/blueprint-schema-1.0.0.json', 'utf8'));

    // Load and parse the blueprint.yml
    const blueprintContent = yaml.load(fs.readFileSync( fullPath, 'utf8')) as BlueprintData;

    const ajv = new Ajv({ strict: false });
    
    // Add additional formats
    addFormats(ajv);

    // Validate against the schema
    if (!ajv.validate(blueprintSchema, blueprintContent)) {
        throw new Error(`Invalid blueprint.yml: ${ajv.errorsText()}`);
    }

    // Additional check for $schemaVersion if needed
    if (blueprintSchema.$schemaVersion && typeof blueprintSchema.$schemaVersion !== 'string') {
        throw new Error('$schemaVersion should be a string');
    }

    return blueprintContent;
}

export { getBlueprintDataByPath, getBlueprintDataFromFolder };

