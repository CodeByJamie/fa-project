"use server"
import * as Dependencies from '../../../../lib/dependencies'

export default async function fetchData(search: {[key: string | number]: string | number}) {
    let databaseFile;

    try {
        // Get the database file
        const dbFilePath = Dependencies.path.join('./lib/databse.json');
        console.log(dbFilePath)

        // Get database file 
        databaseFile = Dependencies.fs.readFileSync(dbFilePath, 'utf-8');

        // If databse file doesn't exist -> Create a file
		if (!databaseFile) {
			databaseFile = Dependencies.fs.writeFile(
				"database.json",
				JSON.stringify({}, null, 2),
				(err) => {
					if (err) {
						return console.error(err);
					}
				}

			);
		}

        const dbData = JSON.parse(databaseFile as string);
        const dataResults = dbData.filter(
			(item: { [key: string | number]: string | number }) => {
				return Object.keys(search).every(
					(key) => item[key] === search[key]
				);
			}
		);
        return JSON.stringify(dataResults, null, 2);    
    } catch (error) {
        console.error(`(fetchAccountData.ts):`)
        console.error(error);
    }
}

