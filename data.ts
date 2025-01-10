const fs = require('fs');

function readFileAsync(path: string, encoding: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err: string, data: string) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const fileData = await readFileAsync('data.txt', 'utf8')
const data = fileData.toString();
export { data };