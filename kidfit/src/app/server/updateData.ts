"use server";
import fs from "fs";
import path from "path";

export async function updateData(
	search: { [key: string | number]: string | number },
	newData: any
) {
	let databaseFile;
	try {
		// Get the database file path
		const dbFilePath = path.join(__dirname, "../../../lib/database.json");

		// Get the database file
		databaseFile = fs.readFileSync(dbFilePath, "utf-8");

		// If databse file doesn't exist -> Create a file
		if (!databaseFile) {
			databaseFile = fs.writeFile(
				"database.json",
				JSON.stringify({}, null, 2),
				(err) => {
					if (err) {
						return console.error(err);
					}
				}
			);
		}

		// Parsing and filtering the databse file
		const databaseData = JSON.parse(databaseFile as string);
		const updateData = databaseData.map((item: any) => {
			if (Object.keys(search).every((key) => item[key] === search[key])) {
				return {
					...item,
					...newData,
				};
			}
		});
		// Overwrite file data
		fs.writeFileSync(
			dbFilePath,
			JSON.stringify(updateData, null, 2),
			"utf-8"
		);
		// Return a custom success message
		return JSON.stringify({
			success: true,
			status: "Successfully removed data!",
		});
	} catch (error) {
		console.error(`(updateData.ts):`);
		console.error(error);

		// Return a custom error message
		return JSON.stringify({
			success: false,
			status: "Failed to update data.",
		});
	}
}
