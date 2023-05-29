import * as AWS from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import * as fs from 'fs';

const client = new AWS.S3({ region: "us-east-1" });

/**
 * Module design to fetch local development .env
 */
export const main = async () => {
    const command = new GetObjectCommand({
        Bucket: "",
        Key: ""
    });

    try {
        const response = await client.send(command);
        const str = await response.Body.transformToString();
        fs.writeFileSync('.env', str);
    } catch (err) {
        console.log(err);
    }
};

(async function () {
    await main();
})();