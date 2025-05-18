async function activityTable(day) {
    // Read the list of log files
    const logFileList = await textFile("camera_logs.txt");
    const logFiles = logFileList.split("\n").filter(file => file.trim() !== "");
    
    // Initialize hourly counts array with zeros
    const hourlyCounts = new Array(24).fill(0);
    
    // Process each log file
    for (const file of logFiles) {
      try {
        const content = await textFile(file.trim());
        const timestamps = content.split("\n").filter(line => line.trim() !== "");
        
        for (const timestampStr of timestamps) {
          const timestamp = Number(timestampStr);
          if (isNaN(timestamp)) continue;
          
          const date = new Date(timestamp);
          if (date.getDay() === day) {
            const hour = date.getHours();
            hourlyCounts[hour]++;
          }
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
    
    return hourlyCounts;
  }



// Understanding the Problem


// We need to analyze camera activation timestamps to determine busy/quiet hours for a given day

// Data is stored in multiple log files listed in "camera_logs.txt"

// Each log file contains UNIX timestamps (one per line)

// We need to:

// Read all log files

// Parse timestamps to extract day of week and hour

// Count activations per hour for the specified day

// Return an array of 24 numbers representing hourly counts




// Solution Steps


// Read the list of log files from "camera_logs.txt"

// Initialize an array of 24 zeros to store hourly counts

// For each log file:

// Read its contents

// Split into individual timestamps

// Convert each timestamp to a Date object

// Check if it matches the target day

// If matched, increment the corresponding hour count

// Return the hourly counts array




// Explanation
// Reading Files: The function starts by reading "camera_logs.txt" to get the list of log files to process.

// Initialization: Creates an array of 24 zeros to store counts for each hour (0-23).

// Processing Logs:

// For each log file, reads its contents and splits into individual timestamps

// Converts each timestamp string to a number and creates a Date object

// Checks if the timestamp's day matches our target day

// If matched, increments the count for that hour

// Error Handling: Includes try-catch to handle potential file reading errors gracefully

// Result: Returns the array of hourly counts for the specified day


  
