"use server";
import fs from "fs";
import path from "path";

export async function createData(newData: any) {
	let databaseFile;
	try {
		// Get the database file path
		const dbFilePath = path.join("./lib/database.json");

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
		databaseData.push(newData);

		// Overwrite file data
		fs.writeFileSync(
			dbFilePath,
			JSON.stringify(databaseData, null, 2),
			"utf-8"
		);
		// Return a custom success message
		return JSON.stringify({
			success: true,
			status: "Successfully created data!",
		});
	} catch (error) {
		console.error(`(updateData.ts):`);
		console.error(error);

		// Return a custom error message
		return JSON.stringify({
			success: false,
			status: "Failed to create data.",
		});
	}
}
